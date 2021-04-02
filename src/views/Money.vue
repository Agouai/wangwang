<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types :xxx='34'/>
    <Notes/>
    <Tags/>
  </Layout>
</template>


<script lang="ts">
import NumberPad from '@/components/money/NumberPad.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';

export default {
  name: 'Money',
  components: {Notes, Types, Tags, NumberPad},
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
</style>

