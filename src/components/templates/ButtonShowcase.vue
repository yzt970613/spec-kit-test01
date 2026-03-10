<template>
  <section class="showcase-block">
    <div class="showcase-block__copy">
      <h3>{{ item.label }}</h3>
      <p>{{ item.description }}</p>
    </div>
    <van-button
      round
      block
      :type="item.variant"
      :disabled="item.disabled"
      @click="$emit('trigger', item)"
    >
      {{ item.label }}
    </van-button>
  </section>
</template>

<script setup lang="ts">
import type { ButtonDemoItem } from '../../data/interactionDemoData';

defineProps<{
  item: ButtonDemoItem;
}>();

defineEmits<{
  trigger: [item: ButtonDemoItem];
}>();
</script>

