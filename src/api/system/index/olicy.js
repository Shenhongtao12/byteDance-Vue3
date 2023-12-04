import request from '@/utils/request'

// 查询olicy列表
export function listOlicy(query) {
  return request({
    url: '/system/olicy/list',
    method: 'get',
    params: query
  })
}

export function group() {
  return request({
    url: '/system/olicy/group',
    method: 'get'
  })
}