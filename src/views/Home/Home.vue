<template>
  <div class="home">
    <div>
      <Carousel />
    </div>
    <div class="width1200">
      <part-title title="新闻动态" :is-link="true" link="/xinwen" />
      <news-card v-if="newsTrendsList.length > 0" :news="newsTrendsList" :imageUrl="imageUrl"></news-card>
      <el-skeleton v-else :rows="6" />
    </div>
    <div class="width1200">
      <part-title title="政策举措" :is-link="true" link="/zhengce" />
      <div class="policy-grid-container" v-if="policyInitiativeList.length > 0">
        <div v-for="(item, index) in policyInitiativeList" :key="index">
          <policy-card :id="item.id" :yearMonth="parseTime(item.releaseDate, '{y}-{m}')" :day="parseTime(item.releaseDate, '{d}')" :title="item.title"
          :description="item.content" />
        </div>
      </div>
      <el-skeleton v-else :rows="5" />
    </div>
    <div class="width1200">
      <part-title title="指标展示" />
      <div class="indicator-grid-container">
        <indicator-card :backgroundImage="card1Image" title="产业链" subTitle="两链融合" :price="indexStatistics.chain" price-color="#0062A8" unit="条" routerPath="/lianglianronghe" />
        <indicator-card :backgroundImage="card2Image" title="总交易金额" subTitle="技术交易" :price="4.5" price-color="#C2A341" unit="亿元" routerPath="/jishujiaoyi" />
        <indicator-card :backgroundImage="card3Image" title="技术需求" subTitle="成果转化" :price="indexStatistics.convert" price-color="#00B5FF" unit="项" routerPath="/chengguozhuanhua" />
        <indicator-card :backgroundImage="card4Image" title="政策措施" subTitle="科技政策" :price="indexStatistics.olicy" price-color="#380E9B" unit="项" routerPath="/kejizhengce" />
        <indicator-card :backgroundImage="card5Image" title="经费支出" subTitle="R&D经费支出" :price="indexStatistics.expenditure" price-color="#00E3C0" unit="亿元" routerPath="/rdjingweizhichu" />
        <indicator-card :backgroundImage="card6Image" title="企业" subTitle="企业培育" :price="indexStatistics.ciltivate" price-color="#ED44F1" unit="家" routerPath="/qiyepeiyu" />
        <indicator-card :backgroundImage="card7Image" title="人才" subTitle="科技人才" :price="indexStatistics.talents" price-color="#FF3B2D" unit="位" routerPath="/kejirencai" />
        <indicator-card :backgroundImage="card8Image" title="创新平台" subTitle="创新平台" :price="indexStatistics.platform" price-color="#0062A8" unit="个" routerPath="/chuangxinpingtai" />
      </div>
    </div>
    <div class="width1200">
      <part-title title="功能布局" />
      <el-skeleton v-if="showDistributionAreaList.length == 0" :rows="14" />
      <div v-else class="feature-layout">
        <div >
          <div class="feature-layout-card-box">
            <feature-card v-for="(item,index) in showDistributionAreaList" :key="index" 
              @clicked="switchDitu"
              :leftLineColor="index % 2 == 0 ? '#C2A341' : '#0062A8'" 
              :title="item.title"
              :des="item.content" 
              :index="index"
              :isActive="index == activeIndex"
            />
          </div>
          <div class="buju">
            <span
              :key="index"
              @click="pageChange(index)"
              v-for="(item, index) in Math.ceil(distributionAreaList.length / 3)"
              :class="{ active: index === currentIndex }"
            >
            </span>
          </div>
        </div>
        <div class="feature-layout-image-box">
          <!-- <img :src="card1Image" /> -->
          <Map ></Map>
          <div class="shjdBox">
            <div style="margin: 230px 0 100px 290px;">
              <i class="qcyIcon"></i>
            </div>
            <div class="sms_Map2" :class="{ 'box--active': isBoxActive[0] }" 
              @click="toggleBox(0)" 
              style="background-color: #094fa3cc; top: 90px;left: 330px;"
            >
                <span>煤化工产业<br>两链融合试验区</span>
            </div>
            <div class="sms_Map2_icon">
              <i style="top: 15px; left: 70px"></i>
            </div>
            <div class="sms_Map3" :class="{ 'box--active': isBoxActive[1] }" 
              @click="toggleBox(1)"
              style="background-color: #00aeefcc; top: 160px;left: 440px;transform-origin: bottom left; z-index: 200;"
            >
              <span>榆林经开区<br>中试孵化基地</span>
            </div>
            <div class="sms_Map3_icon">
              <i></i>
            </div>
            <div class="sms_Map4"
              :class="{ 'box--active': isBoxActive[2] }" 
              @click="toggleBox(2)"
              style="background-color: #094fa3cc; top: 147px;left: 292px;transform-origin: bottom center; z-index: 200;"
            >
              <span>轻纺产业<br>两链融合试验区</span>
            </div>
            <div class="sms_Map4_icon">
              <i></i>
            </div>
            <div class="sms_Map5"
              :class="{ 'box--active': isBoxActive[3] }" 
              @click="toggleBox(3)"
              style="background-color: #094fa3cc; top: 20px;left: 430px;transform-origin: bottom center;">
                镁铝合金产业<br>两链融合试验区
            </div>
            <div class="sms_Map5_icon">
              <i></i>
            </div>
            <div class="sms_Map6" 
              :class="{ 'box--active': isBoxActive[4] }" 
              @click="toggleBox(4)"
              style="background-color: #eeb749cc; top: 116px;left: 180px;"
            >
                秦创原(榆林)<br>成果转化中心
            </div>
            <div class="sms_Map6_icon">
              <i></i>
            </div>
            <div class="sms_Map7" 
              :class="{ 'box--active': isBoxActive[5] }" 
              @click="toggleBox(5)"
              style="background-color: #eeb749cc; top: 165px;left: 150px;"
            >
                秦创原(榆林)<br>技术研发中心
              <!-- <i style="top: 5px;  left: 75px"></i> -->
            </div>
            <div class="sms_Map7_icon">
              <i></i>
            </div>
            <div class="sms_Map8" 
              :class="{ 'box--active': isBoxActive[6] }" 
              @click="toggleBox(6)"
              style="background-color: rgba(237, 51, 51, 0.8); width: 120px; top: 215px;left: 80px; transform-origin: bottom right;">
                秦创原(榆林)<br>创新促进中心(副中心)
              <!-- <i style="top: -16px;  left: 115px"></i> -->
            </div>
            <div class="sms_Map8_icon">
              <i></i>
            </div>
            <div class="sms_Map9" 
              :class="{ 'box--active': isBoxActive[7] }" 
              @click="toggleBox(7)"
              style="background-color: #00aeefcc; top: 275px;left: 120px;transform-origin: top right; z-index: 200;">
                榆林高新区<br>中试孵化基地
            </div>
            <div class="sms_Map10" 
              :class="{ 'box--active': isBoxActive[8] }" 
              @click="toggleBox(8)"
              style="background-color: #094fa3cc; width: 110px; top: 400px;left: 90px;transform-origin: top center;"
            >
                智能无人系统产业<br>两链融合试验区
                <!-- <i style="top: -62px;  left: 64px"></i> -->
            </div>
            <div class="sms_Map10_icon">
              <i></i>
            </div>
            <div class="sms_Map11" 
              :class="{ 'box--active': isBoxActive[9] }" 
              @click="toggleBox(9)"
              style="background-color: #094fa3cc; top: 310px;left: 390px; z-index: 201;transform-origin: left center;"
            >
                小米产业<br>两链融合试验区
                <!-- <i style="top: -21px;  left: -35px"></i> -->
            </div>
            <div class="sms_Map11_icon">
              <i></i>
            </div>
            <div class="sms_Map15" 
              :class="{ 'box--active': isBoxActive[15] }" 
              @click="toggleBox(15)"
              style="background-color: #094fa3cc; top: 68px; left: 195px; width: 100px;"
            >
              秦创原榆林高技能<br>人才服务中心
            </div>
            <div class="sms_Map15_icon">
              <i></i>
            </div>
            <div class="sms_Map16" 
              :class="{ 'box--active': isBoxActive[16] }" 
              @click="toggleBox(16)"
              style="background-color: #094fa3cc; top: 430px; left: -10px; transform-origin: top center;"
            >
              马铃薯产业<br>两链融合试验区
            </div>
            <div class="sms_Map16_icon">
              <i></i>
            </div>
            <div class="sms_Map17" 
              :class="{ 'box--active': isBoxActive[17] }" 
              @click="toggleBox(17)"
              style="background-color: #094fa3cc; top: 330px; left: 190px; transform-origin: top center; z-index: 200;"
            >
              羊产业<br>两链融合试验区
            </div>
            <div class="sms_Map17_icon">
              <i></i>
            </div>
            <div class="sms_Map18" 
              :class="{ 'box--active': isBoxActive[18] }" 
              @click="toggleBox(18)"
              style="background-color: #094fa3cc; top: 380px; left: 260px; transform-origin: top center; z-index: 200;"
            >
              中药材产业<br>两链融合试验区
            </div>
            <div class="sms_Map18_icon">
              <i></i>
            </div>
            <div class="sms_Map19" 
              :class="{ 'box--active': isBoxActive[19] }" 
              @click="toggleBox(19)"
              style="background-color: #094fa3cc; top: 400px; left: 355px; transform-origin: top left; z-index: 200;"
            >
              山地苹果<br>两链融合试验区
            </div>
            <div class="sms_Map19_icon">
              <i></i>
            </div>
            <div class="sms_Map20" 
              :class="{ 'box--active': isBoxActive[20] }" 
              @click="toggleBox(20)"
              style="background-color: #094fa3cc; top: 463px; left: 305px; transform-origin: top center; z-index: 200;"
            >
              红枣产业<br>两链融合试验区
            </div>
            <div class="sms_Map20_icon">
              <i></i>
            </div>
            <div class="sms_Map21" 
              :class="{ 'box--active': isBoxActive[21] }" 
              @click="toggleBox(21)"
              style="background-color: #094fa3cc; top: 364px; left: 450px; transform-origin: top left; z-index: 200;"
            >
              空心挂面产业<br>两链融合试验区
            </div>
            <div class="sms_Map21_icon">
              <i></i>
            </div>
            <div class="sms_Map22" 
              :class="{ 'box--active': isBoxActive[22] }" 
              @click="toggleBox(22)"
              style="background-color: #094fa3cc; top: 255px; left: 408px; transform-origin: top left; z-index: 200;"
            >
              半导体及新材料<br>两链融合试验区
            </div>
            <div class="sms_Map22_icon">
              <i></i>
            </div>
          </div>
          <div class="sms_xxxq">
            <i></i>
            <el-image class="img" :src="xxxqImage" fit="cover"></el-image>
            <div class="xxxq" 
              :class="{ 'box--active': isBoxActive[10] }" 
              @click="toggleBox(10)"
            >
              <span class="icon"></span><span class="xx-text">秦创原(榆林)创新促进中心(主中心)</span>
            </div>
          </div>
          <div class="sms_title1" :class="{ 'box--active': isBoxActive[11] }" @click="toggleBox(11)">
            <span>榆林经济开发区</span>
          </div>
          <div class="sms_title2" :class="{ 'box--active': isBoxActive[12] }" @click="toggleBox(12)">
            榆林学院
          </div>
          <div class="sms_title3" :class="{ 'box--active': isBoxActive[13] }" @click="toggleBox(13)">
            科创新城
          </div>
          <div class="sms_title4" :class="{ 'box--active': isBoxActive[14] }" @click="toggleBox(14)">
            榆林高新区
          </div>
        </div>
      </div>
    </div>
    <div class="base-card-box" :style="{ backgroundImage: `url('${homeBaseCardImage}')` }">
      <div class="width1200">
        <el-row>
          <el-col :span="10" :offset="1">
            <base-card title="需求征集" des="让需要成为导向、萌生创新需求、引领科技发展" buttonText="我要发布" />
          </el-col>
          <el-col :span="2"></el-col>
          <el-col :span="10">
            <base-card title="成果对接" des="科技成果转化发布、项目落地应用、园区入驻申请" buttonText="我要咨询" />
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </div>
    </div>
  </div>
  <div class="width1200" style="margin-bottom: 50px;">
      <part-title title="信息检索区" />
      <div>
        <WukuInfo/>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IndicatorCard from '../../components/home/indicator-card/indicator-card.vue'
import PolicyCard from '../../components/home/policy-card/policy-card.vue'
import PartTitle from '../../components/home/part-title/part-title.vue'
import NewsCard from '../../components/home/news-card/news.card.vue'
import FeatureCard from '../../components/home/feature-card/feature-card.vue'
import BaseCard from '../../components/home/base-card/base-card.vue'
import Carousel from '../../components/home/carousel/carousel.vue';
import WukuInfo from '../../components/home/wuku-info/wuku-info.vue'
import card1Image from '../../assets/images/1.png'
import card2Image from '../../assets/images/2.png'
import card3Image from '../../assets/images/3.png'
import card4Image from '../../assets/images/4.png'
import card5Image from '../../assets/images/5.png'
import card6Image from '../../assets/images/6.png'
import card7Image from '../../assets/images/7.png'
import card8Image from '../../assets/images/8.png'
import xxxqImage from '../../assets/images/xxxq.png'
import homeBaseCardImage from '../../assets/images/home-base-card-image.png'
import { listNewsTrends } from "../../api/system/newsTrends";
import { listPolicyInitiative } from "../../api/system/policyInitiative";
import { statistics } from "../../api/system/index/chain";
import { listDistributionArea } from "../../api/system/distributionArea";
import Map from "./map"



// 8项指标
const indexStatistics = ref({
  chain: 0,
  tradin: 0,
  convert: 0,
  olicy: 0,
  expenditure: 0,
  ciltivate: 0,
  talents: 0,
  platform: 0,
});

const titleMapping = ref([
  {
    title: "煤化工产业",
    index: 0
  },
  {
    title: "榆林经开区",
    index: 1
  },
  {
    title: "轻纺产业",
    index: 2
  },
  {
    title: "镁铝合金产业",
    index: 3
  },
  {
    title: "成果转化中心",
    index: 4
  },
  {
    title: "技术研发中心",
    index: 5
  },
  {
    title: "副中心",
    index: 6
  },
  {
    title: "榆林高新区中试孵化基地",
    index: 7
  },
  {
    title: "智能无人系统产业",
    index: 8
  },
  {
    title: "小米产业",
    index: 9
  },
  {
    title: "主中心",
    index: 10
  },
  {
    title: "榆林经济开发区",
    index: 11
  },
  {
    title: "榆林学院",
    index: 12
  },
  {
    title: "科创新城",
    index: 13
  },
  {
    title: "榆林高新区",
    index: 14
  },
  {
    title: "人才服务中心",
    index: 15
  },
  {
    title: "马铃薯产业",
    index: 16
  },
  {
    title: "羊产业",
    index: 17
  },
  {
    title: "中药材产业",
    index: 18
  },
  {
    title: "山地苹果",
    index: 19
  },
  {
    title: "红枣产业",
    index: 20
  },
  {
    title: "空心挂面产业",
    index: 21
  },
  {
    title: "半导体及新材料",
    index: 22
  },
])

const isBoxActive = ref([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
const lastSelectDiqu = ref(null);
const activeIndex = ref(1);

const currentIndex = ref(0);

function pageChange(index) {
  const title = distributionAreaList.value[index*3].title;
  const mappingIndex = titleMapping.value.findIndex(x => title.includes(x.title));
  if (mappingIndex != -1) {
    currentIndex.value = index;
    toggleBox(mappingIndex, false, true)
  } else {
    console.log("出现地图中未标点数据，请检查");
    ElMessage.warning("数据异常，请联系管理员");
  }
}

function toggleBox(index, isNotDituClick, isPageChange) {
  if (lastSelectDiqu.value != null && lastSelectDiqu.value != index) {
    isBoxActive.value[lastSelectDiqu.value] = false;
  }
  
  if (isPageChange) {
    isBoxActive.value[index] = true;;
  } else {
    isBoxActive.value[index] = !isBoxActive.value[index];
  }

  if (!isNotDituClick) {
    selectDitu(titleMapping.value.filter(x => x.index == index)[0].title, index);
  }

  lastSelectDiqu.value = index;
}

const queryParams = ref({
    pageNum: 1,
    pageSize: 6,
    title: null,
    showFlag: '是',
    params: {
      userSort: true
    }
});
const newsTrendsList = ref([]);
const policyInitiativeList = ref([]);
const distributionAreaList = ref([]);
const showDistributionAreaList = ref([]);
const imageUrl = ref("");
/** 查询newsTrends列表 */
function getNewsList() {
  queryParams.value.pageSize = 6;
  listNewsTrends(queryParams.value).then(response => {
    newsTrendsList.value = response.rows;
    imageUrl.value =response.rows[0].coverUrl;
  });
}
function getPolicyInitiative() {
  queryParams.value.pageSize = 3;
  listPolicyInitiative(queryParams.value).then(res => {
    policyInitiativeList.value = res.rows;
  })
}

function getIndexStatistics() {
  statistics().then(res => {
    indexStatistics.value = res.data;
  })
}

function getDistributionAreaList() {
  queryParams.value.pageSize = 0;
  listDistributionArea(queryParams.value).then(res => {
    distributionAreaList.value = res.rows;

    selectShowDistributionAreaList(0);
    if (distributionAreaList.value.length <= 3) {
      activeIndex.value = 0;
    }
    const title = distributionAreaList.value[0].title;
    const mappingIndex = titleMapping.value.findIndex(x => title.includes(x.title));
    if (mappingIndex != -1) {
      toggleBox(mappingIndex, true);
    }
  })
}

function selectDitu(title, mappingIndex) {
  let index;
  if (title == "榆林高新区") {
    index = distributionAreaList.value.findIndex(x => x.title == title);

  } else {
    index = distributionAreaList.value.findIndex(x => x.title.includes(title));
  }
  
  if (index != -1) {
    selectShowDistributionAreaList(index);
    if (distributionAreaList.value.length <= 3) {
      activeIndex.value = index;
    } else {
      activeIndex.value = 1;
    }

    if (lastSelectDiqu.value == mappingIndex && !isBoxActive.value[mappingIndex]) {
      activeIndex.value = -1;
    }
    
  }
}

function selectShowDistributionAreaList(index) {
  if  (distributionAreaList.value.length <= 3) {
    showDistributionAreaList.value = distributionAreaList.value;
    return;
  }
  showDistributionAreaList.value = [];
  if (index==0) {
    // index 显示到中间位置，第一个就应该是showDistributionAreaList的最后一个
    showDistributionAreaList.value.push(distributionAreaList.value[distributionAreaList.value.length - 1]);
  } else {
    showDistributionAreaList.value.push(distributionAreaList.value[index - 1]);
  }

  showDistributionAreaList.value.push(distributionAreaList.value[index]);

  if(index == distributionAreaList.value.length - 1) {
    showDistributionAreaList.value.push(distributionAreaList.value[0]);
  } else {
    showDistributionAreaList.value.push(distributionAreaList.value[index + 1]);
  }

}


function switchDitu(data) {
  const {title, index} = data;
  if (index == activeIndex.value) {
    activeIndex.value = -1;
  } else {
    activeIndex.value = index;
  }
  
  if (title == "榆林高新区") {
    toggleBox(14, true);
    return
  }
  const mappingIndex = titleMapping.value.findIndex(x => title.includes(x.title));
  if (mappingIndex != -1) {
    toggleBox(mappingIndex, true);
  }
}

getNewsList();
getPolicyInitiative();
getIndexStatistics();
getDistributionAreaList();
</script>

<style scoped lang="less">
.base-card-box {
  margin-top: 65px;
  // height: 329px;
  padding: 50px 60px;
  background-size: 100% 100%;
  display: flex;
  grid-gap: 127px
}

.feature-layout {
  display: flex;
  grid-gap: 34px;
  min-height: 510px;
}

.feature-layout-card-box {
  display: flex;
  flex-direction: column;
  flex: 2;
  grid-gap: 25px;

}

.feature-layout-image-box {
  flex: 1;
  position: relative;
  margin-top: -65px;
  margin-left: -110px;
}

.width1200 {
  width: 1200px;
  align-items: center;
  margin: auto;
}

.indicator-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}

.policy-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 35px;
}

.buju {
  height: 12px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.buju span {
  width: 12px;
  height: 12px;
  background: rgba(100, 100, 100, 0.6);
  margin: 0 5px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  line-height: 12px;
  text-align: center;
  color: #333;
  cursor: pointer;
}
.buju span.active {
  background-color: #c2a341;
}


// 地图相对定位的样式
.shjdBox {
  margin-left: 170px;
  margin-top: 62px;
  // transform: scale(1.1);
  position: absolute;
  top: 0;

  div {
    position: absolute;
    width: 90px;
    height: 40px;
    border-radius: 6px;
    text-align: left;
    color: rgb(255, 255, 255);
    z-index: 100;
    padding: 5px 0 0 8px;
    cursor: pointer;
    font-size: 11px;
    transition: transform 0.3s;
    transform-origin: bottom right;

    i {
      position: relative;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: url(../../assets/images/index/logo.png) no-repeat center center/80%;
      background-color: #ee1d23cc;
    }
  }
}
.tran-left{
  transition: transform 0.3s;
  transform-origin: bottom left;
}
.qcyIcon {
  width: 30px !important;
    height: 30px !important;
    border: 2px solid #fff;
}
.sms_Map2::before {
    content: '';
    display: block;
    position: absolute;
    top: 40px;
    left: 75px;
    width: 0px;
    height: 0px;
    transform: rotate(180deg);
    border-width: 0 10px 12px 0;
    z-index: 10;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}

.sms_Map2_icon {
  position: absolute;
  width: 0px;
    height: 0px;
    margin-top: 120px;
    margin-left: 330px;
}
.sms_Map2_icon i::after {
    // content: '';
    // display: inline-block;
    // position: absolute;
    // left: -70px;
    // top: 43px;
    // transform: rotate(135deg);
    // width:100px;
    // height: 2px;
    // background: #ee1d23cc;
}

.sms_Map3::before {
    content: '';
    display: block;
    position: absolute;
    top: 27px;
    left: -12px;
    width: 0px;
    height: 0px;
    transform: rotate(1deg);
    border-width: 0 0 10px 12px;
    border-style: solid;
    border-color: transparent transparent #00aeefcc transparent;
}

.sms_Map3_icon {
  position: absolute;
  width: 0px;
    height: 0px;
    margin-top: 186px;
    margin-left: 405px;
}
.sms_Map3_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -92px;
    top: 30px;
    transform: rotate(153deg);
    width: 100px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map4::before {
    content: '';
    display: block;
    position: absolute;
    top: 38px;
    left: 28px;
    width: 0px;
    height: 0px;
    transform: rotate(180deg);
    border-width: 0 10px 8px 0;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map4_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 188px;
  margin-left: 312px;
}
.sms_Map4_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -14px;
    top: 28px;
    transform: rotate(115deg);
    width: 33px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map5::before {
    content: '';
    display: block;
    position: absolute;
    top: 40px;
    left: 52px;
    width: 0px;
    height: 0px;
    transform: rotate(180deg);
    border-width: 0 8px 10px 0;
    z-index: 10;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map5_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 65px;
  margin-left: 473px;
}
.sms_Map5_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    margin-top: 60px;
    left: -190px;
    top: 33px;
    transform: rotate(136deg);
    width: 230px;
    height: 2px;
    background: #ee1d23cc;
}
.sms_Map6::before {
    content: '';
    display: block;
    position: absolute;
    top: 38px;
    left: 75px;
    width: 0px;
    height: 0px;
    transform: rotate(180deg);
    border-width: 0 10px 18px 0;
    border-style: solid;
    border-color: transparent transparent #eeb749cc transparent;
}
.sms_Map6_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 167px;
  margin-left: 245px;
}
.sms_Map6_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 1px;
    top: 39px;
    transform: rotate(52deg);
    width: 65px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map7::before {
    content: '';
    display: block;
    position: absolute;
    top: 38px;
    left: 75px;
    width: 0px;
    height: 0px;
    transform: rotate(180deg);
    border-width: 0 10px 8px 0;
    border-style: solid;
    border-color: transparent transparent #eeb749cc transparent;
}
.sms_Map7_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 205px;
  margin-left: 220px;
}
.sms_Map7_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 13px;
    top: 22px;
    transform: rotate(20deg);
    width: 62px;
    height: 2px;
    background: #ee1d23cc;
}


.sms_Map8::before {
    content: '';
    display: block;
    position: absolute;
    top: 27px;
    left: 120px;
    width: 0px;
    height: 0px;
    transform: rotate(90deg);
    border-width: 0 0 10px 8px;
    border-style: solid;
    border-color: transparent transparent rgba(237, 51, 51, 0.8) transparent;
}
.sms_Map8_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 245px;
  margin-left: 195px;
}
.sms_Map8_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 15px;
    top: 1px;
    transform: rotate(175deg);
    width: 81px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map9::before {
    content: '';
    display: block;
    position: absolute;
    top: -7px;
    left: 79px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0 0 11px 11px;
    border-style: solid;
    border-color: transparent transparent #00aeefcc transparent;
}

.sms_Map10::before {
    content: '';
    display: block;
    position: absolute;
    top: -11px;
    left: 60px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0 0 10px 11px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map10_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 368px;
  margin-left: 145px;
}
.sms_Map10_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -10px;
    top: -58px;
    transform: rotate(138deg);
    width: 180px;
    height: 2px;
    background: #ee1d23cc;
}
.sms_Map11::before {
    content: '';
    display: block;
    position: absolute;
    top: 15px;
    left: -6px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0 0 6px 6px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map11_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 317px;
  margin-left: 360px;
}
.sms_Map11_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -63px;
    top: -28px;
    transform: rotate(50deg);
    width: 80px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map15::before {
    content: '';
    display: block;
    position: absolute;
    top: 39px;
    left: 85px;
    width: 0px;
    height: 0px;
    transform: rotate(180deg);
    border-width: 0px 10px 35px 0px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map15_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 138px;
  margin-left: 270px;

}
.sms_Map15_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -20px;
    top: 54px;
    transform: rotate(75deg);
    width: 80px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map16::before {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    left: 46px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0px 00px 10px 10px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map16_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 400px;
  margin-left: 30px;

}
.sms_Map16_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -10px;
    top: -75px;
    transform: rotate(148deg);
    width: 295px;
    height: 2px;
    background: #ee1d23cc;
}
.sms_Map17::before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 46px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0px 0px 5px 5px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map17_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 305px;
  margin-left: 225px;

}
.sms_Map17_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 2px;
    top: -25px;
    transform: rotate(138deg);
    width: 78px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map18::before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 50px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0px 5px 5px 0px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map18_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 355px;
  margin-left: 295px;

}
.sms_Map18_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -41px;
    top: -49px;
    transform: rotate(89deg);
    width: 96px;
    height: 2px;
    background: #ee1d23cc;
}
.sms_Map19::before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 10px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0px 5px 5px 0px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map19_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 375px;
  margin-left: 348px;

}
.sms_Map19_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -81px;
    top: -58px;
    transform: rotate(70deg);
    width: 125px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map20::before {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: 45px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0px 5px 5px 0px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map20_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 438px;
  margin-left: 332px;

}
.sms_Map20_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -100px;
    top: -90px;
    transform: rotate(79deg);
    width: 181px;
    height: 2px;
    background: #ee1d23cc;
    
}

.sms_Map21::before {
    content: '';
    display: block;
    position: absolute;
    top: 1px;
    left: -8px;
    width: 0px;
    height: 0px;
    transform: rotate(270deg);
    border-width: 0px 0px 10px 10px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map21_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 353px;
  margin-left: 420px;

}
.sms_Map21_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -125px;
    top: -48px;
    transform: rotate(42deg);
    width: 150px;
    height: 2px;
    background: #ee1d23cc;
    
}
.sms_Map22::before {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: -5px;
    transform: rotate(0deg);
    border-width: 0px 0px 5px 5px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map22_icon {
  position: absolute;
  width: 0px;
  height: 0px;
  margin-top: 253px;
  margin-left: 380px;

}
.sms_Map22_icon i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -64px;
    top: 0px;
    transform: rotate(190deg);
    width: 64px;
    height: 2px;
    background: #ee1d23cc;
    
}

.sms_xxxq {
  position: absolute;
  background-color: #fff;
  padding: 5px;
  margin: -90px 0 0 330px;
  border: 2px solid rgba(238, 29, 35, 0.8);
  width: 155px;
    height: 142px;
    align-items: center;

  .img {
    width: 140px;
    height: 130px;
  }

  .xxxq {
    margin-top: -20px;
    margin-left: -35px;
    position: absolute;
    display: flex; 
    align-items: center;
    width: 215px;
    padding: 3px 6px;
    background-color: #ee1d23cc;
    border-radius: 5px;
    cursor: pointer;
    transform-origin: bottom center;
  }

  .icon {
      display: block;
      width: 18px;
      height: 18px;
      line-height: 20px;
      // border-radius: 50%;
      background: url(../../assets/images/index/logo.png) no-repeat center center/80%;
      // background-color: #ee1d23cc;
    }

  .xx-text {
    font-size: 12px;
    color: #fff;
    line-height: 16px;
    // background-color: #ee1d23cc;
  }
}

.sms_xxxq i::after {
    content: '';
    display: inline-block;
    position: absolute;
    margin-top: -25px;
    left: -25px;
    top: -110px;
    transform: rotate(106deg);
    width: 275px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_title1 {
  font-size: 9px;
  color: #000;
  position: absolute;
  margin: -375px 0 0 560px;
  z-index: 200;
  cursor: pointer;
  transition: transform 0.3s;
}
.sms_title2 {
  font-size: 9px;
  color: #000;
  position: absolute;
  margin: -395px 0 0 417px;
  z-index: 200;
  cursor: pointer;
  transition: transform 0.3s;
}
.sms_title3 {
  font-size: 9px;
  color: #000;
  position: absolute;
  margin: -372px 0 0 368px;
  z-index: 200;
  cursor: pointer;
  transition: transform 0.3s;
}
.sms_title4 {
  font-size: 9px;
  color: #000;
  position: absolute;
  margin: -325px 0 0 380px;
  z-index: 200;
  cursor: pointer;
  transition: transform 0.3s;
}


// 动画
.box--active {
  transform: scale(1.8);
  z-index: 1001 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>