import { login,register } from '../services/login'
import { routerRedux } from 'dva/router'
import { queryURL } from 'utils'

export default {
  namespace: 'login',
  state: {
    loginLoading: false,
    mode:'login'
  },

  effects: {
    *login ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoginLoading' })
      const data = yield call(login, payload)
      yield put({ type: 'hideLoginLoading' })
      if (data.status == 200 && data.message) {
        const from = queryURL('from')
        yield put({ type: 'app/query' })
        if (from) {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/dashboard'))
        }
      } else {
        throw data
      }
    },
    *register ({
      payload,
    }, { put, call }) {
      yield put({ type: 'showLoginLoading' });
      const data = yield call(register, payload);
      yield put({ type: 'hideLoginLoading' });
      if (data.status == 200 && data.message) {
        alert("注册成功");
        //routerRedux.push('/login')
        window.location = `${location.origin}/login`;
      }else{
        throw data;
      }
    },

    *reset ({ payload = {} }, { call, put }) {
    },
  },
  reducers: {
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
    changMode (state, { payload }) {
      return { ...state, ...payload}
    },
  },
}
