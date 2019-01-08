import Vue from 'vue'
import GettingData from './components/GettingData.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(GettingData)
}).$mount("#app");
