import type { SpeckitQuestionRecord } from '../types/speckit-record';

export const speckitQuestionRecords: SpeckitQuestionRecord[] = [
  {
    id: 'constitution',
    sequence: 1,
    stage: 'constitution',
    questionText:
      '这是一个使用 spec-kit 生成的前端项目，作为 demo 使用，主要框架使用 TypeScript、Vue3.x、Less、Tailwind，可以添加各种插件工具，但是不能偏离主要框架。',
    summary:
      '这一步明确了项目宪章，限定主技术栈并允许在 Vue 生态内按需引入插件。'
  },
  {
    id: 'spec',
    sequence: 2,
    stage: 'spec',
    questionText:
      '作为一个纯前端 demo 项目，需要提供列表组件、按钮组件、消息确认框、入口页面和记录当前对话提问内容的页面。',
    summary:
      '这一步产出了功能规格，定义了入口页、组件模板页以及 Speckit 记录页的用户价值和范围。'
  },
  {
    id: 'plan',
    sequence: 3,
    stage: 'plan',
    questionText: '继续生成实现计划，确定技术方案和页面结构。',
    summary:
      '这一步把实现方案收敛为 Vue 3 + TypeScript + Vue Router + Vant，并设计了注册表驱动的页面结构。'
  },
  {
    id: 'tasks',
    sequence: 4,
    stage: 'tasks',
    questionText: '继续生成任务清单，按用户故事拆分具体文件级任务。',
    summary:
      '这一步把工作拆成可执行任务，覆盖基础骨架、列表模板、交互模板和 Speckit 记录页。'
  },
  {
    id: 'implement',
    sequence: 5,
    stage: 'implement',
    questionText: '开始实际实现这个纯前端 demo 工程。',
    summary:
      '这一步落地前端源码、路由、页面、数据、样式和验证说明，使文档产物变成可运行工程。'
  }
];

