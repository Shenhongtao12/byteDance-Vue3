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
                        path: '/lianglianronghe',
                        name: 'lianglianronghe',
                        component: () => import('@/views/zhibiao/lianglianronghe.vue'),
                        meta: { title: '两链融合' },
                    },
                    {
                        path: '/qiyepeiyu',
                        name: 'qiyepeiyu',
                        component: () => import('@/views/zhibiao/qiyepeiyu.vue'),
                        meta: { title: '企业培育' },
                    },
                    {
                        path: '/kejirencai',
                        name: 'kejirencai',
                        component: () => import('@/views/zhibiao/kejirencai.vue'),
                        meta: { title: '科技人才' },
                    },
                    {
                        path: '/kejizhengce',
                        name: 'kejizhengce',
                        component: () => import('@/views/zhibiao/kejizhengce.vue'),
                        meta: { title: '科技政策' },
                    },
                    {
                        path: '/chuangxinpingtai',
                        name: 'chuangxinpingtai',
                        component: () => import('@/views/zhibiao/chuangxinpingtai.vue'),
                        meta: { title: '创新平台' },
                    },
                    {
                        path: '/rdjingweizhichu',
                        name: 'rdjingweizhichu',
                        component: () => import('@/views/zhibiao/rdjingweizhichu.vue'),
                        meta: { title: 'R&D经费支出' },
                    },
                    {
                        path: '/jishujiaoyi',
                        name: 'jishujiaoyi',
                        component: () => import('@/views/zhibiao/jishujiaoyi.vue'),
                        meta: { title: '技术交易' },
                    },
                    {
                        path: '/chengguozhuanhua',
                        name: 'chengguozhuanhua',
                        component: () => import('@/views/zhibiao/chengguozhuanhua.vue'),
                        meta: { title: '技术交易' },
                    },
                    {
                        path: '/test',
                        name: 'test',
                        component: () => import('@/views/Home/map/index.vue'),
                        meta: { title: '地图' },
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
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 在每次路由跳转之前触发
    // window.scrollTo(0, 0); // 将滚动条回到顶部
    next(); // 继续导航
  });

export default router

