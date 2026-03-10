<template>
  <main class="app-shell">
    <PageHeader
      title="按钮与确认框模板"
      eyebrow="Interaction Template"
      description="展示按钮状态与按钮触发确认框的交互方式，适合作为其他页面的模板参考。"
    />

    <section class="demo-panel">
      <div class="demo-panel__intro">
        <h2>按钮模板</h2>
        <p>这里展示几种常见按钮状态，并提供一个按钮触发消息确认框的示例。</p>
      </div>

      <div class="space-y-4">
        <ButtonShowcase
          v-for="item in buttonDemoItems"
          :key="item.id"
          :item="item"
          @trigger="handleTrigger"
        />
      </div>

      <div class="result-banner" v-if="feedbackMessage">
        {{ feedbackMessage }}
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showConfirmDialog, showToast } from 'vant';
import PageHeader from '../components/common/PageHeader.vue';
import ButtonShowcase from '../components/templates/ButtonShowcase.vue';
import {
  buttonDemoItems,
  confirmDialogScenario,
  type ButtonDemoItem
} from '../data/interactionDemoData';

const feedbackMessage = ref('');

async function handleTrigger(item: ButtonDemoItem) {
  if (item.disabled || item.actionType !== 'confirm-dialog') {
    return;
  }

  try {
    await showConfirmDialog({
      title: confirmDialogScenario.title,
      message: confirmDialogScenario.message,
      confirmButtonText: confirmDialogScenario.confirmText,
      cancelButtonText: confirmDialogScenario.cancelText
    });
    feedbackMessage.value = confirmDialogScenario.confirmFeedback;
    showToast(confirmDialogScenario.confirmFeedback);
  } catch {
    feedbackMessage.value = confirmDialogScenario.cancelFeedback;
    showToast(confirmDialogScenario.cancelFeedback);
  }
}
</script>

