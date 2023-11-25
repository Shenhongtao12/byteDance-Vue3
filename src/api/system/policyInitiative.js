import request from '@/utils/request'

// 查询policyInitiative列表
export function listPolicyInitiative(query) {
  return request({
    url: '/system/policyInitiative/list',
    method: 'get',
    params: query
  })
}

// 查询policyInitiative详细
export function getPolicyInitiative(id) {
  return request({
    url: '/system/policyInitiative/' + id,
    method: 'get'
  })
}
