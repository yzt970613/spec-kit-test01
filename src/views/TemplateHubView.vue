<template>
  <main class="app-shell">
    <section class="hero-panel">
      <p class="hero-panel__eyebrow">Vue 3 Demo</p>
      <h1>组件模板中心</h1>
      <p>
        这个入口页用于集中浏览当前 demo 中已经实现的模板页面，也为后续新增模板预留统一结构。
      </p>
    </section>

    <section class="grid gap-4 md:grid-cols-2">
      <TemplateCard
        v-for="entry in templateRegistry"
        :key="entry.id"
        :entry="entry"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import TemplateCard from '../components/templates/TemplateCard.vue';
import { templateRegistry } from '../data/templateRegistry';
</script>

