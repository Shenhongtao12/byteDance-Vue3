import request from '@/utils/request'

// 查询talents列表
export function listTalents(query) {
  return request({
    url: '/system/wuku/talents/list',
    method: 'get',
    params: query
  })
}

// 查询talents详细
export function getTalents(id) {
  return request({
    url: '/system/wuku/talents/' + id,
    method: 'get'
  })
}

// 新增talents
export function addTalents(data) {
  return request({
    url: '/system/wuku/talents',
    method: 'post',
    data: data
  })
}


export function batchAdd(data) {
  return request({
    url: '/system/wuku/talents/batchAdd',
    method: 'post',
    data: data
  })
}

// 修改talents
export function updateTalents(data) {
  return request({
    url: '/system/wuku/talents',
    method: 'put',
    data: data
  })
}

// 删除talents
export function delTalents(id) {
  return request({
    url: '/system/wuku/talents/' + id,
    method: 'delete'
  })
}
