<template>

  <el-container id="home-container">

    <el-aside width="280px">
      <div class="left-header">
        <img class="logo" src="../assets/logo.png" @click="pushToLogin()">
        <span class="leftTitle">en+接口平台</span>
      </div>
      <left-menu></left-menu>
    </el-aside>

    <el-container>

      <el-header>
        <el-input class="topInput" placeholder="查询接口" clearable=""></el-input>
      </el-header>

      <el-main>
        <div class='main-content'>
          <router-view></router-view>
        </div>
      </el-main>

    </el-container>
  </el-container>

</template>

<script>

  // import Vuex from 'vuex'
  import LeftMenu from '../page/LeftSide/LeftMenu'
  // import ErrorCode from '../page/userPage/ErrorCode'
  import { mapState } from 'vuex'

  export default {
    name: "userHome",
    components: { LeftMenu },

    data() {

      return {


      }
    },

    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      pushToLogin(){
        this.$router.push({path: '/login'})
      },
      pushToSummary(){
        // this.$router.push({path: '/summary'})
      },
      menuClick(mainId,subId){

        debugger
        if (mainId === 'start') {

          debugger
          this.$router.push('/' + subId)
        }
        else {
          this.$router.push({ name: '接口', params: { id: subId } });
        }
      }
    },
    created () {

      // debugger
      // this.$router.push({path: '/summary'})

      // this.$router.path.split('/summary');
      // debugger
      // var paths = this.$router.path.split('/' + summary);
      // var selectId = paths[paths.length - 1];
      // debugger
      //
      // if (selectId === 'userHome') {
      //   this.$router.push({path: '/summary'})
      // }
      // else {
      //   this.$router.push({path: '/summary'})
      //   this.selectMainId = paths[paths.length - 1];
      //   var path = '/' + this.selectMainId;
      //   this.$router.push({path: path})
      // }

    },
    computed: {
      // selectData: function () {
      //   return this.datas[this.selectIndex]
      // },
      // isAdmin: function () {
      //   debugger
      //   var isAdmin = this.$router.params.isAdmin
      //   return isAdmin
      // }
    }
  };
</script>

<style lang="scss" scoped>

  @import "../style/el-mine.scss";

  #home-container {
    position: relative;
    height: 100%;

    .el-aside {
      background-color: #25293c;

      .left-header {
        height: 70px;
        width: 280px;
        background-color: #35394d;
        margin-bottom: 18px;

        .logo {
          width: 29px;
          height: 23px;
          left: 34px;
          top: 24px;
          position: absolute;
        }

        .leftTitle {
          font-size: 20px;
          text-align: left;
          font-family: "微软雅黑";
          font-weight: bold;
          color: #46abdb;
          position: absolute;
          left: 72px;
          top: 20px;
        }
      }
    }


    .topInput {
      position: absolute;
      align-content: right;
      right: 30px;
      width: 25%;
    }

    .el-header {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 70px;
      height: 70px;
    }

    .el-main {
      /*display: flex;*/
      /*justify-content: space-between;*/
      /*align-items:stretch;*/
      /*margin: 15px;*/
      /*flex-wrap:wrap;*/
      /*border: #D3DCE6 solid 1px;*/
      /*line-height: 100%;*/
      background-color: #e4e4e4;
    }

    .main-content {
      margin: 8px;
      height: 100%;
      background-color: #fff;
      border-radius: 5px;
    }
  }

  *{
    padding: 0px;
    margin: 0px;
  }

</style>
