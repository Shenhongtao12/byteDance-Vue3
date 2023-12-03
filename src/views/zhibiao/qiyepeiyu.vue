<template>
    <div>
        <Header title="科技人才" @search="handleSearch" />
    </div>
    <div style="margin: auto; width: 1200px">
      <div style="background-color: #fff;">
          <div class="type">
              <span class="title">企业名单</span>
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
      </div>
    </div>
    
</template>
<script setup>
import Header from "@/components/zhibiao/zhibiao-header.vue"
import { listSelectConfig } from "@/api/system/selectConfig";
import { ref } from "vue";

const selectConfigList = ref([
    {
        text: "全部",
        clicked: true
    }
]);
const lastSelectType = ref(0);

function handleSearch(value) {
    console.log(value);
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
    type: "指标管理-企业培育-认证类型",
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
    // getList();
  });
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
  height: 80px;
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
  line-height: 40px;
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