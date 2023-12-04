<template>
    <div class="header" :style="{ backgroundImage: `url('${bg}')` }">
        <div class="title" :style="{fontSize: titleSize}">
            {{ title }}
        </div>
        <div class="search" v-if="showSearch">
            <div class="input">
                <el-input v-model="input" size="large" placeholder="请输入" @keyup.enter="search" clearable />
            </div>
            <div class="btn">
                <el-button color="#C2A341" size="large" @click="search">
                    <span style="color: #fff; font-size: 18px;">搜索</span>
                </el-button>
            </div>
        </div>
    </div>
</template>
<script setup>
import bg from "@/assets/images/zhibiao-bg.png"
import { ref } from "vue"

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  titleSize: {
    required: false,
    type: String,
    default: "36px"
  },
  showSearch: {
    required: false,
    type: Boolean,
    default: true
  }
})

const emit = defineEmits();

const input = ref("");

function search() {
    emit('search', input.value);
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 40% 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.title {
    font-family: PingFang SC;
    font-weight: 800;
    color: #0062A8;
}

.search {
    padding-top: 20px;
    height: 60px;
    display: flex;
    align-items: center;
}

.input {
    width: 400px;
}
.btn {
    margin-left: 20px;
}
</style>