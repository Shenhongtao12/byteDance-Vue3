import request from '@/utils/request'

// 查询RdExpenditure列表
export function listExpenditure(query) {
  return request({
    url: '/system/expenditure/list',
    method: 'get',
    params: query
  })
}

// 查询RdExpenditure详细
export function getExpenditure(id) {
  return request({
    url: '/system/expenditure/' + id,
    method: 'get'
  })
}

// 新增RdExpenditure
export function addExpenditure(data) {
  return request({
    url: '/system/expenditure',
    method: 'post',
    data: data
  })
}

// 修改RdExpenditure
export function updateExpenditure(data) {
  return request({
    url: '/system/expenditure',
    method: 'put',
    data: data
  })
}

// 删除RdExpenditure
export function delExpenditure(id) {
  return request({
    url: '/system/expenditure/' + id,
    method: 'delete'
  })
}
