import Vue from 'nativescript-vue';
import {
  ModalStack,
  overrideModalViewMethod,
  VueWindowedModal,
} from 'nativescript-windowed-modal';

import Home from './components/Home';

Vue.config.silent = false;
overrideModalViewMethod();

Vue.registerElement('ModalStack', () => ModalStack);
Vue.use(VueWindowedModal);

new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();
