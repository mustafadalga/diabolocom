<script setup lang="ts">
import store from "@/store";
import { useI18n } from "vue-i18n";

const { t } = useI18n()
</script>

<template>
  <div class="grid place-items-center gap-5">
    <div class="w-full flex justify-center items-center gap-5">
      <button
          class="w-full max-w-48	text-xs lg:text-sm text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg px-5 py-2.5"
          @click="store.mutations.increment()"
          data-testid="btn-increment">
        {{ t("increment") }}
      </button>

      <button
          class="w-full max-w-48 text-xs lg:text-sm text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg px-5 py-2.5"
          @click="store.mutations.decrement()"
          data-testid="btn-decrement">
        {{ t("decrement") }}
      </button>
    </div>

    <control-panel></control-panel>
  </div>
</template>

<style>
@import url("@/style.css");
</style>