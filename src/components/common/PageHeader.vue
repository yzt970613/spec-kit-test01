<template>
  <header class="page-header">
    <button
      v-if="showBack"
      class="page-header__back"
      type="button"
      @click="goBack"
    >
      返回
    </button>
    <div>
      <p class="page-header__eyebrow">{{ eyebrow }}</p>
      <h1 class="page-header__title">{{ title }}</h1>
      <p v-if="description" class="page-header__description">{{ description }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = withDefaults(
  defineProps<{
    title: string;
    eyebrow?: string;
    description?: string;
    showBack?: boolean;
  }>(),
  {
    eyebrow: '组件模板中心',
    description: '',
    showBack: true
  }
);

const router = useRouter();

function goBack() {
  router.push('/');
}
</script>

