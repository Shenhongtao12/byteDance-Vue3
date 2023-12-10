<template>
    <div class="home-feature-card" :class="{ active: isActive }" @click="clicked">
        <div class="left-line" :style="{ backgroundColor: `${leftLineColor}` }"></div>
        <div class="detail">
            <span class="title">{{ title }}</span>
            <span>{{ des }}</span>
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, ref, toRefs } from 'vue';
const emit = defineEmits();

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
    index: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
})
const { leftLineColor, title, des, index } = toRefs(props)


function clicked() {
    emit('clicked', {
        title: title.value,
        index: index.value
    });
}

</script>
  
<style scoped>
.home-feature-card {
    display: flex;
    box-shadow: 0px 0px 14px 2px #D2E3F2;
    border-radius: 10px;
    cursor: pointer;
    min-height: 150px;
    width: 658px;
}

.left-line {
    width: 14px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.detail {
    width: 644px;
    display: flex;
    flex-direction: column;
    padding: 18px;
}

.title {
    color: #0062A8;
    margin-bottom: 10px;
    font-weight: bold;
}

.active {
  background-color: #D2E3F2; 
}
</style>