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
                path: '/xinwen',
                name: 'xinwen',
                component: () => import('../views/xinwen/xinwen-list.vue'),
                meta: { title: '新闻资讯' }
            },
        ]
    },

    // {
    //   path: '/jobs/:id',
    //   name: 'jobDetail',
    //   component: () => import('../views/JobDetail/JobDetail.vue')
    // },
    // {
    //     path: '/staff-stories/:id',
    //     name: 'staff-stories',
    //     component: () => import('../views/StaffStories/StaffStories.vue')
    // },
    // {
    //     path: '/products',
    //     name: 'products',
    //     component: () => import('../views/Products/Products.vue')
    // },
    // {
    //     path: '/user',
    //     name: 'user',
    //     component: () => import('../views/User/User.vue')
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('../views/Login/Login.vue')
    // },
    // {
    //     path: '/test',
    //     name: 'test',
    //     component: () => import('../views/Test/index.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

