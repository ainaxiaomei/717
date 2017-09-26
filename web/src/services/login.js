import { request, config } from 'utils'
const { api } = config
const { userLogin,log } = api

export async function login (data) {
  return request({
    url: log.login,
    method: 'post',
    data,
  })
}

export async function register (data) {
  return request({
    url: log.register,
    method: 'post',
    data,
  })
}

export async function changePassword (data) {
  return request({
    url: log.changePassword,
    method: 'post',
    data,
  })
}
