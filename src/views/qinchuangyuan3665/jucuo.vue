<template>
  <div class="jc-row" :key="index" v-for="(item, index) in jucuoData">
    <div class="buton-img" :style="{ backgroundImage: `url('${index % 2 == 0 ? jucuo1: jucuo2}')` }">
      <div class="button-text">
        <span>{{ item.text1 }}</span>
      </div>
    </div>
    <div class="fenge" :class="index % 2 != 0 ? 'fenge-color' : ''"></div>
    <div class="fenge2" :class="index % 2 != 0 ? 'fenge2-color' : ''"></div>
    <div class="button top" :class="index % 2 != 0 ? 'button-color' : ''">
      <div class="gc-button-text">
        <span>{{ item.text2 }}</span>
      </div>
    </div>
    <div class="button bottom" :class="index % 2 != 0 ? 'button-color' : ''">
      <div class="gc-button-text">
        <span>{{ item.text3 }}</span>
      </div>
    </div>
    <div class="fenge" :class="index % 2 != 0 ? 'fenge-color' : ''"></div>
    <div class="center">
      <div class="jc-title">{{ item.text4 }}</div>
      <div style="width: 111px; height: 77px">
        <el-image :src="index % 2 == 0 ? jucuo3: jucuo4" fit="cover"></el-image>
      </div>
    </div>
    <div class="fenge" :class="index % 2 != 0 ? 'fenge-color' : ''"></div>
    <div class="fenge2" :class="index % 2 != 0 ? 'fenge2-color' : ''" style="width: 600px"></div>
    <div class="button top2" :class="index % 2 != 0 ? 'button-color' : ''">
      <div class="gc-button-text">
        <span>{{ item.text5 }}</span>
      </div>
    </div>
    <div class="button bottom2" :class="index % 2 != 0 ? 'button-color' : ''">
      <div class="gc-button-text">
        <span>{{ item.text6 }}</span>
      </div>
    </div>
    <div class="button top3" style="width: 180px" :class="index % 2 != 0 ? 'button-color' : ''">
      <div class="gc-button-text">
        <span>{{ item.text7 }}</span>
      </div>
    </div>
    <div class="button bottom3" style="width: 180px" :class="index % 2 != 0 ? 'button-color' : ''">
      <div class="gc-button-text">
        <span>{{ item.text8 }}</span>
      </div>
    </div>
    <div class="fenge" :class="index % 2 != 0 ? 'fenge-color' : ''"></div>
    <div class="row-end" :class="index % 2 != 0 ? 'row-end-color' : ''">
      <div class="end-text">
        <span>{{ item.text9 }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import jucuo1 from "../../assets/qinchuangyuan3665/2.png";
import jucuo2 from "../../assets/qinchuangyuan3665/8.png";
import jucuo3 from "../../assets/qinchuangyuan3665/9.png";
import jucuo4 from "../../assets/qinchuangyuan3665/10.png";

const jucuoData = ref([
    {
        text1: "抓站位",
        text2: "政治站位",
        text3: "组织站位",
        text4: "突出“两轴”",
        text5: "横轴",
        text6: "纵轴",
        text7: "牢记使命 新存敬畏",
        text8: "服务大局 强化担当",
        text9: "确保工作有动力",
    },
    {
        text1: "抓队伍",
        text2: "组织建设",
        text3: "作风建设",
        text4: "突出“两腿”",
        text5: "骨血肉",
        text6: "精气神",
        text7: "强化功能 理顺机制",
        text8: "守住底线 追求高线",
        text9: "确保工作有力度",
    },
    {
        text1: "抓业务",
        text2: "巩固常规",
        text3: "打破常规",
        text4: "突出“两块”",
        text5: "责任田",
        text6: "试验田",
        text7: "盯牢业主 当好主角",
        text8: "立足创新 争取支持",
        text9: "确保工作有权威",
    },
    {
        text1: "抓宣传",
        text2: "及时报道",
        text3: "及时沟通",
        text4: "突出“两调”",
        text5: "氛围高调",
        text6: "做人低调",
        text7: "紧扣主题 强化手段",
        text8: "上报信息 主动汇报",
        text9: "确保工作有氛围",
    },
    {
        text1: "抓学习",
        text2: "向理论学",
        text3: "向实践学",
        text4: "突出“两眼”",
        text5: "理论清醒",
        text6: "行动自觉",
        text7: "理论武装 注意方法",
        text8: "实践讲授 考察调研",
        text9: "确保工作有能力",
    },
    {
        text1: "抓督导",
        text2: "内业督导",
        text3: "外业督导",
        text4: "突出“两手”",
        text5: "试金石",
        text6: "硬手段",
        text7: "严格督导 激励奖惩",
        text8: "定期督导 排名通报",
        text9: "确保工作有成效",
    }
])
</script>

<style lang="scss" scoped>
.jc-row {
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  margin: 15px 0;

  .buton-img {
    width: 140px;
    height: 50px;
    background-size: cover;
    background-repeat: no-repeat;

    .button-text {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      line-height: 20px;
    }
  }

  .fenge {
    width: 18px;
    height: 1px;
    border-bottom: 1px dashed #0062a8;
  }

  .fenge2 {
    width: 127px;
    height: 56px;
    border: 1px dashed #0062a8;
    position: relative;
  }

  .fenge-color {
    border-bottom: 1px dashed #C2A341;
    }
    .fenge2-color {
        border: 1px dashed #C2A341;
    }

  .button {
    width: 103px;
    height: 40px;
    background-color: #d2e3f2;
    border-radius: 5px;

    .gc-button-text {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #0062a8;
    }
  }
  .button-color {
    background-color: #F7EFD5;

    .gc-button-text {
        color: #C2A341;
    }
  }
  .top {
    position: absolute;
    margin: -40px 0 20px 170px;
  }

  .bottom {
    position: absolute;
    margin: 50px 0 0 170px;
  }
  .center {
    margin: 0 5px;
    height: 100px;
    width: 111px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .top2 {
    position: absolute;
    margin: -40px 0 20px 545px;
  }

  .bottom2 {
    position: absolute;
    margin: 50px 0 0 545px;
  }

  .top3 {
    position: absolute;
    margin: -40px 0 20px 755px;
  }

  .bottom3 {
    position: absolute;
    margin: 50px 0 0 755px;
  }

  .row-end {
    width: 122px;
    height: 40px;
    background-color: #0062a8;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    .end-text {
      line-height: 40px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
    }
  }

  .row-end-color {
    background-color: #C2A341;
  }
}

.jc-title {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #c2a341;
}
</style>