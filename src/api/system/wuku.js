import request from '@/utils/request'

// 查询achievement列表
export function listAchievement(query) {
    return request({
        url: '/system/achievement/list',
        method: 'get',
        params: query
    })
}

// 查询foundation列表
export function listFoundation(query) {
    return request({
        url: '/system/foundation/list',
        method: 'get',
        params: query
    })
}

// 查询project列表
export function listProject(query) {
    return request({
        url: '/system/project/list',
        method: 'get',
        params: query
    })
}

export function listRequirement(query) {
    return request({
        url: '/system/requirement/list',
        method: 'get',
        params: query
    })
}

export function listTalents(query) {
    return request({
        url: '/system/wuku/talents/list',
        method: 'get',
        params: query
    })
}