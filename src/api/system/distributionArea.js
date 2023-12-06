import request from '@/utils/request'

// 查询distributionArea列表
export function listDistributionArea(query) {
  return request({
    url: '/system/distributionArea/list',
    method: 'get',
    params: query
  })
}