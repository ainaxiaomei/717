import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader,Select } from 'antd'
import city from '../../utils/city'
import  md5 from 'md5'

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
    getFieldValue,
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
      onOk({...data,password:md5(data.password),newpassword:md5(data.newpassword)})
    })
  }

  const checkPassword = (rule, value, callback) => {
    if (value && value !== getFieldValue('newpassword')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  }
  const checkConfirm = (rule, value, callback) => {
      validateFields(['confirmPassword'], { force: true });
      callback();
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="原密码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '原密码不能为空!'
              },

            ],
          })(<Input type="password"/>)}
        </FormItem>
        <FormItem label="新密码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('newpassword', {
            rules: [
              {
                required: true,
                message: '新密码不能为空!'
              },
              {
              validator: checkConfirm,
              }
            ],
          })(<Input type="password"/>)}
        </FormItem>
        <FormItem label="确认密码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('confirmPassword', {
            rules: [
              {
                required: true,
                message: '确认密码不能为空!'
              },
              {
              validator: checkPassword,
              }
            ],
          })(<Input type="password"/>)}
        </FormItem>

      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
