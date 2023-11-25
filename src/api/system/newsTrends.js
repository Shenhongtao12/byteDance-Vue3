import request from '../../utils/request'

// 查询newsTrends列表
export function listNewsTrends(query) {
  return request({
    url: '/system/newsTrends/list',
    method: 'get',
    params: query
  })
}

// 查询newsTrends详细
export function getNewsTrends(id) {
  return request({
    url: '/system/newsTrends/' + id,
    method: 'get'
  })
}