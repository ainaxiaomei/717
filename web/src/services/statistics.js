import { request, config } from 'utils'
import qs from 'qs';
const { api } = config
const { statistics } = api

export async function query (params) {
  return request({
    url: statistics.get,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: statistics.add,
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: statistics.delete + '?' + qs.stringify(params),
    method: 'delete',
    data: {},
  })
}

export async function update (params) {
  return request({
    url: statistics.update,
    method: 'post',
    data: params,
  })
}
