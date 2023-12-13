<template>
  <div style="width: 800px; height: 650px" ref="chartsDOM"></div>
</template>

<script setup>
import * as echarts from "echarts";
import getYulinMap from "@/api/map";
import { ref, onMounted } from "vue";
import icon from "@/assets/images/index/logo.png";

const chartsDOM = ref(null);

var mapData = [
  // 地图数据
  {
    name: "定边县",
    value: 1500,
  },
  {
    name: "靖边县",
    value: 2125,
  },
  {
    name: "横山区",
    value: 30,
  },
  {
    name: "榆阳区",
    value: 1500,
  },
  {
    name: "子洲县",
    value: 2300,
  },
  {
    name: "清涧县",
    value: 30,
  },
  {
    name: "米脂县",
    value: 300,
  },
  {
    name: "神木市",
    value: 200,
  },
  {
    name: "佳县",
    value: 2300,
  },
  {
    name: "绥德县",
    value: 1500,
  },
  {
    name: "吴堡县",
    value: 30,
  },
  {
    name: "府谷县",
    value: 20,
  },
];

const markPointData = [
//   {
//     name: "神木市111",
//     value: 1,
//     coord: [110.41948427083331, 38.798425328125006],
//     label: "文字提示1",
//   },
//   {
//     name: "榆阳区111",
//     coord: [109.62223383333331, 38.52978659375],
//     label: "文字提示2",
//   },
];

const convertData = function (data) {
  // 处理数据函数
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = data[i].coord;
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

onMounted(() => {
  // 初始化统计图对象
  var myChart = echarts.init(chartsDOM.value);
  // 显示 loading 动画
  myChart.showLoading();
  // 再得到数据的基础上，进行地图绘制
  getYulinMap.then((res) => {
    // 得到结果后，关闭动画
    myChart.hideLoading();
    // 注册地图(数据放在axios返回对象的data中哦)
    echarts.registerMap("GX", res.data);
    var option = {
        visualMap: {
          min: 0,
          max: 100000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          // 对应 type=map, geoIndex=0 系列中value的值，通过值匹配颜色
          pieces: [
            {
              gt: 2000,
              label: "> 2000",
              color: "#f594ad",
            },
            {
              gte: 1000,
              lte: 2000,
              label: "1000 - 2000",
              color: "#eeef92",
            },
            {
              gte: 100,
              lt: 1000,
              label: "100 - 1000",
              color: "#b5d7f0",
            },
            {
              gt: 10,
              lt: 100,
              label: "10 - 100",
              color: "#a3d295",
            },
          ],
          show: false,
        },
        // title: {
        // text: '一原两地多区',
        // },
    //   tooltip: {
    //     trigger: "item",
    //   },
      geo: {
        show: true,
        selectedMode: 'single',
        geoIndex: 1,
        map: "GX",
        label: {
          show: false,
        },
        emphasis: {
            itemStyle: {},
          label: {
            areaColor: "#2B91B7",
            show: false,
          },
        },
        roam: false,
        itemStyle: {
          areaColor: "#999",
          borderColor: "#3B5077",
        },
        // zoom: 1.03,
      },
      series: [
        {
          name: "榆林地图",
          type: "map",
          map: "GX",
            geoIndex: 2,
          label: {
            show: true,
          },
          emphasis: {
            itemStyle: {},
            label: {
              show: true,
            },
          },
        //   itemStyle: {
        //     areaColor: "#D6E6F3",
        //     borderColor: "#3B5077",
        //   },

          data: mapData,
        },
        {
          name: "榆林",
          type: "scatter",
          coordinateSystem: "geo",
          data: convertData(markPointData),
        //   symbolSize: function (val) {
        //     return val[2];
        //   },
        //   showEffectOn: "emphasis",
        //   rippleEffect: {
        //     brushType: "stroke",
        //   },
        //   hoverAnimation: true,
        symbolOffset: ['50%', '-100%'],
        symbolSize: [25, 25],
          // 自定义图片的 路径
          symbol: `image://${icon}`,
          label: {
            show: false,
            // formatter: function (params) {
            //   //标签内容
            //   return params.name;
            // },
            lineHeight: 20,
            backgroundColor: "red",
            // borderColor: "red",
            borderWidth: "1",
            // padding: [5, 15, 4],
            color: "#000000",
            color: "#291010",
            // fontSize: 14,
            // fontWeight: "normal",
          },
          emphasis: {
            itemStyle: {}
          },
        },
        // //设置poi点
        // {
        //   type: "scatter",
        //   coordinateSystem: "geo",
        //   zlevel: 2,
        //   rippleEffect: {
        //     period: 4,
        //     brushType: "stroke",
        //     scale: 4,
        //   },
        //   label: {
        //     show: true,
        //     color: "#fff",
        //   },
        //   symbol: "pin", //定位图标样式
        //   symbolSize: 40,
        //   data: markPointData
        // }
      ],
    };
    myChart.setOption(option);
    // myChart.getZr().on("click", function (params) {
    //   var pixelPoint = [params.offsetX, params.offsetY];
    //   var dataPoint = myChart.convertFromPixel({ geoIndex: 0 }, pixelPoint);
    //   console.log(dataPoint);
    // });
  });
});
</script>