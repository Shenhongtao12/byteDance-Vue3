import request from '@/utils/request'

// 查询foundation列表
export function listFoundation(query) {
  return request({
    url: '/system/foundation/list',
    method: 'get',
    params: query
  })
}

// 查询foundation详细
export function getFoundation(id) {
  return request({
    url: '/system/foundation/' + id,
    method: 'get'
  })
}

// 新增foundation
export function addFoundation(data) {
  return request({
    url: '/system/foundation',
    method: 'post',
    data: data
  })
}

export function batchAdd(data) {
  return request({
    url: '/system/foundation/batchAdd',
    method: 'post',
    data: data
  })
}

// 修改foundation
export function updateFoundation(data) {
  return request({
    url: '/system/foundation',
    method: 'put',
    data: data
  })
}

// 删除foundation
export function delFoundation(id) {
  return request({
    url: '/system/foundation/' + id,
    method: 'delete'
  })
}
