<template>
  <div>
    <Header title="R&D经费支出" :showSearch="false" />
  </div>
  <div style="margin: auto; width: 1200px;">
      <div class="content" ref="chartContainer"></div>
  </div>
</template>
<script setup>
import Header from "@/components/zhibiao/zhibiao-header.vue";
import { listExpenditure } from "@/api/system/index/expenditure";
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const chartContainer = ref(null);
onMounted(() => {
  getList();
});

function init() {
  let moneyList = [];
  let percentList = [];
  let yearList = [];
  if (expenditureList.value && expenditureList.value.length > 0) {
    moneyList = expenditureList.value.map(x => x.amount);
    percentList = expenditureList.value.map(x => x.percentStr);
    yearList = expenditureList.value.map(x => x.yearStr);
  }

  let yMax = (moneyList.length > 0 ? Math.round(Math.max(...moneyList) + 4) : 10);
 

  const chartInstance = echarts.init(chartContainer.value);
  let options = {
    color: ['#0062A8', '#C2A341'],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    toolbox: {
      feature: {
        // dataView: { show: true, readOnly: false },
        magicType: { 
          show: true, 
          type: ["line", "bar"],
          title: {
            line: "切换为折线图",
            bar: "切换为柱状图"
          }
        },
        restore: { 
          show: true,
          title: "还原"
        },
        saveAsImage: { 
          show: true,
          title: "保存为图片"
        },
      },
    },
    legend: {
      data: ["R&D经费支出", "占GDP比重"],
    },
    xAxis: [
      {
        type: "category",
        data: yearList,
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "单位(亿元)",
        min: 0,
        max: yMax,
        interval: 2,
        axisLabel: {
          formatter: "{value}",
        },
      },
      {
        type: "value",
        name: "%",
        min: 0,
        max: 1,
        interval: 0.2,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: "R&D经费支出",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        data: moneyList,
      },
      {
        name: "占GDP比重",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        data: percentList,
      },
    ],
  };

  chartInstance.setOption(options);
}

const queryParams = ref({
  pageNum: 1,
  pageSize: 5000,
});
const expenditureList = ref([]);

function getList() {
  listExpenditure(queryParams.value).then((res) => {
    expenditureList.value = res.rows;

    init();
  });
}

</script>
<style scoped>
.content {
  background: #ffffff;
  box-shadow: 0px 0px 14px 2px #d2e3f2;
  border-radius: 5px;
  width: 100%;
  height: 500px;
  padding: 20px 0;
  margin: 50px 0;
}
</style>
