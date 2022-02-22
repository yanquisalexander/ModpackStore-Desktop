import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import firebase from 'firebase';
// eslint-disable-next-line no-unused-vars
require('firebase/auth')

const firebaseConfig = {
  apiKey: "AIzaSyBvxC66GhpMklkslro3Ka61__D_PQ5k3BQ",
  authDomain: "modpackstore.firebaseapp.com",
  projectId: "modpackstore",
  storageBucket: "modpackstore.appspot.com",
  messagingSenderId: "992733945544",
  appId: "1:992733945544:web:f75931a75dfa4d8f4e4ffd",
  measurementId: "G-PVCLZMZCXC"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars


/* Requerimos los módulos necesarios */
// eslint-disable-next-line no-unused-vars
window.ModpackStore = require('./modules/ModpackStore') 



Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
