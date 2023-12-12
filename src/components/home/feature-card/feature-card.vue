<template>
    <div class="home-feature-card" :class="{ active: isActive }" @click="clicked">
        <div class="left-line" :style="{ backgroundColor: `${leftLineColor}` }"></div>
        <div class="detail">
            <span class="title">{{ title }}</span>
            <div class="truncate" :title="des">
               {{ des }}
            </div>
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
// const truncateElement = ref(null);

function clicked() {
    emit('clicked', {
        title: title.value,
        index: index.value
    });
}

onMounted(() => {
    // if (truncateElement.value.offsetHeight < truncateElement.value.scrollHeight) {
    // truncateElement.value.setAttribute('title', truncateElement.value.innerText);
    // }
})

</script>
  
<style scoped>
.home-feature-card {
    display: flex;
    box-shadow: 0px 0px 14px 2px #D2E3F2;
    border-radius: 10px;
    cursor: pointer;
    min-height: 157px;
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
.truncate {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* 最多显示的行数 */
  line-height: 1.4; /* 行高，根据需要调整 */
  max-height: calc(1.4 * 4); /* 最大高度 = 行高 * 行数 */
  text-overflow: ellipsis;
  white-space: normal; /* 多行文本需要设置为normal */
}


</style>