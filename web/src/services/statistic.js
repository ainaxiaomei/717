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


