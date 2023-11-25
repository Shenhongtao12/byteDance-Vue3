import request from '@/utils/request'

// 查询project列表
export function listProject(query) {
  return request({
    url: '/system/project/list',
    method: 'get',
    params: query
  })
}

// 查询project详细
export function getProject(id) {
  return request({
    url: '/system/project/' + id,
    method: 'get'
  })
}

// 新增project
export function addProject(data) {
  return request({
    url: '/system/project',
    method: 'post',
    data: data
  })
}

export function batchAdd(data) {
  return request({
    url: '/system/project/batchAdd',
    method: 'post',
    data: data
  })
}

// 修改project
export function updateProject(data) {
  return request({
    url: '/system/project',
    method: 'put',
    data: data
  })
}

// 删除project
export function delProject(id) {
  return request({
    url: '/system/project/' + id,
    method: 'delete'
  })
}
