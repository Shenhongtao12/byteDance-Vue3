<template>
    <div class="home-indicator-card" :style="{ backgroundImage: `url('${backgroundImage}')` }">
        <div class="title-container">
            <div class="title">{{ title }}</div>
            <div class="vertical-line"></div>
            <div class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="description">
            <span class="price" :style="color">{{ price }}</span>
            <span class="unit">{{ unit }}</span>
        </div>
    </div>
</template>
  
<script setup>
import { toRefs, ref } from 'vue'

const props = defineProps({
    backgroundImage: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    priceColor: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    }
})


const { backgroundImage, title, price, unit, subTitle, priceColor } = toRefs(props)

const color = ref({
    color: priceColor
})

</script>
  
<style scoped>
.home-indicator-card {
    height: 120px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    padding: 24px;
}

.title-container {
    display: flex;
    align-items: center;
}

.title {
    /* font-weight: bold; */
    font-size: 16px;
}

.vertical-line {
    width: 2px;
    height: 15px;
    background-color: #000;
    margin: 0 10px;
}

.sub-title {
    font-size: 14px;
}

.description {
    margin-top: 10px;
}

.price {
    font-weight: bold;
    font-size: 22px;
}

.unit {
    font-size: 14px;
    margin-left: 10px;
}
</style>