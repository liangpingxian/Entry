<template>
  <div class=".container">
    <div class="menu-container">
      <!--菜单顶部图标-->
      <div class="menu-top-container"><img class="logo-container" src="@assets/logo.png"/></div>
      <!--左侧菜单-->
      <el-menu class="menu-bottom-container" default-active="1-1" >
        <template v-for="(item,itemIndex) in menuList" >
          <el-submenu :index="itemIndex" :key="itemIndex">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>第{{item.name}}季</span>
            </template>
            <el-menu-item-group v-for="(node,nodeIndex) in item.nodes" :key="node.$index">
              <router-link :to="{path:getRouterPath(itemIndex,nodeIndex),query:{id:Math.random()*100000000000}}">
                <el-menu-item :index="itemIndex+'-'+nodeIndex">
                  <i class="el-icon-document"></i>
                  <span>子项{{itemIndex}}-{{nodeIndex}}</span>
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="main-container">
      <!--顶部区域-->
      <div class="main-top-container">
        <div class="div-right">
          <el-input suffix-icon="el-icon-search" placeholder="请输入关键字" class="search-style"></el-input>
          <img src="@assets/logo.png" class="userlogo-style"/>
          <el-dropdown>
            <span class="userinfo-style" trigger="click">
                  徐大大<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

      </div>
      <!--主区域-->
      <div class="main-bottom-container">
        <div class="router-view-container">
          <router-view class=""></router-view>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
// import {requestMethods} from '@api/_request'
// import errPageVue from '@/page/errPage/errPage.vue';
// import { request } from '@/api/_request';

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

<style lang="scss">

  .search-style {
    $height:30px;
    height: $height;
    .el-input__inner {
      height: 100%;
    }
    .el-input__icon {
      line-height: 100%;
    }
  }

</style>

<style lang="scss" scoped>

  $menuWith:300px;
  $navHeight:70px;

  .container {
    overflow: hidden;
    /*position: relative;*/
    height: 100%;
  }

 .menu-container {
    top: 0px;
    margin-top: 0px;
    background-color: lavenderblush;
    position: fixed;
    width: 300px !important;
    z-index: 99999;
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
      overflow: auto;
      text-align: left;
      height: calc(100vh - #{$navHeight});
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
    height: auto;
    overflow: hidden;
    min-width: 500px;
    .main-top-container {
      position: relative;
      height: $navHeight;
      width: 100%;
      background-color: white;
      z-index: 11;
      box-shadow: 0px 0px 5px #888888;/*四边出现阴影，效果发光*/
      .div-right {
        float: right;
        height: 100%;
        margin: 0 auto 0 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content:center;
        align-items:center;
        .search-style {
          width: 300px;
          margin: auto 20px;
          float: left;
          position: relative;

        }
        .userlogo-style {
          margin-left: auto;
          max-width: 50%;
          max-height: 50%;
          width: auto;
          height: auto;
        }
        .userinfo-style {
          color: blue;
          margin: 0 20px 0 5px;
        }
      }
    }
    .main-bottom-container {
      overflow: hidden;
      background-color: #f1f1f1;
      height: calc(100vh - #{$navHeight});
      position: relative;
      top: 0;
      .router-view-container {
        height: 100%;
        overflow: auto;
      }

    }
  }

</style>
