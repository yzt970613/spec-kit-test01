<template>
  <main class="app-shell">
    <PageHeader
      title="列表组件模板"
      eyebrow="List Template"
      description="演示下拉刷新、上拉加载、空状态与无更多数据的常见纯前端写法。"
    />

    <section class="demo-panel">
      <div class="demo-panel__intro">
        <h2>演示说明</h2>
        <p>向下拉动触发刷新，滚动到底部触发加载更多。当前数据全部为前端模拟数据。</p>
      </div>

      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="已经到底，没有更多内容了"
          @load="onLoadMore"
        >
          <div v-if="errorMessage" class="state-card state-card--error">
            {{ errorMessage }}
          </div>
          <div v-else-if="isEmpty" class="state-card">
            当前没有可展示的数据，你可以尝试下拉刷新。
          </div>
          <div v-else class="space-y-3">
            <article
              v-for="item in items"
              :key="item.id"
              class="list-item-card"
            >
              <div class="list-item-card__meta">
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
                <van-tag type="success" plain>{{ item.statusLabel }}</van-tag>
              </div>
              <small>{{ item.createdAtLabel }}</small>
            </article>
          </div>
        </van-list>
      </van-pull-refresh>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import PageHeader from '../components/common/PageHeader.vue';
import { useListDemo } from '../composables/useListDemo';

const {
  errorMessage,
  finished,
  initialize,
  isEmpty,
  items,
  loading,
  onLoadMore,
  onRefresh,
  refreshing
} = useListDemo();

onMounted(() => {
  void initialize();
});
</script>

