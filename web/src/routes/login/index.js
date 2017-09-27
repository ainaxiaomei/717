import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Input, Icon, Checkbox } from 'antd'
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

  function handleLogin () {
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
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/register', payload: values })
    })
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
          })(<Input  prefix={<Icon type="user" style={{ fontSize: 13 }} />} size="large" onPressEnter={handleLogin} placeholder="用户名" />)}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
              },
            ],
          })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} size="large" type="password" onPressEnter={handleLogin} placeholder="登陆密码" />)}
        </FormItem>
        <FormItem hasFeedback style = { mode == "login" ? {display:'none'} : {display:''}}>
          {getFieldDecorator('confirm', {
            rules: [
              {
                //required: true,
              },
            ],
          })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} size="large" type="password" onPressEnter={handleLogin} placeholder="确认密码" />)}
        </FormItem>

        <Row>
        <FormItem>
          {getFieldDecorator('remember', 
            { 
              valuePropName: 'checked',
              initialValue: true,
            })
          (
            <Checkbox>下次自动登录</Checkbox>
          )}
          <a className="login-form-forgot" href="" style = {{float: 'right'}}>登录遇到问题</a>
          <Button type="primary" size="large" onClick={()=>{ mode == "login" ? handleLogin() : handleRegister()}} loading={loginLoading}>
            { mode == "register" ? "注册" : "确定"}
          </Button>
          </FormItem>
          <p>
            <span style={{display:'none'}}><a href="#" onClick={()=>{changeMode('reset')}}>忘记密码</a></span>
            <span><a href="#" style = {{display:'none'}} onClick={()=>{changeMode('register')}}>免费注册</a></span>
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
