<template>
  <div class="loginContainer">

    <!--<input value="" placeholder="请输入手机号码/邮箱" class="loginButtonStyle"/>-->
    <!--<p class="divLeft">en+智能财务<br/>最大化企业数据价值</p>-->
    <el-form>
       <img class="logo" src="@assets/logo.png"/>
        <!--<img src="@assets/loginBg.jpg"/>-->
        <p style="margin-bottom: 30px;font-size: 12px; font-weight: bold;">en+接口平台</p>
        <el-form-item prop="username">
          <el-input class="input" prefix-icon="el-icon-search" type="text" v-model="username" auto-complete="off" placeholder="请输入手机号码/邮箱" :disabled="isLoading" autofocus=true>
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input class="input" prefix-icon="el-icon-search" type="password" v-model="password" auto-complete="off" placeholder="请输入密码" :disabled="isLoading"></el-input>
        </el-form-item>

        <el-button type="primary"  @click="loginAction" :loading="isLoading" class="loginButtonStyle">登  录</el-button>
    </el-form>

  <div>
    <p class="bottomInfo">湖南英富莱网络技术有限公司 <br/>@2019 Enfry Ltd.All rights reserved. 湘ICP16017875号</p>
  </div>
  </div>
</template>

<script>

import {login} from '@api/login'

export default {
  data () {
    return {
      name: 'login',
      username: 'admin',
      password: '',
      isLoading: false
    }
  },
  methods: {
    loginAction: function () {
      this.isLoading = true
      let that = this
      setTimeout(function () {
        that.isLoading = false
        // alert("啥都没做");

        that.$router.push({path: '/hello'})
      }, 1000)

      login(this.username, this.password).then(res => {
        console.error('登录失败')
        // alert("dsds")
      }).catch(error => {
        console.error(error)
      })
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
  $btnWith:450px;
  @import '~@style/mixin';
  .loginButtonStyle {
    font-size: 14px;
    margin-bottom: 65px;
    @include wh($btnWith,45px);
  }
  .input {
    //@include wh($btnWith,50px);
  }
  .logo {
    margin-top: -60px;
    @include wh(100px,100px);
    border-radius: 50px;
    background-color: white;
    box-shadow: 0px 0px 100px #888888;/*四边出现阴影，效果发光*/
  }
  .divLeft {
    font-size: 50px;
    color: #ffffff;
    /*float: left;*/
    left: 0px;
    position: absolute;

  }
  .el-form {
    /*vertical-align: center;*/
    width: $btnWith;
    background-color: white;
    padding: 0px 30px;
    position: relative;
    margin: 0 auto;
    border-radius:10px;
    top: 20%;
    z-index: 10000;
    box-shadow: 0px 0px 100px #888888;/*四边出现阴影，效果发光*/

  }
  .bottomInfo {
    position: absolute;
    bottom: 30px;

    width: 100%;
  }
  .loginContainer {
    background:url("~@assets/loginBg.jpg") 50% 50% no-repeat;
    overflow: auto;
    background-size:cover;
    position: absolute;
    top: 0px;
    bottom: 0px;
    height: 100%;
    width: 100%;
    /*width: calc(100% - 300px);*/
    /*height: calc(100% - 70px)*/
    /*height: 1000px;*/
  }

</style>
