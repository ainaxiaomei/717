import './index.html';
import './index.less';
import './static/h-ui/css/H-ui.css'
import './static/h-ui.admin/css/H-ui.admin.css'
import './lib/Hui-iconfont/1.0.8/iconfont.css'
import './static/h-ui.admin/skin/default/skin.css'
import './static/h-ui.admin/css/style.css'
import dva from 'dva';

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
//app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
