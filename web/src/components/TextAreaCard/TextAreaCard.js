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
      value: ReactDOM.findDOMNode(this.refs.keyTextArea).value,
    }
    if (this.props.onSubmit) this.props.onSubmit(data)
  }
  render () {
    const { defaultValue, style,onInput,title} = this.props
    const { TextArea } = Input;
    return (
      <Card
        title={title}
        style={{ overflow: 'visible' }}
        extra={<Button type="primary" size="large" onClick={this.handleSubmit}> 保存 </Button>}>
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
  defaultValue:PropTypes.string,
  title:PropTypes.string,
  onInput:PropTypes.func
}

export default TextAreaCard
