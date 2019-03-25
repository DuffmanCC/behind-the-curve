import Vue from 'vue';
import App from './App.vue';
import * as VueKonva from 'vue-konva';
import VModal from 'vue-js-modal';
import "./main.css";
import * as VueGoogleMaps from 'vue2-google-maps';
import PrettyCheck from 'pretty-checkbox-vue/check';
import buttonToggle from './components/buttonToggle.vue';
import SvgIcon from 'vue-svgicon';
 
// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
    tagName: 'svgicon'
})

Vue.config.productionTip = false;
Vue.use(VueKonva);
Vue.use(VModal, { dialog: true });
Vue.component('pCheck', PrettyCheck);
Vue.component('buttonToggle', buttonToggle);

window.Event = new Vue();

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDygk65evGwqGAQXOhX8uXGZtzZCgxs7xQ",
    libraries: "geometry,places,drawing",
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')
