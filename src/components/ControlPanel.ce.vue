<script setup lang="ts">
import store from "@/store";
import { useI18n } from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <button
      class="w-full max-w-36 text-xs lg:text-sm text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg px-5 py-2.5"
      data-testid="btn-reset"
      @click="store.mutations.reset()">
    {{ t("reset") }}
  </button>
</template>

<style>
@import url("@/style.css");
</style>