import modelExtend from 'dva-model-extend'
import { create, remove, update } from '../services/statistics'
import * as statisticsService from '../services/statistics'
import { pageModel } from './common'
import { config } from 'utils'

const { query } = statisticsService
const { prefix } = config

export default modelExtend(pageModel, {
  namespace: 'statistic',

  state: {
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
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.message,
          },
        })
      }else{
        throw data;
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
      const data = yield call(statisticsService.remove, payload.ids)
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
