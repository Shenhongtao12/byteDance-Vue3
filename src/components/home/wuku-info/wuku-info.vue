<template>
  <el-card class="box-card">
    <div class="filter">
      <div class="type">
        <span class="title">所属地区</span>
        <div style="display: flex; flex-wrap: wrap">
          <span
            class="tags"
            v-for="(diqu, index) in selectConfigList"
            :key="index"
            :class="{ 'select-button': diqu.clicked }"
            @click="setClicked(index)"
            link
          >
            {{ diqu.text }}
          </span>
        </div>
      </div>
      <div class="type">
        <span class="title">资源标签</span>
        <span
          class="tags"
          v-for="(button, index) in wukuType"
          :key="index"
          :class="{ 'select-button': button.clicked }"
          @click="setClickedType(index)"
          link
        >
          {{ button.value }}
        </span>
      </div>
      <div class="search">
        <div class="search-box">
          <el-input v-model="keyword" @keyup.enter="search" size="large" placeholder="请输入关键字" />
        </div>
        <el-button
          class="search-button"
          type="primary"
          size="large"
          @click="search"
        >
          <span style="color: #fff; font-size: 16px; font-family: PingFang SC;">搜索</span>
        </el-button>
      </div>
    </div>
    <div>
      <el-table
        v-loading="loading"
        :data="tableData"
        :row-class-name="tableRowClassName"
        style="width: 100%; min-height: 200px;"
      >
      <!-- 技术需求 -->
      <el-table-column v-if="lastSelectType == 0" label="项目名称" prop="name">
        <template #default="scope">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="scope.row.name"
            placement="top"
          >
            <div class="cell-content wordTitle">
              {{ scope.row.name }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 0" label="产业领域" prop="industryField" />
      <el-table-column v-if="lastSelectType == 0" min-width="100" label="项目内容" prop="content">
        <template #default="scope">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="scope.row.content"
            placement="top"
          >
            <div class="cell-content">
              {{ scope.row.content }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 0" label="需求单位" prop="reqEnterprise" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 0" width="90" label="所属地区" prop="district" />

      <!-- 技术研究项目 -->
      <el-table-column v-if="lastSelectType == 1" label="项目名称" prop="name">
        <template #default="scope">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="scope.row.name"
            placement="top"
          >
            <div class="cell-content wordTitle">
              {{ scope.row.name }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 1" label="产业领域" prop="industryField" />
      <el-table-column v-if="lastSelectType == 1" min-width="100" label="项目内容" width="200" prop="content">
        <template #default="scope">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="scope.row.content"
            placement="top"
          >
            <div class="cell-content">
              {{ scope.row.content }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 1" label="项目承担单位" prop="undertakeEnterprise" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 1" width="90" label="所属地区" prop="district" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 1" width="100" label="级别" prop="level" />

      <!-- 重大成果 -->
      <el-table-column v-if="lastSelectType == 2" label="名称" prop="name">
        <template #default="scope">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="scope.row.name"
            placement="top"
          >
            <div class="cell-content wordTitle">
              {{ scope.row.name }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column v-if="lastSelectType == 2" min-width="100" label="整体概述" prop="overallOverview">
        <template #default="scope">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="scope.row.overallOverview"
            placement="top"
          >
            <div class="cell-content">
              {{ scope.row.overallOverview }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column v-if="lastSelectType == 2" min-width="100" label="具体成效" prop="content">
        <template #default="scope">
          <el-tooltip
            class="box-item"
            effect="dark"
            :content="scope.row.content"
            placement="top"
          >
            <div class="cell-content">
              {{ scope.row.content }}
            </div>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 2" label="委托单位" prop="entrustEnterprise" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 2" width="90" label="所属地区" prop="district" />
      <!-- 人才 -->
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 3" width="100" class="wordTitle" label="姓名" prop="name" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 3" width="90" label="年龄" prop="age" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 3" width="90" label="性别" prop="sex" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 3" label="单位" prop="enterprise" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 3" width="90" label="所属地区" prop="district" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 3" label="职级" prop="level" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 3" label="产业领域" prop="domain" />
      <!-- 基金 -->
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 4" class="wordTitle" label="名称" prop="name" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 4" label="类别" prop="classify" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 4" label="所属单位" prop="enterprise" />
      <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 4" width="90" label="所属地区" prop="district" />

      <!-- <el-table-column :show-overflow-tooltip="true" width="90" label="联系人" prop="contact" />
      <el-table-column :show-overflow-tooltip="true" width="130" label="联系方式" prop="phone" /> -->

        <el-table-column :show-overflow-tooltip="true" v-if="lastSelectType == 0" label="" width="100" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-button
              type="primary" link
              @click="zixun($event, scope.row)"
            >我要咨询</el-button>
          </template>
        </el-table-column>
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
  <ZixunForm ref="zixunDialogRef" :demandType="3" />
</template>
<script setup>
import { ref, getCurrentInstance } from "vue";
import Pagination from "@/components/Pagination";
import { listSelectConfig } from "@/api/system/selectConfig";
import ZixunForm from "@/components/zixun-form"
import {
  listAchievement,
  listFoundation,
  listProject,
  listRequirement,
  listTalents,
} from "@/api/system/wuku";
const { proxy } = getCurrentInstance();

const total = ref(0);
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
  district: null,
  name: null
});

const loading = ref(false);
const selectConfigList = ref([
  {
    text: "全部",
    clicked: true
  }
]);

const wukuType = ref([
  { text: "技术需求", value: "需求库", clicked: true },
  { text: "技术研究项目", value: "项目库", clicked: false },
  { text: "重大成果", value: "成果库", clicked: false },
  { text: "人才", value: "人才库", clicked: false },
  { text: "基金", value: "资金库", clicked: false },
]);

const keyword = ref("");

// 打开咨询的对话框
function zixun(event, row) {
  event.stopPropagation(); // 阻止事件冒泡
  let content =  "咨询" + row.reqEnterprise + "关于" + row.name + "的相关内容";
  proxy.$refs["zixunDialogRef"].openDialog(content);
}

function search() {
  queryParams.value.name = keyword.value;
  getList();
}

function getList() {
  loading.value = true;
  const district = selectConfigList.value[lastSelectDiQu.value].text;
  queryParams.value.district = district == "全部" ? null : district;
  const type = wukuType.value[lastSelectType.value];
  switch (type.text) {
    case "技术需求":
      listRequirement(queryParams.value).then((res) => {
        tableData.value = res.rows;
        total.value = res.total;
      });
      break;
    case "技术研究项目":
      listProject(queryParams.value).then((res) => {
        tableData.value = res.rows;
        total.value = res.total;
      });
      break;
    case "重大成果":
      listAchievement(queryParams.value).then((res) => {
        tableData.value = res.rows;
        total.value = res.total;
      });
      break;
    case "人才":
      listTalents(queryParams.value).then((res) => {
        tableData.value = res.rows;
        total.value = res.total;
      });
      break;
    case "基金":
      listFoundation(queryParams.value).then((res) => {
        tableData.value = res.rows;
        total.value = res.total;
      });
  }
  loading.value = false;
}

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 1) {
    return "warning-row";
  }
  return "";
};
const tableData = ref([]);

const lastSelectDiQu = ref(0);
const lastSelectType = ref(0);

//所属地区
function setClicked(index) {
  if (lastSelectDiQu.value != null) {
    selectConfigList.value[lastSelectDiQu.value].clicked = false;
  }
  selectConfigList.value[index].clicked = true;
  lastSelectDiQu.value = index;

  queryParams.value.pageNum = 1;
  getList();
}
// 资源标签
function setClickedType(index) {
  if (lastSelectType.value != null) {
    wukuType.value[lastSelectType.value].clicked = false;
  }
  wukuType.value[index].clicked = true;
  lastSelectType.value = index;

  queryParams.value.pageNum = 1;
  getList();
}
/** 查询selectConfig列表 */
function getDiquList() {
  const queryParams = {
    pageNum: 1,
    pageSize: 5000,
    type: "五库管理-所属地区",
  };
  listSelectConfig(queryParams).then((response) => {
    for (let res of response.rows) {
      selectConfigList.value.push({
        text: res.value,
        clicked: false,
      });
    }
    if (selectConfigList.value.length > 0) {
      selectConfigList.value[0].clicked = true;
    }
    getList();
  });
}
getDiquList();
</script>
<style scoped>
.box-card {
  font-family: PingFang SC;
}
.filter {
  padding: 0 15px 15px 15px;
}
.page {
  display: flex;
  justify-content: end;
  padding: 25px 16px;
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
  min-width: 64px;
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
.cell-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.wordTitle {
  color: #0062A8;
}

.search {
  margin-top: 20px;
  margin-bottom: 5px;
  display: flex;
}
.search-box {
  width: 580px;
  margin-right: 15px;
}
.search-button {
  width: 80px;
  --el-button-bg-color: #0062a8;
  --el-button-border-color: #0062a8;
  --el-button-hover-bg-color: rgb(51, 129, 185);
  --el-button-hover-border-color: rgb(51, 129, 185);
  --el-button-active-bg-color: rgb(0, 88, 151);
  --el-button-active-border-color: rgb(0, 88, 151);
}
</style>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: rgba(0,98,168,.05);
}
.el-table thead th {
  background-color: rgba(0,98,168,.05) !important;
  color: #333333;
}
.el-card__body {
  padding: 0;
}
</style>