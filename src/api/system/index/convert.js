import request from '@/utils/request'

// 查询convert列表
export function listConvert(query) {
  return request({
    url: '/system/convert/list',
    method: 'get',
    params: query
  })
}

export function group(type) {
  return request({
    url: '/system/convert/group' + "?type=" + type,
    method: 'get',
  })
}
