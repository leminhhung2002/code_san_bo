<template>
  <div id="app">
    <IconCrypto v-for="ticker in cryptoList" :key="ticker" :coinname="ticker" color="color" format="svg" style="margin-right:10px"/>
  </div>
</template>

<script>
import IconCrypto from "./components/IconCrypto.vue";

export default {
  name: "app",
  components: {
    IconCrypto
  },
  data() {
    return {
      cryptoList: ["BTC", "ETH", "XRP", "ETC", "ADA", "EOS", "USDT", "Random"]
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
