export interface ListDemoItem {
  id: string;
  title: string;
  description: string;
  statusLabel: string;
  createdAtLabel: string;
}

const TOTAL_BATCHES = 3;
const PAGE_SIZE = 6;

function makeItem(batch: number, index: number): ListDemoItem {
  const sequence = batch * PAGE_SIZE + index + 1;
  return {
    id: `list-item-${sequence}`,
    title: `模板卡片 ${sequence}`,
    description: `这是用于演示列表刷新和加载更多的第 ${sequence} 条模拟数据。`,
    statusLabel: sequence % 2 === 0 ? '已同步' : '待查看',
    createdAtLabel: `第 ${batch + 1} 批 / 项 ${index + 1}`
  };
}

export async function fetchListBatch(page: number): Promise<ListDemoItem[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (page >= TOTAL_BATCHES) {
    return [];
  }

  return Array.from({ length: PAGE_SIZE }, (_, index) => makeItem(page, index));
}

export const listDemoMeta = {
  totalBatches: TOTAL_BATCHES,
  pageSize: PAGE_SIZE
};

