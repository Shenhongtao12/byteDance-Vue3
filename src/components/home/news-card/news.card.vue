<template>
    <div class="home-news-card block">
        <el-row style="width: 100%;">
            <el-col :span="10">
                <el-image :class="{'pulse-enter-active':showAnimate}" 
                    @mouseenter="play" 
                    @mouseleave="reset"
                    class="news-image" 
                    @click="openNews(image.id)" 
                    :src="image.url" fit="cover"
                >
                    <template #error>
                    <div class="image-slot">
                        <el-icon><icon-picture /></el-icon>
                    </div>
                    </template>
                </el-image>
            </el-col>
            <el-col :span="14">
                <div class="news-list">
                    <div v-for="(item) in news" :key="item.url" 
                        @mouseover="handleMouseOver(item)"
                        @mouseleave="reset2"
                        class="news-list-item"
                        @click="openNews(item.id)"
                    >
                        <div class="dot"></div>
                        <div class="title">{{ item.title }}</div>
                        <div class="flex-1"></div>
                        <div class="date">{{ parseTime(item.releaseDate, '{y}-{m}-{d}') }}</div>
                    </div>
                    <div class="button-box">
                        <el-button color="#C2A341" size="small" @click="goList">
                            <span style="color: #fff;">查看更多&nbsp;</span><el-icon color="#fff"><Right /></el-icon>
                        </el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { toRefs, ref, onMounted } from 'vue'
import { Picture as IconPicture } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";

const baseUrl = import.meta.env.VITE_APP_BASE_API;

const router = useRouter();

const props = defineProps({
    news: {
        type: Array,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const image = ref({
    url: "",
    id: ""
})

const { news, imageUrl } = toRefs(props);

function goList() {
    router.push('/xinwen');
}
const selectImage = ref(false);
const showAnimate = ref(false);
function play() {
    showAnimate.value = true;
}
function reset() {
    showAnimate.value = false;
}
function reset2() {
    selectImage.value = false;
}

onMounted(() => {
    image.value = {
        url: baseUrl + imageUrl.value,
        id: news.value && news.value.length > 0 ? news.value[0].id : ""
    }
})

// 鼠标移入时的处理函数
const handleMouseOver = (item) => {
    selectImage.value = true;
    image.value =  {
        url: baseUrl + item.coverUrl,
        id: item.id
    }
    
};

function openNews(id) {
    router.push('/xinwenxiangqing/' + id);
}
</script>
  

<style scoped>
.fadeIn-enter-active {
    animation: fadeIn 0.5s reverse
}
.pulse-enter-active {
    animation: pulse 0.5s
}
.rotate360 {
    animation:  rotate360 .5s ease-out 0s;
}
@keyframes rotate360 {
    100% {
        transform: rotate(360deg);
    }
}

.home-news-card {
    font-size: 14px;
    display: flex;
    height: 310px;
    background: linear-gradient(90deg, #8AB8DD, #ecf5ff);
}

.news-image {
    flex: 1;
    width: 100%;
    height: 310px;
    cursor: pointer;
}

.news-list {
    padding: 30px;
    flex: 1;
    display: flex;
    flex-direction: column;
    grid-row-gap: 21px;
}

.news-list-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #333333;
}

.news-list-item:hover {
    color: #C2A341;
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
    font-family: PingFang SC;
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