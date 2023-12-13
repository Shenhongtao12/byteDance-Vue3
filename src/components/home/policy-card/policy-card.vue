<template>
    <div class="home-policy-card" @click="goPolicyInfo">
        <div class="header">
            <div class="date">
                <span class="year-month">{{ yearMonth }}</span>
                <span class="day">{{ day }}</span>
            </div>
            <div class="title">{{ title }}</div>
        </div>
        <div class="description">
            {{ desc }}
        </div>
        <div class="footer">
            <el-button color="#D6E6F3" size="small">
                <span style="color: #0062A8;">查看详情&nbsp;</span><el-icon color="#0062A8"><Right /></el-icon>
            </el-button>
        </div>
    </div>
</template>

<script setup>
import { Right } from '@element-plus/icons-vue';
import { onMounted, ref, toRefs } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    yearMonth: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const { id, yearMonth, day, title, description } = toRefs(props)

let desc = ref("");

onMounted(() => {
    let text = description.value;
    desc.value = text.replace(/<[^>]+>/g, '');
})

function goPolicyInfo() {
    router.push("/zhengcexiangqing/" + id.value);
}
</script>
  
<style scoped>
.home-policy-card {
    height: 232px;
    width: 375px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 14px 2px #D2E3F2;
    cursor: pointer;
    font-family: PingFang SC;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    background-color: #D6E6F3;
    padding: 6px 12px;
}

.date {
    border-radius: 8px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    color: white;
    width: 25%;
    align-items: center;
    margin-right: 16px;
}

.year-month {
    background-color: #0062A8;
    font-size: 14px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 4px 8px;
    width: 100%;
    text-align: center;
    font-size: 12px;
}

.day {
    background-color: #639ED2;
    text-align: center;
    font-size: 18px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 4px 8px;
    width: 100%;
    font-size: 24px;
}

.title {
    font-size: 16px;
    width: 75%;
    /* font-weight: 500; */
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #0062A8;
}

.description {
    height: 84px;
    font-size: 12px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
    color: #666666;
}

.footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    padding: 6px 15px 10px 0;
}

</style>