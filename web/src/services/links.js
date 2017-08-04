import { request, config } from 'utils'
const { api } = config
const { links } = api

export async function query (params) {
  return request({
    url: links.get,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: links.delete,
    method: 'post',
    data: params,
  })
}
