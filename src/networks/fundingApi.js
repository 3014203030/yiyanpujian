export const FUNDING_API = {
  // 检索接口
  fundingSearch: {
    method: 'post',
    url: '/doctor/projectFea/search'
  },
  // 账户变动接口
  fundingModify: {
    method: 'post',
    url: '/doctor/projectFea/add'
  },
  // 修改经费接口
  userFundingModify: {
    method: 'post',
    url: '/doctor/userFea/modify'
  },
  // 导出交易记录接口
  fundingOutput: {
    method: 'post',
    url: '/doctor/projectFea/out'
  },






  //
  fundingUserSearchRecord: {
    method: 'post',
    url: '/doctor/projectFea/goList'
  },
  fundingCompanySearchRecord: {
    method: 'post',
    url: '/doctor/projectFea/searchList'
  },


  fundingRollback: {
    method: 'post',
    url: '/doctor/projectFea/recall'
  },


  userFeaAdd: {
    method: 'post',
    url: '/doctor/userFea/add'
  },

  userSearchList4: {
    method: 'post',
    url: '/doctor/user/searchList4'
  },

  userFeaSearchUnverify: {
    method: 'post',
    url: '/doctor/userFea/searchUnverify'
  },

  userFeaVerifyUser: {
    method: 'post',
    url: '/doctor/userFea/verifyUser'
  },
  projectFeaVerifyUser: {
    method: 'post',
    url: '/doctor/projectFea/verifyUser'
  },

  // 我是智障
  recordingAdd: {
    method: 'post',
    url: '/doctor/recording/add'
  }


}
