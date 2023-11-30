<template>
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
        :label="contentLabel"
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
import { toRefs, ref, reactive, getCurrentInstance, onMounted } from "vue";
import { addDemandOutcome } from "@/api/system/demandOutcome";

const { proxy } = getCurrentInstance();

const props = defineProps({
  // 1: 需求 2：成果 3：咨询 
  demandType: {
    type: Number,
    required: true,
  }
});
const data = reactive({
  form: {},
  rules: {
    contact: [{ required: true, message: "联系人不能为空", trigger: "blur" }],
    phone: [{ required: true, message: "联系方式不能为空", trigger: "blur" }],
    content: [{ required: true, message: "内容不能为空", trigger: "blur" }],
  },
});

const { demandType } = toRefs(props);
const { form, rules } = toRefs(data);

const open = ref(false);
const contentLabel = ref("");
const dialogTitle = ref("");

onMounted(() => {
    
})

function openDialog(content) {
  reset();
  if (demandType.value == 1) {
    dialogTitle.value = "需求征集";
    contentLabel.value = "需求描述";
  } else if (demandType.value == 2) {
    dialogTitle.value = "成果对接";
    contentLabel.value = "成果内容";
  } else if (demandType.value == 3) {
    dialogTitle.value = "我要咨询";
    contentLabel.value = "咨询内容";
    if (content != null) {
        form.value.content = content;
    }
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
      form.value.type = demandType.value;
      addDemandOutcome(form.value).then((response) => {
        ElMessage.success("提交成功");
        open.value = false;
      });
    }
  });
}

defineExpose({
    openDialog
})
</script>