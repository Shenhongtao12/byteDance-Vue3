<template>
  <div id="container">
    <Header
        :fixedToTop="$route.path === '/'"
        ref="header"
        theme-color="main-color"
    ></Header>
    <main>
      <router-view v-slot="{ Component }" :key="$route.path">
        <component :is="Component"/>
      </router-view>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>

</template>

<script setup>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import {ref, reactive, getCurrentInstance, computed, watch, onMounted} from "vue";
import {useRoute} from 'vue-router'

const route = useRoute()
const {proxy} = getCurrentInstance()
const pageTransitionName = ref("")
const homeScrollY = ref(0)




watch(route, (newValue, oldValue) => {
  pageTransitionName.value = ["products", "home"].includes(newValue.name)
      ? ""
      : "jumpPage";
})

</script>

<style scoped lang="scss">

#container {
  min-width: 1200px;
}


a {
  text-decoration: none;
}
</style>
