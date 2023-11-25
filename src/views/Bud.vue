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
        成为萌芽
      </div>
      <div class="text">
        “萌芽”是新雨平台用户的名称，我们祝愿每一个来到新雨的女孩都能拥有萌芽一般的蓬勃生命力。在这一板块，用户可以进行身份注册及登录。
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
  background-image: url(/image/budBg.png);
  z-index: 3;
}

.main {
  width: 100vw;
  height: 100%;
  background-position: bottom;
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
  background-image: url(/image/budBottom.png);
  background-position: bottom;
  width:100vw;
  top:0vh;
  bottom: 0vh;
  left: 0vw;
  right: 0vw;
}
</style>
