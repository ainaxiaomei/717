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
  const {data} = statisticDetail;
  const days = [
  "d1","d2","d3","d4","d5","d6","d7","d8","d9","d10",
  "d11","d12","d13","d14","d15","d16","d17","d18","d19","d20",
  "d21","d22","d23","d24","d25","d26","d27","d28","d29","d30",
  ];
  console.log(data[days[2]]);
  var browser = new Array();
  for(let i = 0;i<=30;i++){
    if(!data[days[i]]){

      break;

    }else{
      var obj = new Object();
      obj.day = `${i + 1} 号`;
      obj.data = data[days[i]]
      browser.push(obj);
    }
   
  }
  // const browser = [
  //         {
  //           "day": "1 号",
  //           "data": 11
  //         },
  //         {
  //           "day": "2 号",
  //           "data": 12
  //         },
  //         {
  //           "day": "3 号",
  //           "data": 13
  //         },
  //         {
  //           "day": "4 号",
  //           "data": 113
  //         },{
  //           "day": "5 号",
  //           "data": 113
  //         },{
  //           "day": "6 号",
  //           "data": 113
  //         },{
  //           "day": "7 号",
  //           "data": 113
  //         },{
  //           "day": "8 号",
  //           "data": 113
  //         }
  //       ]

  const sales = browser; 
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
