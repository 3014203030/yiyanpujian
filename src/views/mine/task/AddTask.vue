<template>
  <div>
    <h3 class="basic-title">发起任务</h3>
    <div class="add-task-content center">
      <el-form ref="taskForm"
               :model="taskForm"
               label-width="100px"
               :rules="taskRules">
        <el-form-item label="任务ID" required prop="workID">
          <el-input v-model="taskForm.workID" clearable></el-input>
        </el-form-item>
        <el-form-item label="任务名称" required prop="name">
          <el-input v-model="taskForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="发布者ID" required prop="publishID">
          <el-input v-model="taskForm.publishID" clearable disabled></el-input>
        </el-form-item>
        <el-form-item label="发布者名称" required prop="publishName">
          <el-input v-model="taskForm.publishName" clearable disabled></el-input>
        </el-form-item>
<!--        <el-form-item label="接受ID" required prop="acceptID">-->
<!--          <el-input v-model="taskForm.acceptID" clearable></el-input>-->
<!--        </el-form-item>-->
        <el-form-item label="接受用户" required prop="acceptName">
          <el-select style="width: 100%" v-model="taskForm.acceptName" filterable placeholder="请选择用户">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
<!--          <item-selector @val-change="taskForm.acceptName = $event" user-type="0"></item-selector>-->
<!--          <el-input v-model="taskForm.acceptName" clearable></el-input>-->
        </el-form-item>
        <el-form-item label="简介" required prop="introduce">
          <el-input v-model="taskForm.introduce" clearable></el-input>
        </el-form-item>
        <el-form-item label="任务说明" prop="picURL">
          <el-upload
            ref="workFileUpload"
            class="left"
            action="#"
            list-type="picture"
            :file-list="showFileList"
            :auto-upload="false"
            :limit="1"
            :on-change="fileChange"
            :http-request="uploadWorkFile">
            <el-button size="small" type="primary">选择文件</el-button>
          </el-upload>
        </el-form-item>
        <el-button type="primary" @click="submitForm('taskForm')">发起任务</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  import ItemSelector from "@/components/common/ItemSelector";
  import axios from "axios";

  export default {
    name: "AddTask",
    components: {
      ItemSelector
    },
    data() {
      return {
        projectID: '',
        process: '',
        fileList: [],
        showFileList: [],
        taskForm: {
          workID: '',
          name: '',
          publishID: this.$store.state.userId,
          publishName: this.$store.state.userInfo.username,
          // acceptID: '',
          acceptName: '',
          introduce: '',
          workfile: '',
          process: ''
        },
        taskRules: {
          workID: [
            { required: true, message: '请输入任务ID', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入任务名称', trigger: 'blur' }
          ],
          // acceptID: [
          //   { required: true, message: '请输入接受者ID', trigger: 'blur' }
          // ],
          acceptName: [
            { required: true, message: '请输入接受用户', trigger: 'blur' }
          ],
          introduce: [
            { required: true, message: '请输入简介', trigger: 'blur' }
          ],
          workfile: [
            { required: true, message: '请输入任务说明文件', trigger: 'blur' }
          ],
          // process: [
          //   { required: true, message: '请输入进程', trigger: 'blur' }
          // ]
        },
        options: []
      }
    },
    methods: {
      resetForm(formName) {
        this.showFileList = [];
        this.fileList = [];
        this.$refs[formName].resetFields();
      },
      fileChange(file, fileList) {
        this.fileList = file;
        this.$refs.articleForm.validateField("picURL")
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 上传任务
            this.$refs.workFileUpload.submit();
            // 更新project表
            this.updateProject();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      async updateProject() {
        let res = await this.$http.projectModify({
          projectID: this.projectID,
          acceptuser: this.taskForm.acceptName,
          userdataURL: this.taskForm.acceptName,
          userType: '2',
          company: '测试公司1',
          actor: '乙方',
          process: this.process
        });
        console.log('----------更新project表----------');
        console.log(res);
      },

      async uploadWorkFile(params) {
        let config = {
          headers: { "Content-Type": "multipart/form-data" },
        };
        let formData = new FormData();
        formData.append('file', params.file);
        formData.append('workID', this.taskForm.workID);
        formData.append('name', this.taskForm.name);
        formData.append('publishID', this.taskForm.publishID);
        formData.append('publishName', this.taskForm.publishName);
        formData.append('acceptID', this.taskForm.acceptName);
        formData.append('acceptName', this.taskForm.acceptName);
        formData.append('introduce', this.taskForm.introduce);
        formData.append('process', this.process);

        let res = await this.$http.taskAdd(formData, config);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success('添加成功');
          this.$router.push({name: 'MyManaged'}).catch(err => {});
        } else {
          this.$message.error(res.msg);
          this.$refs['taskForm'].resetFields();
        }
      },
      async initAcceptorList() {
        let res = await axios.post('/api/doctor/user/serachList2', {
          username: this.$store.state.userInfo.username
        });
        console.log(res.data.data);
        this.options = res.data.data;
      }
    },
    activated() {
      this.projectID = this.$route.query.projectId;
      this.process = this.$route.query.process;
      this.initAcceptorList();
    }
  }
</script>

<style>
  .add-task-content {
    padding: 2rem 10% 0;
  }
</style>
