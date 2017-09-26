import { myCity, queryWeather, query } from '../services/dashboard'
import { changePassword } from '../services/login'
import { parse } from 'qs'


export default {
  namespace: 'dashboard',
  state: {
    numbers: [],
    user: {
      avatar: '',
    },
    modalVisible:false
  },
  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'query' })
    },
  },
  effects: {
    *query ({payload}, { call, put }) {
      const data = yield call(query, parse(payload));
      yield put({
          type: 'querySuccess',
          payload: {
            ... data
          },
        });
    },

    *changePassword ({payload}, { call, put ,select}) {
      const {user} = yield select(_ => _.app);

      const data = yield call(changePassword, {...payload,'username':user.username});
      if (data.status == 200 && data.message) {
         yield put({type:'hideModal'});
      }else{
        throw data;
      }
     
    },
    
  },
  reducers: {
    querySuccess (state, { payload }) {
      const { data} = payload
      return {
        ...state,...payload
      }
    },
    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true}
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },

  },
}
