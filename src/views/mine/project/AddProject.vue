<template>
  <div>
    <h3 class="basic-title">新增项目</h3>
    <div class="add-project-content center">
      <el-form ref="projectForm"
               :model="projectForm"
               label-width="100px"
               :rules="projectRules">
        <el-form-item label="项目名称" required prop="name">
          <el-input v-model="projectForm.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="项目数据" required prop="data">
          <el-input v-model="projectForm.data" clearable></el-input>
        </el-form-item>
<!--        <el-form-item label="任务说明">-->
<!--          <el-upload-->
<!--            ref="projectFileUpload"-->
<!--            class="left"-->
<!--            action="#"-->
<!--            list-type="picture"-->
<!--            :file-list="showFileList"-->
<!--            :auto-upload="false"-->
<!--            :limit="1"-->
<!--            :on-change="fileChange"-->
<!--            :http-request="uploadWorkFile">-->
<!--            <el-button size="small" type="primary">选择文件</el-button>-->
<!--          </el-upload>-->
<!--        </el-form-item>-->

        <el-form-item label="数据地址" required prop="dataURL">
          <el-input v-model="projectForm.dataURL" clearable></el-input>
        </el-form-item>
        <el-form-item label="项目简介" required prop="introduce">
          <el-input v-model="projectForm.introduce" clearable></el-input>
        </el-form-item>
        <el-form-item label="创建用户" required prop="createuser">
          <el-input v-model="projectForm.createuser" clearable disabled></el-input>
        </el-form-item>
        <el-form-item label="项目账户" required prop="projectaccount">
          <el-input v-model="projectForm.projectaccount" clearable></el-input>
        </el-form-item>
        <el-form-item label="项目余额" required prop="projectmoney">
          <el-input v-model="projectForm.projectmoney" clearable></el-input>
        </el-form-item>
        <el-form-item label="单位信息" required prop="company">
          <el-input v-model="projectForm.company" clearable></el-input>
        </el-form-item>
        <el-form-item label="角色信息" required prop="actor">
          <el-input v-model="projectForm.actor" clearable></el-input>
        </el-form-item>
        <el-form-item label="用户类别" required prop="userType">
          <el-input v-model="projectForm.userType" clearable></el-input>
        </el-form-item>
        <el-form-item label="项目余额" required prop="mount">
          <el-input v-model="projectForm.mount" clearable></el-input>
        </el-form-item>
        <el-form-item label="项目管理员" required prop="projectManager">
<!--          <el-input v-model="projectForm.projectManager" clearable></el-input>-->
          <el-select style="width: 100%" v-model="projectForm.projectManager" filterable placeholder="请选择管理员">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
<!--          <item-selector :user-type="$store.state.type" @val-change="projectForm.projectManager = $event" user-type="7"></item-selector>-->
        </el-form-item>
        <el-form-item label="公司账户" required prop="companyAccount">
          <el-input v-model="projectForm.companyAccount" clearable></el-input>
        </el-form-item>
        <el-form-item label="经费管理员" required prop="moneyManager">
          <el-input v-model="projectForm.moneyManager" clearable></el-input>
        </el-form-item>
<!--        <el-form-item label="会计" required prop="accounting">-->
<!--          <el-input v-model="projectForm.accounting" clearable></el-input>-->
<!--        </el-form-item>-->
        <el-button type="primary" @click="submitForm('projectForm')">完 成</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  // import ItemSelector from "@/components/common/ItemSelector";
  import axios from 'axios';

  export default {
    name: "AddProject",
    components: {
      // ItemSelector
    },
    data() {
      return {
        showFileList: [],
        projectForm: {
          name: '',
          data: '',
          dataURL: '',
          introduce: '',
          createuser: this.$store.state.userInfo.username,
          projectaccount: '',
          projectmoney: 0,
          company: '',
          actor: '',
          userType: 0,
          mount: 0,
          projectManager: '',
          companyAccount: '',
          moneyManager: '',
          accounting: '',
          userdataURL: ''
        },
        projectRules: {
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' }
          ],
          data: [
            { required: true, message: '请输入项目数据', trigger: 'blur' }
          ],
          dataURL: [
            { required: true, message: '请输入项目数据地址', trigger: 'blur' }
          ],
          introduce: [
            { required: true, message: '请输入项目简介', trigger: 'blur' }
          ],
          createuser: [
            { required: true, message: '请输入创建账户', trigger: 'blur' }
          ],
          projectaccount: [
            { required: true, message: '请输入项目账户', trigger: 'blur' }
          ],
          projectmoney: [
            { required: true, message: '请输入项目余额', trigger: 'blur' }
          ],
          company: [
            { required: true, message: '请输入单位信息', trigger: 'blur' }
          ],
          actor: [
            { required: true, message: '请输入角色信息', trigger: 'blur' }
          ]
        },
        options: [],
        fileList: [],
      }
    },
    methods: {
      fileChange(file, fileList) {
        this.fileList = file;
        // this.$refs.projectForm.validateField("picURL")
      },
      async uploadWorkFile(params) {
        let config = {
          headers: { "Content-Type": "multipart/form-data" },
        };
        let formData = new FormData();
        formData.append('file', params.file);
        for (let key in this.projectForm) {
          formData.append(key, this.projectForm[key]);
        }
        let res = await this.$http.projectAdd(formData, config);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success('添加成功');
          this.$router.push({name: 'MyInitiated'}).catch(err => {});
        } else {
          this.$message.error(res.msg);
          this.$refs['projectForm'].resetFields();
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // this.$refs.projectFileUpload.submit();
            this.addNewProject();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      async addNewProject() {
        let res = await this.$http.projectAdd(this.projectForm);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success('添加成功');
          this.$router.push({name: 'MyInitiated'}).catch(err => {});
        } else {
          this.$message.error(res.msg);
          this.$refs['projectForm'].resetFields();
        }
      },
      async initManagerList() {
        let res = await axios.post('/api/doctor/user/serachList3', {
          username: this.$store.state.userInfo.username
        });
        console.log(res.data.data);
        this.options = res.data.data;
      }
    },
    activated() {
      this.initManagerList();
    }
  }
</script>

<style>
  .add-project-content {
    padding: 2rem 10% 0;
  }
</style>
