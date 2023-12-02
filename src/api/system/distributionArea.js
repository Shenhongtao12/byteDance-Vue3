import request from '@/utils/request'

// 查询distributionArea列表
export function listDistributionArea(query) {
  return request({
    url: '/system/distributionArea/list',
    method: 'get',
    params: query
  })
}

// 查询distributionArea详细
export function getDistributionArea(id) {
  return request({
    url: '/system/distributionArea/' + id,
    method: 'get'
  })
}

// 新增distributionArea
export function addDistributionArea(data) {
  return request({
    url: '/system/distributionArea',
    method: 'post',
    data: data
  })
}

// 修改distributionArea
export function updateDistributionArea(data) {
  return request({
    url: '/system/distributionArea',
    method: 'put',
    data: data
  })
}

// 删除distributionArea
export function delDistributionArea(id) {
  return request({
    url: '/system/distributionArea/' + id,
    method: 'delete'
  })
}
