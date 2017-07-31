import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styles from './TextAreaCard.less'
import { Card,Input,Button } from 'antd'

class TextAreaCard extends React.Component {
  state = {
  }
  handleSubmit = () => {
    const data = {
      keyword: ReactDOM.findDOMNode(this.refs.keyTextArea).value,
    }
    if (this.props.onSubmit) this.props.onSubmit(data)
  }
  render () {
    const { defaultValue, style,onInput} = this.props
    const { TextArea } = Input;
    return (
      <Card
        title="Keys"
        style={{ overflow: 'visible' }}
        extra={<Button type="primary" size="large" onClick={this.handleSubmit}> Save </Button>}>
        <TextArea
          style={style}
          value = {defaultValue}
          ref="keyTextArea"
          onChange = {onInput}
        />
      </Card>
    )
  }
}


TextAreaCard.propTypes = {
  onSubmit: PropTypes.func,
  style: PropTypes.object,
  defaultValue:PropTypes.string
}

export default TextAreaCard
