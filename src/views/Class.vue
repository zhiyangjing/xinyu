<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
  <div class="class">
    <div class="title font-suxian">水滴课堂</div>
    <div class="content">
      <div class="subtitle">

      </div>
      <div class="text">
        月经是生育期妇女重要的生理现象，月经的出现给女性的生活带来了一定的烦恼，但它却有着监测女性身体健康的重要作用，今天带大家一起了解关于月经的科普知识。
      </div>
    </div>
  </div>
</template>

<style scoped>
.class {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-image: url(/image/classBg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 150px;
}

.title {
  font-size: 30px;
  text-decoration: underline ;
  text-underline-offset: 7px;
  text-decoration-thickness: 1px;
  margin-left: 150px;
}

.content {
  background-color: red;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
