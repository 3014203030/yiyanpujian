<template>
  <div>
    <!--单页的文章-->
    <div class="basic-container">
      <div class="article-page-box left">
        <h3 class="basic-title flex-auto">文章详情</h3>
        <div class="article-page-content" v-if="articleMsg">
          <h1 class="article-title">{{ articleMsg.title }}</h1>
          <div class="secondary-text flex">
            <p class="flex-auto">文章来源：{{ articleMsg.source }}</p>
            <div class="flex">
              <p>提交时间：{{ articleMsg.writeTime }}</p>
              <span class="tab"></span>
              <p>创建时间：{{ articleMsg.creatTime }}</p>
            </div>
          </div>
          <div class="article-link">
            <el-link type="primary" :href="articleMsg.sourceURL">{{ articleMsg.sourceURL }}</el-link>
          </div>
          <div class="flex">
            <div class="secondary-text flex-auto flex">
              <p>浏览量：{{ articleMsg.views }}</p>
              <p><span class="tab"></span></p>
              <p>点赞量：{{ articleMsg.likes }}</p>
              <p><span class="tab"></span></p>
              <p>下载量：{{ articleMsg.download }}</p>
              <p><span class="tab"></span></p>
              <p>收藏量：{{ articleMsg.berecord }}</p>
            </div>
            <div class="flex">
              <el-tag effect="dark">{{ articleMsg.label }}</el-tag>
              <span class="tab"></span>
              <el-tag type="success" effect="dark">{{ articleMsg.part }}</el-tag>
            </div>
          </div>
          <div class="article-page-pic flex">
            <el-card :body-style="{ padding: '1px' }" shadow="hover">
              <div>
                <el-image style="width: 150px; height: 100px; display: block"
                          :src="articleMsg.picURL | fullPicUrl"></el-image>
              </div>
            </el-card>
          </div>
          <!-- 先实现效果再说 -->
          <div class="divider" v-if="articleMsg.ifVideo === 1"></div>
          <div class="article-page-video" v-if="articleMsg.ifVideo === 1">
            <my-video-player :sources-src="articleMsg.videoURL"></my-video-player>
          </div>
          <div class="divider"></div>
          <div class="article-full-content">
            <p><span class="tab"></span>{{ articleMsg.fullContent }}</p>
          </div>
          <div class="divider"></div>
        </div>
      </div>
    </div>

    <div class="site-content" style="transform: none;">
      <section class="article-focusbox bgimg-fixed lazyloaded"
               style="background-image: url(&quot;https://s1.ax1x.com/2020/04/28/J5pl4J.jpg&quot;);">
        <div class="container">
          <header class="article-header">
            <h1 class="article-title">{{ articleMsg.title }}</h1>
            <div class="article-meta">
              <span class="item">{{ articleMsg.creatTime | dateFormat('yyyy-MM-dd') }}</span>
              <span class="item">浏览量：{{ articleMsg.views }}</span>
              <span class="item">点赞量：{{ articleMsg.likes }}</span>
              <span class="item">下载量：{{ articleMsg.download }}</span>
              <span class="item">收藏量：{{ articleMsg.berecord }}</span>
              <span class="item"></span>
            </div>
          </header>
        </div>
      </section>

      <div class="container" style="transform: none;">
        <el-row class="row" style="transform: none;" :gutter="20">
          <el-col :xs="24" :sm="18">
            <div class="content-area">
              <main class="site-main">
                <article class="article-content">
                  <div class="container">
                    <div class="entry-wrapper">
                      <div class="entry-content u-text-format u-clearfix">
                      </div>
                      <div id="content" class="x_detail1 article__detail" style="font-size: 14px;text-align: left"  v-html="HtmlContent">

                      </div>
                      <div class="entry-tags">
                        <a href="#">
                          {{ typeof(articleMsg.label) !== "string" ? '' : articleMsg.label.replace("[","").replace("]","").replace("'","").replace("'","")}}
                        </a>
                        <a href="#" rel="tag">
                          {{articleMsg.part}}
                        </a>
                      </div>
                      <div class="article-copyright">文章来源：{{ articleMsg.sourceURL }}</div>
                      <div class="article-footer">
                        <div class="author-box">
                          <div class="author-image">
                            <img alt="admin" class="avatar avatar-140 photo gravatar lazyloaded" height="140"
                                 width="140" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                          </div>
                          <div class="author-info">
                            <h4 class="author-name">
                              <a href="#">{{articleMsg.author === null ? "佚名" : articleMsg.author}}</a>
                            </h4>
                          </div>
                        </div>

                        <div class="xshare">
                          <span class="xshare-title">分享到：</span>
                          <a href="" etap="share" data-share="qq" class="share-qq"><i class="fa fa-qq"></i></a>
                          <a href="" etap="share" data-share="weibo" class="share-weibo"><i class="fa fa-weibo"></i></a>
                          <a href="javascript:;" class="btn-bigger-cover share-weixin" data-nonce="03f35776e4"
                             data-id="579" data-action="create-bigger-image" id="bigger-cover"><i
                            class="fa fa-paper-plane"></i></a>
                        </div>

                      </div>
                    </div>
                  </div>
                </article>


                <!--              <div class="entry-navigation">-->
                <!--                <nav class="article-nav">-->
                <!--                  <span class="article-nav-prev">上一篇<br><a href="#" rel="prev">上一篇标题</a></span>-->
                <!--                  <span class="article-nav-next">下一篇<br><a href="#" rel="next">下一篇标题</a></span>-->
                <!--                </nav>-->
                <!--              </div>-->
              </main>
            </div>
          </el-col>
          <el-col :xs="24" :sm="6" style="overflow: visible; box-sizing: border-box;">
            <div class="theiaStickySidebar"
                 style="padding-top: 0px; padding-bottom: 1px;">
              <aside class="widget-area">
                <div id="cao_widget_pay-2" class="widget widget-pay">
                  <div class="pay--content">
                    <div class="info">
                      <div class="price"><font>￥0.19</font></div>
                      <div class="pay--rateinfo"><b class="desc"><span class="type_icont_2"><i
                        class="fa fa-diamond"></i> 已加入原创打赏计划</span></b></div>
                    </div>
                    <div class="pay-box">
                      <button type="button" class="click-pay btn btn--primary btn--block"><i class="fa fa-money"></i> 立即打赏</button>
                      <button type="button" class="click-pay btn btn--danger btn--block mt-10"><i class="fa fa-link"></i> 收藏文章</button></div>
                  </div>
                  <div class="agent--contact">
                    <ul class="list-paybody">
                      <li><span>分类</span><span>{{articleMsg.part}}</span></li>
                      <li><span>标签</span><span>{{ typeof(articleMsg.label) !== "string" ? '' : articleMsg.label.replace("[","").replace("]","").replace("'","").replace("'","")}}</span></li>
                      <li><span>最近更新</span><span>{{ articleMsg.writeTime | dateFormat('yyyy-MM-dd') }}</span></li>
                    </ul>
                  </div>
                  <div class="ac_qqhao"><a target="_blank"><i
                    class="fa fa-paper-plane"></i> 我要投稿</a></div>
                </div>
                <div id="magsy_category_widget-2" class="widget widget_magsy_category_widget">
                  <ul>
                    <li class="category-item">
                      <a href="#" title="">
                        <span class="category-name">
                          <i class="dot" style="background-color: var(--color-background);"></i>
                          广告1
                        </span>
                        <span class="category-count"><i class="fa fa-fire"></i>1.4k</span>
                      </a>
                    </li>
                    <li class="category-item">
                      <a href="#" title="">
                        <span class="category-name">
                          <i class="dot" style="background-color: var(--color-background);"></i>
                          广告2
                        </span>
                        <span class="category-count"><i class="fa fa-fire"></i>1.2k</span>
                      </a>
                    </li>
                    <li class="category-item">
                      <a href="#" title="">
                        <span class="category-name">
                          <i class="dot" style="background-color: var(--color-background);"></i>
                          广告3
                        </span>
                        <span class="category-count"><i class="fa fa-fire"></i>1.0k</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import MyVideoPlayer from "@/components/common/MyVideoPlayer";

  export default {
    name: "ArticlePage",
    components: {
      MyVideoPlayer
    },
    data() {
      return {
        uuid: '',
        articleMsg: undefined,
        HtmlContent: `<p>腹部疝（VH）是普外科临床中最常见的疾病之一，然而不同医生对同一 VH 患者所建议的治疗方案却存在很大不同。其原因不必细说，总之可以认为，与 VH 本身有关、与医生自身水平有关、也与相关研究发展变化有关。<br></p><p>鉴于此，Mike K. Liang 等根据现有最佳证据，拟定了腹部疝治疗的规范性策略，并邀请专家组共同评议，形成共识，文章于 2017 年 1 月发表在 Annals of Surgery 上，本文择其重点予简要介绍。</p><p>该共识基于牛津循证医学中心临床证据水平分级和推荐级别（表 1）制定。</p><p>表 1 牛津循证医学中心临床证据水平分级和推荐级别<br><img alt="1.jpg" src="https://img.dxycdn.com/cms/upload/userfiles/image/2017/03/03/B1487919671_small.jpg" title=""><br>注：1. 基于研究设计论证因果关系的力度不同将证据水平分为 5 级；2. 则根据证据质量、一致性、临床意义、普遍性、适用性等将推荐意见等级分为 A（优秀）、B（良好）、C（满意）、D（差） 4 级。</p><p><strong>正式介绍共识</strong></p><p>1. 危险因素</p><p>临床工作中，患者的选择很重要，高风险的患者，腹部疝修补术（VHR）后并发症发生率势必要更高。掌握以下危险因素，有助于临床医生顺利选出合适的病人进行 VHR 手术。</p><p>（1）吸烟</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>当前吸烟者不予行择期手术，戒烟至少 4 周方可。（推荐等级：A）</p></li></ul><p>（2）肥胖</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>肥胖（BMI ≥ 30 kg/m<sup>2</sup>）与 VHR 术后预后不良有关。（推荐等级：A）</p></li><li><p>BMI ≥ 50 kg/m<sup>2</sup> 者不予行择期手术。（推荐等级：C）</p></li><li><p>对于 BMI 在 30~50 kg/m<sup>2</sup> 之间者，行择期手术前需行个体化干预措施来降低手术风险（比如减肥手术、非手术性干预措施）。（推荐等级：C）</p></li></ul><p>（3）营养不良</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>营养不良的判定应基于临床评估，必要时术前需查白蛋白水平。（推荐等级：D）</p></li><li><p>对于腹部手术风险较高的患者，术前应考虑予经口补充营养（包括精氨酸、鱼油等）。（推荐等级：A）</p></li></ul><p>（4）糖尿病</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>术前应检测糖化血红蛋白（HbA1c）水平。（推荐等级：A）</p></li><li><p>HbA1c＞6.5% 的患者手术并发症风险增高，应在个体化干预治疗后再行择期手术。（推荐等级：B）</p></li><li><p>HbA1c＞8% 者不予行择期手术。（推荐等级：A）</p></li></ul><p>2. 非手术治疗</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>非手术措施治疗 VH 是安全的。（推荐等级：C）</p></li></ul><p>说明：这里指的是某些 VH 患者可以采用保守治疗的方法，治疗后其短期发病风险较低。然而具体哪些患者在此列，各专家并未达成共识。</p><p>3. 手术治疗</p><p>（1）网片修补</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>推荐在腹部切口疝和疝口 ≥ 2 cm 的无污染原发腹疝的择期手术中采用网片修补。（推荐等级：A）</p></li><li><p>在急症手术、疝口＜2 cm 的原发腹疝、存在污染的情况下，是否选用网片修补需具体情况具体分析。（推荐等级：D）</p></li></ul><p>（2）补片类型选择</p><p>a. 合成的</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>与中等重量的补片相比，超轻型、轻型、超重型补片增加 VHR 手术并发症。（推荐等级：B，D）</p></li></ul><p>b. 生物的</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>生物补片在腹壁重建过程中是安全的，极少有补片排斥取出者。然而，其作用尚需进一步研究确定。（推荐等级：D）</p></li><li><p>生物可吸收补片的安全性、作用效果等尚无相关研究数据来证实。（推荐等级：D）</p></li></ul><p>（3）补片位置</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>对于开放性择期 VHR，膜前修补是补片的最佳位置。（推荐等级：C）</p></li></ul><p>说明：关于补片位置的研究，其证据均不太高，尚缺乏针对不同 VH 不同情况下的处理的大型随机对照试验。目前专家一致认为膜前修补对于开放性择期 VHR 比较好，而将补片垫衬或覆盖的方式在腹腔镜手术中或许更有用。</p><p>4. 急症 VHR</p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>由于其多样性和复杂性，急症 VHR 需具体情况具体分析。（推荐等级：D）</p></li></ul><p>说明：注意，遇到急症 VH 患者，首要原则是处理好紧急病情、充分评估急症 VHR 的安全性。</p><p><strong>总结</strong></p><p>在对病人的选择、保守治疗的短期安全性、补片强化修补等方面，各专家达成了共识，且相关研究的证据级别相对较高（推荐等级在 A-C 之间）。这一部分，值得我们在临床工作中将其作为参考标准。</p><p>然而，在其他很多方面，尚缺乏足够的证据，专家也难以达成共识。我们期待在这些方面能有更多证据级别高的研究结果出来，以更好地指导临床工作。</p><p>原文标题 Ventral Hernia Management：Expert Consensus Guided by Systematic Review，<a href="http://journals.lww.com/annalsofsurgery/Abstract/2017/01000/Ventral_Hernia_Management__Expert_Consensus_Guided.15.aspx" target="_self">原文链接点此进入</a>&gt;&gt;</p><div class="x_detail_btm"><p><a href='http://journals.lww.com/annalsofsurgery/Abstract/2017/01000/Ventral_Hernia_Management__Expert_Consensus_Guided.15.aspx' target="_blank">查看信源地址</a></p><p class="x_detail1_author">                            编辑：                                                                                                                       程培训</p></div>                `
      }
    },
    methods: {
      async searchArticleById(uuid) {
        let res = await this.$http.searchByArticleId({
          uuid: uuid
        });
        console.log('----------uuid查询------------');
        console.log(res.data);
        if (res.code === this.$http.SUCC_CODE) {
          this.articleMsg = res.data;
        } else {
          this.$message.error(res.msg)
        }
      }
    },
    watch: {
      $route: {
        // 监听路由变化，因为keep-alive或者其他原因，这里会一直监听，所以判断是否是undefined，来搜索
        handler() {
          this.uuid = this.$route.query.uuid;
          if (this.uuid) {
            // console.log(this.uuid)
            this.searchArticleById(this.uuid)
          }
        },
        // deep: true,
        immediate: true
      }
    }
  }
</script>

<style lang="scss">
  .tab {
    display: inline-block;
    width: 2rem;
  }

  .article-page-box {
    padding: 2rem 0;
  }

  .article-page-content {
    padding: 2rem 0;

    .article-title {
      padding-bottom: .5rem;
    }

    .article-link {
      padding-bottom: .5rem;
    }

    .secondary-text {
      font-size: .9rem;
      color: rgba(0, 0, 0, .5);
      padding-bottom: .5rem;
    }

    .article-page-video {
      width: 75%;
      margin: 0 auto;
    }

    .article-full-content {
      line-height: 1.5;
    }
  }
</style>
<style scoped>
  .jasonhide {
    display: none;
  }
  @media all {
    article, aside, header, nav, section {
      display: block;
    }

    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }

    figure, main {
      display: block;
    }

    figure {
      margin: 1em 40px;
    }

    pre {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    a {
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
    }

    b {
      font-weight: inherit;
    }

    b {
      font-weight: bolder;
    }

    code {
      font-family: monospace, monospace;
      font-size: 1em;
    }

    small {
      font-size: 80%;
    }

    img {
      border-style: none;
    }

    button {
      font-family: sans-serif;
      font-size: 100%;
      line-height: 1.15;
      margin: 0;
    }

    button {
      overflow: visible;
    }

    button {
      text-transform: none;
    }

    button, html [type="button"] {
      -webkit-appearance: button;
    }

    button::-moz-focus-inner, [type="button"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    button:-moz-focusring, [type="button"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-track {
      background-color: #e0e0e0;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, .3);
      background-color: #525252;
    }

    .container {
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 575px) {
      .container {
        max-width: 460px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
    @media (min-width: 768px) {
      .container {
        max-width: 720px;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    @media (min-width: 992px) {
      .container {
        max-width: 960px;
      }
    }
    @media (min-width: 1230px) {
      .container {
        max-width: 1200px;
      }
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      margin-left: -15px;
      margin-right: -15px;
    }

    .col-lg-3, .col-lg-9 {
      min-height: 1px;
      padding-left: 15px;
      padding-right: 15px;
      position: relative;
      width: 100%;
    }

    @media (min-width: 992px) {
      .col-lg-3 {
        flex: 0 0 25%;
        max-width: 25%;
      }

      .col-lg-9 {
        flex: 0 0 75%;
        max-width: 75%;
      }
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }

    a {
      color: #34495e;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    a:hover {
      opacity: .8;
    }

    h1, h4 {
      color: #223C61;
      font-weight: 700;
      line-height: 1.2;
      margin: 0 0 15px;
    }

    p {
      margin: 0 0 15px;
    }

    img {
      display: block;
      height: auto;
      max-width: 100%;
      vertical-align: middle;
    }

    blockquote p {
      line-height: 30px !important;
    }

    blockquote > *:last-child {
      margin-bottom: 0 !important;
    }

    ul {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }

    figure {
      margin: 0;
    }

    pre {
      overflow-y: scroll;
    }

    .btn {
      border: none;
      border-radius: 4px;
      cursor: pointer;
      display: inline-block;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      line-height: 36px;
      outline: none;
      padding: 0 18px;
      text-align: center;
      text-transform: uppercase;
      position: relative;
    }

    .btn:hover {
      transition: all .3s ease-in-out;
    }

    .btn--primary {
      background-color: rgb(24, 118, 110);
      color: #ffffff;
    }

    .btn--primary:hover {
      background-color: rgb(33, 167, 156);
    }

    .btn--danger {
      background-color: #f4516c;
      color: #ffffff;
    }
    .btn--danger:hover {
      background-color: #F89DAC;
      color: #ffffff;
    }

    .btn--block {
      width: 100% !important;
    }

    .site-content {
      padding-bottom: 60px;
    }

    .single-post .site-content {
      padding: 0;
      padding-bottom: 30px;
    }

    @media (max-width: 767px) {
      .site-content {
        padding-bottom: 30px;
        padding-top: 30px;
      }
    }
    @media (max-width: 575px) {
      .sidebar-column .widget-area {
        margin: 60px auto 0;
        max-width: 300px;
        padding: 0 !important;
      }
    }
    @media (max-width: 991px) {
      .sidebar-column .widget-area {
        margin: 10px auto 0;
        max-width: 460px;
        padding: 0 !important;
      }
    }
    @media (min-width: 992px) {
      .content-column {
        flex: 0 0 72%;
        max-width: 72%;
      }

      .sidebar-column {
        flex: 0 0 28%;
        max-width: 28%;
      }
    }
    .u-clearfix:before, .u-clearfix:after {
      content: " ";
      display: table;
    }

    .u-clearfix:after {
      clear: both;
    }

    .u-text-format > *:first-child, .u-text-format > *:first-child > *:first-child {
      margin-top: 0 !important;
    }

    .u-text-format > *:last-child, .u-text-format > *:last-child > *:last-child {
      margin-bottom: 0 !important;
    }

    .u-text-format li {
      margin: 5px 0;
    }

    .u-text-format a {
      font-weight: 700;
      text-decoration: underline;
    }

    .lazyloaded {
      opacity: 1;
      transition: opacity 0.3s cubic-bezier(0.77, 0, 0.175, 1);
    }

    .mt-10 {
      margin-top: 10px !important;
    }

    .article-footer .xshare {
      float: right;
      font-size: 14px;
      line-height: 30px;
    }

    .xshare .xshare-title {
      float: left;
    }

    .xshare a {
      float: left;
      margin-left: 10px;
      border-radius: 50px;
      border: 1px solid #E6E6E6;
      width: 60px;
      height: 30px;
      text-align: center;
    }

    .xshare a .fa {
      font-size: 16px;
    }

    .xshare a.share-weixin {
      color: #5FCF80;
    }

    .xshare a.share-weixin:hover {
      border-color: #5FCF80;
    }

    .xshare a.share-weibo {
      color: #FD001B;
    }

    .xshare a.share-weibo:hover {
      border-color: #FD001B;
    }

    .xshare a.share-qq {
      color: #01CDB8;
    }

    .xshare a.share-qq:hover {
      border-color: #01CDB8;
    }

    @media (max-width: 768px) {
      .xshare {
        display: block;
      }
    }
    .author-box {
      position: relative;
      float: left;
      line-height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .author-box .author-image {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 4px solid #e6e6e6;
      overflow: hidden;
    }

    .author-box .author-image img:hover {
      cursor: pointer;
    }

    .author-box .author-info {
      margin-left: 10px;
    }

    .author-box .author-name {
      font-size: 16px;
      margin-bottom: 5px;
      font-weight: 500;
    }

    .entry-navigation {
      background-color: #ffffff;
      display: block;
      margin-top: 30px;
      position: relative;
      border-radius: 5px;
      padding: 20px;
    }

    .article-nav {
      overflow: hidden;
      font-size: 14px;
      color: #bbb;
    }

    .article-nav span {
      float: left;
      position: relative;
      width: 50%;
    }

    .article-nav span.article-nav-next {
      float: right;
      text-align: right;
    }

    .article-nav span.article-nav-next::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      display: block;
      width: 1px;
      background-color: #eee;
    }

    .article-nav a {
      color: #999;
      margin-right: 10px;
      display: inline-block;
    }

    .article-nav span.article-nav-next a {
      margin-left: 10px;
      margin-right: 0;
    }

    .article-nav a:hover {
      color: #45B6F7;
    }

    @media (max-width: 991px) {
      .entry-navigation {
        margin-bottom: 30px;
      }
    }
    .entry-tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .entry-tags a {
      background-color: #f4f4f4;
      border: 1px solid #e6e6e6;
      border-radius: 3px;
      color: #555;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
      margin: 0 5px 5px 0;
      padding: 5px 10px;
    }

    .article-copyright {
      clear: both;
      overflow: hidden;
      margin-bottom: 20px;
      background: #f7fbff;
      padding: 10px 20px;
      border: 1px dashed #e6e6e6;
      border-radius: 4px;
      font-size: 12px;
      margin-top: 20px;
    }

    .article-copyright a {
      color: #555;
    }

    .article-footer {
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      position: relative;
    }

    @media (max-width: 576px) {
      .article-footer {
        display: flex;
      }

      .author-box {
        display: none;
      }
    }
    .breadcrumbs {
      font-size: 13px;
      text-align: left;
      color: #999;
      padding: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: none;
    }

    .breadcrumbs a {
      color: #999;
    }

    @media (max-width: 575px) {
      .breadcrumbs {
        margin-bottom: 10px;
        margin-top: -20px;
      }
    }
    .article-focusbox {
      position: relative;
      z-index: 1;
      padding: 45px 0;
      background-color: #394048;
      color: #eee;
      text-align: center;
      -webkit-transition: all .3s ease-in-out;
      -moz-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
      margin-bottom: 30px;
    }

    .article-focusbox.bgimg-fixed {
      padding: 60px 0;
      background-position: center center;
      background-size: unset;
      background-repeat: repeat;
      background-attachment: fixed;
    }

    .article-focusbox:before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: rgba(24, 32, 39, 0.8);
      content: '';
    }

    .article-title {
      margin: 0 0 10px;
      font-weight: 600;
      font-size: 24px;
      color: #fff;
    }

    .article-meta {
      font-size: 14px;
      opacity: 0.8;
    }

    .article-meta .item {
      display: inline-block;
      margin: 0 10px;
    }

    .article-meta .item a {
      color: #fff;
    }

    .article-content {
      border-radius: 4px;
      background-color: #fff;
      word-wrap: break-word;
      padding: 20px;
    }

    .article-content img {
      border-radius: 5px;
      max-width: 100%;
    }

    .article-content pre {
      margin: 20px 0;
      padding: 10px 20px;
      border: none;
      background: #03152a;
      color: #b3b3b3;
      font: 12px/20px 'courier new';
    }

    .article-content blockquote {
      position: relative;
      margin: 30px 0;
      padding: 10px 45px;
      border-radius: 3px;
      background-color: #f8f8fa;
    }

    .article-content blockquote:before {
      position: absolute;
      top: 20px;
      left: 20px;
      display: block;
      width: 16px;
      height: 14px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAANCAYAAADISGwcAAAABmJLR0QA/wD/AP+gvaeTAAABJUlEQVQ4y62UzVHDMBCFPxgX4BJcQkpIKgAqwKkguAJDBSQdmAooAXPhlINLcDowFSQHr0fPipTMJHozmlnJT6u3f35o//YIlkBt9hroOccb8AQMwAvwY/d8vAMfZh8JY/XoHdTiLPR4LpyOBFABpTz+FeF/mohLnJsE5OZ8irwJcJcmEvvekwCTgI1Etotwa7FjnJsEFIwNA2NjhaIvceVpSVR/gAx4lX1v2QA4iBjlDJKNX6DCZU+b+F/urMT+Fv6QeYIWtqZIQ9l4tgXzUSvkcT+TrWQyl7POH8N7sBG7MhGXOGuYj+E9yHET0hGfooXZW2yKUgkocamtrmRowJUtmYDJeYOrt6LA9c2sPBljt4cudRFbcTDnje1jf8cCN+qNfjgBbfA/pMbdZOcAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC) no-repeat;
      content: '';
    }

    .article-content blockquote:after {
      position: absolute;
      right: 20px;
      bottom: 20px;
      display: block;
      width: 16px;
      height: 14px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAANCAYAAADISGwcAAAABmJLR0QA/wD/AP+gvaeTAAABJUlEQVQ4y62UzVHDMBCFPxgX4BJcQkpIKgAqwKkguAJDBSQdmAooAXPhlINLcDowFSQHr0fPipTMJHozmlnJT6u3f35o//YIlkBt9hroOccb8AQMwAvwY/d8vAMfZh8JY/XoHdTiLPR4LpyOBFABpTz+FeF/mohLnJsE5OZ8irwJcJcmEvvekwCTgI1Etotwa7FjnJsEFIwNA2NjhaIvceVpSVR/gAx4lX1v2QA4iBjlDJKNX6DCZU+b+F/urMT+Fv6QeYIWtqZIQ9l4tgXzUSvkcT+TrWQyl7POH8N7sBG7MhGXOGuYj+E9yHET0hGfooXZW2yKUgkocamtrmRowJUtmYDJeYOrt6LA9c2sPBljt4cudRFbcTDnje1jf8cCN+qNfjgBbfA/pMbdZOcAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC) -16px 0 no-repeat;
      content: '';
    }

    .article-content blockquote p {
      margin: 0;
      margin-bottom: 10px;
      padding: 0;
    }

    @media (max-width: 575px) {
      .article-content {
        padding: 10px;
      }
    }
    .widget-area .widget {
      position: relative;
      background-color: #fff;
      padding: 20px;
      border-radius: 4px;
      clear: both;
    }

    .widget-area .widget + .widget {
      margin-top: 20px;
    }

    .widget ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    .widget ul li {
      line-height: 20px;
      padding: 5px 0;
      list-style: none;
    }

    .widget ul li > a {
      display: inline-block;
    }

    .widget ul li + li > a {
      margin-top: 0;
    }

    .widget-pay .pay--rateinfo {
      margin-top: 10px;
      margin-bottom: 0;
      text-align: center;
    }

    .widget-pay .pay--rateinfo .desc {
      color: #626a71;
    }

    .widget-pay .pay--content {
      position: relative;
      padding-bottom: 20px;
    }

    .widget-pay .pay--content .info {
      display: block;
      padding-bottom: 15px;
    }

    .pay--content .info .price {
      color: #fd721f;
      font-size: 26px;
      font-weight: 600;
      line-height: 1;
      text-transform: capitalize;
      text-align: center;
    }

    .pay--content .info .paynum {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 12px;
      opacity: 0.5;
    }

    .type_icont_2 {
      border: 1px solid #DDDDDD;
      padding: 2px 16px;
      border-radius: 13px;
      font-size: 12px;
      transition: all 0.3s ease;
      color: #FFC107;
      border-color: #FFC107;
    }

    .agent--contact .list-paybody {
      padding: 10px;
      background-color: #f3f7ff;
      border-radius: 4px;
    }

    .widget-pay .ac_qqhao {
      padding-top: 20px;
      text-align: center;
    }

    .agent--contact ul li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #8c8c8c;
      font-size: 13px;
    }

    .widget_magsy_category_widget .category-item + .category-item {
      margin-top: 0;
    }

    .widget_magsy_category_widget .category-item > a {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 6px 12px;
      background: rgb(246, 246, 246);
      border-radius: 4px;
    }

    .widget_magsy_category_widget .category-name {
      align-items: center;
      display: flex;
    }

    .widget_magsy_category_widget .dot {
      color: var(--color-background);
      border-radius: 50%;
      height: 6px;
      margin-right: 8px;
      margin-top: 1px;
      width: 6px;
    }

    .widget_magsy_category_widget .category-count {
      color: #aaa;
      font-size: 13px;
    }

    .wp-block-image {
      margin: 30px 0;
    }
  }

  .theiaStickySidebar:after {
    content: "";
    display: table;
    clear: both;
  }


  /*! CSS Used from: http://assets.dxycdn.com/core/css/reset-min.css?t=1587024719209 */
  p,ul,li{margin:0;padding:0;}
  ul{list-style:none;}
  a{text-decoration:none;}
  a:hover{text-decoration:underline;}
  img{border:0;max-width: 100%;}
  /*! CSS Used from: http://assets.dxycdn.com/gitrepo/dxydotcn/dist/desktop/info/style.css?t=1587024719209 */
  img{border:0;max-width: 100%;}
  a:hover{text-decoration:underline;}
  .x_detail_btm p{text-overflow:ellipsis;white-space:nowrap;}
  .x_detail_btm p{white-space:nowrap;}
  div,li,p,ul{margin:0;padding:0;}
  img{vertical-align:top;display:block;max-width: 100%;}
  li{list-style:none;}
  a:active,a:focus{outline:0;}
  a{color:#333;}
  a{border:none;text-decoration:none;}
  a:hover{color:#4F46A0;}
  .x_detail1,.x_detail1 ul li{line-height:1.8;}
  .x_detail1{font-size:14px;padding:25px 0 0;color:#404040;}
  .x_detail1 p{padding-bottom:25px;}
  .x_detail1 a{color:#4F46A0;}
  .x_detail1 img{padding-top:15px;padding-bottom:15px;display:inline;max-width: 100%;}
  .x_detail1 ul{list-style:disc;margin:0 2px 0 45px;padding-bottom:15px;}
  .x_detail1_author{padding:25px 0 0;text-align:right;font-size:12px;color:#A1A1A1;}
  @media only screen and (max-device-width:720px),only screen and (-webkit-min-device-pixel-ratio:3){
    .x_detail1{font-size:1.2em;font-family:'Helvetica Neue',Helvetica,Arial;line-height:1.6;}
    .x_detail1 img{width:100%;max-width: 100%;}
    .x_detail1 img{height:auto!important;max-width:100%!important;}
    .x_detail1 p{padding:0 5px 25px;font-size:16px;}
    .x_detail1{padding:25px 5px 0 0;}
  }
  @media only screen and (min-device-width :768px) and (max-device-width :1024px) and (orientation :portrait){
    .x_detail1{padding:25px 10px 30px;font-size:1.3em;}
  }
  .x_detail1 .x_detail_btm{width:100%;overflow:hidden;padding-bottom:40px;}
  .x_detail_btm p{float:left;line-height:30px;padding:0;color:#a1a1a1;font-size:12px;width:80%;overflow:hidden;}
  .x_detail_btm p a{color:#a1a1a1;}
  .x_detail1 .x_detail_btm p.x_detail1_author{text-align:right;width:20%;float:right;}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(0,0,0,.6);}
  .article__detail{font-size:14px;line-height:1.8;}
  .article__detail a{color:#4F46A0;}
  .article__detail p{padding:0 0 25px;text-align:justify;word-break:break-word;}
  .article__detail img,.article__detail p img{padding:0 0 10px;max-width:600px;}
  .article__detail ul{margin:0 0 0 45px;padding:0;}
  .article__detail ul li{list-style:disc;}

</style>
