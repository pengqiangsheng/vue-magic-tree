import Vue from 'vue'
import App from './App.vue'
import './style/iconfont.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})