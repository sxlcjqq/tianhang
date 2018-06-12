<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 监管首页</el-breadcrumb-item>
                <el-breadcrumb-item>监管首页</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <p>监管首页</p>
            </div>
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" style="margin-top:20px;"></el-tree>
        </div>

    </div>
</template>

<script>

  import ElTree from 'element-ui/packages/tree'
    export default {
        name: 'jgst',
        components:{
          "el-tree":ElTree
        },
        data: function(){
            return {
              data: [{
                label: '一级 1'
              },{
                label: '一级 1'
              }, {
                label: '一级 2',
                children: [{
                  label: '二级 2-1',
                  children: [{
                    label: '三级 2-1-1'
                  }]
                }, {
                  label: '二级 2-2',
                  children: [{
                    label: '三级 2-2-1'
                  }]
                }]
              }, {
                label: '一级 3',
                children: [{
                  label: '二级 3-1',
                  children: [{
                    label: '三级 3-1-1',
                    children: [{
                      label: '三级 3-1-1'
                    },{
                      label: '三级 3-1-1'
                    }]
                  },{
                    label: '三级 3-1-1'
                  }]
                }, {
                  label: '二级 3-2',
                  children: [{
                    label: '三级 3-2-1'
                  }]
                }]
              }],
              defaultProps: {
                children: 'children',
                label: 'label'
              }
            }
        },
        methods: {
          handleNodeClick(data) {
            console.log(data);
          }
        }
    }
</script>
<style>
.el-tree>.el-tree-node{
  background:none;
}
.el-tree-node{
  background: url(../../../static/img/line1.gif) repeat-y left center;
}
.el-tree-node__expand-icon{
  background: url(../../../static/img/line3.gif) repeat-y left center;
}
.el-tree-node:last-child .el-tree-node__expand-icon{
  background: url(../../../static/img/line2.gif) repeat-y left center;
}
.el-tree-node__expand-icon.expanded{
  transform:none;
}
.el-tree-node__label:before{
  display: inline-block;
  content:'';
  width:18px;
  height: 18px;
  background: url(../../../static/img/packge2.png) no-repeat center;
  background-size: contain;
}
.el-tree-node__expand-icon.expanded+.el-tree-node__label:before{
  background: url(../../../static/img/packge.png) no-repeat center;
  background-size: contain;
}
</style>
