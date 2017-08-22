import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Select } from 'antd'
import city from '../../utils/city'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  keyGroup=[],
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  const Option = Select.Option;
  const keyGroupOptions = [];
  for (let i = 0; i < keyGroup.length; i++) {
  keyGroupOptions.push(<Option key={keyGroup[i].name}>{keyGroup[i].name}</Option>);
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="网站主页" hasFeedback {...formItemLayout}>
          {getFieldDecorator('root', {
            initialValue: item.root,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="克隆主页" hasFeedback {...formItemLayout}>
          {getFieldDecorator('index', {
            initialValue: item.index,
            rules: [
              {
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="网站类型" hasFeedback {...formItemLayout}>
          {getFieldDecorator('web_type', {
            initialValue: item.web_type,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="网站名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('keywords', {
            initialValue: item.keywords,
            rules: [
              {
                required: true,
              },
            ],
          })(<Input />)}
        </FormItem>
        <FormItem label="关键词组" hasFeedback {...formItemLayout}>
          {getFieldDecorator('keywords_group', {
            initialValue: item.keywords_group,
            rules: [
              {
                required: true,
              },
            ],
          })(<Select>{keyGroupOptions}</Select>)}
        </FormItem>
        <FormItem label="克隆个数" hasFeedback {...formItemLayout}>
          {getFieldDecorator('clone_number', {
            initialValue: item.clone_number,
          })(<Input />)}
        </FormItem>
        <FormItem label="采集网站" hasFeedback {...formItemLayout}>
          {getFieldDecorator('collection_source', {
            initialValue: item.collection_source,
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
  keyGroup: PropTypes.array,
}

export default Form.create()(modal)
