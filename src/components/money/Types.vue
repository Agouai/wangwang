<template>
  <div>
    <ul class="types">
      <li :class="value==='-'&&'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="value==='+'&&'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop() readonly value!: string;
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value',type)
  }
}
//  @Prop(Number) xxx: number | undefined;
//   mounted() {
//     if (this.xxx === undefined) {
//       console.log('xxx的类型不对');
//     } else {
//       console.log(this.xxx.toString());
//     }
//   }
// }
// export default {
//   name: 'types',
//   props:['xxx'],
//   mounted() {
//     console.log(this.xxx)
//   },
//   data() {
//     return {
//       type: '-'//'-'表示支出，'+'表示收入
//     }
//   },
//   methods: {
//     selectType(type) {
//       if (type !== '-' && type !== '+') {
//         throw new Error('type is unknown')
//       }
//       this.type = type
//     }
//   },
// }
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      border-bottom: 4px solid;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>