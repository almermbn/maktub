// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueResource from "vue-resource"
import HighchartsVue from 'highcharts-vue'
import VueAnimateNumber from 'vue-animate-number'
import GSignInButton from 'vue-google-signin-button'
import Money from 'v-money'
import BootstrapVue from 'bootstrap-vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueTheMask from 'vue-the-mask'



Vue.use(Money, {precision: 4})
Vue.use(VueResource)
Vue.use(GSignInButton)
Vue.use(HighchartsVue)
Vue.use(VueAnimateNumber)
Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)
Vue.use(VueTheMask)

Vue.config.productionTip = false;
Vue.prototype.$remoteUrl = "https://expressomaktub.com/";


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
