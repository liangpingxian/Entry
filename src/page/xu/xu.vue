<template>
  <div>
    <div class="menu-container">

      <div class="menu-top-container"><img class="logo-container" src="@assets/logo.png"/></div>
      <el-menu class="menu-bottom-container" default-active="1-1" >
        <template v-for="(item,itemIndex) in menuList" >
          <el-submenu :index="itemIndex" :key="itemIndex">
            <template slot="title">第{{item.name}}季</template>
            <el-menu-item-group v-for="(node,nodeIndex) in item.nodes" :key="node.$index">
              <router-link :to="{path:getRouterPath(itemIndex,nodeIndex),query:{id:Math.random()*100000000000}}">
                <el-menu-item :index="itemIndex+'-'+nodeIndex">子项{{itemIndex}}-{{nodeIndex}}</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </div>

    <div class="main-container">
      <div class="main-top-container">right1</div>
      <section class="main-bottom-container">
        <router-view></router-view>
      </section>
    </div>

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
    getRouterPath: function (rowIndex, nodeIndex) {
      if (nodeIndex === 0) { return 'detail' } else if (nodeIndex === 1) { return 'login' } else if (nodeIndex === 2) { return '404' } else if (nodeIndex === 3) { return 'errPage' } else return '401'
    },
    requestMenuList: function () {
      // debugger
      if (this.menuList !== undefined) { return }
      let menuArray = []
      for (let i = 0; i < Math.random() * 10 % 5 + 1; ++i) {
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

<style lang="scss" scoped>

  $menuWith:300px;
  $navHeight:70px;

  .menu-container {
    /*float: left;*/
    margin-top: 0px;
    background-color: aquamarine;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 300px !important;
    height: 100%;
    z-index: 100001;
    overflow: hidden;

    .menu-top-container {
      height: $navHeight;
      background-color: beige;
      margin-top: 0px;

      .logo-container {
        width: auto;
        height: auto;
        max-width: 90%;
        max-height: 90%;
      }

    }
    .menu-bottom-container {
      top: 0;
      bottom: 0;
      overflow: scroll;
      height: calc(100vh - 70px);
      background-color: rgba(0,0,0,0);
    }
    ::-webkit-scrollbar {
      /*隐藏滚轮*/
      display: none;
      /*-webkit-margin-before: 0em;*/
      /*-webkit-margin-after: 0em;*/
    }

  }

  .main-container {
    margin-left: $menuWith;
    position: relative;
    min-height: 100%;

    .main-top-container {
      height: $navHeight;
      background-color: aquamarine;
    }
    .main-bottom-container {
      overflow: auto;
      background-color: #f1f1f1;
      /*margin: 0px;*/
      min-height: calc(100vh - 70px);
      max-height: calc(100vh - 70px);
      /*width: calc(100% - 300px);*/
      /*height: calc(100vh - 70px);*/
      .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
      }
      .el-aside {
        color: #333;
        padding: 0px;
        margin: 0px;
        height: 100%;
      }
    }
  }

</style>
