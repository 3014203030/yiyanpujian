import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/HomePage'),
        meta: {
          title: '医研普健欢迎您'
        }
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('@/views/home/SearchResult'),
        meta: {
          title: '医研普健——搜索结果'
        }
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('@/views/home/ArticlePage'),
        meta: {
          title: '医研普健——文章详情'
        }
      },
      {
        path: 'live',
        name: 'Live',
        component: () => import('@/views/home/LivePage'),
        meta: {
          title: '医研普健——医疗直播'
        }
      }
    ]
  },
  {
    path: '/newLogin',
    name: 'Login',
    component: () => import('@/views/SignIn'),
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/loginManager',
    name: 'LoginManager',
    component: () => import('@/views/SignInManager'),
    meta: {
      title: '经费管理员登录'
    }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('@/views/v3/newLogin/SignUp'),
    meta: {
      title: '用户注册'
    }
  },
  {
    path: '/mine',
    component: () => import('@/views/mine/MineMainPage'),
    children: [
      {
        path: 'applyForBusiness',
        name: 'ApplyForBusiness',
        component: () => import('@/views/v3/ApplyForBusiness'),
        meta: {
          title: '业务申请'
        }
      },
      {
        path: '',
        name: 'Mine',
        redirect: 'myInfo'
      },
      {
        path: 'myInfo',
        name: 'MyInfo',
        component: () => import('@/views/mine/personal/PersonalInfo'),
        meta: {
          title: '账户信息'
        }
      },
      {
        path: 'myInfoModify',
        name: 'MyInfoModify',
        component: () => import('@/views/mine/personal/PersonalModify'),
        meta: {
          title: '用户信息修改'
        }
      },
      {
        path: 'myArticle',
        name: 'MyArticle',
        component: () => import('@/views/mine/article/MyArticles'),
        meta: {
          title: '我的文章'
        }
      },
      {
        path: 'addArticle',
        name: 'AddArticle',
        component: () => import('@/views/mine/article/AddArticle'),
        meta: {
          title: '上传文章'
        }
      },
      {
        path: 'myAttended',
        name: 'MyAttended',
        component: () => import('@/views/mine/project/MyAttended'),
        meta: {
          title: '我参与的项目'
        }
      },
      {
        path: 'myInitiated',
        name: 'MyInitiated',
        component: () => import('@/views/mine/project/MyInitiated'),
        meta: {
          title: '我发起的项目'
        }
      },
      {
        path: 'myManaged',
        name: 'MyManaged',
        component: () => import('@/views/mine/project/MyManaged'),
        meta: {
          title: '我管理的项目'
        }
      },
      {
        path: 'addProject',
        name: 'AddProject',
        component: () => import('@/views/mine/project/AddProject'),
        meta: {
          title: '添加项目'
        }
      },
      {
        path: 'myTask',
        name: 'MyTask',
        component: () => import('@/views/mine/task/MyTask'),
        meta: {
          title: '我的任务'
        }
      },
      {
        path: 'addTask',
        name: 'AddTask',
        component: () => import('@/views/mine/task/AddTask'),
        meta: {
          title: '添加任务'
        }
      },
      {
        path: 'projectInfo',
        name: 'ProjectInfo',
        component: () => import('@/views/other/Project'),
        meta: {
          title: '项目详情'
        }
      },
      {
        path: 'articleInfo',
        name: 'ArticleInfo',
        component: () => import('@/views/home/ArticlePage'),
        meta: {
          title: '文章详情'
        }
      },
      {
        path: 'taskInfo',
        name: 'TaskInfo',
        component: () => import('@/views/mine/task/TaskInfo'),
        meta: {
          title: '项目详情'
        }
      }
    ]
  },
  {
    path: '/fundingManage',
    component: () => import('@/views/group/GroupSalaryManage'),
    children: [
      {
        path: '',
        name: 'FundingManage',
        redirect: 'overview'
      },
      {
        path: 'overview',
        name: 'FundingManageOverview',
        component: () => import('@/views/group/GroupSalaryManageOverview'),
        meta: {
          title: '团队资金管理'
        }
      },
      {
        path: 'fundingManageRecord',
        name: 'FundingManageRecord',
        component: () => import('@/views/group/GroupSalaryManageRecord'),
        meta: {
          title: '账单明细'
        }
      },
    ]
  },
  {
    path: '/account',
    component: () => import('@/views/account/MyAccount'),
    children: [
      {
        path: '',
        name: 'Account',
        redirect: 'overview'
      },
      {
        path: 'overview',
        name: 'AccountOverview',
        component: () => import('@/views/account/AccountOverview'),
        meta: {
          title: '我的账户'
        }
      },
      {
        path: 'accountRecord',
        name: 'AccountRecord',
        component: () => import('@/views/account/AccountRecord'),
        meta: {
          title: '账单明细'
        }
      },
      {
        path: 'more',
        name: 'More',
        component: () => import('@/views/account/AccountOverview'),
        meta: {
          title: '更多'
        }
      }
    ]
  },
  {
    path: '/funding',
    component: () => import('@/views/funding/MyFunding'),
    children: [
      {
        path: '',
        name: 'Funding',
        redirect: 'overview'
      },
      {
        path: 'overview',
        name: 'FundingOverview',
        component: () => import('@/views/funding/FundingOverview'),
        meta: {
          title: '我的资金'
        }
      },
      {
        path: 'fundingRecord',
        name: 'FundingRecord',
        component: () => import('@/views/funding/FundingRecord'),
        meta: {
          title: '账单明细'
        }
      }
    ]
  },
  {
    path: '/webManager',
    name: 'WebManager',
    component: () => import('@/views/web/WebManager'),
    meta: {
      title: '网站管理'
    }
  },
  {
    path: '/expenseManager',
    name: 'ExpenseManager',
    component: () => import('@/views/web/ExpenseManager'),
    meta: {
      title: '经费管理'
    }
  },
  {
    path: '/toAffair',
    name: 'ToAffair',
    component: () => import('@/views/v3/check/ToAffair')
  },
  {
    path: '/newTips',
    name: 'News',
    component: () => import('@/views/v3/NewTips'),
    meta: {
      title: '站内信'
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
