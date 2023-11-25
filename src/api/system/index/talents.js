import request from '@/utils/request'

// 查询TechnologyTalents列表
export function listTalents(query) {
  return request({
    url: '/system/talents/list',
    method: 'get',
    params: query
  })
}

// 查询TechnologyTalents详细
export function getTalents(id) {
  return request({
    url: '/system/talents/' + id,
    method: 'get'
  })
}

// 新增TechnologyTalents
export function addTalents(data) {
  return request({
    url: '/system/talents',
    method: 'post',
    data: data
  })
}

// 修改TechnologyTalents
export function updateTalents(data) {
  return request({
    url: '/system/talents',
    method: 'put',
    data: data
  })
}

// 删除TechnologyTalents
export function delTalents(id) {
  return request({
    url: '/system/talents/' + id,
    method: 'delete'
  })
}
