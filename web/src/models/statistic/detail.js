import pathToRegexp from 'path-to-regexp'
import { query } from '../../services/statistic'

export default {

  namespace: 'statisticDetail',

  state: {
    data: {},
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(() => {
        const match = pathToRegexp('/statistic/:root/:date').exec(location.pathname)
        if (match) {
          dispatch({ type: 'query', payload: { root: match[1],date:match[2] } })
        }
      })
    },
  },

  effects: {
    *query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload);
      if (data.status == 200 && data.message) {
        yield put({
          type: 'querySuccess',
          payload: {
            data: data.message,
          },
        })
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { data} = payload
      return {
        ...state,data:data
      }
    },

    setData(state,{payload}){
      return {...state,...payload}
    }
  },
}
