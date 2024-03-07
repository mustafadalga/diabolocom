<script setup lang="ts">
import { provide } from 'vue'
import { I18nInjectionKey } from 'vue-i18n'
import { i18n } from "@/utilities/i18n.ts";

provide(I18nInjectionKey, i18n);
</script>

<template>
  <slot/>
</template>