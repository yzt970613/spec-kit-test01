import { describe, expect, it } from 'vitest';
import { useListDemo } from '../../src/composables/useListDemo';

describe('useListDemo', () => {
  it('loads initial data and finishes after exhausting batches', async () => {
    const demo = useListDemo();

    await demo.initialize();
    expect(demo.items.value.length).toBeGreaterThan(0);
    expect(demo.finished.value).toBe(false);

    await demo.onLoadMore();
    await demo.onLoadMore();
    await demo.onLoadMore();

    expect(demo.finished.value).toBe(true);
  });

  it('refreshes data without throwing', async () => {
    const demo = useListDemo();

    await demo.initialize();
    const initialLength = demo.items.value.length;

    await demo.onRefresh();

    expect(demo.items.value.length).toBe(initialLength);
    expect(demo.refreshing.value).toBe(false);
  });
});
