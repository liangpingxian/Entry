<template>
  <div class="loginStyle">

    <!--<input value="" placeholder="请输入手机号码/邮箱" class="loginButtonStyle"/>-->
    <el-form>
      <img class="logo" src="@assets/logo.png"/>
      <!--<img src="@assets/loginBg.jpg"/>-->
      <h5>en+接口平台</h5>
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

  </div>
</template>

<script>

import {login} from '@api/login'

export default {
  data () {
    return {
      name: 'login',
      username: '15512345678',
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
    margin-bottom: 30px;
    @include wh($btnWith,45px);
  }
  .input {
    //@include wh($btnWith,50px);
  }
  .logo {
    margin-top: -60px;
    @include wh(100px,100px);
  }
  .el-form {
    vertical-align: center;
    width: $btnWith;
    background-color: white;
    padding: 20px;
    position: relative;
    margin: 0 auto;
    border-radius:5px;
    top: 20%;
  }
  .loginStyle {
    background:url("~@assets/loginBg.jpg") no-repeat;
    overflow: auto;
    background-size:cover;

    height: 100vh;
    /*height: 1000px;*/
  }

</style>
