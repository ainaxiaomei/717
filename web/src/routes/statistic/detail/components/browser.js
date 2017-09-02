import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'
import styles from './browser.less'
import { color } from 'utils'

const status = [
  {
    color: color.green,
  },
   {
    color: color.red,
  },
   {
    color: color.blue,
  },
   {
    color: color.yellow,
  },

  ]


function Browser ({ data }) {
  const columns = [
    {
      title: '日期',
      dataIndex: 'day',
      className: styles.name,
    }, {
      title: '数据',
      dataIndex: 'data',
      className: styles.percent,
      render: (text, record,index) => <Tag color={status[index%4].color}>{record.data}</Tag>,
    },
  ]
  return <Table pagination={false} showHeader={false} columns={columns} rowKey={(record, key) => key} dataSource={data} scroll={{ y: 400 }} />
}

Browser.propTypes = {
  data: PropTypes.array,
}

export default Browser
