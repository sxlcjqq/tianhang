<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#e8e8e8"
            text-color="#333333" active-text-color="#ffffff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'jgsy',
                        title: '监管首页'
                    },
                    {
                        icon: 'iconfont iconfont icon-biaoge',
                        index: 'gisdt',
                        title: 'GIS地图'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'qyjg',
                        title: '企业监管'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'cpzs',
                        title: '产品追溯'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'ylzs',
                        title: '原料追溯'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'cply',
                        title: '产品留样'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'cpzh',
                        title: '产品召回'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'cpxh',
                        title: '产品销毁'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'gzjl',
                        title: '工作记录'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'tzgl',
                        title: '通知管理'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'xwgl',
                        title: '新闻管理'
                    },
                    {
                        icon: 'iconfont icon-biaoge',
                        index: 'ywxtrk',
                        title: '业务系统入口'
                    }
                    // ,
                    // {
                    //     icon: 'icon-biaoge',
                    //     index: 'dashboard',
                    //     title: '系统首页'
                    // },
                    // {
                    //     icon: 'el-icon-tickets',
                    //     index: 'table',
                    //     title: '基础表格'
                    // },
                    // {
                    //     icon: 'el-icon-message',
                    //     index: 'tabs',
                    //     title: 'tab选项卡'
                    // },
                    // {
                    //     icon: 'el-icon-date',
                    //     index: '3',
                    //     title: '表单相关',
                    //     subs: [
                    //         {
                    //             index: 'form',
                    //             title: '基本表单'
                    //         },
                    //         {
                    //             index: 'editor',
                    //             title: '富文本编辑器'
                    //         },
                    //         {
                    //             index: 'markdown',
                    //             title: 'markdown编辑器'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '文件上传'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-star-on',
                    //     index: 'charts',
                    //     title: 'schart图表'
                    // },
                    // {
                    //     icon: 'el-icon-rank',
                    //     index: 'drag',
                    //     title: '拖拽列表'
                    // },
                    // {
                    //     icon: 'el-icon-warning',
                    //     index: 'permission',
                    //     title: '权限测试'
                    // },
                    // {
                    //     icon: 'el-icon-error',
                    //     index: '404',
                    //     title: '404页面'
                    // }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        padding-top:5px;
        background-color: #e8e8e8;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
