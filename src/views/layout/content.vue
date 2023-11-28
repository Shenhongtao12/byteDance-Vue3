<template>
  <div
    style="background-color: #1e70ff1a"
  >
    <breadcrumb />
    <main>
      <router-view />
    </main>
  </div>
</template>
  
  <script setup>
import breadcrumb from "@/components/breadcrumb";
</script>
  
  <style scoped lang="scss">
</style>
  