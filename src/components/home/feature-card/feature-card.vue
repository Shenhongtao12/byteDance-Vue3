<template>
    <div class="home-feature-card">
        <div class="left-line" :style="{ backgroundColor: `${leftLineColor}` }"></div>
        <div class="detail">
            <span class="title">{{ title }}</span>
            <span>{{ des }}</span>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
    leftLineColor: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
})


const { leftLineColor, title, des } = toRefs(props)

</script>
  
<style scoped>
.home-feature-card {
    display: flex;
    box-shadow: 0px 0px 14px 2px #D2E3F2;
    border-radius: 10px;
}

.left-line {
    width: 14px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.detail {
    display: flex;
    flex-direction: column;
    padding: 18px;
}

.title {
    color: #0062A8;
    margin-bottom: 10px;
    font-weight: bold;
}
</style>