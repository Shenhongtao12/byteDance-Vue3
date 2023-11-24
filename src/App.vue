<template>
  <div id="container">
    <Header
        @enter.enter="onAnimationStart"
        :fixedToTop="$route.path === '/'"
        ref="header"
        theme-color="main-color"
    ></Header>
    <main>
      <router-view v-slot="{ Component }" :key="$route.path">
        <transition :name="animationName">
          <component :is="Component"/>
        </transition>
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
import EventBus from './helper/EventBus'

const route = useRoute()
const {proxy} = getCurrentInstance()

const animationName = ref("slideInDown")
const pageTransitionName = ref("")
const homeScrollY = ref(0)




watch(route, (newValue, oldValue) => {
  pageTransitionName.value = ["products", "home"].includes(newValue.name)
      ? ""
      : "jumpPage";
})

</script>

<style scoped lang="scss">

.jumpPage-leave-active {
  display: none;
}

.jumpPage-enter {
  transform: translate3d(0, 80px, 0);
  opacity: 0;
}

.jumpPage-enter-active {
  transition: all 0.3s;
}

#container {
  min-width: 1200px;
}

footer {
  //margin-top: 100px;
}


a {
  text-decoration: none;
}
</style>
