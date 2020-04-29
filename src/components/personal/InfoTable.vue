<template>
  <div>
    <el-table
      :show-header="false"
      :stripe="true"
      :data="showData">
      <el-table-column prop="key" width="200" align="right"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-input
            v-show="scope.$index === editIndex"
            v-model="scope.row.value"></el-input>
          <span v-show="scope.$index !== editIndex">{{ scope.row.value }}</span>
        </template>
      </el-table-column>
      <el-table-column width="100" align="center">
        <template slot-scope="scope">
          <el-button
            icon="el-icon-edit"
            circle
            v-if="editable[scope.$index]"
            size="mini"
            @click.stop="handleEdit(scope.$index, scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="btn-group">
      <el-button icon="el-icon-edit" @click="editStart">编辑</el-button>
      <el-button icon="el-icon-finished" @click="editFinished">保存</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoTable",
    props: {
      tableData: Array
    },
    data() {
      return {
        editIndex: -1,
        showData: this.tableData,
        editable: []
      }
    },
    methods: {
      handleEdit(index, row) {
        this.editIndex = index;
      },
      editStart() {
        this.editable = this.tableData.map( i => i.editable )
      },
      editFinished() {
        this.editable = [];  // 不知道为什么不能赋值长度为0
        this.editIndex = -1;
        this.$emit('edit-save', this.showData)
      }
    }
  }
</script>

<style>
  .el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 50px;
  }

  .btn-group {
    padding-top: 1rem;
    text-align: center;
  }
</style>
