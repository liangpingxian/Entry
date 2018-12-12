import request from './_request'
// import axios from '@/api/request' // 引入axios的封装方法

export const getAdminList = (params) => {
  return request('get', '/api/v1.0/admin/list', params) // 登陆管理员获取自身信息
}

export const register = (params) => {
  return request('post', '/api/v1.0/admin/register', params) // 添加管理员
}

export const deleteAdmin = (id, params) => {
  return request('delete', `/api/v1.0/admin/${id}`, params) // 更新管理员信息
}

export const login = (username, password) => {
  return request('post', 'loginAction', {username, password}) // 添加管理员
}
