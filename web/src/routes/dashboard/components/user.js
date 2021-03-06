import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import styles from './user.less'
import CountUp from 'react-countup'
import { color } from 'utils'
const countUpProps = {
  start: 0,
  duration: 2.75,
  useEasing: true,
  useGrouping: true,
  separator: ',',
}

function User ({ avatar, name, email, role,chanegPassword }) {
  return (<div className={styles.user}>
    <div className={styles.header}>
      <div className={styles.headerinner}>
        <div className={styles.avatar} style={{ backgroundImage: `url(${avatar})` }} />
        <h5 className={styles.name}>{name}</h5>
        <p>{email}</p>
      </div>
    </div>
    <div className={styles.footer}>
      <Button type="ghost" size="large" onClick={chanegPassword}>修改密码</Button>
    </div>
  </div>)
}

User.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  chanegPassword: PropTypes.func,
}

export default User
