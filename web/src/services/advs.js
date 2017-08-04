import { request, config } from 'utils'
const { api } = config
const { advs } = api

export async function query (params) {
  return request({
    url: advs.get,
    method: 'get',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: advs.delete,
    method: 'post',
    data: params,
  })
}
