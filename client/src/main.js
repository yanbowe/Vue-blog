// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//将全局的样式引入进来
import '@/assets/style/All.scss'
//引入动画库
import './assets/style/animate.min.css'
import ElementUi from 'element-ui'
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
import '@/permission'
//使用element-ui
Vue.use(ElementUi)
//引入粒子
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
