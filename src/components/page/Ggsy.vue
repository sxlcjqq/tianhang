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
    export default {
        name: 'jgst',
        data: function(){
            return {
              data: [{
                label: '一级 1',
                children: [{
                  label: '二级 1-1',
                  children: [{
                    label: '三级 1-1-1'
                  }]
                }]
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
.el-tree-node__content>.el-tree-node__expand-icon{
  background: url(../../../static/img/line.png) no-repeat center;
  background-size:contain;
}
.el-tree-node__content{
  background: url(../../../static/img/line2.png) no-repeat left center;
  background-size:contain;
}
.el-tree-node__expand-icon.expanded{
  transform:none;
}
</style>
