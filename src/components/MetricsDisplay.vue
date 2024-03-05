<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import store from "@/store";
import { computed } from "vue";

const { t } = useI18n()
const count = computed<number>(() => store.state.count);
</script>

<template>
  <div class="w-full max-w-2xl mx-auto grid items-center justify-center gap-10 p-8 shadow-[0_2px_3px_rgba(0,0,0,0.06)] bg-white rounded-lg">
    <div class="grid gap-3 text-purple-500 text-xl lg:text-2xl text-center">
      <h3>{{ t('metricsLabel') }}</h3>
      <p>{{ count }}</p>
    </div>
  </div>
</template>