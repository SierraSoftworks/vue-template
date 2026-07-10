import Vue from "vue";

// Element UI is loaded as a global from the CDN script tag in index.html
const ElementUI = window.ELEMENT;
const locale = window.ELEMENT.lang && window.ELEMENT.lang.en;
Vue.use(ElementUI, { locale });

import("./app.js");
