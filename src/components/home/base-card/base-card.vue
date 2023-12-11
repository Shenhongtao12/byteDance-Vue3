<template>
  <div class="home-base-card">
    <div class="home-base-card-header">
      <img :src="baseCardLeftLine" class="line" />
      <span class="title">{{ title }}</span>
      <img :src="baseCardRightLine" class="line" />
    </div>
    <span class="des">{{ des }}</span>
    <button class="button" @click="openDialog">{{ buttonText }}</button>
  </div>
  <ZixunForm ref="zixunDialogRef" :demandType="demandType" />
</template>

<script setup>
import { onMounted, toRefs, ref, getCurrentInstance, nextTick } from "vue";
import baseCardLeftLine from "../../../assets/images/base-card-left-line.png";
import baseCardRightLine from "../../../assets/images/base-card-right-line.png";
import ZixunForm from "@/components/zixun-form"

const { proxy } = getCurrentInstance();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
});


const { title, des, buttonText } = toRefs(props);
const demandType = ref(1);
onMounted(() => {
  if (buttonText == "我要发布") {
    demandType.value = 1;
  } else {
    demandType.value = 2;
  }
})

function openDialog() {
  nextTick(() => {
    proxy.$refs["zixunDialogRef"].openDialog();
  });
}
</script>
  
<style scoped>
.home-base-card {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 76, 151, 0.5);
  flex: 1;
  align-items: center;
  border-radius: 10px;
  color: #fff;
  padding: 40px 0px;
}

.home-base-card-header {
  display: flex;
  align-items: center;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin: 0px 21px;
  min-width: 104px;
}

.line {
  height: 5px;
}

.des {
  font-weight: 500;
  font-size: 14px;
  margin: 30px 0px 40px 0px;
}

.button {
  border: none;
  width: fit-content;
  background-color: #c2a341;
  border-radius: 22px;
  padding: 14px 40px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>