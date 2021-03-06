import { request, config } from 'utils'
import qs from 'qs';
const { api } = config
const { link } = api

export async function query (params) {
  return request({
    url: link.get,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: link.add,
    method: 'post',
    data: params.value,
  })
}

export async function remove (params) {
  return request({
    url: link.delete + '?' + qs.stringify(params),
    method: 'delete',
    data: {},
  })
}

export async function update (params) {
  return request({
    url: link.update,
    method: 'post',
    data: params,
  })
}
