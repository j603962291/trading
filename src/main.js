import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as filters from '@/assets/js/common_filters.js';
import * as functions from '@/assets/js/common_functions.js'
import '@/assets/css/global.css';
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.scss';
import  api from '@/utils/api.js';
import VueI18n from 'vue-i18n'
// import echarts from 'echarts/lib/echarts'
// const echarts = require('echarts/lib/echarts');
// import myCharts from '@/assets/js/myCharts.js'
// import echarts from 'echarts'
import * as echarts from "echarts";


function toast ({title, message, type, timeout, cb}) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return iziToast[type]({title, message, timeout})
}
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}
Vue.use(VueNotifications, options)




var _lodash = require("lodash");
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-cn', // 语言标识
  messages: {
    'zh-cn': require('@/assets/lang/zh-cn'),
    'zh-tw': require('@/assets/lang/zh-tw'),
    'en': require('@/assets/lang/en')
  }
})



Vue.use(VueI18n)
//绑定全局方法
Vue.prototype.$functions = functions;

//绑定全局请求
Vue.prototype.$http = api;

//全局引入echarts
Vue.prototype.$echarts = echarts
// Vue.use(myCharts)

//注册全局组件
var requireComponent = require.context(
    "@/components/j-components",
    false,
    /j-[\w-]+\.vue$/
);
requireComponent.keys().forEach(fileName => {
  var componentConfig = requireComponent(fileName);
  var componentName = _lodash.upperFirst(
      _lodash.camelCase(
          fileName
              .replace(/^\.\//, "")
              .replace(/\.\w+$/, "")
      )
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});
//注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});



Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
