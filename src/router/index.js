import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        component: () => import('@/views/error/404.vue'),
        hidden: true
    },
    {
        path: '/',
        name: 'home',
        redirect: '/home',
        component: () => import('@/views/layout/index.vue'),
        meta: { title: '榆林专区' },
        children: [
            {
                path: '/home',
                component: () => import('@/views/Home/Home.vue'),
                name: 'home',
                meta: { title: '榆林专区' }
            },
            {
                path: '/content',
                name: 'content',
                redirect: '/xinwen',
                component: () => import('@/views/layout/content.vue'),
                children: [
                    {
                        path: '/xinwen',
                        name: 'xinwen',
                        component: () => import('@/views/xinwen/xinwen-list.vue'),
                        meta: { title: '新闻资讯' },
                    },
                    {
                        path: '/xinwenxiangqing/:id(\\d+)',
                        name: 'xinwenDetail',
                        component: () => import('@/views/xinwen/xinwen-info.vue'),
                        meta: { title: '新闻详情' }
                    },
                    {
                        path: '/zhengce',
                        name: 'zhengce',
                        component: () => import('@/views/zhengce/zhengce-list.vue'),
                        meta: { title: '政策举措' },
                    },
                    {
                        path: '/zhengcexiangqing/:id(\\d+)',
                        name: 'zhengcexiangqing',
                        component: () => import('@/views/zhengce/zhengce-info.vue'),
                        meta: { title: '政策详情' },
                    },
                    {
                        path: '/qiyepeiyu',
                        name: 'qiyepeiyu',
                        component: () => import('@/views/zhibiao/qiyepeiyu.vue'),
                        meta: { title: '企业培育' },
                    },
                ]
            },
            {
                path: '/qinchuangyuan3665',
                component: () => import('@/views/qinchuangyuan3665/index.vue'),
                name: 'qinchuangyuan3665'
            },
        ]
    },

    // {
    //   path: '/jobs/:id',
    //   name: 'jobDetail',
    //   component: () => import('@/views/JobDetail/JobDetail.vue')
    // },
    // {
    //     path: '/staff-stories/:id',
    //     name: 'staff-stories',
    //     component: () => import('@/views/StaffStories/StaffStories.vue')
    // },
    // {
    //     path: '/products',
    //     name: 'products',
    //     component: () => import('@/views/Products/Products.vue')
    // },
    // {
    //     path: '/user',
    //     name: 'user',
    //     component: () => import('@/views/User/User.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

