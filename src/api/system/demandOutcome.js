import request from '@/utils/request'

// 查询demandOutcome列表
export function listDemandOutcome(query) {
  return request({
    url: '/system/demandOutcome/list',
    method: 'get',
    params: query
  })
}

// 查询demandOutcome详细
export function getDemandOutcome(id) {
  return request({
    url: '/system/demandOutcome/' + id,
    method: 'get'
  })
}

// 新增demandOutcome
export function addDemandOutcome(data) {
  return request({
    url: '/system/demandOutcome',
    method: 'post',
    data: data
  })
}

// 修改demandOutcome
export function updateDemandOutcome(data) {
  return request({
    url: '/system/demandOutcome',
    method: 'put',
    data: data
  })
}

// 删除demandOutcome
export function delDemandOutcome(id) {
  return request({
    url: '/system/demandOutcome/' + id,
    method: 'delete'
  })
}


// 查询followUp列表
export function listFollowUp(query) {
  return request({
    url: '/system/followUp/list',
    method: 'get',
    params: query
  })
}


// 新增followUp
export function addFollowUp(data) {
  return request({
    url: '/system/followUp',
    method: 'post',
    data: data
  })
}