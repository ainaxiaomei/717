import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import {  Card,Button,Input } from 'antd'
import { TextAreaCard } from 'components'

const KeywordDetail = ({ dispatch,keywordDetail }) => {
  const { data,currentName} = keywordDetail
  const textareaStyle = {
    minHeight: 496,
    width: '100%',
    background: '#f7f7f7',
    borderColor: '#F1F1F1',
    padding: '16px 8px',
  }

  const textAreaCardPros = {
    defaultValue:data,
    onSubmit(data) {
      dispatch({
        type: `keyword/create`,
        payload: {name:currentName,...data}
      })
    }
  }

  return (<div className="content-inner">
    <TextAreaCard style={{...textareaStyle}} {...textAreaCardPros}/>
  </div>)
}

KeywordDetail.propTypes = {
  keywordDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ keywordDetail, loading }) => ({ keywordDetail, loading: loading.models.keywordDetail }))(KeywordDetail)
