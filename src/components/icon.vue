<template>
  <svg class="icon">
    <use v-bind:xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);//这里的错位我用了alt+shift+enter来取消，但是还是有问题
try {importAll(require.context('../assets/icon', true, /\.svg$/));} catch (error) {console.log(error);}
export default {
  props: ['name'],
  name: 'icon'
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  width: 32px;
  height: 32px;
}
</style>