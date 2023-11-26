<template>
  <el-card class="box-card">
    <div class="filter">
      <div class="type">
        <span class="title">所属地区</span>
        <span
          class="tags"
          v-for="(button, index) in buttons"
          :key="button.key"
          :class="{ 'select-button': button.clicked }"
          @click="setClicked(index)"
          link
        >
          {{ button.text }}
        </span>
      </div>
      <div class="type">
        <span class="title">资源标签</span>
        <span
          class="tags"
          v-for="(button, index) in wukuType"
          :key="button.key"
          :class="{ 'select-button': button.clicked }"
          @click="setClickedType(index)"
          link
        >
          {{ button.text }}
        </span>
      </div>
    </div>
    <div>
      <el-table
        :data="tableData"
        :row-class-name="tableRowClassName"
        style="width: 100%"
      >
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
    <div class="page">
      <pagination
        v-show="total > 0"
        :total="total"
        :autoScroll="false"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getList"
      />
    </div>
  </el-card>
</template>
<script setup>
import { ref } from "vue";
import Pagination from "@/components/Pagination";

const total = ref(10);
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
});

const buttons = ref([
  { type: "", text: "全部", clicked: true },
  { type: "awef", text: "榆林区", clicked: false },
  { type: "primary", text: "衡山去", clicked: false },
  { type: "success", text: "神木市", clicked: false },
  { type: "info", text: "定边县", clicked: false },
  { type: "warning", text: "佳县", clicked: false },
  { type: "danger", text: "府谷县", clicked: false },
]);

const wukuType = ref([
  { type: "全部", text: "全部", clicked: true },
  { type: "技术需求", text: "技术需求", clicked: false },
  { type: "技术研究项目", text: "技术研究项目", clicked: false },
  { type: "重大成果", text: "重大成果", clicked: false },
  { type: "人才", text: "人才", clicked: false },
  { type: "基金", text: "基金", clicked: false },
]);

function getList() {}

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 1) {
    return "warning-row";
  }
  return "";
};
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const lastSelectDiQu = ref(0);
const lastSelectType = ref(0);

//所属地区
function setClicked(index) {
  if (lastSelectDiQu.value != null) {
    buttons.value[lastSelectDiQu.value].clicked = false;
  }
  buttons.value[index].clicked = true;
  lastSelectDiQu.value = index;
}
// 资源标签
function setClickedType(index) {
  if (lastSelectType.value != null) {
    wukuType.value[lastSelectType.value].clicked = false;
  }
  wukuType.value[index].clicked = true;
  lastSelectType.value = index;
}
</script>
<style scoped>
.filter {
  padding: 0 15px 15px 15px;
}
.page {
  display: flex;
  justify-content: end;
}
.type {
  display: flex;
  border-bottom: 1px dashed #d2e3f2;
  padding: 10px 0;
}
.type .title {
  line-height: 32px;
  text-align: center;
  color: #0062a8;
  font-weight: 550;
  margin-left: 15px;
  margin-right: 15px;
}
.tags {
    font-size: 15px;
  line-height: 32px;
  text-align: center;
  margin: 0 6px;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 5px;
}
.select-button {
  background-color: #0062a8;
  color: #fff;
}
</style>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: #d6e6f3;
}
.el-table thead th {
  background-color: #d6e6f3 !important;
}
.el-card__body {
  padding: 0;
}
</style>