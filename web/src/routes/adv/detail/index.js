import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import {  Card,Button,Input } from 'antd'
import { TextAreaCard } from 'components'

const AdvDetail = ({ dispatch,advDetail }) => {
  const { data,currentName} = advDetail
  const textareaStyle = {
    minHeight: 496,
    width: '100%',
    background: '#f7f7f7',
    borderColor: '#F1F1F1',
    padding: '16px 8px',
  }

  const textAreaCardPros = {
    defaultValue:data,
    title:"广告",
    onSubmit(data) {
      dispatch({
        type: `advDetail/create`,
        payload: {...data}
      })
    }
  }

  oninput = (event)=>{
    dispatch({
      type: `advDetail/setData`,
      payload: {data:event.target.value}
    })
  }
  return (<div className="content-inner">
    <TextAreaCard style={{...textareaStyle}} {...textAreaCardPros} onInput={oninput}/>
  </div>)
}

AdvDetail.propTypes = {
  advDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ advDetail, loading }) => ({ advDetail, loading: loading.models.advDetail }))(AdvDetail)
