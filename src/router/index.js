import VueRouter from 'vue-router'
import App from '@/App'
import Vue from 'vue'

Vue.use(VueRouter)

const errPage = r => require.ensure([], () => r(require('@page/errPage/errPage')), 'errPage')
const errPage1 = r => require.ensure([], () => r(require('@page/errPage/errorPage1')), 'errPage1')
const login = r => require.ensure([], () => r(require('@page/login/login')), 'login')
const xu = r => require.ensure([], () => r(require('@page/xu/xu')), 'xu')
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
    // hello
    {
      path: '/xu',
      component: xu,
      children: [
        {
          path: '/login',
          component: login
        },
        {
          path: '/error',
          component: errPage
        },
        {
          path: '/1',
          component: errPage1
        }
      ]
    },
    // 404错误
    {
      path: '*',
      component: errPage
    }]
}]

export default new VueRouter({
  routes
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }

})
