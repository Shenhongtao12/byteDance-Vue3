import request from '@/utils/request'

// 查询chain列表
export function listChain(query) {
  return request({
    url: '/system/chain/list',
    method: 'get',
    params: query
  })
}

// 查询chain列表
export function statistics() {
  return request({
    url: '/system/chain/statistics',
    method: 'get'
  })
}
