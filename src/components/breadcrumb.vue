<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可以点击项 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{
          item.meta.title
        }}</span>
        <!-- 可以点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
          item.meta.title
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>
  <script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
// 生成数组数据
const breadcrumbData = ref([]);
const getBreadcrumbData = () => {
  console.log(route.matched);
  // 在面包屑最前面添加链接到秦创原首页
  const shouye = [{
    meta: {
        title: "首页"
    },
    path: "https://www.qinchuangyuan.com/html/web/index.html"
  }]
  const routeList = route.matched.filter((item) => {
    return item.meta && item.meta.title;
  });

  breadcrumbData.value = [...shouye, ...routeList];
};
// 监听路由发生改变时触发
watch(
  route,
  () => {
    getBreadcrumbData();
  },
  {
    immediate: true,
  }
);
// 处理点击事件
const onLinkClick = (item) => {
    if (item.path.startsWith("http")) {
        window.location.href = item.path;
        return;
    }
  router.push(item.path);
};
</script>
<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>