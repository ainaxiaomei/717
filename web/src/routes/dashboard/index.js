import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card } from 'antd'
import { NumberCard, User } from './components'
import styles from './index.less'
import { color } from 'utils'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function Dashboard ({ dashboard }) {
  const { numbers, user } = dashboard
  const numberCards = numbers.map((item, key) => <Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>)

  return (
    <Row gutter={24}>
      {numberCards}
      <Col lg={24} md={24}>
        <Card bordered={false} bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}>
          <User {...user} />
        </Card>
      </Col>
    </Row>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
