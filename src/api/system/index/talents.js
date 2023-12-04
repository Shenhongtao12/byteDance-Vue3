import request from '@/utils/request'

// 查询TechnologyTalents列表
export function listTalents(query) {
  return request({
    url: '/system/talents/list',
    method: 'get',
    params: query
  })
}

export function group() {
  return request({
    url: '/system/talents/group',
    method: 'get'
  })
}