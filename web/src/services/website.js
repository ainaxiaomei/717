import { request, config } from 'utils'
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
  console.log(params);
  return request({
    url: website.delete,
    method: 'get',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: user,
    method: 'patch',
    data: params,
  })
}
