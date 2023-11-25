import request from '@/utils/request'

// 查询InnovationPlatform列表
export function listPlatform(query) {
  return request({
    url: '/system/platform/list',
    method: 'get',
    params: query
  })
}

// 查询InnovationPlatform详细
export function getPlatform(id) {
  return request({
    url: '/system/platform/' + id,
    method: 'get'
  })
}

// 新增InnovationPlatform
export function addPlatform(data) {
  return request({
    url: '/system/platform',
    method: 'post',
    data: data
  })
}

// 修改InnovationPlatform
export function updatePlatform(data) {
  return request({
    url: '/system/platform',
    method: 'put',
    data: data
  })
}

// 删除InnovationPlatform
export function delPlatform(id) {
  return request({
    url: '/system/platform/' + id,
    method: 'delete'
  })
}
