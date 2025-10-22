<template>
  <div class="min-h-screen flex flex-col bg-white">
    <HeaderComponent />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/Header.vue';
import FooterComponent from '@/components/Footer.vue';
</script>

<style>
/* layout-level styles if needed */
</style>