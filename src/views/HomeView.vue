<template>
  <div class="home">
    <div class="ban-margin">
      <!-- 防止margin塌陷 -->
      <div class="logo"></div>
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
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
