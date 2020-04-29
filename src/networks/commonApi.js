export const COMMON_API = {
  askGetData: {
    method: 'post',
    url: '/doctor/ask/getdata'
  },




  getAccountRecordDetails: {
    method: 'post',
    url: '/doctor/record/details'
  },

  userFeaSearchArticle: {
    method: 'post',
    url: '/doctor/userFea/searchArticle'
  },

  recordingQuery: {
    method: 'post',
    url: '/doctor/recording/query'
  },

  projectFeaAddManager: {
    method: 'post',
    url: '/doctor/projectFea/addManager'
  },
  searchOneCompany: {
    method: 'post',
    url: '/doctor/user/searchOneCompany'
  },
  // 别问我，问就是晓不得，搞这么多名字，玩大家来找茬？？？

  unit2unit: {
    method: 'post',
    url: '/doctor/userFea/unit2unit'
  },
  searchUnit: {
    method: 'post',
    url: '/doctor/userFea/searchUnit'
  }
}
