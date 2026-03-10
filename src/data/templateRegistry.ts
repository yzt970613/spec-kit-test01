import type { TemplateEntry } from '../types/template';

const templateEntries = [
  {
    id: 'list-template',
    title: '列表组件模板',
    summary: '演示下拉刷新、上拉加载、空状态和无更多内容状态。',
    routePath: '/templates/list',
    category: 'list',
    status: 'ready',
    tags: ['列表', '刷新', '加载更多'],
    sortOrder: 1
  },
  {
    id: 'interaction-template',
    title: '按钮与确认框模板',
    summary: '演示按钮状态、强调操作和按钮触发的消息确认框交互。',
    routePath: '/templates/interaction',
    category: 'interaction',
    status: 'ready',
    tags: ['按钮', '确认框', '交互'],
    sortOrder: 2
  },
  {
    id: 'speckit-record',
    title: 'Speckit 生成记录',
    summary: '记录本次对话中的提问内容，以及如何通过 Speckit 生成项目文档。',
    routePath: '/templates/speckit-record',
    category: 'record',
    status: 'ready',
    tags: ['流程', '记录', 'Speckit'],
    sortOrder: 3
  },
  {
    id: 'future-template',
    title: '后续模板预留位',
    summary: '用于后续继续扩展新的组件模板，不需要改动入口页结构。',
    routePath: '/templates/future',
    category: 'other',
    status: 'coming-soon',
    tags: ['扩展', '预留'],
    sortOrder: 4
  }
] satisfies TemplateEntry[];

export const templateRegistry: TemplateEntry[] = [...templateEntries].sort(
  (left, right) => left.sortOrder - right.sortOrder
);
