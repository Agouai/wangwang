<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text"
             v-model="value"
             :placeholder="this.placeholder">
      <!--      <input type="text" :value="value"-->
      <!--             @input="onInput"-->
      <!--             placeholder="">-->
      <!--      上述代码可以被v-recordListModel.ts 简写-->
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

  // value = '';
  // onInput(event: KeyboardEvent) {
  //   const input = event.target as HTMLInputElement;
  //   this.value = input.value;
  // }
}
// export default {
// name: "notes"
// }
</script>

<style lang="scss" scoped>
.notes {
  background: #f5f5f5;
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>