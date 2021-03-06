import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VuePageTransition from 'vue-page-transition'


/* Requerimos los módulos necesarios */
// eslint-disable-next-line no-unused-vars
window.ModpackStore = require('./modules/ModpackStore') 




Vue.config.productionTip = false
Vue.use(VuePageTransition)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
