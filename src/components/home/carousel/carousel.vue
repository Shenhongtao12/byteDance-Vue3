<template>
  <div id="box" v-if="slideList.length > 0">
    <div class="banner">
      <!--切换图片-->
      <div class="bannerImg">
        <transition-group name="fade" tag="ul" class="slideUl">
          <li
            v-for="(list, index) in slideList"
            :key="index"
            v-show="index === currentIndex"
            @mouseenter="stop()"
            @mouseleave="go()"
          >
            <el-image class="img" :src="baseUrl + list.imageUrl" fit="cover">
            </el-image>
          </li>
        </transition-group>
      </div>
      <!-- 图片上层内容 -->
      <div class="bannerTextBox">
        <div class="bannerText">
          <span class="title">{{title}}</span>
          <div class="content">
            <div>
                {{ content }}
            </div>
          </div>
        </div>
      </div>

      <!--切换小按钮-->
      <div class="bannerItems">
        <span
          :key="index"
          v-for="(item, index) in slideList.length"
          :class="{ active: index === currentIndex }"
          @mouseover="change(index)"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref, onMounted } from "vue";
import { listCarousel } from "@/api/system/carousel";

const baseUrl = import.meta.env.VITE_APP_BASE_API;
const slideList = ref([]);
const currentIndex = ref(0); // 当前显示的图片的索引
const timer = ref(null); // 自动切换的定时器

const title = ref("");
const content = ref("");

function getList() {
  const queryParams = {
    pageNum: 1,
    pageSize: 100,
  };
  listCarousel(queryParams).then((response) => {
    slideList.value = response.rows;
    if (response.rows && response.rows.length > 0) {
        title.value = response.rows[0].title;
        content.value = response.rows[0].content;
    }
     
  });
}

function play() {
  timer.value = setInterval(() => {
    currentIndex.value++;
    if (currentIndex.value >= slideList.value.length) {
      currentIndex.value = 0;
    }
    title.value = slideList.value[currentIndex.value].title;
    content.value = slideList.value[currentIndex.value].content;
  }, 3000);
}
function stop() {
  clearInterval(timer.value);
}
function go() {
  play();
}
function change(index) {
  currentIndex.value = index;
  title.value = slideList.value[index].title;
content.value = slideList.value[index].content;
}

onMounted(() => {
  go();
});
getList();
</script>
<style scoped>
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
.banner {
  width: 100%;
  height: 400px;
  margin: 20px auto;
  position: relative;
}
.bannerImg .img {
  width: 100%;
  height: 400px;
  position: absolute;
  z-index: 800;
}
.bannerTextBox {
  position: absolute;
  z-index: 10001;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  /* margin-left: 30px; */
}
.bannerText {
  bottom: 0;
  width: 1200px;
  padding: 10px 0;
}
.bannerText .title {
  font-size: 30px;
  color: #fff;
  font-weight: 600;
}
.bannerText .content {
  margin-top: 20px;
  color: #fff;
  background-color: rgba(0, 76, 151, 0.5);
  padding: 15px 20px;
  max-height: 200px;
  width: 700px;
}
.bannerText .content div{
    /* padding: 16px 20px; */
    line-height: 30px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical; /* 垂直堆叠内容 */
    -webkit-line-clamp: 5; /* 最多显示的行数 */
    word-wrap: break-word; /* 单词换行 */
}
.bannerItems {
  position: absolute;
  z-index: 1000;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.bannerItems span {
  width: 12px;
  height: 12px;
  background: rgba(100, 100, 100, 0.6);
  margin: 0 5px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  font-family: Microsoft YaHei;
  line-height: 12px;
  text-align: center;
  color: white;
  cursor: pointer;
}
.bannerItems span.active {
  background-color: #c2a341;
}
</style>