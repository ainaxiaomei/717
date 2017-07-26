const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const APIV3 = '/api/v3'

module.exports = {
  name: 'AntD Admin',
  prefix: 'antdAdmin',
  footerText: 'Ant Design Admin  © 2017 zuiidea',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  YQL: ['http://www.zuimeitianqi.com'],
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
    websites:{
      get:`${APIV3}/domain_select`,
      delete:`${APIV3}/domain_delete`
    },
    website: {
      add:`${APIV3}/domain_insert`,
      delete:`${APIV3}/domain_delete`,
      update:`${APIV3}/domain_update`
    },
    keywords:{
      get:`${APIV3}/keywords_select`,
      delete:`${APIV3}/domain_delete`
    },
    keyword: {
      add:`${APIV3}/domain_insert`,
      delete:`${APIV3}/keywords_delete`,
      update:`${APIV3}/domain_update`
    }
  },
}
