<template>
    <div>
        <Header title="科技人才" @search="handleSearch" />
    </div>
    <div style="margin: auto; width: 1200px; margin-bottom: 50px;">
      <div style="background-color: #fff;">
          <div class="type">
              <span class="title">人才名单</span>
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
          style="width: 100%; min-height: 200px;"
        >
          <el-table-column type="index" align="center" label="序号" width="80" />
          <el-table-column :show-overflow-tooltip="true" v-if="tablePropertySetup.expertName" :label="tablePropertySetup.expertName" align="center" prop="expertName" width="120">
            <template #default="scope">
              {{ desensitizeName(scope.row.expertName) }}
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" v-if="tablePropertySetup.politicalStatus" :label="tablePropertySetup.politicalStatus" align="center" prop="politicalStatus" width="100" />
          <el-table-column :show-overflow-tooltip="true" v-if="tablePropertySetup.enterprise" :label="tablePropertySetup.enterprise" align="center" prop="enterprise" />
          <el-table-column :show-overflow-tooltip="true" v-if="tablePropertySetup.nature" :label="tablePropertySetup.nature" align="center" prop="nature" />
          <el-table-column :show-overflow-tooltip="true" v-if="tablePropertySetup.cooperationUnit" :label="tablePropertySetup.cooperationUnit" align="center" prop="cooperationUnit" />
          <el-table-column :show-overflow-tooltip="true" v-if="tablePropertySetup.position" :label="tablePropertySetup.position" align="center" prop="position">
            <template #default="scope">
              <span v-if="tablePropertySetup.position == '首席工程师'">
                {{ desensitizeName(scope.row.position) }}
              </span>
              <span v-else>
                {{ scope.row.position }}
              </span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" v-if="tablePropertySetup.workContent" :label="tablePropertySetup.workContent" align="center" prop="workContent" />
          <el-table-column :show-overflow-tooltip="true" v-if="tablePropertySetup.expertType" :label="tablePropertySetup.expertType" align="center" prop="expertType" />
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
import Header from "@/components/zhibiao/zhibiao-header.vue"
import { listSelectConfig } from "@/api/system/selectConfig";
import { listTalents, group } from "@/api/system/index/talents";
import { ref } from "vue";

const selectConfigList = ref([
    {
        text: "全部",
        num: 0,
        clicked: true
    }
]);
const lastSelectType = ref(0);

const total = ref(0);
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
  expertType: null,
  expertName: null,
  enterprise: null,
  params: {
    userSort: true // 让后台知道是前台UI在查询
  }
});


const tablePropertySetup = ref({});

function selectionChange(value) {
  let property;
  switch (value) {
    case "农业特派员": 
      property = nongYe()
      break;
    case "工业特派员": 
      property = gongye()
      break;
    case "三区人才": 
      property = sanqurencai()
      break;
    case "科技经纪人": 
      property = kejijingjiren()
      break;
    case "科学家工程师队伍": 
      property = kexuejia()
      break;
    case "新双创团队": 
      property = xinshuangchuang()
      break;
    default:
      property = noSelection()
      break;
  }
  tablePropertySetup.value = property;
}

function noSelection() {
  return {
    expertName: "专家姓名",
    politicalStatus: "政治面貌",
    enterprise: "工作单位",
    nature: "工作性质",
    // cooperationUnit: "协作单位",
    expertType: "专家类型",
    position: "职务",
    workContent: "工作内容"
  }
}
function nongYe() {
  return {
    expertName: "特派员姓名",
    enterprise: "产业团",
    nature: "技术职称",
    position: "职位",
  }
}
function gongye() {
  return {
    expertName: "姓名",
    enterprise: "工作单位",
    nature: "工作性质",
  }
}
function sanqurencai() {
  return {
    expertName: "姓名",
    politicalStatus: "政治面貌",
    enterprise: "工作单位",
    nature: "技术职称",
    position: "职务",
    workContent: "工作内容"
  }
}
function kejijingjiren() {
  return {
    expertName: "姓名",
    politicalStatus: "政治面貌",
    enterprise: "工作单位",
    nature: "技术职称",
    position: "职务",
    workContent: "工作内容"
  }
}

function kexuejia() {
  return {
    expertName: "首席科学家",
    enterprise: "队伍名称",
    cooperationUnit: "协作单位",
    nature: "牵头单位",
    position: "首席工程师",
  }
}

function xinshuangchuang() {
  return {
    expertName: "姓名",
    enterprise: "所在单位",
    nature: "人才称号",
    // cooperationUnit: "联系方式",
    position: "职务",
  }
}

const loading = ref(false);

const tableData = ref([]);

function handleSearch(value) {
  queryParams.value.expertName = value;
  queryParams.value.enterprise = value;
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
    type: "指标管理-科技人才-专家类型",
  };
  listSelectConfig(queryParams).then((response) => {
    group().then(result => {
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
    })
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
  const expertType = config.text;
  queryParams.value.expertType = expertType == "全部" ? null : expertType;
  listTalents(queryParams.value).then(res => {
    selectionChange(expertType);
    tableData.value = res.rows;
    total.value = res.total;
    loading.value = false;
    if (config.num != res.total && !queryParams.value.expertName) {
      config.num = res.total;
      if (expertType != "全部") {
        selectConfigList.value[0].num = selectConfigList.value.filter(y => y.text !== "全部")
          .map(x => x.num).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      } else {
        getRencaiTypeList();
      }
    }
  })
}
getRencaiTypeList();
</script>
<style scoped>
.type {
  display: flex;
  background-color: #fff;
  align-items: center;
  box-shadow: 0px 0px 14px 2px #D2E3F2;
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
  box-shadow: 0px 0px 14px 2px #D2E3F2;
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
  --el-table-tr-bg-color: rgba(0,98,168,.05);
}
</style>
