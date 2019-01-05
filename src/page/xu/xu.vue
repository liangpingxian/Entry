<template>
  <div>
    <div style="float: left;background-color: aquamarine;position: fixed;width: 300px;height: 100%;">
      <div style="height: 70px;text-align: center"><h1>left1</h1></div>
      <el-menu style=" background-color: rgba(0,0,0,0) " default-active="1-1" >
        <template v-for="(item,itemIndex) in menuList" >
          <el-submenu :index="itemIndex" :key="itemIndex">
            <template slot="title">第{{item.name}}季</template>
            <el-menu-item-group v-for="(node,nodeIndex) in item.nodes" :key="node.$index">
              <router-link to="/login1">
                <el-menu-item :index="itemIndex+'-'+nodeIndex">子项{{itemIndex}}-{{nodeIndex}}</el-menu-item>
              </router-link>
            </el-menu-item-group>

          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div style="background-color: #007aff;margin-left: 300px">
      <div >right1</div>
      <router-view >right2</router-view>
    </div>

    <div style="float: bottom">333333333333333333333333</div>

    <!--<div> <h1 class="top">悬浮1</h1></div>-->
    <!--<div> <h1 class="bottom">悬浮2</h1></div>-->
    <p v-for="item in menuList" :key="item">{{item.name.toString()+" 包含子项"+item.nodes.length}}</p>

    <!--<el-container style="height: 1000px;">-->
      <!--<el-container>-->
        <!--<el-aside>-->
          <!--<el-header>-->
            <!--<p>dsafasda</p>-->

            <!--<el-menu style="padding-bottom: 0px">-->
              <!--<template v-for="item in menuList" >-->
                <!--<el-submenu index="item.$index" :key="item.$index">-->
                  <!--<template slot="title">{{item.name}}</template>-->
                  <!--<el-menu-item-group v-for="node in item.nodes" :key="node.$index">-->
                    <!--<el-menu-item>{{node.name}}</el-menu-item>-->
                  <!--</el-menu-item-group>-->

                <!--</el-submenu>-->
              <!--</template>-->
            <!--</el-menu>-->

          <!--</el-header>-->

        <!--</el-aside>-->

        <!--<el-main>-->
          <!--<el-menu style="padding-bottom: 0px">-->
            <!--<template v-for="item in menuList" >-->
              <!--<h1 :key="item.$index">{{item.name}}adsfsdafasdfasdfdsfsdafasdfd\nadfadsfasdfa\n<br/>sdafsdfasdfsdfaf<br/>sdafsdfasdfsdfaf</h1>-->
              <!--<template v-for="node in item.nodes" >-->
                <!--<h1 :key="node.$index">{{node.name}}adsfsdafasdfasdfdsfsdafasdfd\nadfadsfasdfa\n<br/>sdafsdfasdfsdfaf<br/>sdafsdfasdfsdfaf</h1>-->
                <!--<h1 :key="node.$index">{{node.name}}adsfsdafasdfasdfdsfsdafasdfd\nadfadsfasdfa\n<br/>sdafsdfasdfsdfaf<br/>sdafsdfasdfsdfaf</h1>-->
                <!--<h1 :key="node.$index">{{node.name}}adsfsdafasdfasdfdsfsdafasdfd\nadfadsfasdfa\n<br/>sdafsdfasdfsdfaf<br/>sdafsdfasdfsdfaf</h1>-->
              <!--</template>-->
            <!--</template>-->

          <!--</el-menu>-->

        <!--</el-main>-->

      <!--</el-container>-->

    <!--</el-container>-->

    <!--<el-container style="height: 100%; border: 1px solid #eee">-->
      <!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
        <!--<el-menu :default-openeds="['1', '3']">-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
              <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
              <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="2-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="3">-->
            <!--<template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <!--<el-menu-item index="3-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="3-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
              <!--<el-menu-item index="3-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="3-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
        <!--</el-menu>-->
      <!--</el-aside>-->

      <!--<el-container>-->
        <!--<el-header style="text-align: right; font-size: 12px">-->
          <!--<el-dropdown>-->
            <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
            <!--<el-dropdown-menu slot="dropdown">-->
              <!--<el-dropdown-item>查看</el-dropdown-item>-->
              <!--<el-dropdown-item>新增</el-dropdown-item>-->
              <!--<el-dropdown-item>删除</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          <!--</el-dropdown>-->
          <!--<span>王小虎</span>-->
        <!--</el-header>-->

        <!--<el-main>-->
          <!--<el-table :data="tableData">-->
            <!--<el-table-column prop="date" label="日期" width="140">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="name" label="姓名" width="120">-->
            <!--</el-table-column>-->
            <!--<el-table-column prop="address" label="地址">-->
            <!--</el-table-column>-->
          <!--</el-table>-->
        <!--</el-main>-->
        <!--<el-footer>Footer</el-footer>-->
      <!--</el-container>-->

    <!--</el-container>-->

  </div>
</template>

<script>
// import {requestMethods} from '@/api/_request'

export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      menuList: undefined
    }
    return {
      tableData: Array(5).fill(item),
      menuList: undefined
    }
  },
  created () {
    this.requestMenuList()
  },
  methods: {
    createMenuItem: function (text) {
      return {'name': text, 'nodes': []}
    },
    requestMenuList: function () {
      // debugger
      if (this.menuList !== undefined) { return }
      let menuArray = []
      for (let i = 0; i < Math.random() * 10 % 5; ++i) {
        let item = this.createMenuItem(i)

        for (let j = 0; j < Math.random() * 10 % 10; ++j) {
          let nodeItem = this.createMenuItem(j)
          item.nodes.push(nodeItem)
        }

        menuArray.push(item)
      }
      this.menuList = menuArray
    }

  }
}
</script>

<style scoped>
  li strong  {
    font-style: italic;
    font-weight: normal;
    color: aquamarine;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  /** {*/
    /*padding:0 auto;*/
    /*margin:0 auto;*/
  /*}*/
  .top{
    position:fixed;
    top:0px;
    background-color: #B3C0D1;
    z-index:100;
  }
  .bottom{
    position:fixed;
    bottom: 0px;
    background-color: #B3C0D1;
    z-index:100;
  }
  .el-aside {
    color: #333;
    padding: 0px;
    margin: 0px;
    height: 100%;
  }
  .menu {
    width: 300px;
    height: 100%;
  }

</style>
