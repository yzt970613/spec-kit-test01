<template>
  <ol class="record-list">
    <li v-for="record in records" :key="record.id" class="record-list__item">
      <div class="record-list__badge">Q{{ record.sequence }}</div>
      <div class="record-list__content">
        <p class="record-list__stage">{{ stageLabel(record.stage) }}</p>
        <h3>{{ record.questionText }}</h3>
        <p>{{ record.summary }}</p>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
import type { SpeckitQuestionRecord, SpeckitStage } from '../../types/speckit-record';

defineProps<{
  records: SpeckitQuestionRecord[];
}>();

function stageLabel(stage: SpeckitStage) {
  switch (stage) {
    case 'constitution':
      return 'Constitution';
    case 'spec':
      return 'Specification';
    case 'plan':
      return 'Plan';
    case 'tasks':
      return 'Tasks';
    case 'implement':
      return 'Implementation';
  }
}
</script>

