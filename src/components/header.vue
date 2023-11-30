<template>
  <div style="display: flex; justify-content: center">
    <div class="header" :class="[{ fixedToTop }, themeColor]" ref="header">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo.png" class="logo" />
        </a>
      </div>
      <ul class="navbar">
        <li class="navbar-item">
          <a href="https://www.qinchuangyuan.com/html/web/index.html">首页</a>
        </li>
        <li class="navbar-item">
          <a
            href="https://www.qinchuangyuan.com/html/web/zhengcefuwu/index.html"
            target="_blank"
            >空间&政策</a
          >
        </li>
        <li class="navbar-item">
          <a
            href="https://www.qinchuangyuan.com/html/web/enterpreneurship/index.html"
            target="_blank"
            >创新&创业</a
          >
        </li>
        <li class="navbar-item">
          <a
            href="https://www.qinchuangyuan.com/html/web/qyyyfw/index.html"
            target="_blank"
            >运营&成长</a
          >
        </li>
        <li class="navbar-item">
          <el-dropdown>
            <span class="header-dropdown-link">
              资本大市场
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <a
                    href="https://www.qinchuangyuan.com/html/web/zbfw/index.html"
                    target="_blank"
                    >融资&投资</a
                  >
                </el-dropdown-item>
                <el-dropdown-item>
                  <a
                    href="https://www.qinchuangyuan.com/html/web/financial/index.html"
                    target="_blank"
                    >科技&金融</a
                  >
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <router-link
          exact
          to="/qinchuangyuan3665"
          v-slot="{ href, navigate, isActive }"
        >
          <li class="navbar-item" :class="{ active: isActive }">
            <a :href="href" @click="navigate">秦创原'3665'战略</a>
          </li>
        </router-link>
        <li class="navbar-item">
          <a
            href="https://www.qinchuangyuan.com:443/html/web/about/index.html"
            target="_blank"
            >关于我们</a
          >
        </li>
      </ul>

      <div class="user">
        <div class="login">
          <router-link to="/login" v-slot="{ href, navigate, isActive }">
            <li class="navbar-item" :class="{ active: isActive }">
              <a :href="href" @click="navigate">登录</a>
            </li>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { toRefs, getCurrentInstance, computed, ref } from "vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const { proxy } = getCurrentInstance();

const props = defineProps({
  themeColor: {
    type: String,
    default: "main-color",
  },
  fixedToTop: {
    type: Boolean,
    default: false,
  },
});

const { themeColor, fixedToTop } = toRefs(props);
</script>

<style lang="less" scoped>
.header {
  color: #000000;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  align-items: center;
  width: 1200px;
  box-sizing: border-box;

  &.main-color {
    background-color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #eff0f1;

    a {
      color: #333;
    }

    .navbar-item {
      &:hover {
        a {
          // color: @main-color;
        }
      }

      &.active {
        a {
          // color: @main-color;
        }
      }
    }
  }

  &.is-transparent {
    a {
      color: #fff;
    }

    .navbar-item {
      .el-dropdown span {
        color: #fff;
      }

      &:hover {
        color: #ccc;
      }
    }

    .active {
      color: #fff;
    }
  }
}

.logo {
  width: 50px;
  vertical-align: middle;
  a {
    height: 100%;
    display: block;
  }
}

.navbar {
  padding: 0 40px;
  display: flex;

  &-item {
    padding: 4px 0;
    margin: 0 20px;

    &.active {
      border-bottom: 2px solid;
      color: #89b8dd;
    }
  }

  a {
    font-size: 15px;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    line-height: 30px;
  }
}

.user {
  margin-left: 40px;
  position: relative;

  .el-dropdown {
    span {
      font-size: 15px;
      transition: color 0.3s;
      line-height: 30px;
    }
  }

  .arrow {
    display: inline-block;
    border: 1px solid;
    border-width: 1px 1px 0 0;
    transform: rotate(135deg);
    transform-origin: center;
    vertical-align: 5px;
    margin-left: 5px;
    transition: all 0.3s;
    width: 10px;
    height: 10px;
  }

  &:hover {
    .arrow {
      transform: rotate(-45deg);
      vertical-align: -3px;
    }

    .dropdown-menu__wrapper {
      display: block;
    }
  }

  .dropdown-menu {
    position: relative;
    z-index: 1000;

    &__email {
      line-height: 2;
      cursor: pointer;
    }

    &__wrapper {
      position: absolute;
      display: none;
      right: 0;
      color: @regular-text-color;
      padding: 9px 0;
      width: 200px;
      border-radius: 5px;
      box-shadow: 0 0px 2px 1px #eee;
      background: #fff;
    }

    &__item {
      padding: 9px 12px;
      cursor: pointer;

      &:hover {
        background: #efefef58;
      }
    }
  }
}

.header-dropdown-link {
  height: 35px;
  line-height: 30px;
  display: block;
  font-size: 15px;
  color: #000;
}
</style>
