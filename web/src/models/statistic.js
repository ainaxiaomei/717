import modelExtend from 'dva-model-extend'
import { create, remove, update } from '../services/statistics'
import * as websitesService from '../services/statistics'
import * as keywordsService from '../services/keywords'
import { pageModel } from './common'
import { config } from 'utils'

const { query } = websitesService
const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'statistic',

  state: {
    keyGroup:[],
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectedRowKeys: [],
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/statistic') {
          dispatch({
            type: 'query',
            payload: {date:new Date()}
          })
        }
      })
    },
  },

  effects: {

    *query ({ payload = {} }, { call, put }) {

      const data = yield call(query, payload)
      if (data.status == 200 && data.message) {

      }else{
        throw data;
      }
      const keygroup =yield call(keywordsService.query, payload);
      if (keygroup.status == 200 && keygroup.message) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.message,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: data.total,
            },
            keyGroup: keygroup.message.data,
          },
        })
      }
    },

    *'delete' ({ payload }, { call, put, select }) {
      const data = yield call(remove, { root : payload })
      const { selectedRowKeys } = yield select(_ => _.statistic)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: selectedRowKeys.filter(_ => _ !== payload) } })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

    *'multiDelete' ({ payload }, { call, put }) {
      const data = yield call(websitesService.remove, payload.ids)
      if (data.success) {
        yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

    *create ({ payload }, { call, put }) {
      const data = yield call(create, payload)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

    *update ({ payload }, { select, call, put }) {
      const data = yield call(update, payload)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
      } else {
        throw data
      }
    },

  },

  reducers: {

    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true}
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },


  },
})
