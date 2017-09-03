import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input } from 'antd'
import { config } from 'utils'
import styles from './index.less'

const FormItem = Form.Item

const Login = ({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  const { loginLoading,mode} = login

  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  function handleReset (){
    alert("reset");
  }

  function handleRegister (){
    alert("register");
  }

  function changeMode (mode){
    dispatch({ type: 'login/changMode', payload:{mode:mode}});
  }

  return (
    <div className={styles.form}>
      <div className={styles.logo}>
        <img alt={'logo'} src={config.logo} />
        <span>{config.name}</span>
      </div>
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="登陆密码" />)}
        </FormItem>
        <FormItem hasFeedback style = { mode == "login" ? {display:'none'} : {display:''}}>
          {getFieldDecorator('confirm', {
            rules: [
              {
                //required: true,
              },
            ],
          })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="确认密码" />)}
        </FormItem>
        <Row>
          <Button type="primary" size="large" onClick={handleOk} loading={loginLoading}>
            { mode == "register" ? "注册" : "确定"}
          </Button>
          <p>

            <span><a href="#" onClick={()=>{changeMode('reset')}}>忘记密码</a></span>
            <span><a href="#" onClick={()=>{changeMode('register')}}>免费注册</a></span>
          </p>
        </Row>

      </form>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

export default connect(({ login }) => ({ login }))(Form.create()(Login))
