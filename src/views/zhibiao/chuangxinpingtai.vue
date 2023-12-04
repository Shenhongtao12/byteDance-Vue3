<template>
  <div>
    <Header title="创新平台" @search="handleSearch" />
  </div>
  <div style="margin: auto; width: 1200px; margin-bottom: 50px">
    <div style="background-color: #fff">
      <div class="type">
        <span class="title">平台名单</span>
        <div style="display: flex; flex-wrap: wrap">
          <span
            class="tags"
            v-for="(config, index) in selectConfigList"
            :key="index"
            :class="{ 'select-button': config.clicked }"
            @click="setClicked(index)"
            link
          >
            {{ config.text + " (" + config.num + ")" }}
          </span>
        </div>
      </div>
    </div>
    <div class="table">
      <el-table
        v-loading="loading"
        :data="tableData"
        :row-class-name="tableRowClassName"
        style="width: 100%; min-height: 200px"
      >
        <el-table-column type="index" align="center" label="序号" width="80" />
        <el-table-column
          prop="name"
          align="center"
          label="名称"
        >
          <template #default="scope">
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="scope.row.name"
              placement="top"
            >
              <div class="cell-content">
                {{ scope.row.name }}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="level" align="center" label="级别" />
        <el-table-column prop="intro" align="center" label="简介">
          <template #default="scope">
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="scope.row.intro"
              placement="top"
            >
              <div class="cell-content">
                {{ scope.row.intro }}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="principalUnit" align="center" label="主体单位">
          <template #default="scope">
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="scope.row.principalUnit"
              placement="top"
            >
              <div class="cell-content">
                {{ scope.row.principalUnit }}
              </div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          v-if="lastSelectType == 0"
          prop="platformType"
          align="center"
          label="平台类型"
        />
      </el-table>
      <div class="page">
        <pagination
          v-show="total > 0"
          :total="total"
          :autoScroll="false"
          v-model:page="queryParams.pageNum"
          v-model:limit="queryParams.pageSize"
          @pagination="getList()"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/zhibiao/zhibiao-header.vue";
import { listSelectConfig } from "@/api/system/selectConfig";
import { listPlatform, group } from "@/api/system/index/platform";
import { ref } from "vue";

const selectConfigList = ref([
  {
    text: "全部",
    num: 0,
    clicked: true,
  },
]);
const lastSelectType = ref(0);

const total = ref(0);
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
  platformType: null,
  name: null,
});

const loading = ref(false);

const tableData = ref([]);

function handleSearch(value) {
  queryParams.value.name = value;
  getList();
}
function setClicked(index) {
  if (lastSelectType.value != null) {
    selectConfigList.value[lastSelectType.value].clicked = false;
  }
  selectConfigList.value[index].clicked = true;
  lastSelectType.value = index;

  queryParams.value.pageNum = 1;
  getList();
}
/** 查询selectConfig列表 */
function getRencaiTypeList() {
  const queryParams = {
    pageNum: 1,
    pageSize: 5000,
    type: "指标管理-创新平台-平台类型",
  };
  listSelectConfig(queryParams).then((response) => {
    group().then((result) => {
      selectConfigList.value = [
        {
          text: "全部",
          num: 0,
          clicked: true,
        },
      ];
      for (let res of response.rows) {
        const tmp = result.data.filter((x) => x.type == res.value);
        selectConfigList.value.push({
          text: res.value,
          num:
            tmp != null && tmp != undefined && tmp.length > 0 ? tmp[0].num : 0,
          clicked: false,
        });
      }

      const tmp = result.data.filter((x) => x.type === "全部");
      selectConfigList.value[0].num = tmp[0].num;
      getList();
    });
  });
}
const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 1) {
    return "warning-row";
  }
  return "";
};

function getList() {
  loading.value = true;
  const config = selectConfigList.value[lastSelectType.value];
  const platformType = config.text;
  queryParams.value.platformType = platformType == "全部" ? null : platformType;
  listPlatform(queryParams.value).then((res) => {
    tableData.value = res.rows;
    total.value = res.total;
    loading.value = false;
    if (config.num != res.total && !queryParams.value.name) {
      config.num = res.total;
      if (platformType != "全部") {
        selectConfigList.value[0].num = selectConfigList.value
          .filter((y) => y.text !== "全部")
          .map((x) => x.num)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      } else {
        getRencaiTypeList();
      }
    }
  });
}
getRencaiTypeList();
</script>
<style scoped>
.type {
  display: flex;
  background-color: #fff;
  align-items: center;
  box-shadow: 0px 0px 14px 2px #d2e3f2;
  border-radius: 5px;
  padding: 10px 0;
  margin: 20px 0;
  min-height: 80px;
}
.type .title {
  line-height: 32px;
  text-align: center;
  color: #0062a8;
  font-weight: 550;
  margin-left: 15px;
  margin-right: 15px;
  min-width: 65px;
}
.tags {
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  margin: 0 6px;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 5px;
}

.table {
  box-shadow: 0px 0px 14px 2px #d2e3f2;
  border-radius: 5px;
}
.select-button {
  background-color: #0062a8;
  color: #fff;
}
.page {
  display: flex;
  justify-content: end;
  padding: 25px 16px;
  background-color: #fff;
}
.cell-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: rgba(0, 98, 168, 0.05);
}
</style>
