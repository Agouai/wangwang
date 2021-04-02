<template>
  <div class="nav-wrapper" :class="classPrefix && `${classPrefix}-content`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <div>
      <Nav/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: ['classPrefix']
}
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  overflow: auto;
  flex-grow: 1;
}
</style>