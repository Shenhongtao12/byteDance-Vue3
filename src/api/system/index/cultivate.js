import request from '@/utils/request'

// 查询EnterpriseCultivate列表
export function listCultivate(query) {
  return request({
    url: '/system/cultivate/list',
    method: 'get',
    params: query
  })
}
export function group() {
  return request({
    url: '/system/cultivate/group',
    method: 'get'
  })
}
