<template>
  <div>
    <h3 class="basic-title">我的信息</h3>
    <div class="flex flex-start">
<!--      <div class="left-side">-->
<!--        <avatar></avatar>-->
<!--      </div>-->
<!--      <info-table class="flex-auto" :table-data="tableData" @edit-save="editSave"></info-table>-->
      <el-form ref="form" :model="personalInfo" label-width="80px" style="width: 80%; margin: 0 auto">
        <el-form-item v-for="(value, key, index) in personalInfo" :label="key">
          <el-input v-model="personalInfo[key]"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  // import InfoTable from "@/components/personal/InfoTable";
  // import Avatar from "@/components/personal/Avatar";

  export default {
    name: "PersonalInfo",
    components: {
      // Avatar,
      // InfoTable
    },
    data() {
      return {
        personalInfo: {
          username: '王花花',
          email: 'wanghuahua@163.com',
          ares: '',
          part: '儿科',
          region: '天大四季村',
          unit: 'tianda',
          state: 0,
          money: 1,
          getmoneyrecord: '',
          getMoney: 0,
          modify: 0,
          like: '',
          download: '',
          record: '',
          view: '',

        }
      }
    },
    computed: {
      // tableData() {
      //   return [
      //     {
      //       key: '姓名',
      //       value: this.personalInfo.username,
      //       editable: false
      //     },
      //     {
      //       key: '邮箱',
      //       value: this.personalInfo.email,
      //       editable: false
      //     },
      //     {
      //       key: '社区',
      //       value: this.personalInfo.region,
      //       editable: true
      //     },
      //     {
      //       key: '行医许可证',
      //       value: '2341278038048',
      //       editable: true
      //     },
      //     {
      //       key: '联络方式',
      //       value: '18626674277',
      //       editable: true
      //     },
      //     {
      //       key: '银行账户',
      //       value: '10388980543564567',
      //       editable: true
      //     },
      //     {
      //       key: '个人账户经费',
      //       value: '23452.33元',
      //       editable: false
      //     },
      //     {
      //       key: '注册地址',
      //       value: '天津市皇后大道东天街交汇处234号',
      //       editable: true
      //     }
      //   ]
      // }
    },
    methods: {
      async editSave(value) {
        console.log(value);
        // 修改后的信息
        let res = await this.$http.userModify(value);
        this.$message.success("修改成功");
      },
      async initPersonalInfo() {
        let res = await this.$http.getUser({
          token: this.$store.state.userInfo.token
        });
        console.log('-------------用户信息----------');
        console.log(res);
        this.personalInfo = res.data;
      }
    },
    activated() {
      this.initPersonalInfo();
    }
  }
</script>

<style>
  .basic-title {
    margin-bottom: 1.5rem;
  }

  .left-side {
    padding-right: 2rem;
    text-align: center;
  }
</style>
