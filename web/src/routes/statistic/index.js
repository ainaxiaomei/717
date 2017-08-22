import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Button, Popconfirm } from 'antd'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'

const Statistic = ({ location, dispatch, statistic, loading }) => {
  const { list, pagination, currentItem, modalVisible, modalType, selectedRowKeys,keyGroup } = statistic
  const { pageSize } = pagination

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    keyGroup: keyGroup,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['statistic/update'],
    title: `${modalType === 'create' ? '创建网站' : '更新网站'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: `statistic/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'statistic/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['statistic/query'],
    pagination,
    location,
    // onChange (page) {
    //   const { query, pathname } = location
    //   dispatch(routerRedux.push({
    //     pathname,
    //     query: {
    //       ...query,
    //       page: page.current,
    //       pageSize: page.pageSize,
    //     },
    //   }))
    // },
    onDeleteItem (id) {
      dispatch({
        type: 'statistic/delete',
        payload: id,
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'statistic/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
    rowSelection: {
      selectedRowKeys,
      onChange: (keys) => {
        dispatch({
          type: 'statistic/updateState',
          payload: {
            selectedRowKeys: keys,
          },
        })
      },
    },
  }

  const filterProps = {
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          page: 1,
          pageSize,
          ...value,
        },
      }))
    },
    onSearch (fieldsValue) {
      fieldsValue.keyword.length ? dispatch(routerRedux.push({
        pathname: '/statistic',
        query: {
          field: fieldsValue.field,
          keyword: fieldsValue.keyword,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/statistic',
      }))
    },
    onAdd () {
      dispatch({
        type: 'statistic/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
  }

  const handleDeleteItems = () => {
    dispatch({
      type: 'statistic/multiDelete',
      payload: {
        ids: selectedRowKeys,
      },
    })
  }

  return (
    <div className="content-inner">
      <Filter {...filterProps} />
      {
         selectedRowKeys.length > 0 &&
           <Row style={{ marginBottom: 24, textAlign: 'right', fontSize: 13 }}>
             <Col>
               {`Selected ${selectedRowKeys.length} items `}
               <Popconfirm title={'Are you sure delete these items?'} placement="left" onConfirm={handleDeleteItems}>
                 <Button type="primary" size="large" style={{ marginLeft: 8 }}>删除</Button>
               </Popconfirm>
             </Col>
           </Row>
      }
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </div>
  )
}

Statistic.propTypes = {
  statistic: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ statistic, loading }) => ({ statistic, loading }))(Statistic)
