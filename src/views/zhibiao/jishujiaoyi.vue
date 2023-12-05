<template>
  <div>
    <Header title="技术交易" :showSearch="false" />
  </div>
  <div style="margin: auto; width: 1200px">
    <div class="content" style="height: 340px; padding: 10px 20px 0 5px;">
      <div style="display: flex;">
        <el-image :src="img1" style="height: 50px;"></el-image>
        <div class="title">数字统计</div>
      </div>
      <div class="tongji">
        <div class="tj-sum">
          <div>
            <span class="money">{{ echarsData.sumAmount }}</span>
            <span class="text"> 亿元</span>
          </div>
          <div style="padding-top: 5px;">
            <span class="text">总交易金额</span>
          </div>
        </div>
        <div class="tj-sum">
          <div>
            <span class="money">{{ echarsData.sumContractNum }}</span>
            <span class="text"> 项</span>
          </div>
          <div style="padding-top: 5px;">
            <span class="text">总合同数量</span>
          </div>
        </div>
      </div>

      <div class="tongji" style="margin-top: 30px;">
        <div class="tj-bg" :style="{ backgroundImage: `url('${item.img}')` }" :key="index" v-for="(item, index) in echarsData.contractTypeList">
          <div class="tj-jishu">
            <div>
              <span class="money">{{ item.amount }}</span>
              <span class="text"> 亿元</span>
            </div>
            <div style="padding-top: 5px;">
              <span class="text">{{ item.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content" ref="heTongNumRef"></div>
    <div class="content" ref="heTongAmountRef"></div>
    <div class="content" ref="hetongTypeRef" style="height: 340px;"></div>
    <div class="content" ref="shanxiRef" style="height: 380px;"></div>

    <div class="content" style="height: 300px; padding: 10px 20px 0 5px; margin-bottom: 50px;">
      <div style="display: flex;">
        <el-image :src="img10" style="height: 50px;"></el-image>
        <div class="title">向其他地市技术输出情况（领域）</div>
      </div>

      <div class="tongji" style="margin-top: 30px;">
        <div class="ly-bg" :style="{ backgroundImage: `url('${item.img}')` }" :key="index" v-for="(item, index) in echarsData.contractDomainList">
          <div class="ly-domain">
            <div style="height: 40px; ">
              <span class="text" style="color: #333;">{{ item.type }}</span>
            </div>
            <div>
              <span class="money">{{ item.amount }}</span>
              <span class="text" style="color: #333;"> 亿元</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Header from "@/components/zhibiao/zhibiao-header.vue";
import { echars } from "@/api/system/index/tradin";
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

import img1 from "@/assets/images/index/jishujiaoyi/1.png";
import img2 from "@/assets/images/index/jishujiaoyi/2.png";
import img3 from "@/assets/images/index/jishujiaoyi/3.png";
import img4 from "@/assets/images/index/jishujiaoyi/4.png";
import img5 from "@/assets/images/index/jishujiaoyi/5.png";
import img6 from "@/assets/images/index/jishujiaoyi/6.png";
import img7 from "@/assets/images/index/jishujiaoyi/7.png";
import img8 from "@/assets/images/index/jishujiaoyi/8.png";
import img9 from "@/assets/images/index/jishujiaoyi/9.png";
import img10 from "@/assets/images/index/jishujiaoyi/10.png";

const heTongNumRef = ref(null);
const heTongAmountRef = ref(null);
const hetongTypeRef = ref(null);
const shanxiRef = ref(null);
onMounted(() => {
  getList();
});

// 合同数量
function initHeTongNum() {
  const data = echarsData.value.contractNumList;
  let legendData = [];
  let seriesData = [];
  let yMax = 10;
  if (data && data.length > 0) {
    legendData = data.map((x) => x.type);
    for (let i = 0; i < legendData.length; i++) {
      let tmpMax = Math.round(Math.max(...data[i].numArray) + 5);
      yMax = tmpMax > yMax ? tmpMax : yMax;
      seriesData.push({
        name: legendData[i],
        type: "line",
        smooth: true,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        data: data[i].numArray,
      });
    }
  }
  const interval = Math.ceil(yMax / 5);

  const chartInstance = echarts.init(heTongNumRef.value);
  let options = {
    title: {
      text: "{image|}" + "{text|合同数量}",
      top: -15,
      textStyle: {
        rich: {
          text: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#333",
          },
          image: {
            height: 50,
            backgroundColor: {
              image: img6, // 图片路径
            },
          },
        },
      },
    },
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
          type: ["bar"],
          title: {
            bar: "切换为柱状图",
          },
        },
        restore: {
          show: true,
          title: "还原",
        },
        saveAsImage: {
          show: true,
          title: "保存为图片",
        },
      },
    },
    legend: {
      data: legendData,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "1月份",
          "2月份",
          "3月份",
          "4月份",
          "5月份",
          "6月份",
          "7月份",
          "8月份",
          "9月份",
          "10月份",
          "11月份",
          "12月份",
        ],
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: yMax,
        interval: interval,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: seriesData,
  };

  chartInstance.setOption(options);
}


// 合同金额
function initHeTongAmount() {
  const data = echarsData.value.contractAmountList;
  let legendData = [];
  let seriesData = [];
  let yMax = 10;
  if (data && data.length > 0) {
    legendData = data.map((x) => x.type);
    for (let i = 0; i < legendData.length; i++) {
      let tmpMax = Math.round(Math.max(...data[i].amountArray) + 5);
      yMax = tmpMax > yMax ? tmpMax : yMax;
      seriesData.push({
        name: legendData[i],
        type: "line",
        smooth: true,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        data: data[i].amountArray,
      });
    }
  }
  const interval = Math.ceil(yMax / 5);

  const chartInstance = echarts.init(heTongAmountRef.value);
  let options = {
    title: {
      text: "{image|}" + "{text|合同金额}",
      top: -15,
      textStyle: {
        rich: {
          text: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#333",
          },
          image: {
            height: 50,
            backgroundColor: {
              image: img7, // 图片路径
            },
          },
        },
      },
    },
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
          type: ["bar"],
          title: {
            bar: "切换为柱状图",
          },
        },
        restore: {
          show: true,
          title: "还原",
        },
        saveAsImage: {
          show: true,
          title: "保存为图片",
        },
      },
    },
    legend: {
      data: legendData,
    },
    xAxis: [
      {
        type: "category",
        data: [
          "1月份",
          "2月份",
          "3月份",
          "4月份",
          "5月份",
          "6月份",
          "7月份",
          "8月份",
          "9月份",
          "10月份",
          "11月份",
          "12月份",
        ],
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
        interval: interval,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: seriesData,
  };

  chartInstance.setOption(options);
}

// 合同类型
function initHetongType() {
  const data = [];
  const sumAmount = echarsData.value.sumAmount || 0;
  for (let i=0;i<echarsData.value.contractTypeList.length; i++ ) {
    const res = echarsData.value.contractTypeList[i];
    data.push({
      value: res.amount,
      name: res.type
    })
  }
  const chartInstance = echarts.init(hetongTypeRef.value);
  let options = {
    title: {
      text: "{image|}" + "{text|合同类型}",
      top: -15,
      textStyle: {
        rich: {
          text: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#333",
          },
          image: {
            height: 50,
            backgroundColor: {
              image: img8, // 图片路径
            },
          },
        },
      },
    },
    legend: {
      selectedMode: true,
      orient: 'vertical',
      left: '60%', 
      top: 'middle', 
      itemWidth: 10,
      itemHeight: 10,
      formatter: function(name) {
        var dataIndex = options.series[0].data.findIndex(function(item) {
          return item.name === name;
        });
        if (dataIndex != -1) {
          var value = options.series[0].data[dataIndex].value;
          return name + '      ' + value + ' 亿元';
        }
      },
      textStyle: {
        fontSize: 16,
        lineHeight: 25
      },
    },
    series: [
      {
        name: '合同类型',
        type: 'pie',
        top: -50,
        left: "10%",
        radius: [50, 100],
        center: ['30%', '60%'],
        label: {
            show: true,
            position: 'center',
            color:'#4c4a4a',
            formatter: '金额(亿元)'+ '\n\r\n' + '{active|' + sumAmount +'}',
            rich: {
                total:{
                    fontSize: 14,
                    color:'#454c5c',
                },
                active: {
                    fontSize: 26,
                    color:'#000',
                },
            }
        },
        itemStyle: {
          borderRadius: 6
        },
        data: data
      },
    ],
    grid: {
      containLabel: true,
      left: '60%', // 设置 grid 在容器中的水平位置为中间
      width: '60%' // 设置 grid 的宽度为容器的一半
    }
  };

  chartInstance.setOption(options);
}


// 陕西省内技术输出
function initShanxiAmount() {
  const data = echarsData.value.shanxiAmountList;
  let xAxisData = echarsData.value.shanxiList;
  let yMax = 10;
  let tmpMax = Math.round(Math.max(...data) + 5);
  yMax = tmpMax > yMax ? tmpMax : yMax;
  const interval = Math.ceil(yMax / 5);

  const chartInstance = echarts.init(shanxiRef.value);
  let options = {
    title: {
      text: "{image|}" + "{text|向其他地市技术输出情况（陕西省）}",
      top: -15,
      textStyle: {
        rich: {
          text: {
            fontSize: 22,
            fontWeight: "bold",
            color: "#333",
          },
          image: {
            height: 50,
            backgroundColor: {
              image: img9, // 图片路径
            },
          },
        },
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },
    xAxis: [
      {
        type: "category",
        data: xAxisData,
        axisPointer: {
          type: "shadow",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name:"单位(亿元)",
        min: 0,
        max: yMax,
        interval: interval,
        axisLabel: {
          formatter: "{value}",
        },
      },
    ],
    series: [
      {
        name: '',
        type: "bar",
        smooth: true,
        tooltip: {
          valueFormatter: function (value) {
            return value;
          },
        },
        data: data,
      }
    ],
  };

  chartInstance.setOption(options);
}

const echarsData = ref({});

function getList() {
  echars().then((res) => {
    echarsData.value = res.data;
    for(let i=0;i<echarsData.value.contractTypeList.length;i++) {
      echarsData.value.contractTypeList[i].img = '/src/assets/images/index/jishujiaoyi/' + (i+2) + ".png";
      echarsData.value.contractDomainList[i].img = '/src/assets/images/index/jishujiaoyi/' + (i+11) + ".png";
    }
    initHeTongNum();
    initHeTongAmount();
    initHetongType();
    initShanxiAmount();
  });
}
</script>
<style scoped>
.content {
  background: #ffffff;
  box-shadow: 0px 0px 14px 2px #d2e3f2;
  border-radius: 5px;
  width: 100%;
  height: 432px;
  padding-top: 20px;
  margin-top: 50px;
}
.title {
  font-size: 22px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #333;
  line-height: 50px;
}

.tongji {
  padding-left: 15px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.tj-sum {
  height: 92px;
  background: #F7EFD5;
  border: 1px solid #C2A341;
  border-radius: 5px;
  width: 560px;
  align-items: center;

  display: flex;
  justify-content: center;
  flex-direction: column;
}

.money {
  font-size: 26px;
  font-family: PingFang-SC-Heavy;
  /* font-weight: bold; */
  color: #333333;
}
.text {
  font-size: 16px;
  font-family: PingFang-SC-Bold;
  /* font-weight: bold; */
  color: #666666;
}
.tj-bg {
  width: 271px;
  height: 122px;
  background-size: cover;
  background-repeat: no-repeat;
}
.tj-jishu {
  height: 122px;
  align-items: center;
  margin-left: 110px;
  margin-top: 30px;
}
.ly-bg {
  width: 247px;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
}
.ly-domain {
  height: 140px;
  margin-left: 110px;
  margin-top: 30px;
}
</style>
