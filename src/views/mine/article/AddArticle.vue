<template>
  <div>
    <h3 class="basic-title">分享文章</h3>
    <div class="add-article-content center">
      <el-form ref="articleForm"
               class="upload-article-form"
               :model="articleForm"
               label-width="80px"
               :rules="articleRules">
        <el-form-item label="文章标题" required prop="title">
          <el-input v-model="articleForm.title" clearable></el-input>
        </el-form-item>
        <el-form-item label="文章来源" required prop="source">
          <el-input v-model="articleForm.source" clearable></el-input>
        </el-form-item>
        <el-form-item label="提交时间" required prop="writeTime">
          <el-date-picker
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 100%;"
            v-model="articleForm.writeTime"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="创建时间" required prop="creatTime">
          <el-date-picker
            value-format="yyyy-MM-dd HH:mm:ss"
            style="width: 100%;"
            v-model="articleForm.creatTime"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="引用来源">
          <el-input v-model="articleForm.sourceURL" clearable></el-input>
        </el-form-item>
        <el-form-item label="文章正文" required prop="fullContent">
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 8}"
            v-model="articleForm.fullContent"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="添加图片" prop="picURL">
          <el-upload
            ref="imgUpload"
            :accept="'image/*'"
            class="left"
            action="#"
            list-type="picture"
            :file-list="showFileList"
            :auto-upload="false"
            :limit="1"
            :on-change="fileChange"
            :http-request="uploadImg">
            <el-button size="small" type="primary">选择文件</el-button>
          </el-upload>
<!--          <el-input v-model="articleForm.picURL" clearable type="file"></el-input>-->
        </el-form-item>
        <el-form-item label="添加视频" style="text-align: left">
          <el-switch v-model="articleForm.ifVideo"></el-switch>
        </el-form-item>
        <el-form-item label="视频链接">
          <el-input v-model="articleForm.videoURL" clearable :disabled="!articleForm.ifVideo"></el-input>
        </el-form-item>
        <el-form-item label="添加标签" required prop="label">
          <el-select v-model="articleForm.label" placeholder="请选择标签" style="width: 100%">
            <el-option label="指南共识" value="指南共识"></el-option>
            <el-option label="临床综述" value="临床综述"></el-option>
            <el-option label="最新资讯" value="最新资讯"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="添加科室" required prop="part">
          <el-select v-model="articleForm.part" placeholder="请选择科室" style="width: 100%">
            <el-option label="血液" value="血液"></el-option>
            <el-option label="重症" value="重症"></el-option>
            <el-option label="精神" value="精神"></el-option>
            <el-option label="呼吸" value="呼吸"></el-option>
            <el-option label="儿科" value="儿科"></el-option>
            <el-option label="感染" value="感染"></el-option>
            <el-option label="康复" value="康复"></el-option>
            <el-option label="神经" value="神经"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary" @click="submitForm('articleForm')">上传文章</el-button>
        <el-button @click="resetForm('articleForm')">重置</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AddArticle",
    data() {
      let checkPic = (rule, value, callback) => {
        if (this.fileList.length === 0) {
          callback(new Error('请选择图片'));
        } else {
          callback();
        }
      };
      return {
        fileList: [],
        showFileList: [],
        articleForm: {
          title: '',
          source: '',
          writeTime: '',
          creatTime: '',
          sourceURL: '',
          fullContent: '',
          picURL: '',
          videoURL: '',
          ifVideo: false,
          label: '',
          part: ''
        },
        articleRules: {
          title: [
            { required: true, message: '请输入文章题目', trigger: 'blur' }
          ],
          fullContent: [
            { required: true, message: '请输入文章内容', trigger: 'blur' }
          ],
          picURL: [
            { validator: checkPic, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      resetForm(formName) {
        this.showFileList = [];
        this.fileList = [];
        this.$refs[formName].resetFields();
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 验证成功后执行img图片上传，这里是方便拿到file字节流
            this.$refs.imgUpload.submit();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      async uploadImg(params) {
        let config = {
          headers: { "Content-Type": "multipart/form-data" },
        };
        let formData = new FormData();
        formData.append('file', params.file);
        formData.append('username', this.$store.state.userInfo.username);
        formData.append('title', this.articleForm.title);
        formData.append('source', this.articleForm.source);
        formData.append('writeTime', this.articleForm.writeTime);
        formData.append('creatTime', this.articleForm.creatTime);
        formData.append('sourceURL', this.articleForm.sourceURL);
        formData.append('fullContent', this.articleForm.fullContent);
        formData.append('picURL', this.articleForm.picURL);
        formData.append('videoURL', this.articleForm.videoURL);
        formData.append('ifVideo', this.articleForm.ifVideo ? 0 : 1);
        formData.append('label', this.articleForm.label);
        formData.append('part', this.articleForm.part);
        let res = await this.$http.articleUpload(formData, config);
        if (res.code === this.$http.SUCC_CODE) {
          this.$message.success('添加成功');
          this.$router.push({name: 'MyArticle'}).catch(err => {});
        } else {
          this.$message.error(res.msg);
          this.$refs['projectForm'].resetFields();
        }
      },
      fileChange(file, fileList) {
        this.fileList = file;
        this.$refs.articleForm.validateField("picURL")
      }
    }
  }
</script>

<style>
  .add-article-content {
    padding-top: 1rem;
  }

  .upload-article-form {
    width: 80%;
    margin: 0 auto;
  }
</style>
