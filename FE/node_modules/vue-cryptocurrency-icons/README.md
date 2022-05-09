# Vue Cryptocurrency Icons

A Vue.js component for the project [`cryptocurrency-icons`](https://github.com/atomiclabs/cryptocurrency-icons): 6000 icons – almost 400 crypto currencies, in 4 styles and a range of sizes.

![screenshot icons](screenshot.png)

## Quick start

```
npm install --save vue-cryptocurrency-icons
```

```js
import Vue from "vue";
import IconCrypto from "vue-cryptocurrency-icons";

Vue.use(IconCrypto);
```

## Example

```vue
<template>
  <div id="app">
    <IconCrypto coinname="ETH" color="color" format="svg" />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
```

## Documentation

### Props

**coinname**

The name of the coin.

- type: `String`
- required: `true`

If the coin name passed as props does not exist, an a [`generic icon`](https://github.com/atomiclabs/cryptocurrency-icons/blob/master/svg/color/generic.svg) is used.

**color**

The color of the coin.

- type: `String`
- default: `color`
- available values: `color` - `black` - `white`

**format**

- type: `String`
- default: `32`
- available values: `32` - `128` - `svg`
