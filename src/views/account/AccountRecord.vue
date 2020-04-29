<template>
  <div>
    <h3 class="basic-title">交易明细</h3>
    <div style="height: 2rem"></div>
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="文章收入" name="0">
        <div>
          <el-table
            :data="tableDataArticle"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <!-- 思路新奇，驾驭不住 -->
                <!-- 只求赶紧毕业，希望您找别人玩去 -->
                <!--                <el-form label-position="left" inline class="demo-table-expand">-->
                <!--                  <el-form-item label="文章UUID">-->
                <!--                    <span>{{ props.row.articleID }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="发布时间">-->
                <!--                    <span>{{ props.row.publishTime | dateFormat("yyyy-MM-dd") }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="文章阅读量">-->
                <!--                    <span>{{ props.row.views }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="阅读量对应收益">-->
                <!--                    <span>{{ props.row.viewsMoney }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="文章下载量">-->
                <!--                    <span>{{ props.row.download }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="下载量对应收益">-->
                <!--                    <span>{{ props.row.downloadsMoney }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="文章点赞量">-->
                <!--                    <span>{{ props.row.likes }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="点赞量对应收益">-->
                <!--                    <span>{{ props.row.likesMoney }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="文章收藏量">-->
                <!--                    <span>{{ props.row.hides }}</span>-->
                <!--                  </el-form-item>-->
                <!--                  <el-form-item label="收藏量对应收益">-->
                <!--                    <span>{{ props.row.hidesMoney }}</span>-->
                <!--                  </el-form-item>-->
                <!--                </el-form>-->
                <el-card shadow="hover">
                  <el-table
                    :data="props.row.details"
                    style="width: 100%">
                    <el-table-column
                      prop="articleID"
                      label="文章UUID"
                      width="300">
                    </el-table-column>
                    <el-table-column
                      label="阅读量"
                      align="center">
                      <template slot-scope="scope">
                        {{scope.row.views}} / ￥{{scope.row.viewsMoney}}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="下载量"
                      align="center">
                      <template slot-scope="scope">
                        {{scope.row.download}} / ￥{{scope.row.downloadsMoney}}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="点赞量"
                      align="center">
                      <template slot-scope="scope">
                        {{scope.row.likes}} / ￥{{scope.row.likesMoney}}
                      </template>
                    </el-table-column>
                    <el-table-column
                      label="收藏量"
                      align="center">
                      <template slot-scope="scope">
                        {{scope.row.hides}} / ￥{{scope.row.hidesMoney}}
                      </template>
                    </el-table-column>
                  </el-table>
                </el-card>
              </template>
            </el-table-column>
            <el-table-column
              label="交易编号"
              prop="number" width="350">
            </el-table-column>
            <el-table-column
              label="来源"
              prop="source">
            </el-table-column>
            <el-table-column
              label="审核人"
              prop="testuser">
            </el-table-column>
            <el-table-column
              label="金额"
              prop="mount">
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="健康半径" name="1">
        <div>
          <el-table
            :data="tableDataHealth"
            style="width: 100%">
            <el-table-column
              label="分类"
              prop="category">
            </el-table-column>
            <el-table-column
              label="数量"
              prop="count"
              width="180">
            </el-table-column>
            <el-table-column
              label="金额"
              prop="mount"
              align="center"
              width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import OutLayInCome from "@/components/task/OutLayInCome";

  export default {
    name: "AccountRecord",
    components: {
      OutLayInCome
    },
    data() {
      return {
        activeName: 0,
        tableDataArticle: [],
        tableDataHealth: []
      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      formatter(row, column) {
        return row.address;
      },
      async initRecordInfo() {
      },
      async getRecordDetails(type) {
        // 我服了，您牛逼
        // 您真应该去阿里巴巴
        // 在下跟不上您的思维
        let res = await this.$http.userFeaSearchArticle({
          username: this.$store.state.userInfo.username
        });
        console.log(res);
        this.tableDataArticle = res.data;
        // this.tableDataArticle.forEach(row => {
        //   this.$http.recordingQuery({
        //     number: row.number
        //   }).then(response => {
        //     console.log(response);
        //     row['details'] = response.data;
        //   });
        // })
        // this.tableDataArticle = res.data.article;
        // this.tableDataHealth = res.data.health;
        // console.log(this.tableDataArticle)
        // console.log(this.tableDataHealth)
      }
    },
    activated() {
      this.initRecordInfo();
      if (this.$route.query.type) {
        this.activeName = this.$route.query.type;
      }
      console.log(this.activeName);
      this.getRecordDetails(this.activeName);
    }
  }
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 120px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
