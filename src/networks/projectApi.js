export const PROJECT_API = {
  // 项目检索接口 -----------------------------------------------------------
  projectSearch: {
    method: 'post',
    url: '/doctor/project/search'
  },
  // 添加项目接口 -----------------------------------------------------------
  projectAdd: {
    method: 'post',
    url: '/doctor/project/add'
  },
  // 指派用户接口
  projectModify: {
    method: 'post',
    url: '/doctor/project/modify'
  },
  // 导出项目接口
  projectOutput: {
    method: 'post',
    url: '/doctor/project/out'
  },
  // 查看接受用户接口
  projectLookUser: {
    method: 'post',
    url: '/doctor/project/lookUser'
  },
  projectLookUserGuan: {
    method: 'post',
    url: '/doctor/project/lookUserGuan'
  },


  // 完成接口
  projectFinish: {
    method: 'post',
    url: '/doctor/project/finish'
  },

  workCheck: {
    method: 'post',
    url: '/doctor/project/workCheck'
  },

  projectAllFinished: {
    method: 'post',
    url: '/doctor/project/finishAll'
  },


  projectWaitProject: {
    method: 'post',
    url: '/doctor/project/waitProject'
  }
}
