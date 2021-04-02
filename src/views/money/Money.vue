<template>
  <Layout class-prefix="layout">
    <number-pad/>
    <types/>
    <notes/>
    <tags/>
  </Layout>
</template>


<script lang="ts">
import NumberPad from '@/views/money/numberPad'
import Tags from '@/views/money/tags'
import Types from '@/views/money/types'
import Notes from '@/views/money/notes'

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

