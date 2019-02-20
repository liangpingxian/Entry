<template>
  <div class="login-container">

    <!--<input value="" placeholder="请输入手机号码/邮箱" class="loginButtonStyle"/>-->
    <!--<p class="divLeft">en+智能财务<br/>最大化企业数据价值</p>-->
    <el-form>
      <div class="logo-title-container">
        <img class="logo-container" src="@/assets/login/logo.png"/>
        <!--<img src="@assets/login/loginBg.jpg"/>-->
        <p class="title-container">en+接口平台</p>
      </div>

        <el-form-item prop="username">
          <el-input class="input-style" prefix-icon="input-username-icon" type="text" v-model="username" name="username" autocomplete="on" placeholder="请输入手机号码/邮箱" :disabled="isLoading" autofocus=true>
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input class="input-style" prefix-icon="input-password-icon" type="password" v-model="password" autocomplete="off" placeholder="请输入密码" :disabled="isLoading"></el-input>
        </el-form-item>

        <el-button type="primary"  @click="loginAction" :loading="isLoading" class="loginButtonStyle">登  录</el-button>
    </el-form>

  <div>
    <p class="bottom-info">湖南英富莱网络技术有限公司 <br/>@2019 Enfry Ltd.All rights reserved. 湘ICP16017875号</p>
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

        that.$router.push({path: '/userHome'})
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

<style lang="scss">
  .input-style {
    .el-input__inner {
      height: 100%;
    }

    $background-size:16px 18px;
    $font-size:30px;
    //宏
    @mixin common-icon($iconName) {
      background: url("~@assets/login/#{$iconName}.png") 50% 50% no-repeat;
      background-size: $background-size;
      font-size: $font-size;
      &::before {
        content: "\e611";
        visibility: hidden;
      }
    }

    .input-username-icon {
      @include common-icon("denglu-zhanghao");
    }
    .input-password-icon {
      @include common-icon("denglu-mima");
    }

    /*
    //继承(慎用)
    %common-icon1 {
      background: url("~@assets/login/denglu-mima.png") center no-repeat;
      background-size: $background-size;
      font-size: $font-size;
      &::before {
        content: "\e611";
        visibility: hidden;
      }
    }
    .input-password-icon1 {
      @extend %common-icon1;
    }
    */
  }
</style>

<style lang="scss" scoped>
  $btnWith:450px;
  $btnHeight: 40px;

  @import '~@style/mixin';
  .loginButtonStyle {
    font-size: 14px;
    margin-bottom: 65px;
    @include wh($btnWith,$btnHeight);
  }

  .logo-title-container {
    $logoSize:100px;
    text-align: center;

    .logo-container {
      //margin-top: -60px;
      @include wh($logoSize,$logoSize);
      border-radius: $logoSize/2;
      background-color: white;
      margin: -$logoSize*0.6 auto 0 auto;
      box-shadow: 0px 0px 100px #888888;/*四边出现阴影，效果发光*/
    }
    .title-container {
      margin: 10px auto 30px auto;
      font-size: 12px;
      font-weight: bold;
    }
  }

  .div-left {
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
  .bottom-info {
    position: absolute;
    bottom: 30px;
    text-align: center;
    width: 100%;
  }
  .login-container {
    background:url("~@assets/login/loginBg.jpg") 50% 50% no-repeat;
    overflow: auto;
    background-size:cover;
    position: absolute;
    bottom: 0px;
    height: 100%;
    width: 100%;
    /*width: calc(100% - 300px);*/
    /*height: calc(100% - 70px)*/
    /*height: 1000px;*/
    .input-style {
      @include wh($btnWith,$btnHeight);
    }
  }

</style>
