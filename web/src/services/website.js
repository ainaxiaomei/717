import { request, config } from 'utils'
import qs from 'qs';
const { api } = config
const { user,website } = api

export async function query (params) {
  return request({
    url: user,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: website.add,
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: website.delete + '?' + qs.stringify(params),
    method: 'delete',
    data: {},
  })
}

export async function update (params) {
  return request({
    url: website.update,
    method: 'post',
    data: params,
  })
}
