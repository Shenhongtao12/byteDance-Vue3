<template>
  <div style="margin: auto; width: 1200px; padding: 10px 0;">

    <div class="content" v-if="news !=null">
        <div class="content">
            <h2>{{news.title}}</h2>
            <div class="userInfo">
                <span>时间： {{ parseTime(news.releaseDate, "{y}-{m}-{d}") }}</span>
                <span>来源：{{ news.source }}</span>
                <span>作者：{{ news.author }}</span>
                <span></span>
            </div>
            <div class="detail">
                <div v-html="news.content" class="ql-editor">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getNewsTrends, viewNewsTrends } from "@/api/system/newsTrends";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

const router = useRouter();
const route = useRoute();

const id = ref(null);
const news = ref(null);
onMounted(() => {
    id.value = route.params.id;
    getNewsInfo();
})

function getNewsInfo() {
    getNewsTrends(id.value).then(res => {
        if (res.data == null || res.data == undefined) {
            router.push("/404")
        }
        news.value = res.data;

        // 浏览量+1
        viewNewsTrends({id: id.value}).then(res => {});
    })
}

</script>
<style lang="scss" scoped>
.content {
    padding: 52px;
    background-color: #fff;
    box-sizing: border-box;
    color: #4a4a4a;

    h2 {
        text-align: center;
        
        font-weight: 600;
    }

    .userInfo{
        display: flex;
        align-items: center;
        margin-top: 40px;
        font-size: 16px;
        justify-content: space-between;
        width: 100%;
    }

    .detail {
        margin-top: 40px;
        width: 100%;
    }
}
</style>