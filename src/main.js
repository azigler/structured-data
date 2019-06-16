import Vue from 'vue'
import component from './StructuredData.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(component),
}).$mount('#app')

export default component;