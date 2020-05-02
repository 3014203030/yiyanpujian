export const ARTICLE_API = {
  // 文章上传接口 --------------------------------------------------------
  articleUpload: {
    method: 'post',
    url: '/doctor/article/upload'
  },
  // ....................................................................
  searchHome: {
    method: 'post',
    url: '/doctor/article/searchHome'
  },
  // uuid查询 ----------------------------------------------------------
  searchByArticleId: {
    method: 'post',
    url: '/doctor/article/searchById'
  },
  // 咨询检索接口 ------------------------------------------------------
  articleSearch: {
    method: 'post',
    url: '/doctor/article/search'
  },
  // 查询筛选值接口 ----------------------------------------------------
  articleFilter: {
    method: 'post',
    url: '/doctor/article/prepara'
  },

  // 统计接口
  articleCalculate: {
    method: 'post',
    url: '/doctor/article/calculate'
  },

  // 文件上传接口
  articleFile: {
    method: 'post',
    url: '/doctor/article/file'
  }
}
