<template>
  <Layout class-prefix="layout">
    {{ recordList }}
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>


<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import {Component, Watch} from 'vue-property-decorator';
import model from '@/model.ts';

//TS引入JS
//import model  from '@/model.ts'
// const model=require('@/model.js').model;
// const recordList:RecordItem[]=model.fetch();

//版本变更
// const version = window.localStorage.getItem('version') || '0';
// const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
// if (version === '0.0.1') {
//   //数据库升级，数据迁移
//   recordList.forEach(record => {
//     record.createdAT = new Date(2021, 5, 12);
//   });
//   //保存数据
//   window.localStorage.setItem('recordList', JSON.stringify(recordList));
// }
// window.localStorage.setItem('version', '0.0.2');
const recordList: RecordItem[] = model.fetch();

@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  recordList: RecordItem[] = recordList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const record2: RecordItem = model.clone(this.record);
    record2.createdAT = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordListChange() {
    model.save(this.recordList);
  }
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

