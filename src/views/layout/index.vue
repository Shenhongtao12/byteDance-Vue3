<template>
    <div id="container">
      <Header
          :fixedToTop="$route.path === '/'"
          ref="header"
          theme-color="main-color"
      ></Header>
      <main>
        <router-view/>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  
  </template>
  
  <script setup>
  import Header from "@/components/header.vue";
  import Footer from "@/components/footer.vue";
  
  </script>
  
  <style scoped lang="scss">
  
  #container {
    min-width: 1200px;
  }
  
  
  a {
    text-decoration: none;
  }
  </style>
  