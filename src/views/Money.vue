<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>


<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import FormItem from '@/components/money/FormItem.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

//TS引入JS
//import recordListModel.ts  from '@/recordListModel.ts.ts'
// const recordListModel.ts=require('@/recordListModel.ts.js').recordListModel.ts;
// const recordList:RecordItem[]=recordListModel.ts.fetch();

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
const recordList: RecordItem[] = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {Tags, FormItem, Types, NumberPad},
})
export default class Money extends Vue {
  tags = tagList;
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
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAT = new Date();
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch('recordListModel')
  onRecordListChange() {
    recordListModel.save(this.recordList);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>

<style lang="scss" scoped>
</style>

