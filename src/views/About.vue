<script setup lang="ts">
import { ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';

import router from '@/router'
const go_home = ()=>{
  router.push("/")
}

function handleKeyDown(event: KeyboardEvent) {
  console.log(event)
  if (event.code == 'ArrowRight' || event.code == "ArrowUp") {

  }
  if (event.code == 'ArrowLeft' || event.code == "ArrowDown") {

  }
}

window.addEventListener('keydown', handleKeyDown)
</script>

<template>
  <div class="main font-suxian">
    <div class="main bkg1 base bg2">
      <div class="title">
        关于新雨
      </div>
      <div class="text">
        我们来自于西安交通大学，是无数大学生中最平凡不过的几个。
        <br/> 我们想要为女孩子们做些什么，我们希望她们能平安快乐地走向自己的人生。
        <br/> 我们是刚刚降临的雨，虽然微小，但拥有无限力量。
      </div>
    </div>

    <div class="pages">Page：1/1</div>
    <div class="buttons">
      <el-button round @click="go_home()">返回</el-button>
    </div>
  </div>
</template>

<style scoped>
@import url("@/assets/custom.css");

.bkg1 {
  background-image: url(/image/aboutBg.png);
  z-index: 3;
}

.main {
  width: 100vw;
  height: 100%;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.all-bg {
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 1;
}


.base::after {
  content: "";
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  top: 50vh;
  bottom: 10vh;
  z-index: 1;
}


.bg2::after {
  /* background-image: url(/image/messageBg.png); */
  background-position: bottom;
  top: 0vh;
  bottom: 0vh;
  left: 40vw;
  right: 0vw;
  z-index: -1;
}

</style>