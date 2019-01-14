import VueRouter from 'vue-router'
import App from '@/App'
import Vue from 'vue'
// const userHome = r => require.ensure([], () => r(require('@page/hu/UserHome')), 'userHome')

Vue.use(VueRouter)

const newInterface = r => require.ensure([], () => r(require('@/page/yuan/NewInterface')), 'newInterface')
const errPage404 = r => require.ensure([], () => r(require('@page/errPage/404')), 'errPage')
const errPage401 = r => require.ensure([], () => r(require('@page/errPage/401')), 'errPage')
const errPage = r => require.ensure([], () => r(require('@page/errPage/errPage')), 'errPage')
const login = r => require.ensure([], () => r(require('@page/login/login')), 'login')
const xu = r => require.ensure([], () => r(require('@page/xu/xu')), 'xu')
const detail = r => require.ensure([], () => r(require('@page/xu/detail')), 'xu')
const hello = r => require.ensure([], () => r(require('@components/HelloWorld')), 'hello')
const userHome = r => require.ensure([], () => r(require('@page/hu/userHome')), 'userHome')
const errorCode = r => require.ensure([], () => r(require('@page/hu/subPage/ErrorCode')), 'errorCode')
const generalParameter = r => require.ensure([], () => r(require('@page/hu/subPage/GeneralParameter')), 'generalParameter')
const summary = r => require.ensure([], () => r(require('@page/hu/subPage/Summary')), 'summary')
const updateLog = r => require.ensure([], () => r(require('@page/hu/subPage/UpdateLog')), 'updateLog')
const versionComparison = r => require.ensure([], () => r(require('@page/hu/subPage/VersionComparison')), 'versionComparison')
const interfaceDetail = r => require.ensure([], () => r(require('@page/hu/subPage/InterfaceDetail')), 'interfaceDetail')

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
    // 主页面
    {
      path: '/userHome',
      component: userHome,
      redirect: '/userHome/summary',
      children: [
        {
          path: 'summary',
          component: summary
        },
        {
          path: 'errorCode',
          component: errorCode
        },
        {
          path: 'generalParameter',
          component: generalParameter
        },
        {
          path: 'updateLog',
          component: updateLog
        },
        {
          path: 'versionComparison',
          component: versionComparison
        },
        {
          name: '接口',
          path: 'interfaceDetail',
          component: interfaceDetail
        }
      ]
    },
    // hello
    {
      path: '/hello',
      component: hello
    },
    {
      path: 'yuan',
      component: newInterface
    },
    // hello
    {
      path: '/xu',
      component: xu,
      redirect: '/xu/detail',
      children: [
        {
          path: 'detail',
          component: detail
        },
        {
          path: 'login',
          component: login
        },
        {
          path: 'errPage',
          component: errPage
        },
        {
          path: '404',
          component: errPage404
        },
        {
          path: '401',
          component: errPage401
        },
        {
          path: '*',
          component: errPage404
        }
      ]
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/401',
      component: errPage401
    },
    // 404错误
    {
      path: '*',
      component: errPage404
    }]
}]

export default new VueRouter({
  routes
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }

})
