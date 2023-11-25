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
        小流信箱
      </div>
      <div class="text">
        小流信箱是新雨平台面向关注乡村留守女童成长的各界人士开设的捐赠通道，取自“不积小流无以成江海”，爱心人士可以通过这一渠道向乡村留守女童捐赠钱款、生活用品及学习用品等物质必需品，提高乡村留守女童的生活质量。
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
  background-image: url(/image/messageBg.png);
  z-index: 3;
}

.main {
  width: 100vw;
  height: 100%;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 100px;
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
  top:0vh;
  bottom: 0vh;
  left: 40vw;
  right: 0vw;
  z-index:-1;
}

.text {
  width: 30%;
  left: 20vw;
}
</style>