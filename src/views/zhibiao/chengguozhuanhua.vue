<template>
  <div>
    <Header title="成果转化" @search="handleSearch" />
  </div>
  <div style="margin: auto; width: 1200px; margin-bottom: 50px">
    <div style="padding: 15px 15px 0 15px ">
      <div style="display: flex; justify-content: space-between;">
          <span
            class="typeTags"
            v-for="(config, index) in zhuanhuaTypeList"
            :key="index"
            :class="{ 'select-button': config.clicked }"
            @click="setTypeClicked(index)"
            link
          >
            {{ config.value }}
          </span>
        </div>
    </div>
    <div style="background-color: #fff">
      <div class="type">
        <span class="title">产业赛道</span>
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
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 1" label="需求名称" align="center" prop="requirement" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 1" label="需求企业" align="center" prop="reqEnterprise" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 1" label="单位所在地" align="center" prop="address" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 1" label="创建时间" align="center" prop="createDate" width="180">
          <template #default="scope">
            <span>{{ parseTime(scope.row.createDate, '{y}-{m}-{d}') }}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 2" label="成果名称" align="center" prop="outcomeName" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 2" label="成果转让联系人" align="center" prop="outcomeContact" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 2" label="联系电话" align="center" prop="outcomePhone" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 2" label="成果转让通讯地址" align="center" prop="outcomeAddress" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 2" label="成果应用行业" align="center" prop="outcomeIndustry" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 5" label="合作单位" align="center" prop="cooperativeUnit" />
        <el-table-column :show-overflow-tooltip="true" v-if="tableTypeNum == 5" label="注册名称" align="center" prop="registerName" />
        <el-table-column
          :show-overflow-tooltip="true"
          v-if="lastSelectType == 0"
          width="150px"
          prop="classify"
          align="center"
          label="赛道分类"
        />
        <el-table-column :show-overflow-tooltip="true" label="" width="100" align="center" class-name="small-padding fixed-width">
          <template #default="scope">
            <el-button
              type="primary" link
              @click="zixun($event, scope.row)"
            >我要咨询</el-button>
          </template>
        </el-table-column>
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
  <ZixunForm ref="zixunDialogRef" :demandType="3" />
</template>
<script setup>
import Header from "@/components/zhibiao/zhibiao-header.vue";
import { listSelectConfig } from "@/api/system/selectConfig";
import { listConvert, group } from "@/api/system/index/convert";
import { ref, getCurrentInstance } from "vue";
import ZixunForm from "@/components/zixun-form"

const { proxy } = getCurrentInstance();

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
  classify: null,
  type: null,
});

const loading = ref(false);
const tableTypeNum = ref(1);
const originZhuanhuaTypeList = ref([]);
// zhuanhuaTypeList是包含数量的，由后台配置，如果以后需要统计真实数据库的数据则需要新写一个api
// 将zhuanhuaTypeList替换为originZhuanhuaTypeList
const zhuanhuaTypeList = ref([]);
const lastZhuanhuaSelectType = ref(0);

const tableData = ref([]);

// 打开咨询的对话框
function zixun(event, row) {
  event.stopPropagation(); // 阻止事件冒泡
  let content = "";
  if (tableTypeNum.value == 1) {
    content = "咨询" + row.reqEnterprise + "关于" + row.requirement + "的相关内容";
  } else if (tableTypeNum.value == 2) {
    content = "咨询" + row.outcomeContact + "关于" + row.outcomeName + "的相关内容";
  } else {
    content = "咨询" + row.cooperativeUnit + "关于" + row.registerName + "的相关内容";
  }
  proxy.$refs["zixunDialogRef"].openDialog(content);
}

function handleSearch(value) {
  if (tableTypeNum.value == 1) {
    queryParams.value.requirement = value;

    queryParams.value.cooperativeUnit = null;
    queryParams.value.outcomeName = null;
  } else if (tableTypeNum.value == 2) {
    queryParams.value.outcomeName = value;

    queryParams.value.cooperativeUnit = null;
    queryParams.value.requirement = null;
  } else {
    queryParams.value.cooperativeUnit = value;

    queryParams.value.outcomeName = null;
    queryParams.value.requirement =null;
  }
  
  getList();
}
function setTypeClicked(index) {
  if (lastZhuanhuaSelectType.value != null) {
    zhuanhuaTypeList.value[lastZhuanhuaSelectType.value].clicked = false;
  }
  zhuanhuaTypeList.value[index].clicked = true;
  lastZhuanhuaSelectType.value = index;

  if (index == 2 || index == 3) {
    tableTypeNum.value = 2
  } else {
    tableTypeNum.value = index + 1;
  }

  // 切换type，产业赛道回到全部
  if (lastSelectType.value != null) {
    selectConfigList.value[lastSelectType.value].clicked = false;
  }
  selectConfigList.value[0].clicked = true;
  lastSelectType.value = 0;

  queryParams.value.pageNum = 1;
  getList(true);
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

function getZhuanhuaType() {
  const queryParams = {
    pageNum: 1,
    pageSize: 0,
    type: "指标管理-成果转化-转化数量",
  };
  listSelectConfig(queryParams).then((response) => {
    zhuanhuaTypeList.value = response.rows;
    zhuanhuaTypeList.value[0].clicked = true;
  })
}
/** 查询selectConfig列表 */
function getRencaiTypeList() {
  const queryParams = {
    pageNum: 1,
    pageSize: 0,
    type: "指标管理-成果转化-转化类型",
  };
  listSelectConfig(queryParams).then((res) => {
    originZhuanhuaTypeList.value = res.rows;
    groupSearch(true);
  })
}

function groupSearch(isGetList) {
  let type = originZhuanhuaTypeList.value[lastZhuanhuaSelectType.value].value;
  const queryParams = {
    pageNum: 1,
    pageSize: 0,
    type: "指标管理-成果转化-赛道分类",
  };
  listSelectConfig(queryParams).then((response) => {
    group(type).then((result) => {
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
        if (isGetList) {
          getList();
        }
        
      });
  });
}

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex % 2 == 1) {
    return "warning-row";
  }
  return "";
};

function getList(typeChange) {
  loading.value = true;
  const config = selectConfigList.value[lastSelectType.value];
  const classify = config.text;
  queryParams.value.classify = classify == "全部" ? null : classify;
  queryParams.value.type = originZhuanhuaTypeList.value[lastZhuanhuaSelectType.value].value;
  listConvert(queryParams.value).then((res) => {
    tableData.value = res.rows;
    total.value = res.total;
    loading.value = false;

    if (typeChange) {
      groupSearch(true);
    }
    if (!typeChange && config.num != res.total && !queryParams.value.requirement && queryParams.value.outcomeName && queryParams.value.cooperativeUnit) {
      config.num = res.total;
      if (classify != "全部") {
        selectConfigList.value[0].num = selectConfigList.value
          .filter((y) => y.text !== "全部")
          .map((x) => x.num)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      } else {
        groupSearch();
      }
    }
  });
}
getRencaiTypeList();
getZhuanhuaType();
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

.typeTags {
  font-size: 15px;
  line-height: 40px;
  text-align: center;
  margin: 0 6px;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 5px;
  background-color: #D2E3F2;
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
