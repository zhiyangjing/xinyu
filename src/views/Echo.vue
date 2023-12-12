<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import router from '@/router'

const initialPos = ref(1);
const pos = useLocalStorage('echo_pos', initialPos)

const total = 8;
function handleKeyDown(event: KeyboardEvent) {
  console.log(event)
  if (event.code == 'ArrowRight' || event.code == "ArrowUp") {
    if (pos.value < total) {
      pos.value++;
    }
  }
  if (event.code == 'ArrowLeft' || event.code == "ArrowDown") {
    if (pos.value > 1) {
      pos.value--;
    }
  }
}

const next = () => {
  if (pos.value < total) {
    pos.value++;
  }
}

const last = () => {
  if (pos.value > 1) {
    pos.value--;
  }
}

const go_home = () => {
  router.push("/")
}

window.addEventListener('keydown', handleKeyDown)


</script>

<template>
  <div class="main font-suxian">

    <div class="main bkg1" v-if="pos == 1">
      <div class="title">
        群山共鸣
      </div>
      <div class="text">
        群山共鸣是新雨平台整理汇总国内已有的、具有权威性和可信度的、针对乡村留守女童的公益慈善项目而形成的板块，方便有需求的女童及家长找到相对应的项目计划。
      </div>
    </div>

    <div class="main bkg1 base bg2" v-if="pos == 2">
      <div class="title">
        群山共鸣
      </div>
      <div id="project">
        <div style="font-size: 50px;width:inherit;">
          “春蕾计划”
        </div>
        <div style="font-size: 30px !important;">
          由中国儿童少年基金会于1989年发起，旨在帮助失学贫困女孩重返校园。
        </div>
      </div>
      <div class="text">
        1989年，在全国妇联领导下，中国儿童少年基金会发起实施了致力于改善贫困家庭女童受教育状况的“春蕾计划”公益项目。长期以来，在党和政府的高度重视关怀下，在社会各界的积极参与和慷慨捐助下，中国儿童少年基金会与各级妇联组织共同组织实施“春蕾计划”，围绕女童教育、女童安全、女童健康等，开展了多形式的资助服务，一大批春蕾女童已成长成才。
        截至2019年，该项目累计筹集社会爱心捐款21亿元，捐赠人数达2784万人次，在全国范围内资助春蕾女童超369万人次。
        网址：https://www.cctf.org.cn/zt/cljh/
      </div>
    </div>

    <div class="main bkg1 base bg3" v-if="pos == 3">
      <div class="title">
        群山共鸣
      </div>
      <div id="fundation">
        <div style="font-size: 50px;">
          中国社会福利基金会爱小丫基金
        </div>
        <div style="font-size: 30px !important;text-align: right;">
          --关注农村留守女童
        </div>
      </div>
      <div class="text">
        爱小丫基金通过捐赠“小丫包”，为贫困山区女童推出关爱健康、性教育、性保护活动的爱心行动，从最贴身的内衣裤着手，逐步建立最基本的维护女性权利与尊严的意识!努力让每一个贫困山区的小丫都有干净的内衣裤穿!并在全国贫困山区乡村学校开展《小丫课堂》，教授相关卫生、性健康及性防护等知识，提高贫困山区女孩社会地位以及明确女性社会属性，捍卫女孩最基本的权利和尊严。让小丫们能更美丽的绽放，更健康的成长。
        <br /> 目前小丫包遍及包括新疆、青海、甘肃、宁夏、四川、贵州、云南、重庆、陕西、河南、湖北、江西12各省市的630校，受益人数达51340名，小丫课堂覆盖630校1260课次，两个小丫班，受益人100名。
        网址：https://www.cswef.org/cswef/welfarepro/detail/id/78.html
      </div>
    </div>

    <div class="main bkg1 base bg4" v-if="pos == 4">
      <div class="title">
        群山共鸣
      </div>
      <div class="subtitle" style="font-size: 40px;">
        鸿基金
      </div>
      <div class="text">
        伟鸿高端教育基金（简称鸿基金）是由中央电视台主持人陈伟鸿先生和中国社会福利基金会共同发起成立，由民政部主管的全国性公益组织公募基金。倡导“授人以渔，改变世界”的新公益理念，以“爱的背包”为核心项目，关爱留守儿童。2013年5月27日，鸿基金关爱留守儿童成长计划之“爱的背包”项目正式启动，针对九年义务制小学三到六年级留守儿童（父母长期外出打工的孩子）开展。 
        <br />项目至今已为全国23个省的近10万名留守儿童送去了“爱的背包”，仅2015年，该项目已陆续走进了青海、甘肃、贵州、山东、新疆等23个省（区），106个市区及地区的1163所学校，为4.6万名留守儿童送去了“爱的背包”，物资运输里程约46万公里。本年度为关帮助留守儿童顺利完成学业，启动的“微笑1+1助学计划”也已全面启动。
        <br />网址：https://www.cswef.org/cswef/welfarepro/detail/id/77.html
      </div>
    </div>

    <div class="main bkg1 base bg5" v-if="pos == 5">
      <div class="title">
        群山共鸣
      </div>
      <div class="subtitle" style="font-size: 40px;">
        暖流计划公益基金
      </div>
      <div class="text" id="text">
        暖流计划是由著名公益媒体人邓飞等志愿者共同发起，于2012年10月23日，成为中国社会福利基金会独立的公益项目。致力于帮助贫困山区学童募集基本的生活、学习物资，助力学习资金。在2015年5月份，正式更名为：中国社会福利基金会暖流计划公益基金！
        <br /> 暖流计划始终致力于帮助贫困山区学童募集基本的生活、学习所需物资，把能让贫困山区的孩子们能够更好的学习生活、健康成长作为暖流计划的愿景目标。
        <br />暖流计划项目根据贫困地区学童的需求，在温暖包、学习包、体育包的基础上增设了弘爱助学、暖流盒子、暖流音乐教室三个项目。2015年共订制温暖包42000套、学习包4500套、体育包470套、弘爱助学帮助孩子187人，1200元/年/人。这四个项目将做为暖流计划的固定项目长期提供给贫困地区的孩子们帮助。
        <br /> 同时暖流将从物资的温暖提升到暖流心灵，携手爱心企业启动暖心盒子新年礼物及筹划2016年启动暖流音乐教室项目。
      </div>
    </div>

    <div class="main bkg1 base bg6" v-if="pos == 6">
      <div class="title">
        群山共鸣
      </div>
      <div class="subtitle" style="font-size: 40px;">
        授渔计划
      </div>
      <div class="text">
        由中国社会福利基金会、新华网、北京师范大学、中育教育集团、美年大健康共同发起的授渔计划公益项目，本着“能力提升，就业乐业”的核心理念，开展“一帮一公益项目”，资助农村留守儿童，让每一个贫困孩子都有机会通过自己的努力改变命运，实现脱离贫困、成长成才。
        <br />授渔计划自2013年起，共资助3000人，包含22个省，19个民族。共有项目学校5所，22个捐赠企业，7家授课企业，3个授课区域：包括北京，山东东营，山东青岛，31个授课班。2015年春季、秋季考试，有500人参加考试。2015年286名计划大专生毕业。
      </div>
    </div>

    <div class="main bkg1 base bg7" v-if="pos == 7">
      <div class="title">
        群山共鸣
      </div>
      <div id="fundation">
        <div style="font-size: 50px;">
          蓝丝带基金
        </div>
        <div style="font-size: 30px !important;text-align: right;">
          --留守儿童欢乐夏令营
        </div>
      </div>
      <div class="text">
        成立于2014年8月26日的蓝丝带基金，以“关爱生命，传递爱心,扶危济困,构建和谐”为宗旨，为蓝丝带志愿者开展公益活动提供支持与保障的合法平台，并为农村留守儿童与父母团聚做出了努力。-
      </div>
    </div>

    <div class="main bkg1 base" v-if="pos == 8">
      <div class="title">
        群山共鸣
      </div>
      <div id="fundation">
        <div style="font-size: 50px;">
          数说她：原创多媒栏目
        </div>
        <div class="iframe-wrapper">
          <iframe class="iframe-part"
            src="https://v.eqxiu.cn/s/jndwN32L?bt=yxy&eip=true&share_level=3&from_user=2023121221b92f56&from_id=e77de911-e&share_time=1702384283246"></iframe>
        </div>
        <!-- <div style="font-size: 30px !important;text-align: right;">
        </div> -->
      </div>
      <div class="text">
      </div>
    </div>

    <div class="pages">Page：{{ pos }}/{{ total }}</div>
    <div class="buttons">
      <el-button round @click="go_home()">返回</el-button>
      <el-button round @click="next()">下一页</el-button>
      <el-button round @click="last()">上一页</el-button>
    </div>
  </div>
</template>


<style scoped>
@import url("@/assets/custom.css");
.iframe-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:40px;
  width:initial;
  height: initial;
  /* border:solid 1px red; */
}

.iframe-part {
  width:320px;
  height:486px;
  /* height:initial; */
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

.bkg1 {
  background-image: url(/image/echoBg.png);
  z-index: 3;
}

#project {
  font-size: 30px;
  top: 22vh;
  position: absolute;
  width: 60%;
  display: flex;
  flex-direction: row;
}

#fundation {
  font-size: 30px;
  top: 20vh;
  position: absolute;
  width: 60%;
  display: flex;
  flex-direction: column;
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
  background-image: url(/image/echo2.png);
  top: 10vh;
  bottom: 70vh;
  right: 10vw;
  left: 80vw;
}

.bg3::after {
  background-image: url(/image/echo3.png);
  top: 10vh;
  bottom: 70vh;
  right: 10vw;
  left: 80vw;
}

.bg4::after {
  background-image: url(/image/echo4.png);
  top: 10vh;
  bottom: 70vh;
  right: 5vw;
  left: 70vw;
}

.bg5::after {
  background-image: url(/image/echo5.png);
  top: 10vh;
  bottom: 70vh;
  right: 5vw;
  left: 70vw;
}

.bg6::after {
  background-image: url(/image/echo6.png);
  top: 10vh;
  bottom: 70vh;
  right: 5vw;
  left: 70vw;
}

#text {
  top: 30vh;
}
</style>