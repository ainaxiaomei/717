import { request, config } from 'utils'
const { api } = config
const { websites } = api

export async function query (params) {
  return request({
    url: websites.get,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: websites.delete,
    method: 'post',
    data: params,
  })
}
