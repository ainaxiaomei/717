import pathToRegexp from 'path-to-regexp'
import { query } from '../../services/advs'
import { create } from '../../services/adv'

export default {

  namespace: 'advDetail',

  state: {
    data: {},
    currentName:""
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/adv') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {
    *query ({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload);
      if (data.status == 200 && data.message||data.status == 200 && data.message=="") {
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
    *create ({ payload }, { call, put }) {
      const data = yield call(create, payload)
      if (data.success) {
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      const { data, currentName} = payload
      return {
        ...state,
        data,
        currentName
      }
    },

    setData(state,{payload}){
      return {...state,...payload}
    }
  },
}
