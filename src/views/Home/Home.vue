<template>
  <div class="home">
    <div>
      <Carousel />
    </div>
    <div class="width1200">
      <part-title title="新闻动态" :is-link="true" link="/xinwen" />
      <news-card v-if="newsTrendsList.length > 0" :news="newsTrendsList" :imageUrl="imageUrl"></news-card>
    </div>
    <div class="width1200">
      <part-title title="政策举措" :is-link="true" link="/zhengce" />
      <div class="policy-grid-container" v-if="policyInitiativeList.length > 0">
        <div v-for="(item, index) in policyInitiativeList" :key="index">
          <policy-card :id="item.id" :yearMonth="parseTime(item.releaseDate, '{y}-{m}')" :day="parseTime(item.releaseDate, '{d}')" :title="item.title"
          :description="item.content" />
        </div>
      </div>
    </div>
    <div class="width1200">
      <part-title title="指标展示" />
      <div class="indicator-grid-container">
        <indicator-card :backgroundImage="card1Image" title="产业链" subTitle="两链融合" :price="indexStatistics.chain" price-color="#0062A8" unit="条" routerPath="/lianglianronghe" />
        <indicator-card :backgroundImage="card2Image" title="总交易金额" subTitle="技术交易" :price="indexStatistics.tradin" price-color="#C2A341" unit="亿元" routerPath="/jishujiaoyi" />
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
      <div class="feature-layout">
        <div class="feature-layout-card-box">
          <feature-card leftLineColor="#C2A341" title="榆林高新区中试孵化基地"
            des="中试解化基地践行“多能融合”理念，致力于新材料、精细化工、节能环保等领域的关键技术突破、共性技术研发、技术系统集成、科技成果中试及转化、 工程化示范应用等，打造省级能源革命创新示范基地，推进榆林国家级能源革命创新示范区建设。" />
          <feature-card leftLineColor="#0062A8" title="轻纺产业两链融合实验区"
            des="深入贯彻落实省市关于秦创原创新驱动平台建设的总体安排部署，聚集创新资源、提升创新动能、构建创新生态，在现有榆阳轻纺产业园基础上， 根据轻纺产业创新需求和发展短板，统筹各类创新资源，促进科技成果转化落地，解决断点赌点痛点问题，促进榆阳轻纺产业高质量发展。" />
          <feature-card leftLineColor="#C2A341" title="轻纺产业两链融合实验区 拷贝"
            des="深入贯彻落实省市关于秦创原创新驱动平台建设的总体安排部署，聚集创新资源、提升创新动能、构建创新生态，在现有榆阳轻纺产业园基础上， 根据轻纺产业创新需求和发展短板，统筹各类创新资源，促进科技成果转化落地，解决断点赌点痛点问题，促进榆阳轻纺产业高质量发展。" />
        </div>
        <div class="feature-layout-image-box">
          <!-- <img :src="card1Image" /> -->
          <Map ></Map>
          <div class="shjdBox">
            <div style="margin: 230px 0 100px 290px;">
              <i class="qcyIcon"></i>
            </div>
            <div class="sms_Map2" style="background-color: #094fa3cc; top: 110px;left: 300px;">
                煤化工产业<br>两链融合试验区
              <i style="top: 15px; left: 70px"></i>
            </div>
            <div class="sms_Map3" style="background-color: #00aeefcc; top: 170px;left: 405px;">
                榆林经开区<br>中试孵化基地
              <i style="top: 0px; left: -34px"></i>
            </div>
            <div class="sms_Map4" style="background-color: #094fa3cc; top: 151px;left: 285px;">
                轻纺产业<br>两链融合试验区
              <i style="top: 11px;  left: 23px"></i>
            </div>
            <div class="sms_Map5" style="background-color: #094fa3cc; top: 70px;left: 370px;">
                镁铝合金产业<br>两链融合试验区
              <i style="top: 14px;  left: 43px"></i>
            </div>
            <div class="sms_Map6" style="background-color: #eeb749cc; top: 138px;left: 193px;">
                秦创原(榆林)<br>成果转化中心
              <i style="top: 11px;  left: 63px"></i>
            </div>
            <div class="sms_Map7" style="background-color: #eeb749cc; top: 178px;left: 170px;">
                秦创原(榆林)<br>技术研发中心
              <i style="top: 5px;  left: 75px"></i>
            </div>
            <div class="sms_Map8" style="background-color: rgba(237, 51, 51, 0.8); width: 120px; top: 225px;left: 100px;">
                秦创原(榆林)<br>创新促进中心(副中心)
              <i style="top: -16px;  left: 115px"></i>
            </div>
            <div class="sms_Map9" style="background-color: #00aeefcc; top: 270px;left: 170px;">
                榆林高新区<br>中试孵化基地
            </div>
            <div class="sms_Map10" style="background-color: #094fa3cc; width: 110px; top: 349px;left: 120px;">
                智能无人系统产业<br>两链融合试验区
                <i style="top: -62px;  left: 64px"></i>
            </div>
            <div class="sms_Map11" style="background-color: #094fa3cc; top: 285px;left: 365px;">
                小米产业<br>两链融合试验区
                <i style="top: -21px;  left: -35px"></i>
            </div>
          </div>
          <div class="sms_xxxq">
            <i></i>
            <el-image class="img" :src="xxxqImage" fit="cover"></el-image>
            <div class="xxxq">
              <span class="icon"></span><span class="xx-text">秦创原(榆林)创新促进中心(主中心)</span>
            </div>
          </div>
          <div class="sms_title1">
            榆林经济开发区
          </div>
          <div class="sms_title2">
            榆林学院
          </div>
          <div class="sms_title3">
            科创新城
          </div>
          <div class="sms_title4">
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
import { ref, getCurrentInstance, onMounted } from "vue";
import { useRouter } from 'vue-router'
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

const { proxy } = getCurrentInstance()
const router = useRouter()

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
  })
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
}

.feature-layout-card-box {
  display: flex;
  flex-direction: column;
  flex: 2;
  grid-gap: 30px;

}

.feature-layout-image-box {
  flex: 1;
  position: relative;
  margin-top: -60px;
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


// 地图相对定位的样式
.shjdBox {
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
.qcyIcon {
  width: 25px !important;
    height: 25px !important;
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
.sms_Map2 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -70px;
    top: 47px;
    transform: rotate(135deg);
    width: 90px;
    height: 2px;
    background: #ee1d23cc;
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
.sms_Map3 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -62px;
    top: 25px;
    transform: rotate(150deg);
    width: 72px;
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
.sms_Map4 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -12px;
    top: 26px;
    transform: rotate(115deg);
    width: 27px;
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
.sms_Map5 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -125px;
    top: 67px;
    transform: rotate(135deg);
    width: 155px;
    height: 2px;
    background: #ee1d23cc;
}
.sms_Map6::before {
    content: '';
    display: block;
    position: absolute;
    top: 38px;
    left: 70px;
    width: 0px;
    height: 0px;
    transform: rotate(180deg);
    border-width: 0 10px 8px 0;
    border-style: solid;
    border-color: transparent transparent #eeb749cc transparent;
}
.sms_Map6 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 2px;
    top: 34px;
    transform: rotate(55deg);
    width: 48px;
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
.sms_Map7 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 13px;
    top: 20px;
    transform: rotate(25deg);
    width: 40px;
    height: 2px;
    background: #ee1d23cc;
}


.sms_Map8::before {
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    left: 120px;
    width: 0px;
    height: 0px;
    transform: rotate(90deg);
    border-width: 0 0 10px 10px;
    border-style: solid;
    border-color: transparent transparent rgba(237, 51, 51, 0.8) transparent;
}
.sms_Map8 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 14px;
    top: 5px;
    transform: rotate(180deg);
    width: 65px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_Map9::before {
    content: '';
    display: block;
    position: absolute;
    top: -11px;
    left: 60px;
    width: 0px;
    height: 0px;
    transform: rotate(90deg);
    border-width: 0 0 10px 11px;
    border-style: solid;
    border-color: transparent transparent #00aeefcc transparent;
}

.sms_Map10::before {
    content: '';
    display: block;
    position: absolute;
    top: -11px;
    left: 78px;
    width: 0px;
    height: 0px;
    transform: rotate(90deg);
    border-width: 0 0 10px 11px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map10 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0px;
    top: -34px;
    transform: rotate(140deg);
    width: 122px;
    height: 2px;
    background: #ee1d23cc;
}
.sms_Map11::before {
    content: '';
    display: block;
    position: absolute;
    top: 15px;
    left: -10px;
    width: 0px;
    height: 0px;
    transform: rotate(0deg);
    border-width: 0 0 10px 12px;
    border-style: solid;
    border-color: transparent transparent #094fa3cc transparent;
}
.sms_Map11 i::after {
    content: '';
    display: inline-block;
    position: absolute;
    left: -40px;
    top: -23px;
    transform: rotate(58deg);
    width: 55px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_xxxq {
  position: absolute;
  background-color: #fff;
  padding: 5px;
  margin: -85px 0 0 180px;
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
    left: 20px;
    top: -85px;
    transform: rotate(105deg);
    width: 170px;
    height: 2px;
    background: #ee1d23cc;
}

.sms_title1 {
  font-size: 9px;
  color: #000;
  position: absolute;
  margin: -278px 0 0 370px;
}
.sms_title2 {
  font-size: 9px;
  color: #000;
  position: absolute;
  margin: -297px 0 0 260px;
}
.sms_title3 {
  font-size: 9px;
  color: #000;
  position: absolute;
  margin: -280px 0 0 218px;
}
.sms_title4 {
  font-size: 9px;
  color: #000;
  position: absolute;
  margin: -248px 0 0 235px;
}
</style>