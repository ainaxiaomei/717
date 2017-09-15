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
      title: '网站分组',
      dataIndex: 'web_type',
      key: 'web_type',
      sorter: (a,b)=>{
          if (a.web_type < b.web_type) {
            return -1;
          }
          if (a.web_type > b.web_type) {
            return 1;
          }
          return 0;
        }

    },
    {
      title: '网站主页',
      dataIndex: 'root',
      key: 'root',
      render: (text, record) => {
        return <a href={"https://www.baidu.com/s?wd=site%3A" + text} target="view_window">{text}</a>
      }
    },
     {
      title: '克隆主页',
      dataIndex: 'index',
      key: 'index',
      render: (text, record) => {
        return <a href={`http://${text}`} target="view_window">{text}</a>
      }
    }, {
      title: '网站名称',
      dataIndex: 'keywords',
      key: 'keywords',
    }, {
      title: '采集网站',
      dataIndex: 'collection_source',
      key: 'collection_source',
      render: (text, record) => {
        return <a href={`http://${text}`} target="view_window">{text}</a>
      }
    }, {
      title: '日 PV',
      dataIndex: 'day_pv',
      key: 'day_pv',
      sorter: (a,b)=>{
          if (a.day_pv < b.day_pv) {
            return -1;
          }
          if (a.day_pv > b.day_pv) {
            return 1;
          }
          return 0;
        }
    }, {
      title: '月 PV',
      dataIndex: 'mon_pv',
      key: 'mon_pv',
      sorter: (a,b)=>{
          if (a.mon_pv < b.mon_pv) {
            return -1;
          }
          if (a.mon_pv > b.mon_pv) {
            return 1;
          }
          return 0;
        }
    }, {
      title: '克隆个数',
      dataIndex: 'clone_number',
      key: 'clone_number',
    },{
      title: '关键词组',
      dataIndex: 'keywords_group',
      key: 'keywords_group',
    },{
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '1', name: '更新' }, { key: '2', name: '删除' }]} />}
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
        rowKey={record => record.root}
        getBodyWrapper={getBodyWrapper}
        pagination = {false}
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
