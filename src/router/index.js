import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/jgsy',
                    component: resolve => require(['../components/page/Ggsy.vue'], resolve),
                    meta: { title: '监管首页' }
                },
                {
                    path: '/gisdt',
                    component: resolve => require(['../components/page/Gisdt.vue'], resolve),
                    meta: { title: 'GIS地图' }
                },
                {
                    path: '/qyjg',
                    component: resolve => require(['../components/page/Qyjg.vue'], resolve),
                    meta: { title: '企业监管' }
                },
                {
                    path: '/cpzs',
                    component: resolve => require(['../components/page/Cpzs.vue'], resolve),
                    meta: { title: '产品追溯' }
                },
                {
                    path: '/ylzs',
                    component: resolve => require(['../components/page/Ylzs.vue'], resolve),
                    meta: { title: '原料追溯' }
                },
                {
                    path: '/cply',
                    component: resolve => require(['../components/page/Cply.vue'], resolve),
                    meta: { title: '产品留样' }
                },
                {
                    path: '/cpzh',
                    component: resolve => require(['../components/page/Cpzh.vue'], resolve),
                    meta: { title: '产品召回' }
                },
                {
                    path: '/cpxh',
                    component: resolve => require(['../components/page/Cpxh.vue'], resolve),
                    meta: { title: '产品销毁' }
                },
                {
                    path: '/gzjl',
                    component: resolve => require(['../components/page/Gzjl.vue'], resolve),
                    meta: { title: '工作记录' }
                },
                {
                    path: '/tzgl',
                    component: resolve => require(['../components/page/Tzgl.vue'], resolve),
                    meta: { title: '通知管理' }
                },
                {
                    path: '/xwgl',
                    component: resolve => require(['../components/page/Xwgl.vue'], resolve),
                    meta: { title: '新闻管理' }
                },
                {
                    path: '/ywxtrk',
                    component: resolve => require(['../components/page/Ywxtrk.vue'], resolve),
                    meta: { title: '业务系统入口' }
                },
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/example/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/example/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/example/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/example/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/example/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/example/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/example/Upload.vue'], resolve),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/example/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/example/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/example/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['../components/page/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/page/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
