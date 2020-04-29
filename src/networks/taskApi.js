export const TASK_API = {
  // 检索接口 ------------------------------------------------
  taskSearch: {
    method: 'post',
    url: '/doctor/work/search'
  },
  // 添加项目接口 --------------------------------------------
  taskAdd: {
    method: 'post',
    url: '/doctor/work/add'
  },
  // 用户完成接口
  taskFinished: {
    method: 'post',
    url: '/doctor/work/modify'
  },
  // 导出任务接口
  taskOutput: {
    method: 'post',
    url: '/doctor/work/out'
  }
}
