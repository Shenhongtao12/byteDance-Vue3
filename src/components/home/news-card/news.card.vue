<template>
    <div class="home-news-card">
        <el-row style="width: 100%;">
            <el-col :span="10">
                <el-image class="news-image" :src="image" fit="cover">
                    <template #error>
                    <div class="image-slot">
                        <el-icon><icon-picture /></el-icon>
                    </div>
                    </template>
                </el-image>
            </el-col>
            <el-col :span="14">
                <div class="news-list">
                    <div v-for="item in news" :key="item.url" class="news-list-item">
                        <div class="dot"></div>
                        <div class="title">{{ item.title }}</div>
                        <div class="flex-1"></div>
                        <div class="date">{{ item.date }}</div>
                    </div>
                    <div class="button-box">
                        <!-- <button class="button">查看更多</button> -->
                        <el-button color="#C2A341" size="small">
                            <span style="color: #fff;">查看更多&nbsp;</span><el-icon color="#fff"><Right /></el-icon>
                        </el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
interface NewsItem {
    title: string;
    date: string;
    url: string;
}

const props = defineProps({
    image: {
        type: String,
        required: true
    },
    news: {
        type: Array as () => NewsItem[],
        required: true
    }
})

const { image, news } = toRefs(props)
</script>
  

<style scoped>
.home-news-card {
    font-size: 14px;
    display: flex;
    height: 330px;
    background: linear-gradient(90deg, #8AB8DD, #fff);
}

.news-image {
    flex: 1;
    width: 100%;
    height: 330px;
}

.news-list {
    padding: 32px;
    flex: 1;
    display: flex;
    flex-direction: column;
    grid-row-gap: 24px;
}

.news-list-item {
    display: flex;
    align-items: center;
}

.news-list-item>.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
}

.news-list-item:nth-child(odd) .dot {
    background-color: #004C97;
}

.news-list-item:nth-child(even) .dot {
    background-color: #C2A341;
}

.news-list-item>.title {
    font-weight: 500;
    margin-right: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.news-list-item>.date {
    color: #666666;
}

.flex-1 {
    flex: 2;
}

.button-box {
    display: flex;
    justify-content: end;
    padding: 4px 12px;
}

.button {
    width: fit-content;
    background-color: #C2A341;
    border: none;
    padding: 4px 12px;
    text-align: center;
    color: white;
    border-radius: 5px;
}
</style>