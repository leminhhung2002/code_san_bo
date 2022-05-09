<template>
  <img :src="mediapath" :alt="coinname + '-logo'" @error="imageLoadError">
</template>

<script>
export default {
  name: "IconCrypto",
  props: {
    coinname: {
      required: true
    },
    color: {
      type: String,
      default: "color",
      validator: function(value) {
        return ["color", "black", "white"].indexOf(value) !== -1;
      }
    },
    format: {
      type: String,
      default: "svg",
      validator: function(value) {
        return ["32", "128", "svg"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      ext: ".png"
    };
  },
  created() {
    if (this.format === "svg") {
      this.ext = ".svg";
    }
  },
  methods: {
    imageLoadError(event) {
      event.target.src =
        "https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.16.1/svg/black/generic.svg";
    }
  },
  computed: {
    mediapath() {
      let coin =
        this.coinname !== undefined && this.coinname !== ""
          ? this.coinname.toLowerCase()
          : "generic";
      return `https://cdn.jsdelivr.net/npm/cryptocurrency-icons@0.16.1/${
        this.format
      }/${this.color}/${coin + this.ext}`;
    }
  }
};
</script>