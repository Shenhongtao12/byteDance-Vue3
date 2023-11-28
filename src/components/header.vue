<template>
  <div style="display: flex; justify-content: center">
    <div class="header" :class="[{ fixedToTop }, themeColor]" ref="header">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo.png" class="logo" />
        </a>
      </div>
      <ul class="navbar">
        <router-link to="/" exact v-slot="{ href, navigate, isActive }">
          <li class="navbar-item" :class="{ active: isActive }">
            <a :href="href" @click="navigate">首页</a>
          </li>
        </router-link>
        <router-link exact to="/jobs" v-slot="{ href, navigate, isActive }">
          <li class="navbar-item" :class="{ active: isActive }">
            <a :href="href" @click="navigate">空间&政策</a>
          </li>
        </router-link>
        <router-link to="/products" v-slot="{ href, navigate, isActive }">
          <li class="navbar-item" :class="{ active: isActive }">
            <a :href="href" @click="navigate">创新&创业</a>
          </li>
        </router-link>
        <li class="navbar-item">
          <a href="https://job.bytedance.com/campus" target="_blank"
            >运营&成长</a
          >
        </li>
        <li class="navbar-item">
          <!-- <a href="https://job.bytedance.com/campus" target="_blank">资本大市场</a> -->
          <el-dropdown>
            <span class="header-dropdown-link">
              资本大市场
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人简历</el-dropdown-item>
                <el-dropdown-item>应聘记录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
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
              <a v-if="!username" :href="href" @click="navigate">登录</a>
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

const logout = () => {
  ElNotification({
    title: "Success",
    message: "退出成功",
    type: "success",
    offset: 100,
  });
  store.commit("LOGOUT");
};

const username = computed(() => {
  return store.state.username;
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

  // header 浮动在整体上面
  // &.fixedToTop {
  //   position: fixed;
  //   width: 100%;
  // }

  &.main-color {
    background-color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #eff0f1;

    a {
      color: #333;
    }

    .navbar-item {
      &:hover {
        a {
          color: @main-color;
        }
      }

      &.active {
        a {
          color: @main-color;
        }
      }
    }

    .login {
      .navbar-item {
        .el-dropdown span {
          color: #333;
        }

        &:hover {
          a {
            color: @main-color;
          }
        }

        &.active {
          a {
            color: @main-color;
          }
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
      color: @main-color;
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

.github-project {
  position: absolute;
  right: 0;
  top: 0;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
}

.header-dropdown-link {
  height: 35px;
  line-height: 30px;
  display: block;
  font-size: 15px;
  color: #000;
}
</style>
