import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col, Card} from 'antd'
import { NumberCard, User } from './components'
import styles from './index.less'
import { color } from 'utils'
import Modal from './Modal.js'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function Dashboard ({ dashboard,dispatch}) {
    const { numbers, user, modalType, modalVisible } = dashboard
    const numberCards = numbers.map((item, key) => <Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
    </Col>)

    const modalProps = {
      visible: modalVisible,
      title:'修改密码',
      onOk (data) {
        dispatch({
          type: 'dashboard/changePassword',
          payload: data,
        })
      },
      onCancel () {
        dispatch({
          type: 'dashboard/hideModal',
        })
      },
  }

  return (
    <div>
      <Row gutter={24}>
        {numberCards}
        <Col lg={24} md={24}>
          <Card bordered={false} bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}>
            <User {...user} chanegPassword = {()=>{
              dispatch({
              type: 'dashboard/showModal',
              payload: {
              modalType: 'create',
              }})}}/>
          </Card>
        </Col>
      </Row>
      {modalVisible && <Modal {...modalProps} />}
    </div>
    
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
}

export default connect(({ dashboard }) => ({ dashboard }))(Dashboard)
