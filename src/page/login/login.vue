<template>
  <div class="x">
    <img src="@assets/logo.png"/>
    <h1>登录界面</h1>
    <!--<input value="" placeholder="请输入手机号码/邮箱" class="loginButtonStyle"/>-->
    <el-form>
      <el-form-item prop="username">
        <el-input type="text" v-model="username" auto-complete="off" placeholder="请输入手机号码/邮箱" :disabled="isLoading" autofocus=true></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" v-model="password" auto-complete="off" placeholder="请输入密码" :disabled="isLoading"></el-input>
      </el-form-item>

    </el-form>
    <el-button type="primary" round @click="loginAction" :loading="isLoading" class="loginButtonStyle">登录</el-button>

  </div>
</template>

<script>

export default {
  data () {
    return {
      name: 'login',
      username: '15578087453',
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

      // getSearchAddress('111').then(res => {
      //   res.keyword = ''
      //   // alert("dsds")
      // })
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
