<template>
  <div style="background-color: #1e70ff1a">
  <div style="margin: auto; width: 1200px;">
    <div class="header">
      <div class="title">政策举措</div>
      <div class="sousuo">
        <div>
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
              {{ searchType
              }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="标题">标题</el-dropdown-item>
                <el-dropdown-item command="标题+内容"
                  >标题+内容</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="search-box">
          <el-input v-model="keyword" size="large" placeholder="请输入关键字" />
        </div>
        <el-button
          class="search-button"
          type="primary"
          @click="getPolicyInitiative"
          size="large"
        >
          <span style="color: #fff">搜索</span>
        </el-button>
      </div>
    </div>
    <div>
      <el-table
        v-loading="loading"
        :data="policyInitiativeList"
        style="width: 100%"
        row-class-name="row-hover"
        @row-click="rowClick"
      >
        <el-table-column type="index" align="center" label="序号" width="80" />
        <el-table-column
          :show-overflow-tooltip="true"
          prop="title"
          label="标题"
        />
        <el-table-column
          prop="releaseDate"
          align="center"
          label="发布时间"
          width="180"
        >
          <template #default="scope">
            <span>{{ parseTime(scope.row.releaseDate, "{y}-{m}-{d}") }}</span>
          </template>
        </el-table-column>
        <el-table-column
          width="120"
          label="申请"
          align="center"
          class-name="small-padding fixed-width"
        >
          <template #default="scope">
            <el-button type="primary" link @click="zixun($event, scope.row)"
              ><span style="color: #0062a8">我要咨询</span></el-button
            >
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
        @pagination="getPolicyInitiative"
      />
    </div>
  </div>
  <ZixunForm ref="zixunDialogRef" :demandType="3" />
  <div class="end"></div>
</div>
</template>
<script setup>
import { ref, getCurrentInstance } from "vue";
import { listPolicyInitiative } from "../../api/system/policyInitiative";
import ZixunForm from "@/components/zixun-form"
import { useRouter } from "vue-router";

const router = useRouter();
const { proxy } = getCurrentInstance();

const keyword = ref("");
const searchType = ref("标题");
function handleCommand(command) {
  searchType.value = command;
}
const total = ref(0);
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
  title: null,
  content: null,
  showFlag: "是",
  params: {
    userSort: true,
  },
});

const loading = ref(false);
const policyInitiativeList = ref([]);

function getPolicyInitiative() {
  loading.value = true;
  if (keyword.value != null && keyword.value != undefined) {
    if (searchType.value == "标题") {
      queryParams.value.title = keyword.value;
    } else {
      queryParams.value.title = keyword.value;
    }
  }
  listPolicyInitiative(queryParams.value).then((res) => {
    policyInitiativeList.value = res.rows;
    total.value = res.total;
    loading.value = false;
  });
}

// 打开咨询的对话框
function zixun(event, row) {
  event.stopPropagation(); // 阻止事件冒泡
  proxy.$refs["zixunDialogRef"].openDialog(row.title);
}

function rowClick(row) {
  router.push("/zhengcexiangqing/" + row.id);
}

getPolicyInitiative();
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(151, 151, 151, 0.2);

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #0062a8;
  }

  .sousuo {
    display: flex;
    align-items: center;

    .search-box {
      width: 164px;
      margin: 0 16px;
    }
  }
}
.search-button {
  width: 132px;
  --el-button-bg-color: #0062a8;
  --el-button-border-color: #0062a8;
  --el-button-hover-bg-color: rgb(51, 129, 185);
  --el-button-hover-border-color: rgb(51, 129, 185);
  --el-button-active-bg-color: rgb(0, 88, 151);
  --el-button-active-border-color: rgb(0, 88, 151);
}
.page {
  display: flex;
  justify-content: end;
  padding: 25px 16px;
  background-color: #fff;
}

.end {
  height: 60px;
}
</style>
<style>
.el-table thead th {
  background-color: rgba(0, 98, 168, 0.05) !important;
  color: #333333;
}
.row-hover:hover {
  cursor: pointer;
}
</style>