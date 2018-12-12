import post from './_request'
// import axios from '@/api/request' // 引入axios的封装方法

export const getAdminList = (params) => {
  return post('/api/v1.0/admin/list', params) // 登陆管理员获取自身信息
}

export const register = (params) => {
  return post('/api/v1.0/admin/register', params) // 添加管理员
}

export const deleteAdmin = (id, params) => {
  return post(`/api/v1.0/admin/${id}`, params) // 更新管理员信息
}

export const login = (username, password) => {
  return post('loginAction', {username, password}) // 添加管理员
}
