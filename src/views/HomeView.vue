<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

const options = ref([
  {
    back: "水滴",
    front: "课堂",
    route: "/class"
  }, {
    back: "群山",
    front: "共鸣",
    route: "/class"
  }, {
    back: "雪融",
    front: "社区",
    route: "/class"
  }, {
    back: "小流",
    front: "信箱",
    route: "/class"
  }, {
    back: "成为",
    front: "萌芽",
    route: "/class"
  }, {
    back: "关于",
    front: "新雨",
    route: "/class"
  }
])
</script>

<template>
  <div class="home">
    <div class="ban-margin">
      <!-- 防止margin塌陷 -->
      <div class="logo"></div>
      <div class="options font-suxian">
        <div class="option" v-for="item in options" @click="router.push(item.route)">
          <div class="back">{{ item.back }}</div>
          <div class="front">{{ item.front }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-image: url(/image/homePageBg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo {
  width: 150px;
  height: 160px;
  background-image: url(/image/logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  /* background-color: red; */
  margin-left: 40px;
}

.ban-margin {
  padding-top: 20px;
  display: flex;
  /* background-color: aqua; */
  align-items: end;
}

.options {
  gap: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 80px;
  /* background-color: red; */
  flex: 1;
  /* height: 300px; */
}

.option {
  /* background-color: green; */
  position: relative;
}

.back {
  font-size: 28px;
  color: #2e9ea8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 12px;
  left: 5px;
}

.front {
  font-size: 25px;
  color: white;
  background-color: rgba(87, 186, 67, 0.402);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  border-radius: 999px 0 0 999px;
  position: relative;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.265);
  cursor: pointer;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
