import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import styles from './index.less'

const KeywordDetail = ({ keywordDetail }) => {
  const { data } = keywordDetail
  console.log(data);
  const content = []
  for (let key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      content.push(<div key={key} className={styles.item}>
        <div>{key}</div>
        <div>{String(data[key])}</div>
      </div>)
    }
  }
  return (<div className="content-inner">
    <div className={styles.content}>
      {content}
    </div>
  </div>)
}

KeywordDetail.propTypes = {
  keywordDetail: PropTypes.object,
  loading: PropTypes.bool,
}

export default connect(({ keywordDetail, loading }) => ({ keywordDetail, loading: loading.models.keywordDetail }))(KeywordDetail)
