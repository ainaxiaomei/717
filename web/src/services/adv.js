import { request, config } from 'utils'
import qs from 'qs';
const { api } = config
const { adv } = api

export async function query (params) {
  return request({
    url: adv.get,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: adv.add,
    method: 'post',
    data: params.value,
  })
}

export async function remove (params) {
  return request({
    url: adv.delete + '?' + qs.stringify(params),
    method: 'delete',
    data: {},
  })
}

export async function update (params) {
  return request({
    url: adv.update,
    method: 'post',
    data: params,
  })
}
