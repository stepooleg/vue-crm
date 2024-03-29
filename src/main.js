import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/dateFilter'
import currencyFilter from './filters/currencyFilter'
import messagePlugin from './utils/message.plagin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import { firebaseConfig } from '../firebase-config'

import Loader from '@/components/elements/Loader'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.filter('dateFilter', dateFilter)
Vue.filter('currencyFilter', currencyFilter)

Vue.component('Loader', Loader)

let app
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
