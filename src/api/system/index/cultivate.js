import request from '@/utils/request'

// 查询EnterpriseCultivate列表
export function listCultivate(query) {
  return request({
    url: '/system/cultivate/list',
    method: 'get',
    params: query
  })
}

// 查询EnterpriseCultivate详细
export function getCultivate(id) {
  return request({
    url: '/system/cultivate/' + id,
    method: 'get'
  })
}

// 新增EnterpriseCultivate
export function addCultivate(data) {
  return request({
    url: '/system/cultivate',
    method: 'post',
    data: data
  })
}

// 修改EnterpriseCultivate
export function updateCultivate(data) {
  return request({
    url: '/system/cultivate',
    method: 'put',
    data: data
  })
}

// 删除EnterpriseCultivate
export function delCultivate(id) {
  return request({
    url: '/system/cultivate/' + id,
    method: 'delete'
  })
}
