<script setup lang="ts">
import Counter from "@/components/Counter.vue";
import MetricsDisplay from "@/components/MetricsDisplay.vue";
import LocalePicker from "@/components/LocalePicker.vue";
</script>

<template>
  <main class="grid px-4 md:px-5 py-8 md:py-12">
    <LocalePicker/>

    <div class="mt-10 grid gap-10">
      <MetricsDisplay/>
      <Counter/>
    </div>
  </main>
</template>
