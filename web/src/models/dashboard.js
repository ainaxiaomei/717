import { myCity, queryWeather, query } from '../services/dashboard'
import { parse } from 'qs'


export default {
  namespace: 'dashboard',
  state: {
    numbers: [],
    user: {
      avatar: '',
    },
  },
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'query' })
    },
  },
  effects: {
    *query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, parse(payload))
      yield put({
          type: 'querySuccess',
          payload: {
            ... data
          },
        })
    },
  },
  reducers: {
    querySuccess (state, { payload }) {
      const { data} = payload
      return {
        ...state,...payload
      }
    },
  },
}
