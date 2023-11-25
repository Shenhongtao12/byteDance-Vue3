import request from '@/utils/request'

// 查询requirement列表
export function listRequirement(query) {
  return request({
    url: '/system/requirement/list',
    method: 'get',
    params: query
  })
}

// 查询requirement详细
export function getRequirement(id) {
  return request({
    url: '/system/requirement/' + id,
    method: 'get'
  })
}

// 新增requirement
export function addRequirement(data) {
  return request({
    url: '/system/requirement',
    method: 'post',
    data: data
  })
}

export function batchAdd(data) {
  return request({
    url: '/system/requirement/batchAdd',
    method: 'post',
    data: data
  })
}

// 修改requirement
export function updateRequirement(data) {
  return request({
    url: '/system/requirement',
    method: 'put',
    data: data
  })
}

// 删除requirement
export function delRequirement(id) {
  return request({
    url: '/system/requirement/' + id,
    method: 'delete'
  })
}
