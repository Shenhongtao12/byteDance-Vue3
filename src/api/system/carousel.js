import request from '@/utils/request'

// 查询carousel列表
export function listCarousel(query) {
  return request({
    url: '/system/carousel/list',
    method: 'get',
    params: query
  })
}

// 查询carousel详细
export function getCarousel(id) {
  return request({
    url: '/system/carousel/' + id,
    method: 'get'
  })
}

// 新增carousel
export function addCarousel(data) {
  return request({
    url: '/system/carousel',
    method: 'post',
    data: data
  })
}

// 修改carousel
export function updateCarousel(data) {
  return request({
    url: '/system/carousel',
    method: 'put',
    data: data
  })
}

// 删除carousel
export function delCarousel(id) {
  return request({
    url: '/system/carousel/' + id,
    method: 'delete'
  })
}
