/*
 * This file is part of BlueMap, licensed under the MIT License (MIT).
 *
 * Copyright (c) Blue (Lukas Rieger) <https://bluecolored.de>
 * Copyright (c) contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import Vue from 'vue'
import App from './App.vue'
import { BlueMapApp } from "@/js/BlueMapApp";
import i18n from './i18n';

import { getLCP, getFID, getCLS } from 'web-vitals';

// vitals
getCLS(console.log)
getFID(console.log)
getLCP(console.log)

// utils
String.prototype.includesCI = function (val) {
  return this.toLowerCase().includes(val.toLowerCase());
}

// bluemap app
const bluemap = new BlueMapApp(document.getElementById("map-container"));
window.bluemap = bluemap;

// init vue
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, '$bluemap', {
  get() { return bluemap; }
});

const vue = new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app');

// load languages
i18n.loadLanguageSettings().catch(error => console.error(error));

// load bluemap next tick (to let the assets load first)
vue.$nextTick(() => {
  bluemap.load().catch(error => console.error(error));
});
