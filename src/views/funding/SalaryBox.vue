<template>
  <div>
    <el-card shadow="hover">
      <h3 class="basic-title">待发放——管理员</h3>
      <el-table
        :data="salaryListManager"
        style="width: 100%">
        <el-table-column
          prop="company"
          label="公司"
          width="180">
        </el-table-column>
        <el-table-column
          prop="projectManager"
          label="姓名">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="250">
          <template slot-scope="scope">
            <input-and-confirm :row="scope.row"></input-and-confirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <div class="divider"></div>
    <el-card shadow="hover">
      <h3 class="basic-title">待发放——用户</h3>
      <el-table
        :data="salaryListUser"
        style="width: 100%">
        <el-table-column
          prop="company"
          label="公司"
          width="180">
        </el-table-column>
        <el-table-column
          prop="acceptuser"
          label="姓名">
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="250">
          <template slot-scope="scope">
            <input-and-confirm :row="scope.row"></input-and-confirm>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
  import InputAndConfirm from "@/components/task/InputAndConfirm";

  export default {
    name: "SalaryBox",
    components: {
      InputAndConfirm
    },
    props: {
      salaryListUser: {
        type: Array,
        default() {
          return []
        }
      },
      salaryListManager: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style>

</style>
