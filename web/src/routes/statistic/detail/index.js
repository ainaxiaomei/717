import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { Sales, Browser, } from './components'
import styles from './index.less'
import { color } from 'utils'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function StatisticDetail ({ statisticDetail }) {
  const { sales, } = {};

  const {data} = statisticDetail;
  const browser = [
          {
            "day": "1 号",
            "data": 11
          },
          {
            "day": "2 号",
            "data": 12
          },
          {
            "day": "3 号",
            "data": 13
          },
          {
            "day": "4 号",
            "data": 113
          },{
            "day": "5 号",
            "data": 113
          },{
            "day": "6 号",
            "data": 113
          },{
            "day": "7 号",
            "data": 113
          },{
            "day": "8 号",
            "data": 113
          }
        ]
  return (
    <Row gutter={24}>
      <Col lg={18} md={24}>
        <Card bordered={false} bodyStyle={{
          padding: '24px 36px 24px 0',
        }}>
          <Sales data={sales} />
        </Card>
      </Col>
      <Col lg={6} md={24}>
        <Card bordered={false} {...bodyStyle}>
          <Browser data={browser} />
        </Card>
      </Col>
      
    </Row>
  )
}

StatisticDetail.propTypes = {
  statisticDetail: PropTypes.object,
}

export default connect(({ statisticDetail }) => ({ statisticDetail }))(StatisticDetail)
