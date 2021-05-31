<template>
  <Layout>
    <div   class="tags">
      <router-link class="tag"
                    v-for="tag in tags" :key="tag.id"
                   :to="`/labeis/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <icon name="right"/>
      </router-link>
    </div>
    <div class="newTag-wrapper">
      <Button class="newTag" @click="newtag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';
import Button from '@/components/Button.vue';

tagListModel.fetch();
@Component({
  components: {Button}
})
export default class Labeis extends Vue {
  tags = tagListModel.data;

  newtag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      if (name) {
        const message = tagListModel.new(name);
        if (message === 'duplicated') {
          window.alert('标签名重复');
        }else if (message==='success'){
          window.alert('添加成功')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 20px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;

    svg {
      color: #666;
      margin-right: 16px;
      width: 20px;
      height: 20px;
    }
  }
}

.newTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;

  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }

}
</style>