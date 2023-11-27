import request from '@/utils/request'

// 查询selectConfig列表
export function listSelectConfig(query) {
  return request({
    url: '/system/selectConfig/list',
    method: 'get',
    params: query
  })
}