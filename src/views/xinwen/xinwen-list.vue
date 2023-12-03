<template>
  <div style="background-color: #1e70ff1a">
  <div style="display: flex; justify-content: center">
    <div style="width: 1200px">
      <div
        class="card"
        @click="goInfo(item.id)"
        :key="index"
        v-for="(item, index) in newsTrendsList"
      >
        <el-image
          class="img"
          :src="baseUrl + item.coverUrl"
          fit="cover"
        ></el-image>
        <div class="content">
          <div class="title">
            <h4>{{ item.title }}</h4>
          </div>

          <div class="bottom">
            <span class="source">来源：{{ item.source }}</span>
            <div class="time">
              <el-icon size="21"><Clock /></el-icon>
              <span style="margin-right: 10px; margin-left: 5px">{{
                parseTime(item.releaseDate, "{y}-{m}-{d}")
              }}</span>
              <el-icon size="22"><View /></el-icon>
              <span style="margin-left: 5px">{{ item.viewNum }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <pagination
          v-show="total > 0"
          :total="total"
          :autoScroll="true"
          v-model:page="queryParams.pageNum"
          v-model:limit="queryParams.pageSize"
          @pagination="getNewsList"
        />
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import { ref } from "vue";
import { listNewsTrends } from "@/api/system/newsTrends";
import Pagination from "@/components/Pagination";
import { useRouter } from "vue-router";

const router = useRouter();

const baseUrl = import.meta.env.VITE_APP_BASE_API;
const newsTrendsList = ref([]);
const total = ref(0);
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
  title: null,
  showFlag: "是",
  params: {
    userSort: true,
  },
});
/** 查询newsTrends列表 */
function getNewsList() {
  listNewsTrends(queryParams.value).then((response) => {
    newsTrendsList.value = response.rows;
    total.value = response.total;
  });
}

function goInfo(id) {
  router.push("/xinwenxiangqing/" + id)
}

getNewsList();
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
  padding: 10px 20px 10px 10px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #fff;
  cursor: pointer;

  .img {
    height: 136px;
    width: 312px;
  }

  .content {
    // padding: 5px 15px ;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    width: calc(100% - 332px);
    height: 100%;

    .title {
      color: #4a4a4a;
      margin: 10px 0 20px;
      font-size: 16px;
      font-weight: 600;
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      color: #9b9b9b;

      .time {
        display: flex;
        align-items: center;
      }
    }
  }
}
.page {
  display: flex;
  justify-content: end;
  padding: 10px 10px 30px 0;
}
</style>
