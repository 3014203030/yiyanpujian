export const MENU_MAPPING = [
  {
    name: '我的信息',
    icon: 'el-icon-user',
    roles: ['user', 'manager', 'company', 'business'],
    children: [
      {
        name: '基本资料',
        path: '/mine/myInfo',
        roles: ['user', 'manager', 'company', 'business']
      },
      {
        name: '修改信息',
        path: '/mine/myInfoModify',
        roles: ['user', 'manager', 'company', 'business']
      }
    ]
  },
  {
    name: '我的文章',
    icon: 'el-icon-collection',
    roles: ['user'],
    children: [
      {
        name: '原创文章',
        path: '/mine/myArticle',
        roles: ['user']
      },
      {
        name: '上传文章',
        path: '/mine/addArticle',
        roles: ['user']
      }
    ]
  },
  {
    name: '我的项目',
    icon: 'el-icon-coin',
    roles: ['user', 'manager', 'company', 'business'],
    children: [
      {
        name: '业务申请',
        path: '/mine/applyForBusiness',
        roles: ['business']
      },
      {
        name: '已发起项目',
        path: '/mine/myInitiated',
        roles: ['company', 'business']
      },
      {
        name: '新增项目',
        path: '/mine/addProject',
        roles: ['company', 'business']
      },
      {
        name: '管理中项目',
        path: '/mine/myManaged',
        roles: ['manager', 'business']
      },
      {
        name: '参与中项目',
        path: '/mine/myAttended',
        roles: ['user']
      }
    ]
  },
  {
    name: '任务管理',
    icon: 'el-icon-document',
    roles: [/*'manager',*/ 'user'],
    // roles: [],
    children: [
      {
        name: '进行中任务',
        path: '/mine/myTask',
        roles: ['user']
      },
      {
        name: '添加任务',
        path: '/mine/addTask',
        roles: [/*'manager'*/]
      },
      {
        name: '任务详情',
        path: '/mine/taskInfo',
        roles: ['manager']
      }
    ]
  },
  {
    name: '健康半径',
    icon: 'el-icon-bangzhu',
    roles: ['user'],
    children: [
      {
        name: '敬请期待',
        path: '',
        roles: ['user']
      }
    ]
  },
  {
    name: '培训直播',
    icon: 'el-icon-video-camera',
    roles: ['user'],
    children: [
      {
        name: '敬请期待',
        path: '',
        roles: ['user']
      }
    ]
  },
  {
    name: '培训直播',
    icon: 'el-icon-video-camera',
    roles: ['user'],
    children: [
      {
        name: '敬请期待',
        path: '',
        roles: ['user']
      }
    ]
  },
]
