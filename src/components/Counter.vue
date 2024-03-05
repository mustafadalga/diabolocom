<script setup lang="ts">
import store from "@/store";
import { useI18n } from 'vue-i18n';
import ControlPanel from "./ControlPanel.vue";

const { t } = useI18n()
</script>

<template>
  <div class="grid place-items-center gap-5">
    <div class="w-full flex justify-center items-center gap-5">
      <button
          class="w-full max-w-60	text-xs lg:text-sm text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg px-5 py-2.5"
          @click="store.mutations.increment()">
        {{ t("increment") }}
      </button>
      <button
          class="w-full max-w-60 text-xs lg:text-sm text-white bg-purple-600 hover:bg-purple-700 font-medium rounded-lg px-5 py-2.5"
          @click="store.mutations.decrement()">
        {{ t("decrement") }}
      </button>
    </div>

    <ControlPanel/>
  </div>
</template>
