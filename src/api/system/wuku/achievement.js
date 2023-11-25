import request from '@/utils/request'

// 查询achievement列表
export function listAchievement(query) {
  return request({
    url: '/system/achievement/list',
    method: 'get',
    params: query
  })
}

// 查询achievement详细
export function getAchievement(id) {
  return request({
    url: '/system/achievement/' + id,
    method: 'get'
  })
}

// 新增achievement
export function addAchievement(data) {
  return request({
    url: '/system/achievement',
    method: 'post',
    data: data
  })
}

export function batchAdd(data) {
  return request({
    url: '/system/achievement/batchAdd',
    method: 'post',
    data: data
  })
}

// 修改achievement
export function updateAchievement(data) {
  return request({
    url: '/system/achievement',
    method: 'put',
    data: data
  })
}

// 删除achievement
export function delAchievement(id) {
  return request({
    url: '/system/achievement/' + id,
    method: 'delete'
  })
}
