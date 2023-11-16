<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
  <img src="/image/budBottom.png" class="all-bg" />
  <div class="class font-suxian">
    <div class="title">
      水滴课堂
    </div>
    <div class="subtitle">
      以月经为例:
    </div>
    <div class="text">
      月经是生育期妇女重要的生理现象，月经的出现给女性的生活带来了一定的烦恼，但它却有着监测女性身体健康的重要作用，今天带大家一起了解关于月经的科普知识。
    </div>
  </div>
</template>

<style scoped>
.class {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-image: url(/image/budBg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.all-bg {
  width: 100vw;
  position: fixed;
  bottom: 0;
  z-index: 1;
}

.title {
  font-size: 30px;
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 1px;
  top: 150px;
  left: 150px;
  position: absolute;
}

.subtitle {
  font-size: 25px;
  top: 280px;
  left: 220px;
  position: absolute;
}

.text {
  width: 50%;
  font-size: 19px;
  /* background-color: red; */
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
