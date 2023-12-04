import request from '@/utils/request'

// 查询InnovationPlatform列表
export function listPlatform(query) {
  return request({
    url: '/system/platform/list',
    method: 'get',
    params: query
  })
}

export function group() {
  return request({
    url: '/system/platform/group',
    method: 'get'
  })
}
