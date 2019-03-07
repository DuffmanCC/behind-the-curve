import Vue from 'vue'
import App from './App.vue'
import * as VueKonva from 'vue-konva'
import VModal from 'vue-js-modal'
import "./main.css"
import * as VueGoogleMaps from 'vue2-google-maps'
import PrettyCheck from 'pretty-checkbox-vue/check';

Vue.config.productionTip = false;
Vue.use(VueKonva);
Vue.use(VModal, { dialog: true });
Vue.component('pCheck', PrettyCheck);

window.Event = new Vue();

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB2A0Rc9Mssp2Cj9EyzjfpCcN3yLO3iL1c",
    libraries: "geometry,places,drawing",
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
