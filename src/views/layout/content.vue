<template>
  <div>
    <div style="background-color: #1e70ff1a">
      <breadcrumb />
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>
  
  <script setup>
import breadcrumb from "@/components/breadcrumb";
</script>
  