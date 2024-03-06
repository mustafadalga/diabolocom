<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import IconLanguage from "@/components/icons/IconLanguage.vue";

const { locale, t } = useI18n();
const showOptions = ref<boolean>(false)

function switchLocale(newLocale: string) {
  locale.value = newLocale;
  toggleOptions();
}

function toggleOptions() {
  showOptions.value = !showOptions.value
}
</script>

<template>
  <div class="ml-auto relative w-8 h-8 grid place-items-center gap-2">
    <button data-testid="btn-icon-language" @click="toggleOptions">
      <IconLanguage class="w-8 h-8"
                    strokeClass="stroke-gray-600"/>
    </button>

    <div v-if="showOptions"
         data-testid="locale-picker-options"
         class="absolute top-full right-full z-10 grid content-baseline bg-white shadow-[0_2px_3px_rgba(0,0,0,0.06)] rounded-md text-xs lg:text-sm text-gray-600 font-medium">

      <button class="mx-1 px-8 py-2 border-b border-gray-200"
              data-testid="btn-english"
              @click="switchLocale('en')">
        {{ t("english") }}
      </button>

      <button class="mx-1 px-8 py-2"
              data-testid="btn-french"
              @click="switchLocale('fr')">
        {{ t("french") }}
      </button>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style.css");
</style>