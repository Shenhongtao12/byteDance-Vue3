<template>
  <div class="title-component">
    <div class="line">
        <div class="line-left"></div>
    </div>
    
    <div class="left-triangle"></div>
    <div class="title">{{ title }}</div>
    <div class="right-triangle"></div>
    <div class="line">
        <div class="line-right"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const { title } = toRefs(props);
</script>
  
<style scoped>
.title-component {
    display: flex;
    align-items: center;
    margin: 25px 40px;
}

.line {
    flex-grow: 1;
    width: 6px;
    border-top: 1px solid #C2A341;
}

.line-left {
    flex-grow: 1;
    border: 0;
    padding: 5px;
    background: repeating-linear-gradient(135deg, #C2A341 0px, #C2A341 0px, transparent 2px, transparent 4px);
}

.line-right {
    flex-grow: 1;
    border: 0;
    padding: 5px;
    background: repeating-linear-gradient(225deg, #C2A341 0px, #C2A341 0px, transparent 2px, transparent 4px);
}

.left-triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent ;
    border-left: 10px solid transparent ;
    border-bottom: 10px solid #C2A341 ;
    transform: rotate(135deg);
    margin: -10px 0 0 -5px;
}

.right-triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent ;
    border-left: 10px solid transparent ;
    border-bottom: 10px solid #C2A341 ;
    transform: rotate(-45deg);
    margin: -10px -5px 0 0;
}

.title {
    font-weight: bold;
    font-size: 20px;
    margin: 0px 24px;
}
</style>