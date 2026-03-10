import { computed, ref } from 'vue';
import { fetchListBatch, listDemoMeta, type ListDemoItem } from '../data/listDemoData';

export function useListDemo() {
  const items = ref<ListDemoItem[]>([]);
  const page = ref(0);
  const refreshing = ref(false);
  const loading = ref(false);
  const finished = ref(false);
  const errorMessage = ref('');

  const isEmpty = computed(() => !loading.value && items.value.length === 0 && !errorMessage.value);

  async function initialize() {
    if (items.value.length > 0) {
      return;
    }
    loading.value = true;
    errorMessage.value = '';
    try {
      const batch = await fetchListBatch(0);
      items.value = batch;
      page.value = 1;
      finished.value = batch.length < listDemoMeta.pageSize;
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : '列表初始化失败。';
    } finally {
      loading.value = false;
    }
  }

  async function onRefresh() {
    if (refreshing.value) {
      return;
    }
    refreshing.value = true;
    errorMessage.value = '';
    try {
      const batch = await fetchListBatch(0);
      items.value = batch;
      page.value = 1;
      finished.value = batch.length < listDemoMeta.pageSize;
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : '列表刷新失败。';
    } finally {
      refreshing.value = false;
    }
  }

  async function onLoadMore() {
    if (loading.value || refreshing.value || finished.value) {
      return;
    }
    loading.value = true;
    errorMessage.value = '';
    try {
      const batch = await fetchListBatch(page.value);
      if (batch.length === 0) {
        finished.value = true;
      } else {
        items.value = items.value.concat(batch);
        page.value += 1;
        if (batch.length < listDemoMeta.pageSize) {
          finished.value = true;
        }
      }
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : '加载更多失败。';
    } finally {
      loading.value = false;
    }
  }

  return {
    errorMessage,
    finished,
    initialize,
    isEmpty,
    items,
    loading,
    onLoadMore,
    onRefresh,
    refreshing
  };
}

