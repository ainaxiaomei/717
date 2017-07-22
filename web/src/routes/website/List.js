import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal } from 'antd'
import styles from './List.less'
import classnames from 'classnames'
import AnimTableBody from '../../components/DataTable/AnimTableBody'
import { DropOption } from 'components'
import { Link } from 'dva/router'

const confirm = Modal.confirm

const List = ({ onDeleteItem, onEditItem, isMotion, location, ...tableProps }) => {
  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: 'Are you sure delete this record?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

  const columns = [
    {
      title: 'Root',
      dataIndex: 'root',
      key: 'root',
    },
    {
      title: 'WebType',
      dataIndex: 'web_type',
      key: 'web_type',
    }, {
      title: 'Index',
      dataIndex: 'index',
      key: 'index',
    }, {
      title: 'Keyword',
      dataIndex: 'keywords',
      key: 'keywords',
    }, {
      title: 'Collection Source',
      dataIndex: 'collection_source',
      key: 'collection_source',
    }, {
      title: 'Day Pv',
      dataIndex: 'day_pv',
      key: 'day_pv',
    }, {
      title: 'Mon Pv',
      dataIndex: 'mon_pv',
      key: 'mon_pv',
    }, {
      title: 'Clone Number',
      dataIndex: 'clone_number',
      key: 'clone_number',
    },{
      title: 'Keywords Group',
      dataIndex: 'keywords_group',
      key: 'keywords_group',
    }
  ]

  const getBodyWrapperProps = {
    page: location.query.page,
    current: tableProps.pagination.current,
  }

  const getBodyWrapper = body => { return isMotion ? <AnimTableBody {...getBodyWrapperProps} body={body} /> : body }

  return (
    <div>
      <Table
        {...tableProps}
        className={classnames({ [styles.table]: true, [styles.motion]: isMotion })}
        bordered
        scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={record => record.id}
        getBodyWrapper={getBodyWrapper}
      />
    </div>
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List