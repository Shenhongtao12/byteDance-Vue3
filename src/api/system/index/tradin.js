import request from '@/utils/request'

// 查询tradin列表
export function listTradin(query) {
  return request({
    url: '/system/tradin/list',
    method: 'get',
    params: query
  })
}

// 查询tradin详细
export function getTradin(id) {
  return request({
    url: '/system/tradin/' + id,
    method: 'get'
  })
}

// 新增tradin
export function addTradin(data) {
  return request({
    url: '/system/tradin',
    method: 'post',
    data: data
  })
}

// 修改tradin
export function updateTradin(data) {
  return request({
    url: '/system/tradin',
    method: 'put',
    data: data
  })
}

// 删除tradin
export function delTradin(id) {
  return request({
    url: '/system/tradin/' + id,
    method: 'delete'
  })
}
