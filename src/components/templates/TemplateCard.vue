<template>
  <article class="template-card">
    <div class="template-card__meta">
      <div>
        <p class="template-card__category">{{ categoryLabel }}</p>
        <h2 class="template-card__title">{{ entry.title }}</h2>
      </div>
      <van-tag :type="entry.status === 'ready' ? 'primary' : 'default'" plain>
        {{ entry.status === 'ready' ? '可浏览' : '开发中' }}
      </van-tag>
    </div>
    <p class="template-card__summary">{{ entry.summary }}</p>
    <ul class="template-card__tags">
      <li v-for="tag in entry.tags" :key="tag">{{ tag }}</li>
    </ul>
    <RouterLink
      v-if="entry.status === 'ready'"
      class="template-card__action"
      :to="entry.routePath"
    >
      进入查看
    </RouterLink>
    <span v-else class="template-card__action template-card__action--disabled">
      敬请期待
    </span>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import type { TemplateEntry } from '../../types/template';

const props = defineProps<{
  entry: TemplateEntry;
}>();

const categoryLabel = computed(() => {
  switch (props.entry.category) {
    case 'list':
      return '列表演示';
    case 'interaction':
      return '基础交互';
    case 'record':
      return '流程记录';
    default:
      return '模板预留';
  }
});
</script>

