import request from '@/utils/request'

// 查询chain列表
export function listChain(query) {
  return request({
    url: '/system/chain/list',
    method: 'get',
    params: query
  })
}

// 查询chain详细
export function getChain(id) {
  return request({
    url: '/system/chain/' + id,
    method: 'get'
  })
}

// 新增chain
export function addChain(data) {
  return request({
    url: '/system/chain',
    method: 'post',
    data: data
  })
}

// 修改chain
export function updateChain(data) {
  return request({
    url: '/system/chain',
    method: 'put',
    data: data
  })
}

// 删除chain
export function delChain(id) {
  return request({
    url: '/system/chain/' + id,
    method: 'delete'
  })
}
