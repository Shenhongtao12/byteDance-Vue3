import request from '@/utils/request'

// 查询olicy列表
export function listOlicy(query) {
  return request({
    url: '/system/olicy/list',
    method: 'get',
    params: query
  })
}

// 查询olicy详细
export function getOlicy(id) {
  return request({
    url: '/system/olicy/' + id,
    method: 'get'
  })
}

// 新增olicy
export function addOlicy(data) {
  return request({
    url: '/system/olicy',
    method: 'post',
    data: data
  })
}

// 修改olicy
export function updateOlicy(data) {
  return request({
    url: '/system/olicy',
    method: 'put',
    data: data
  })
}

// 删除olicy
export function delOlicy(id) {
  return request({
    url: '/system/olicy/' + id,
    method: 'delete'
  })
}
