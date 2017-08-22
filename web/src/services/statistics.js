import { request, config } from 'utils'
import qs from 'qs';
const { api } = config
const { statistic } = api

export async function query (params) {
  return request({
    url: statistic.get,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: statistic.add,
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: statistic.delete + '?' + qs.stringify(params),
    method: 'delete',
    data: {},
  })
}

export async function update (params) {
  return request({
    url: statistic.update,
    method: 'post',
    data: params,
  })
}
