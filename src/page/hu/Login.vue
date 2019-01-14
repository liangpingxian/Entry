<template>
  <div class="loginContainer">

    <div class="login-bg-image"></div>
    <!--<img class="login-bg-image" src="../assets/icon/login-bg-image.png">-->

    <div class="loginSubContainer">

      <img class="login-logo" src="../assets/login-logo.png">

      <div class="login-title">en+接口平台</div>

      <el-row class="input-super">
        <!--hl-iconfont hcl-icon-yonghuming-->
        <el-input type="text" placeholder="请输入用户名" v-model="username" prefix-icon="input-icon-zhanghao">
        </el-input>
      </el-row>

      <el-row class="input-super">
        <el-input type="password" placeholder="请输入密码" v-model="password" prefix-icon="input-icon-mima"></el-input>
      </el-row>

      <el-button type="primary" @click="handleLogin()">登录</el-button>

    </div>

    <div class="login-bottom-text">
      湖南英富莱网络技术有限公司
      <br>
      ©2019 Enfry Ltd.All rights reserved
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",

        data() {
          return {
            username: '',
            password: ''
          }
        },
        methods: {
          handleLogin(){

            this.$router.push({path: '/userHome'})

            // if (this.password.length > 0 || this.username.length > 0) {
            //   // debugger
            //   this.$router.push({path: '/managerHome'})
            // }
            // else {
            //   // debugger
            //   this.$router.push({path: '/userHome'})
            // }
          }
        }
    }
</script>

<style lang="scss">

  .input-super {
    .el-input__prefix {
      left: 10px;
    }
    .el-input__inner {
      padding-left: 36px;
    }

    @mixin common-icon($iconName){
      background: url("../assets/#{$iconName}.png") center no-repeat;
      background-size: 16px 18px;
      font-size: 36px;
      &::before {
        content: "\e611";
        visibility: hidden;
      }
    }

    .input-icon-zhanghao {
      @include common-icon("denglu-zhanghao");
    }
    .input-icon-mima {
      @include common-icon("denglu-mima");
    }

    /*.input-icon-mima {*/
      /*background: url("../assets/denglu-mima.png") center no-repeat;*/
      /*background-size: 16px 18px;*/
      /*font-size: 36px;*/
      /*&::before {*/
        /*content: "\e611";*/
        /*visibility: hidden;*/
      /*}*/
    /*}*/
  }



</style>

<style lang="scss" scoped>

  $ratio:0.8;
  $container-ratio:0.9;

  @import 'src/style/mixin';

  .loginContainer{
    padding: 0px;
    position: relative;
    height: 100%;
    background: rgb(106,114,143);

    .login-bg-image {
      //铺满背景图片
      background: url("../assets/icon/login-bg-image.png") top/cover no-repeat fixed;
      width: 100%;
      height: 100%;
      z-index: -10;
      /*float: top;*/
      /*background-repeat: no-repeat;*/
      /*background-size: cover;*/
      /*-webkit-background-size: cover;*/
      /*-o-background-size: cover;*/
    }

    .loginSubContainer {
      z-index: 5;
      position: absolute;
      left: 50%;
      top: 20%;
      width: $container-ratio*500px;
      height: $container-ratio*400px;
      margin-left: -($container-ratio*500)*0.5px;
      background-color:white;
      border-radius: 10px;

      .login-title {
        margin-top: $ratio*30px;
        margin-bottom: $ratio*40px;
        height: 20px;
      }

      .login-logo {
        width: 107px;
        height: 119px;
        margin-top: -50px;
        left: 50%;
        float: top
      }

      .input-super {
        margin-top: $ratio*20px;
        margin-bottom: $ratio*20px;

        .el-input {
          margin-left: 10%;
          margin-right: 10%;
          width: 80%;
        }
      }

      .el-button {
        margin-top: $ratio*20px;
        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        background-color: rgb(51,158,214);
      }
    }

    p, span, input{
      font-family: Helvetica Neue,Tahoma,Arial;
    }

    .login-bottom-text {
      position: absolute;
      color: rgb(139,139,139);
      font-size: 8px;
      text-align: center;
      width: 100%;
      height: 45px;
      bottom: 0px;
    }
  }







</style>
