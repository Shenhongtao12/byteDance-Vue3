<template>
  <div>
    <Header title="两链融合" @search="handleSearch" />
  </div>
  <div style="margin: auto; width: 1200px; margin-bottom: 50px">
    <div class="btn">
      <div class="img" :style="{ backgroundImage: `url('${ButtonImg}')` }" @click="zixun">
        <span class="text">我要咨询</span>
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
          :show-overflow-tooltip="true"
          prop="industrialChainName"
          align="center"
          label="产业链名称"
        />
        <el-table-column
          :show-overflow-tooltip="true"
          prop="leadEnterprise"
          align="center"
          label="牵头单位"
        />
        <el-table-column
          :show-overflow-tooltip="true"
          prop="manager"
          align="center"
          label="链长"
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
    <ZixunForm ref="zixunDialogRef" :demandType="3" />
  </div>
</template>
<script setup>
import Header from "@/components/zhibiao/zhibiao-header.vue";
import { listChain } from "@/api/system/index/chain";
import { ref, getCurrentInstance } from "vue";
import ButtonImg from "@/assets/images/index/1.png";
import ZixunForm from "@/components/zixun-form"

const { proxy } = getCurrentInstance();

const total = ref(0);
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
  industrialChainName: null,
});

const loading = ref(false);
const tableData = ref([]);

// 打开咨询的对话框
function zixun(event, row) {
  event.stopPropagation(); // 阻止事件冒泡
  proxy.$refs["zixunDialogRef"].openDialog("咨询产业链相关内容");
}

function handleSearch(value) {
  queryParams.value.industrialChainName = value;
  getList();
}

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 1) {
    return "warning-row";
  }
  return "";
};

function getList() {
  loading.value = true;
  listChain(queryParams.value).then((res) => {
    tableData.value = res.rows;
    total.value = res.total;
    loading.value = false;
  });
}
getList();
</script>
<style scoped>
.btn {
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin: 25px 0;
}

.img {
  width: 140px;
  height: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.text {
  line-height: 50px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
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
</style>
<style>
.el-table .warning-row {
  --el-table-tr-bg-color: rgba(0, 98, 168, 0.05);
}
</style>
