export const FILE_API = {
  // 上传文件接口 ------------------------------------------------------
  fileUpload: {
    method: 'post',
    url: '/doctor/file/addfile'
  },
  // 查询文件接口
  fileSearch: {
    method: 'post',
    url: '/doctor/file/search'
  },
  // 删除文件接口
  fileDelete: {
    method: 'post',
    url: '/doctor/file/delete'
  }
}
