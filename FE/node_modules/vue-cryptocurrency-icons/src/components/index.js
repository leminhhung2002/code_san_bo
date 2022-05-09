import Vue from "vue";
import IconCrypto from "./IconCrypto.vue";

const Components = {
  IconCrypto
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;