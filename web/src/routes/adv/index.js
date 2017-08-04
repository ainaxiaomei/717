import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'
import { Row, Col, Button, Popconfirm } from 'antd'
import List from './List'
import Filter from './Filter'
import Modal from './Modal'

const Link = ({ location, dispatch, link, loading }) => {
  const { list, pagination, currentItem, modalVisible, modalType, isMotion, selectedRowKeys } = link
  const { pageSize } = pagination

  const modalProps = {
    item: modalType === 'create' ? {} : currentItem,
    visible: modalVisible,
    maskClosable: false,
    confirmLoading: loading.effects['link/update'],
    title: `${modalType === 'create' ? 'Create Link' : 'Update Link'}`,
    wrapClassName: 'vertical-center-modal',
    onOk (data) {
      dispatch({
        type: 'link/create',
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'link/hideModal',
      })
    },
  }

  const listProps = {
    dataSource: list,
    loading: loading.effects['link/query'],
    pagination,
    location,
    isMotion,
    onChange (page) {
      const { query, pathname } = location
      dispatch(routerRedux.push({
        pathname,
        query: {
          ...query,
          page: page.current,
          pageSize: page.pageSize,
        },
      }))
    },
    onDeleteItem (id) {
      dispatch({
        type: 'link/delete',
        payload: id,
      })
    },
    onEditItem (item) {
      dispatch({
        type: 'link/showModal',
        payload: {
          modalType: 'update',
          currentItem: item,
        },
      })
    },
    // rowSelection: {
    //   selectedRowKeys,
    //   onChange: (keys) => {
    //     dispatch({
    //       type: 'link/updateState',
    //       payload: {
    //         selectedRowKeys: keys,
    //       },
    //     })
    //   },
    // },
  }

  const filterProps = {
    isMotion,
    filter: {
      ...location.query,
    },
    onFilterChange (value) {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        query: {
          ...value,
          page: 1,
          pageSize,
        },
      }))
    },
    onSearch (fieldsValue) {
      fieldsValue.link.length ? dispatch(routerRedux.push({
        pathname: '/link',
        query: {
          field: fieldsValue.field,
          link: fieldsValue.link,
        },
      })) : dispatch(routerRedux.push({
        pathname: '/link',
      }))
    },
    onAdd () {
      dispatch({
        type: 'link/showModal',
        payload: {
          modalType: 'create',
        },
      })
    },
    switchIsMotion () {
      dispatch({ type: 'link/switchIsMotion' })
    },
  }

  const handleDeleteItems = () => {
    dispatch({
      type: 'link/multiDelete',
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
                 <Button type="primary" size="large" style={{ marginLeft: 8 }}>Remove</Button>
               </Popconfirm>
             </Col>
           </Row>
      }
      <List {...listProps} />
      {modalVisible && <Modal {...modalProps} />}
    </div>
  )
}

Link.propTypes = {
  link: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ link, loading }) => ({ link, loading }))(Link)
