<template>
  <div>
    <label class="notes">
      {{ value }}
      <span class="name">备注</span>
      <input type="text"
             v-model="value"
             placeholder="在这里输入文字">
      <!--      <input type="text" :value="value"-->
      <!--             @input="onInput"-->
      <!--             placeholder="">-->
      <!--      上述代码可以被v-model 简写-->
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
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