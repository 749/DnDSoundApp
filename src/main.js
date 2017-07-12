// Import Vue
import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// Import App Custom Styles
import MaterialIcons from './assets/css/material-icons.css'
import AppStyles from './assets/sass/main.scss'

// Import App Component
import App from './main.vue'

import routes from './routes.js'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({routes})

Vue.material.registerTheme({
  app: {
    primary: 'cyan'
  },
  music: {
    primary: 'indigo'
  },
  sound: {
	  primary: 'deep-purple'
  },
  dice: {
	  primary: 'red'
  },
  crit: {
    primary: 'teal'
  }
})

window.bus = new Vue();

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Register App Component
  components: {
    app: App
  },
  router
})
