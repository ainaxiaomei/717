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
          onDeleteItem(record.name)
        },
      })
    }
  }

  const columns = [
    {
      title: '关键词组',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`keyword/${record.name}`}>{text}</Link>
    },
    {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        //需求变更不得不适应代码
        var e = new Object();
        e.key = '2';
        return <a onClick={()=>{handleMenuClick(record,e)}}>删除</a>
      }

        //return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '2', name: 'Delete' }]} />}
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
        rowKey={record => record.name}
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
