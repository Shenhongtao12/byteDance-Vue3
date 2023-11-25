import request from '@/utils/request'

// 查询convert列表
export function listConvert(query) {
  return request({
    url: '/system/convert/list',
    method: 'get',
    params: query
  })
}

// 查询convert详细
export function getConvert(id) {
  return request({
    url: '/system/convert/' + id,
    method: 'get'
  })
}

// 新增convert
export function addConvert(data) {
  return request({
    url: '/system/convert',
    method: 'post',
    data: data
  })
}

// 修改convert
export function updateConvert(data) {
  return request({
    url: '/system/convert',
    method: 'put',
    data: data
  })
}

// 删除convert
export function delConvert(id) {
  return request({
    url: '/system/convert/' + id,
    method: 'delete'
  })
}
