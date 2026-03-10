<template>
  <main class="app-shell">
    <PageHeader
      title="Speckit 生成记录"
      eyebrow="Speckit Record"
      description="记录当前对话中用户的主要提问内容，以及每一步如何推动文档和工程生成。"
    />

    <section class="demo-panel">
      <div class="demo-panel__intro">
        <h2>当前对话提问记录</h2>
        <p>该页面使用本地静态数据呈现本次对话中的关键提问，并说明 Speckit 的产出阶段。</p>
      </div>

      <SpeckitRecordList :records="speckitQuestionRecords" />

      <section class="demo-panel__summary">
        <h2>如何通过 Speckit 生成项目</h2>
        <ul>
          <li>先通过 constitution 收敛项目主框架和约束边界。</li>
          <li>再通过 spec 定义用户故事、范围、成功标准和页面目标。</li>
          <li>随后通过 plan 确定技术方案、页面结构、数据模型和路由契约。</li>
          <li>接着通过 tasks 拆分为文件级可执行任务。</li>
          <li>最后进入 implement 阶段，把文档约束真正变成前端工程代码。</li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import PageHeader from '../components/common/PageHeader.vue';
import SpeckitRecordList from '../components/templates/SpeckitRecordList.vue';
import { speckitQuestionRecords } from '../data/speckitRecords';
</script>

