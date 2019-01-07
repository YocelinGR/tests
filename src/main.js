import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import GettingData from './components/GettingData.vue'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(GettingData),
}).$mount('#app')
