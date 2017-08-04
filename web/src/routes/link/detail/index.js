import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import {  Card,Button,Input } from 'antd'
import { TextAreaCard } from 'components'

const LinkDetail = ({ dispatch,linkDetail }) => {
  const { data,currentName} = linkDetail
  const textareaStyle = {
    minHeight: 496,
    width: '100%',
    background: '#f7f7f7',
    borderColor: '#F1F1F1',
    padding: '16px 8px',
  }

  const textAreaCardPros = {
    defaultValue:data,
    title:"链接",
    onSubmit(data) {
      dispatch({
        type: `linkDetail/create`,
        payload: {...data}
      })
    }
  }

  oninput = (event)=>{
    dispatch({
      type: `linkDetail/setData`,
      payload: {data:event.target.value}
    })
  }
  return (<div className="content-inner">
    <TextAreaCard style={{...textareaStyle}} {...textAreaCardPros} onInput={oninput}/>
  </div>)
}

LinkDetail.propTypes = {
  linkDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ linkDetail, loading }) => ({ linkDetail, loading: loading.models.linkDetail }))(LinkDetail)
