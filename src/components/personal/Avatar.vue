<template>
  <div class="avatar-box">
    <el-avatar shape="square"
               fit="cover"
               :size="150"
               src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
               style="display: block">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
    </el-avatar>
    <div class="edit-button">
      <el-tooltip class="item" effect="dark" content="修改头像" placement="right">
        <el-button type="primary"
                   icon="el-icon-edit"
                   size="mini"
                   circle
                   @click="avatarUploadDialogVisible = true"></el-button>
      </el-tooltip>
    </div>
    <el-dialog
      title="头像上传"
      :visible.sync="avatarUploadDialogVisible"
      width="30%"
      center
      :before-close="handleClose">
      <!-- 上传头像 -->
      <div class="upload-img-box">
        <el-upload
          class="avatar-uploader"
          ref="upload"
          list-type="picture-card"
          :limit="1"
          action="#"
          :before-upload="beforeAvatarUpload"
          :auto-upload="false"
          :http-request="uploadHttpRequest"
          :on-success="handleAvatarSuccess"
          :on-error="handleAvatarError"
          :on-exceed="handleExceed">
          <i class="el-icon-plus"></i>
<!--          <el-button size="small" type="primary">点击上传</el-button>-->
        </el-upload>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="uploadAction">上 传</el-button>
        <el-button @click="avatarUploadDialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Avatar",
    data() {
      return {
        avatarUploadDialogVisible: false
      }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认放弃操作？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      // 手动上传
      uploadAction() {
        this.$refs.upload.submit();
      },
      // 文件检查
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      // 覆盖上传方法
      uploadHttpRequest(file) {
        // 这里是上传代码

        // 成功执行和失败执行
        file.onSuccess();
        // file.onError();
      },
      // 上传结果
      handleAvatarSuccess() {
        this.$message.success('上传成功');
        this.avatarUploadDialogVisible = false;
      },
      handleAvatarError() {
        this.$message.error('上传失败');
      },
      handleExceed(file, fileList) {
        // this.$refs.upload.clearFiles();
        // 未能解决，我好辣鸡
      }
    }
  }
</script>

<style>
  .avatar-box {
    position: relative !important;
  }

  .edit-button {
    position: absolute;
    right: 3px;
    bottom: 3px;
  }

  .upload-img-box {
    display: flex;
    justify-content: center;
  }
</style>
