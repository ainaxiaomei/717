const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const APIV3 = '/api/v3'

module.exports = {
  name: '红马站群系统1.0',
  prefix: 'antdAdmin',
  footerText: '红马站群系统1.0  © 2017 ',
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
    log:{
      register:`${APIV3}/user_insert`,
      login:`${APIV3}/user_login`,
      check:`${APIV3}/user_check`,
      logout:`${APIV3}/user_logout`,
      changePassword:`${APIV3}/user_update`,
      query:`${APIV3}/user_select`,
      delete:`${APIV3}/user_delete`,

    },
    website: {
      add:`${APIV3}/domain_insert`,
      delete:`${APIV3}/domain_delete`,
      update:`${APIV3}/domain_update`
    },
    statistics: {
      get:`${APIV3}/statistics`,
      add:`${APIV3}/statistics`,
      delete:`${APIV3}/domain_delete`,
      update:`${APIV3}/domain_update`
    },
    statistic: {
      get:`${APIV3}/statistics_details`,
    },
    keywords:{
      get:`${APIV3}/keywords_select`,
      delete:`${APIV3}/domain_delete`
    },
    keyword: {
      get:`${APIV3}/keywords_select`,
      add:`${APIV3}/keywords_insert`,
      delete:`${APIV3}/keywords_delete`,
    },
    links:{
      get:`${APIV3}/links_select`,
    },
    link:{
      add:`${APIV3}/links_insert`,
    },
    advs:{
      get:`${APIV3}/ad_select`,
    },
    adv:{
      add:`${APIV3}/ad_insert`,
    }
  },
}
