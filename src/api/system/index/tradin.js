import request from '@/utils/request'

// 查询tradin列表
export function listTradin(query) {
  return request({
    url: '/system/tradin/list',
    method: 'get',
    params: query
  })
}

export function echars() {
  return request({
    url: '/system/tradin/echars',
    method: 'get',
  })
}