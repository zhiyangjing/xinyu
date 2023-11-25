<script setup lang="ts">
import { ref } from 'vue';

function handleKeyDown(event:KeyboardEvent){
  if (event.code == 'ArrowRight'){
    console.log("next")
  }
  if (event.code == 'ArrowLeft'){
    console.log("last")
  }
}


window.addEventListener('keydown',handleKeyDown)

</script>

<template>
  <div class="whole">
    <input @keydown.alt="() => console.log('asdf')">
    <div @keydown.alt="()=>console.log(';lkj')" class="test"></div>
  </div>
</template>

<style scoped>
.whole {}

.test {
  height: 100px;
  width: 100px;
  background-color: #024353;
}
</style>