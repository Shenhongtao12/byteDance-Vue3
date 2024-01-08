<template>
    <div class="body">
        <div class="header" :style="{ backgroundImage: `url('${headerBg}')` }">
            <div class="header-body">
                <div class="header-title">
                    榆林x 秦创原‘3365’战略
                </div>
                <div class="header-list">
                    <div>
                        <el-image class="header-img" style="height: 100px;" :src="headerList1"></el-image>
                        <div class="header-text">
                            三大工程
                        </div>
                    </div>
                    <div>
                        <el-image class="header-img" style="height: 82px;" :src="headerList2"></el-image>
                        <div class="header-text">
                            三项机制
                        </div>
                    </div>
                    <div>
                        <el-image class="header-img" style="height: 82px;" :src="headerList3"></el-image>
                        <div class="header-text">
                            六抓六确保
                        </div>
                    </div>
                    <div>
                        <el-image class="header-img" style="height: 88px;" :src="headerList4"></el-image>
                        <div class="header-text">
                            科技五环
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="width1200">
            <div class="title">
                <el-image class="img" :src="titleBackgroundImage"  fit="cover"></el-image>
                <div class="text">三大工程</div>
            </div>
            <div class="gongcheng" :style="{ backgroundImage: `url('${gcBg}')` }">
                <div class="gc-title">
                    <span>实施驱动平台创建、自身队伍创优、科技工作创新</span>
                </div>
                <div class="gc-content">
                    <span>创新是引领发展的第一动力。加强科技创新作为最紧迫任务，加快关键核心技术攻关。榆林牢记总书记谆谆嘱托，紧抓全省秦创原创新驱动平台建设重要契机，以科技创新赋能高质量发展。2021年3月30日以来，榆林市委、市政府高度重视，抢抓机遇，掀起全面深度融入秦创原工作热潮。随着秦创原（榆林）创新促进中心正式获批冠名，标志着榆林科技创新迈向新征程。榆林科技创新以“3365”发展战略为统领，以实施驱动平台创建、自身队伍创优、科技工作创新“三大工程”为目标，以建立组织联动、运行联通 、功能联合“三项机制”为保障，以抓站位、抓队伍、抓业务、抓宣传、抓学习，抓督导，确保工作有动力、有力度、有权威、有氛围、有能力、有成效的“六抓六确保”为抓手，以需求征集、技术研发、成果转化、项目落地、需要萌生“科技五环”为支撑，打造创新驱动新体系、科技管理新模式、创新发展新路径。科学的决策、创新的举措，以秦创原引领高质量发展正在成为榆林生动实践。</span>
                </div>
                <div class="gc-imgList">
                    <div style="width: 280px;">
                        <el-image class="gc-img" :src="gcImg1"></el-image>
                        <div class="gc-icon">
                            <el-image style="width: 64px;" :src="gcImg3"></el-image>
                            <div class="gc-text">
                                <span>01 驱动平台创建工程</span>
                            </div>
                        </div>
                    </div>
                    <div style="width: 280px;">
                        <el-image class="gc-img" :src="gcImg2"></el-image>
                        <div class="gc-icon">
                            <el-image style="width: 64px;" :src="gcImg4"></el-image>
                            <div class="gc-text">
                                <span>02 自身队伍创优工程</span>
                            </div>
                        </div>
                    </div>
                    <div style="width: 280px;">
                        <el-image class="gc-img" :src="gcImg1"></el-image>
                        <div class="gc-icon">
                            <el-image style="width: 64px;" :src="gcImg5"></el-image>
                            <div class="gc-text">
                                <span>03 科技工作创新工程</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="title">
                <el-image class="img" :src="titleBackgroundImage"  fit="cover"></el-image>
                <div class="text">三项机制</div>
            </div>
            <div class="jizhi">
                <div class="card">
                    <span style="font-weight: bold;">建立“组织联动”</span>
                    <div class="button">
                        <div class="tags">成立榆林秦创原建设工作领导小组</div>
                        <div class="tags" style="margin: 10px;">设立秦创原筹建运营工作专班</div>
                        <div class="tags">组建秦创原（榆林）创新促进中心筹备处</div>
                    </div>
                    <span style="font-size: 15px;">各县市区分别成立了相应组织机构，保障平台建设有场所、有人抓、有目标、有任务、有考核、有奖惩。</span>
                </div>
                <div class="card" style="border: 1px dashed #C2A341;">
                    <span style="font-weight: bold;">建立“运行联通”机制</span>
                    <div class="button">
                        <div class="tags" style="background-color: #C2A341;">省秦创原平台</div>
                        <div class="tags" style="margin-left: 10px; background-color: #C2A341;">在西咸新区打造榆林 【主中心】</div>
                        <div class="tags" style="margin: 10px; background-color: #C2A341;">在榆林秦创原大厦打造【副中心】</div>
                        <div class="tags" style="background-color: #C2A341;">在各县市区、产业园区管委会等相关单位完成【两链】融合试验区等建设</div>
                    </div>
                    <span style="font-size: 15px;">通过强“点”、联“线”、成“面”，点上遍地开花、线上沟通督导、面上提质增效，形成覆盖全市、上下互联互通的榆林秦创原运行格局。</span>
                </div>
                <div class="card">
                    <span style="font-weight: bold;">建立“功能联合”机制</span>
                    <div class="button">
                        <div class="tags">科技研发</div>
                        <div class="tags" style="margin-left: 10px;">中试孵化</div>
                        <div class="tags" style="margin: 10px;">人才基地</div>
                        <div class="tags">榆林转化</div>
                    </div>
                    <span style="font-size: 15px;">整合榆林现有平台统筹纳入榆林秦创原创新驱动平台，贯通省、市、县市区创新资源，打好“政产学研金服用”七位一体联合牌，推动创新驱动功能在每个创促平台、每个研发基地、每个产业链条充分体现。</span>
                </div>
            </div>
            <div class="title">
                <el-image class="img" :src="titleBackgroundImage"  fit="cover"></el-image>
                <div class="text">六项举措</div>
            </div>
            <div class="jucuo">
                <Jucuo/>
            </div>
            <div class="title">
                <el-image class="img" :src="titleBackgroundImage"  fit="cover"></el-image>
                <div class="text">科技五环</div>
            </div>
            <div class="wuhuan">
                <div class="wh-bg">
                    <el-image class="img" :src="Wuhuan" fit="cover"/>
                </div>
                <div class="wuhuan-list wh-yanfa">
                    <el-image class="img-small" :src="Yanfa" fit="cover"/>
                    <span class="wh-text">技术研发</span>
                </div>
                <div class="wuhuan-list wh-xuqiu">
                    <el-image class="img-small" :src="Xuqiu" fit="cover"/>
                    <span class="wh-text">需求征集</span>
                </div>
                <div class="wuhuan-list wh-mengsheng">
                    <el-image class="img-small" :src="Mengsheng" fit="cover"/>
                    <span class="wh-text">需要萌生</span>
                </div>
                <div class="wuhuan-list wh-luodi">
                    <el-image class="img-small" :src="Luodi" fit="cover"/>
                    <span class="wh-text">项目落地</span>
                </div>
                <div class="wuhuan-list wh-zhuanhua">
                    <el-image class="img-small" :src="zhuanhua" fit="cover" />
                    <span class="wh-text">成果转化</span>
                </div>
                <div  class="wu-jiantou1">
                    <el-image class="img-jiantou" :src="wh1" fit="cover" />
                </div>
                <div  class="wu-jiantou2">
                    <el-image class="img-jiantou" :src="wh2" fit="cover" />
                </div>
                <div  class="wu-jiantou3">
                    <el-image class="img-jiantou" :src="wh3" fit="cover" />
                </div>
                <div  class="wu-jiantou4">
                    <el-image class="img-jiantou" :src="wh4" fit="cover" />
                </div>
                <div  class="wu-jiantou5">
                    <el-image class="img-jiantou" :src="wh5" fit="cover" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Jucuo from "./jucuo.vue"
import titleBackgroundImage from "../../assets/qinchuangyuan3665/1.png"
import gcImg1 from "../../assets/qinchuangyuan3665/3.png"
import gcImg2 from "../../assets/qinchuangyuan3665/4.png"
import gcImg3 from "../../assets/qinchuangyuan3665/5.png"
import gcImg4 from "../../assets/qinchuangyuan3665/6.png"
import gcImg5 from "../../assets/qinchuangyuan3665/7.png"
import gcBg from "../../assets/qinchuangyuan3665/gc-bg.png"
import headerBg from "../../assets/qinchuangyuan3665/header-bg.png"
import headerList1 from "../../assets/qinchuangyuan3665/h-1.png"
import headerList2 from "../../assets/qinchuangyuan3665/h-2.png"
import headerList3 from "../../assets/qinchuangyuan3665/h-3.png"
import headerList4 from "../../assets/qinchuangyuan3665/h-4.png"
import Wuhuan from "../../assets/qinchuangyuan3665/wuhuan-bg.png"
import Yanfa from "../../assets/qinchuangyuan3665/jishuyanfa.png"
import Xuqiu from "../../assets/qinchuangyuan3665/xuqiuzhengji.png"
import Mengsheng from "../../assets/qinchuangyuan3665/xuyaomengsheng.png"
import Luodi from "../../assets/qinchuangyuan3665/xiangmuluodi.png"
import zhuanhua from "../../assets/qinchuangyuan3665/chengguozhuanhua.png"
import wh1 from "../../assets/qinchuangyuan3665/wh-1.png"
import wh2 from "../../assets/qinchuangyuan3665/wh-2.png"
import wh3 from "../../assets/qinchuangyuan3665/wh-3.png"
import wh4 from "../../assets/qinchuangyuan3665/wh-4.png"
import wh5 from "../../assets/qinchuangyuan3665/wh-5.png"


</script>
<style lang="scss" scoped>

.body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: PingFang SC;

    .header {
        // width: 100%;
        height: 550px;
        // border: 1px solid rgba(255,255,255,.2);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 40% 0;

        .header-body {
            width: 1200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 60px 60px;
            margin: auto;
            height: 500px;
        }

        .header-title {
            margin: auto;
            font-size: 46px;
            color: #fff;
            font-weight: 800;
        }
        .header-list {
            padding: 0 50px;
            display: flex;
            justify-content: space-between;
            
            .header-text{
                margin-top: 15px;
                font-size: 24px;
                font-weight: bold;
                color: #FFFFFF;
            }
        }
    }

    .width1200 {
        width: 1200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: auto;

        .title {
            margin: 20px 0;
            font-size: 24px;
            color: #fff;
            height: 56px;
            .img {
                width: 200px;
                height: 56px;
                position: absolute;
            }

            .text {
                position: absolute;
                line-height: 30px;
                margin: 7px 0 0 15px;
            }
        }

        .gongcheng {
            padding: 20px 30px;

            .gc-title {
                display: flex;
                justify-content: center;
                font-size: 16px;
                font-weight: bold;
                color: #333333;
            }

            .gc-content {
                font-size: 14px;
                font-weight: 500;
                line-height: 24px;
                margin: 15px 0;
            }

            .gc-imgList {
                margin-top: 20px;
                display: flex;
                justify-content: space-between;
                padding: 0 60px;
                height: 160px;
                
                .gc-img {
                    width: 280px;
                    height: 160px;
                    position: relative;
                }
                .gc-icon {
                    margin-top: -135px;
                    margin-left: 108px;
                    position: absolute;
                    font-size: 18px;
                    .gc-text {
                        color: #fff;
                        margin-left: -50px;
                        margin-top: 10px;
                        width: 300px;
                        position: absolute;
                        font-weight: bold;
                    }
                }
            }
        }
        
        .jizhi {
            .card {
                padding: 10px 15px;
                border: 1px dashed #0062A8;
                border-radius: 5px;
                margin-bottom: 15px;
                .button {
                    display: flex;
                    .tags {
                        margin: 10px 0;
                        font-size: 15px;
                        line-height: 32px;
                        text-align: center;
                        padding: 0 15px;
                        border-radius: 5px;
                        background-color: #0062a8;
                        color: #fff;
                    }
                }
            }
        }

        .wuhuan {
            height: 800px;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .img {
                width: 620px;
                height: 620px;
            }

            .wuhuan-list {
                width: 180px;
                height: 180px;
                background: #FFFFFF;
                border: 1px solid #D2E3F2;
                box-shadow: 0px 0px 14px 2px #D2E3F2;
                border-radius: 50%;

                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }

            .img-small {
                width: 79px;
                height: 99px;
            }

            .wh-text {
                font-size: 22px;
                font-family: PingFang SC;
                font-weight: bold;
                color: #333333;
            }

            .img-jiantou {
                width: 21px;
                height: 21px;
            }

            .wh-bg {
                position: absolute;
            }

            .wh-yanfa {
                position: absolute;
                margin-top: -650px;
            }
            .wh-xuqiu {
                position: absolute;
                margin-top: -150px;
                margin-left: -620px;
            }
            .wh-mengsheng {
                position: absolute;
                margin-top: 500px;
                margin-left: -400px;
            }
            .wh-luodi {
                position: absolute;
                margin-top: 500px;
                margin-right: -400px;
            }
            .wh-zhuanhua {
                position: absolute;
                margin-top: -150px;
                margin-right: -620px;
            }

            .wu-jiantou1 {
                position: absolute;
                margin-top: -455px;
                margin-right: -420px;
            }

            .wu-jiantou2 {
                position: absolute;
                margin-top: 205px;
                margin-right: -585px;
            }

            .wu-jiantou3 {
                position: absolute;
                margin-top: 618px;
            }

            .wu-jiantou4 {
                position: absolute;
                margin-top: 205px;
                margin-left: -585px;
            }

            .wu-jiantou5 {
                position: absolute;
                margin-top: -455px;
                margin-left: -420px;
            }
        }
    }
}
</style>