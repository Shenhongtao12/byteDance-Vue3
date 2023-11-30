<template>
    <div class="body">
        <div class="header">
            3365战略
        </div>
        <div class="width1200">
            <div class="title">
                <el-image class="img" :src="titleBackgroundImage"  fit="cover"></el-image>
                <div class="text">三大工程</div>
            </div>
            <div class="gongcheng">
                <div class="gc-title">
                    <span>实施驱动平台创建、自身队伍创优、科技工作创新</span>
                </div>
                <div class="gc-content">
                    <span>创新是引领发展的第一动力。加强科技创新作为最紧迫任务，加快关键核心技术攻关，榆林牢记总书记谆谆嘱托，紧抓全省秦创原创新驱动平台建设重要契机，以科技创新赋能高质量发展。2021年3月30日以来，榆林市委、市政府高度重视，抢抓机遇，掀起全面深度融入秦创原工作热潮，随着秦创原（榆林）创新促进中心正式获批冠名，标志着榆林科技创新迈向新征程。榆林科技创新以“3365”发展战略为统领，以实施驱动平台创建、自身队伍创优、科技工作创新“三大工程”为目标，以建立组丝联动、运行联通 、功能联合“三项机制”为保障，以抓站位、抓队伍、抓业务、打宣传、抓学习，抓督导，确保工作有动力、有力度、有权威、有氛围、有能力、有成效的“六抓六确保“为抓手，以需求征集、技术研发、成果转化、项目落地、需要萌生“料技五环”为支撑，打造创新驱动新体系，科技管理新模式、创新发展新路径。科学的决策，创新的举措，以秦创原引领高质量发展正在成为榆林生动实践。</span>
                </div>
                <div class="gc-icon">

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
                    <span style="font-size: 15px;">通过强“点”联“线”、成“面”，点上遍地开花、线上沟通督导、面上提质增效，形成覆盖全市、上下互联互通的榆林秦创原运行格局。</span>
                </div>
                <div class="card">
                    <span style="font-weight: bold;">建立“功能联合”机制</span>
                    <div class="button">
                        <div class="tags">科技研发</div>
                        <div class="tags" style="margin-left: 10px;">中式孵化</div>
                        <div class="tags" style="margin: 10px;">人才基地</div>
                        <div class="tags">榆林转化</div>
                    </div>
                    <span style="font-size: 15px;">整合榆林现有平台统筹纳入榆林秦创原创新驱动平台，贯通省、市、县市区创新资源，打好“政产学研金现用”七位一体联合牌，推动创新驱动功能在每个创促平台、每个研发基地、每个产业链条充分体现。</span>
                </div>
            </div>
            <div class="title">
                <el-image class="img" :src="titleBackgroundImage"  fit="cover"></el-image>
                <div class="text">六项举措</div>
            </div>
            <div class="jucuo">
                <div class="row">

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import titleBackgroundImage from "../../assets/qinchuangyuan3665/1.png"
import jucuo1 from "../../assets/qinchuangyuan3665/2.png"






</script>
<style lang="scss" scoped>

.body {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: PingFang SC;

    .header {
        width: 100%;
        height: 400px;
        border: 1px solid rgba(255,255,255,.2);
    }

    .width1200 {
        width: 1200px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: auto;

        .title {
            margin: 18px 0;
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
            height: 200px;
            background-color: #d6e6f3;
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

            .gc-icon {
                display: flex;
                justify-content: space-between;
                padding: 0 60px;
                
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

        .jucuo {
            .row {
                display: flex;

            }
        }
    }
}
</style>