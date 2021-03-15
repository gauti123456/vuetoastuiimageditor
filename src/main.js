import Vue from "vue";
import App from "./App.vue";
// To use the basic UI, the svg files for the icons is required.
import 'tui-image-editor/dist/svg/icon-a.svg';
import 'tui-image-editor/dist/svg/icon-b.svg';
import 'tui-image-editor/dist/svg/icon-c.svg';
import 'tui-image-editor/dist/svg/icon-d.svg';

// Load Style Code
import 'tui-image-editor/dist/tui-image-editor.css';

import {ImageEditor} from '@toast-ui/vue-image-editor';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
