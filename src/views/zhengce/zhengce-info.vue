<template>
  <div style="background-color: #1e70ff1a">
  <div class="body" v-if="policy !=null">
    <div class="table">
      <el-descriptions :column="2" border>
        <el-descriptions-item
          label="发布机构"
          label-align="left"
          align="left"
          label-class-name="my-label"
          class-name="my-content"
          >{{ policy.author }}</el-descriptions-item
        >
        <el-descriptions-item
          label="发布字号"
          label-align="left"
          align="left"
          >-</el-descriptions-item
        >

        <el-descriptions-item label="发布日期" label-align="left" align="left">
          {{ parseTime(policy.releaseDate, '{y}-{m}-{d}') }}
        </el-descriptions-item>
        <el-descriptions-item label="有效期" label-align="left" align="left"
          >有效</el-descriptions-item
        >
      </el-descriptions>
    </div>
    <div class="zixun-button">
        <el-button type="primary" plain size="large" @click="zixun">
            <span style="font-size: 16px;">申报咨询</span>
        </el-button>
    </div>
    <div class="content">
        <div style="margin: auto;">
            <h2 style="font-size: 18px;">{{ policy.title }}</h2>
        </div>
        <div class="text">
            <div v-html="policy.content" class="ql-editor">
            </div>
        </div>
    </div>
  </div>
  <ZixunForm ref="zixunDialogRef" :demandType="3" />
  <div style="height: 10px"></div>
</div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getPolicyInitiative } from "@/api/system/policyInitiative";
import ZixunForm from "@/components/zixun-form"
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

const router = useRouter();
const route = useRoute();

const { proxy } = getCurrentInstance();

const id = ref(null);
const policy = ref(null);
onMounted(() => {
  id.value = route.params.id;
  getXinWenInfo();
});

function getXinWenInfo() {
    getPolicyInitiative(id.value).then(res => {
        if (res.data == null || res.data == undefined) {
            router.push("/404")
        }
        policy.value = res.data;
    })
}

function zixun() {
    proxy.$refs["zixunDialogRef"].openDialog(policy.value.title);
}
</script>
<style lang="scss" scoped>
.body {
  margin: auto;
  width: 1200px;
  padding: 52px;
  background-color: #fff;
  box-sizing: border-box;
  .table {
    border: 1.4px solid rgba(0, 98, 168, 0.2);
    border-radius: 4px;
    overflow: hidden;
    color: #606266;
    font-size: 16px;
    font-weight: 550;
  }
  .zixun-button {
    height: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
  }

  .content {
    padding: 52px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .text {
        margin-top: 80px;
        font-size: 18px;
    }
  }
}
:deep(.my-label) {
  background: rgba(0, 98, 168, 0.03) !important;
  padding: 12px 10px;
}
</style>
<style>
.el-descriptions__body .el-descriptions__table .el-descriptions__cell {
    font-size: 16px;
}

.el-descriptions__label {
    width: 140px;
}
.el-descriptions__label.el-descriptions__cell.is-bordered-label {
    color: #909399;
    font-weight: 700;
}
</style>