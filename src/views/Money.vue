<template>
  <Layout class-prefix="layout">
    <number-pad/>
    <types/>
    <notes/>
    <tags/>
  </Layout>
</template>


<script lang="ts">
import NumberPad from '@/components/money/numberPad.vue'
import Tags from '@/components/money/tags.vue'
import Types from '@/components/money/types.vue'
import Notes from '@/components/money/notes.vue'

export default {
  name: 'Money',
  components: {Notes, Types, Tags, NumberPad},
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
</style>

