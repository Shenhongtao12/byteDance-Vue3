import request from '@/utils/request'

// 查询carousel列表
export function listCarousel(query) {
  return request({
    url: '/system/carousel/list',
    method: 'get',
    params: query
  })
}