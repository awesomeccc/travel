import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 解决移动端300ms延迟

new Vue({
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   components:{ App },
//  })
