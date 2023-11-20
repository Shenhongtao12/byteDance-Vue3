<template>
    <div class="home-policy-card">
        <div class="header">
            <div class="date">
                <span class="year-month">{{ yearMonth }}</span>
                <span class="day">{{ day }}</span>
            </div>
            <div class="title">{{ title }}</div>
        </div>
        <div class="description">{{ description }}</div>
        <div class="footer">
            <button class="detail-button">查看详情</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
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

const { yearMonth, day, title, description } = toRefs(props)
</script>
  
<style scoped>
.home-policy-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: #ff2961;
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.2);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: #ffeaf1;
    padding: 6px 12px;
}

.date {
    border-radius: 8px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    color: white;
    width: 20%;
    align-items: center;
    margin-right: 16px;
}

.year-month {
    background-color: #ff2961;
    font-size: 14px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    padding: 4px 8px;
    width: 100%;
    text-align: center;
}

.day {
    background-color: #ff709e;
    text-align: center;
    font-size: 18px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 4px 8px;
    width: 100%;
}

.title {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.2;
    max-height: 2.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: blue;
}

.description {
    font-size: 14px;
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
}

.footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.detail-button {
    padding: 6px 12px;
    font-size: 14px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}
</style>