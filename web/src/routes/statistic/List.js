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
          onDeleteItem(record.root)
        },
      })
    }
  }

  const columns = [
    {
      title: '网站主页',
      dataIndex: 'root',
      key: 'root',
      render: (text, record) => <Link to={`statistic/${record.root}/${record.date}`}>{text}</Link>
    },
     {
      title: '统计时间',
      dataIndex: 'date',
      key: 'date',
    }, {
      title: '总 PV',
      dataIndex: 'total_pv',
      key: 'total_pv',
    },  {
      title: '日 PV',
      dataIndex: 'day_pv',
      key: 'day_pv',
    }, {
      title: '月 PV',
      dataIndex: 'mon_pv',
      key: 'mon_pv',
    }, {
      title: '总 UV',
      dataIndex: 'total_uv',
      key: 'total_uv',
    },{
      title: '月 UV',
      dataIndex: 'mon_uv',
      key: 'mon_uv',
    },{
      title: '日 UV',
      dataIndex: 'day_uv',
      key: 'day_uv',
    },{
      title: '百度蜘蛛 UV',
      dataIndex: 'baidu_spider_uv',
      key: 'baidu_spider_uv',
    },
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
        rowKey={record => record.root}
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
