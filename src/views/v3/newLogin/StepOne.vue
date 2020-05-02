<template>
  <div class="out-box">
    <el-row :gutter="20">
      <el-col :span="6">
        <type-card
          icon="el-icon-office-building"
          zh-name="公司管理账户" en-name="CompanyManager"
          @item-click="$emit('item-click', 1)"></type-card>
      </el-col>
      <el-col :span="6">
        <type-card
          icon="el-icon-coordinate"
          zh-name="公司业务账户" en-name="CompanyProfession"
          @item-click="$emit('item-click', 2)"></type-card>
      </el-col>
      <el-col :span="6">
        <type-card
          icon="el-icon-connection"
          zh-name="团队账户" en-name="TeamAccount"
          @item-click="$emit('item-click', 3)"></type-card>
      </el-col>
      <el-col :span="6">
        <type-card
          icon="el-icon-user"
          zh-name="个人账户" en-name="PersonalAccount"
          @item-click="$emit('item-click', 4)"></type-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TypeCard from "@/views/v3/newLogin/TypeCard";
  export default {
    name: "StepOne",
    components: {
      TypeCard
    }
  }
</script>

<style>
  .out-box {
    padding-top: 3rem;
  }
</style>
