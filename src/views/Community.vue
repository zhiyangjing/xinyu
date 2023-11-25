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
        雪融社区
      </div>
      <div class="text">
        雪融社区是为乡村留守女童开设的社交板块，可以选择匿名留言，也可以选择实名交友。“雪融”二字来源于成语“冰雪消融”，寓意来自天南海北的女孩子们能够通过这一社区建立起最温暖真挚的情谊。
      </div>
    </div>

    <div class="pages">Page：1</div>
    <div class="buttons">
      <el-button round @click="go_home()">返回</el-button>
    </div>
  </div>
</template>

<style scoped>
@import url("@/assets/custom.css");

.bkg1 {
  background-image: url(/image/communityBg.png);
  z-index: 3;
}

.main {
  width: 100vw;
  height: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
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
/* 
.bg2::after {
  background-image: url(/image/communityBg.png);
  background-position: bottom;
  width:100vw;
  top:0vh;
  bottom: 0vh;
  left: 0vw;
  right: 0vw;
} */
</style>