import request from '@/utils/request'

// 查询RdExpenditure列表
export function listExpenditure(query) {
  return request({
    url: '/system/expenditure/list',
    method: 'get',
    params: query
  })
}
