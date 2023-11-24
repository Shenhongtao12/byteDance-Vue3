<template>
  <div>
    <el-row class="footer">
      <div style="width: 1100px; display: flex; justify-content: center;">
      <el-col :span="8">
        <div class="footer-content-column">
          <img src="../assets/logo.png" class="logo" />
          <div style="margin-top: -10px">
            <p class="title">秦创原发展股份有限公司</p>
            <p class="title" style="font-size: 16px">
              陕西省西咸新区上林街道能源一路<br />
              秦创原金融中心13-14层
            </p>
            <div style="margin-top: 30px">
              <p>
                <a
                  href="https://beian.miit.gov.cn/#/Integrated/index"
                  style="color: white; font-size: 16px"
                  >@2023秦创原版权所有 ICP备 2022002973号</a
                >
              </p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="dashed"></div>
      </el-col>
      <el-col :span="10">
        <div class="footer-text">
          <div style="padding: 0 30px;">
            <p>联系我们</p>
            <div style="display: inline-block;">
              <img src="../assets/liuyan.png" />
              <span class="text">留言反馈</span>
            </div>
            <div
              style="display: inline-block; margin-top: 5px; margin-left: 100px"
            >
              <img src="../assets/dianhua.png" />
              <span class="text">(029) 3806 6546</span>
            </div>
            <div style="margin-top: 15px">
              <div
                class="showImage"
                style="display: inline-block; margin-top: 5px"
              >
                <img src="../assets/weixin.png" />
                <span class="text">秦创原总平台</span>
                <div class="popup">
                  <img
                    style="width: 180px; height: 180px"
                    src="../assets/erweima.jpeg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="1">
        <div class="dashed"></div>
      </el-col>
      <el-col :span="3">
        <div class="footer-text">
          <div style="padding-left: 20px;">
            <p>关注我们</p>
            <div>
              <img
                style="width: 85px; height: 85px"
                src="../assets/erweima.jpeg"
              />
            </div>
          </div>
        </div>
      </el-col>
    </div>
    </el-row>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.logo {
  width: 102px;
  padding-top: 10px;
}

.footer {
  height: 310px;
  background: #004c97;
  color: #fff;
  display: flex;
  font-size: @font-size-small;
  padding-top: 40px;
  justify-content: center;
  white-space: nowrap;

  &-content-column {

    .title {
      color: @secondary-text-color;
      font-size: 18px;
    }
  }
}

.footer-text {
  height: 145px;

  p {
    font-size: 18px; 
    font-weight: 500; 
    margin-bottom: 28px; 
    margin-top: 0; 
    line-height: 18px;
  }

  img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    cursor: pointer;
  }

  .text {
    vertical-align: middle;
    margin-left: 10px;
    font-size: 16px;
    cursor: pointer;
  }

  .popup {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: none;
  }

  .showImage {
    display: inline-block;
    cursor: pointer;
  }

  .showImage:hover .popup {
    display: block;
  }
}
.dashed {
  width: 1px;
  height: 140px;
  border-right: 1px dashed rgba(255,255,255,.2);
}
</style>
