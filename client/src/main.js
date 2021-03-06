import Vue from 'vue';
import App from './App.vue';
import CKEditor from '@ckeditor/ckeditor5-vue';

import './plugins/vuetify';

import router from './router';
import store from '@/store';

Vue.use( CKEditor );
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
