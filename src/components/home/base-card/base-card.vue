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

  <el-dialog
    :title="dialogTitle"
    v-model="open"
    width="600px"
    :before-close="handleClose"
  >
    <el-form
      ref="xuqiuchengguoRef"
      :model="form"
      :rules="rules"
      label-width="100px"
    >
      <el-form-item
        :label="dialogTitle == '需求征集' ? '需求描述' : '成果内容'"
        prop="content"
      >
        <el-input
          v-model="form.content"
          maxlength="1000"
          type="textarea"
          rows="4"
          placeholder="请输入内容"
        />
      </el-form-item>
      <el-form-item label="组织名称" prop="tissueName">
        <el-input
          v-model="form.tissueName"
          maxlength="100"
          placeholder="请输入组织名称"
        />
      </el-form-item>
      <el-form-item label="联系人" prop="contact">
        <el-input
          v-model="form.contact"
          maxlength="100"
          placeholder="请输入联系人"
        />
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input
          v-model="form.phone"
          maxlength="30"
          placeholder="请输入联系方式"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="open = false">取 消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {
  toRefs,
  ref,
  onMounted,
  reactive,
  getCurrentInstance,
} from "vue";
import baseCardLeftLine from "../../../assets/images/base-card-left-line.png";
import baseCardRightLine from "../../../assets/images/base-card-right-line.png";

import { addDemandOutcome } from "@/api/system/demandOutcome";

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
const data = reactive({
  form: {},
  rules: {
    contact: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
    phone: [{ required: true, message: "联系方式不能为空", trigger: "blur" }],
    content: [{ required: true, message: "内容不能为空", trigger: "blur" }],
  },
});

const { title, des, buttonText } = toRefs(props);
const { form, rules } = toRefs(data);
const open = ref(false);

const dialogTitle = ref("");
function openDialog() {
  reset();
  if (buttonText.value == "我要发布") {
    dialogTitle.value = "需求征集";
  } else {
    dialogTitle.value = "成果对接";
  }
  open.value = true;
}

function reset() {
  form.value = {
    content: null,
    type: null,
    tissueName: null,
    contact: null,
    phone: null,
  };
  proxy.resetForm("xuqiuchengguoRef");
}
function handleClose() {
    open.value = false;
}

function submitForm() {
  proxy.$refs["xuqiuchengguoRef"].validate((valid) => {
    if (valid) {
      if (dialogTitle.value == "需求征集") {
        form.value.type = 1;
      } else {
        form.value.type = 2;
      }
      addDemandOutcome(form.value).then((response) => {
        ElMessage.success("提交成功");
        open.value = false;
      });
    }
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