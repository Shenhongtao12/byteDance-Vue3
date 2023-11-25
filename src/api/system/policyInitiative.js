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

// 新增policyInitiative
export function addPolicyInitiative(data) {
  return request({
    url: '/system/policyInitiative',
    method: 'post',
    data: data
  })
}

// 修改policyInitiative
export function updatePolicyInitiative(data) {
  return request({
    url: '/system/policyInitiative',
    method: 'put',
    data: data
  })
}

// 删除policyInitiative
export function delPolicyInitiative(id) {
  return request({
    url: '/system/policyInitiative/' + id,
    method: 'delete'
  })
}
