import { request, config } from 'utils'
import qs from 'qs';
const { api } = config
const { user,keyword } = api

export async function query (params) {
  return request({
    url: keyword.get,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: keyword.add + '?name=' + params.name,
    method: 'post',
    data: params.value,
  })
}

export async function remove (params) {
  return request({
    url: keyword.delete + '?' + qs.stringify(params),
    method: 'delete',
    data: {},
  })
}

export async function update (params) {
  return request({
    url: keyword.update,
    method: 'post',
    data: params,
  })
}
