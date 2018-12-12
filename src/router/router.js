import VueRouter from 'vue-router'
import App from '@/App'
import Vue from 'vue'

Vue.use(VueRouter)

const errPage = r => require.ensure([], () => r(require('@page/404/404')), '404')
const login = r => require.ensure([], () => r(require('@page/login/login')), 'login')
const hello = r => require.ensure([], () => r(require('@components/HelloWorld')), 'hello')

// const hello = () => import(/* webpackChunkName: "hello" */ '../components/HelloWorld')

const routes = [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [ // 二级路由。对应App.vue
    // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/login'
    },
    // 登录页面
    {
      path: '/login',
      component: login
    },
    // hello
    {
      path: '/hello',
      component: hello
    },
    // 404错误
    {
      path: '*',
      component: errPage
    }]
}]

export default new VueRouter({
  routes
})
