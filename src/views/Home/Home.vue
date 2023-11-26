<template>
  <div class="home">
    <div>
      <Carousel />
    </div>
    <div class="width1200">
      <part-title title="新闻动态" />
      <news-card v-if="newsTrendsList.length > 0" :news="newsTrendsList" :imageUrl="imageUrl"></news-card>
    </div>
    <div class="width1200">
      <part-title title="政策举措" />
      <div class="policy-grid-container" v-if="policyInitiativeList.length > 0">
        <div v-for="(item, index) in policyInitiativeList" :key="index">
          <policy-card :yearMonth="parseTime(item.releaseDate, '{y}-{m}')" :day="parseTime(item.releaseDate, '{d}')" :title="item.title"
          :description="item.content" />
        </div>
      </div>
    </div>
    <div class="width1200">
      <part-title title="指标展示" />
      <div class="indicator-grid-container">
        <indicator-card :backgroundImage="card1Image" title="产业链" subTitle="两链融合" price="12" price-color="#0062A8" unit="条" />
        <indicator-card :backgroundImage="card2Image" title="总交易金额" subTitle="技术交易" price="4.5" price-color="#C2A341" unit="亿元" />
        <indicator-card :backgroundImage="card3Image" title="技术需求" subTitle="成果转化" price="116" price-color="#00B5FF" unit="项" />
        <indicator-card :backgroundImage="card4Image" title="政策措施" subTitle="科技政策" price="36" price-color="#380E9B" unit="项" />
        <indicator-card :backgroundImage="card5Image" title="经费支出" subTitle="R&D经费支出" price="10.42" price-color="#00E3C0" unit="亿元" />
        <indicator-card :backgroundImage="card6Image" title="企业" subTitle="企业培育" price="814" price-color="#ED44F1" unit="家" />
        <indicator-card :backgroundImage="card7Image" title="人才" subTitle="科技人才" price="767" price-color="#FF3B2D" unit="位" />
        <indicator-card :backgroundImage="card8Image" title="创新平台" subTitle="创新平台" price="59" price-color="#0062A8" unit="个" />
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
        <div class="feature-layout-image-box" style="{}">
          <img :src="card1Image" />
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
import { ref, reactive, getCurrentInstance, onMounted, onUnmounted } from "vue";
import EventBus from '../../helper/EventBus'
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
import homeBaseCardImage from '../../assets/images/home-base-card-image.png'
import { listNewsTrends } from "../../api/system/newsTrends";
import { listPolicyInitiative } from "../../api/system/policyInitiative";

const { proxy } = getCurrentInstance()
const router = useRouter()

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
getNewsList();
getPolicyInitiative();
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
  grid-gap: 18px;

}

.feature-layout-image-box {
  flex: 1;

  img {
    height: 100%;
    width: 100%;
  }
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

</style>