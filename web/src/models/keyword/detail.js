import pathToRegexp from 'path-to-regexp'
import { query } from '../../services/keyword'

export default {

  namespace: 'keywordDetail',

  state: {
    data: {},
    currentName:""
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(() => {
        const match = pathToRegexp('/keyword/:id').exec(location.pathname)
        if (match) {
          dispatch({ type: 'query', payload: { name: match[1] } })
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
            currentName: payload.name
          },
        })
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
  },
}
