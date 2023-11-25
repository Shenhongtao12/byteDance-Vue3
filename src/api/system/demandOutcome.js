import request from '@/utils/request'

// 新增demandOutcome
export function addDemandOutcome(data) {
  return request({
    url: '/system/demandOutcome/add',
    method: 'post',
    data: data
  })
}
