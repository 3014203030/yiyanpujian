export const USER_API = {
  // 用户注册接口 --------------------------------------------------------------
  register: {
    method: 'post',
    url: '/doctor/user/regis'
  },
  // 用户登录接口 -------------------------------------------------------------------------
  login: {
    method: 'post',
    url: '/doctor/user/login'
  },
  // 邮箱验证码注册接口 -------------------------------------------------
  getCheckCode: {
    method: 'post',
    url: '/doctor/user/getCheckCode'
  },
  // 检查用户名信息 ------------------------------------------------------------
  getCheckUser: {
    method: 'post',
    url: '/doctor/user/getCheckUser'
  },


  // 查询用户信息 -----------------------------------------------------------
  getUser: {
    method: 'post',
    url: '/doctor/user/getUser'
  },
  // 用户信息修改接口 --------------------------------------------------------
  userModify: {
    method: 'post',
    url: '/doctor/user/modify'
  },
  // 查询医达人信息 ------------------------------------------------------------
  getHealthy: {
    method: 'post',
    url: '/doctor/user/getHealthy'
  },

  userSelector: {
    method: 'post',
    url: '/doctor/user/searchList'
  }
}
