<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLocalStorage } from '@vueuse/core';
import router from '@/router';


const initialTest = ref(1)
const pos = useLocalStorage('class_pos', initialTest)
console.log(pos)
console.log(typeof (pos))


const total = 11;
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

const go_home = ()=>{
  router.push("/")
}

window.addEventListener('keydown', handleKeyDown)


// dynamicId.value = <string>route.params.id;
</script>

<template>
  <div class="main font-suxian">
    <div class="main bkg1" v-if="pos == 1">
      <div class="title">
        水滴课堂
      </div>
      <div class="text">
        水滴课堂是为乡村留守女童开设的生理知识教育板块，“水滴”二字来源于成语“水滴石穿”，我们希望女孩们能在这个板块不断积累点滴的生理知识，最终学会正确认识自己的一切，学会爱自己。
      </div>
    </div>

    <div class="main bkg1" v-if="pos == 2">
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

    <div class="main bkg1 base bg3" v-if="pos == 3">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        什么是月经？
      </div>
      <div class="text">
        月经是伴随着卵巢周期性变化而出现的子宫内膜剥脱及出血。规律性月经的出现是女性生殖功能成熟的标志。
      </div>
    </div>

    <div class="main bkg1 base bg4" v-if="pos == 4">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        月经是从什么时候开始的？
      </div>
      <div class="text">
        月经第一次来潮称为月经初潮，年龄多在13~14岁之间，但可能早在11岁或迟至16岁。16岁以后月经尚未来潮应当引起重视，建议到医院进行全面检查。月经初潮早晚主要受遗传因素控制，但其他因素如营养、体重亦起着重要作用。近年来，由于饮食、肥胖等多方面原因，月经年龄初潮有提前趋势。
      </div>
    </div>

    <div class="main bkg1 base bg5" v-if="pos == 5">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        如何判断月经正常与否？
      </div>
      <div class="text">
        （1） 月经周期是否规律；
        <div style="padding-left:45px;margin:10px;">
          月经来潮的第一天为月经周期的开始，两次月经来潮第一天的间隔时间成为一个月经周期。一般为21~35天，平均为28天。如果月经周期短于21天，称为月经频发。如果月经周期长于35天，称为月经稀发。
        </div>
      </div>
    </div>

    <div class="main bkg1 base bg6" v-if="pos == 6">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        如何判断月经正常与否？
      </div>
      <div class="text">
        （2）月经量是否正常：
        <div style="padding-left:45px;margin:10px;">
          经量为一次月经的总失血量，正常月经量多为5~80ml。一般每次月经量少于5ml是月经过少，多于80ml是月经过多，不论过多还是过少都需要及时看医生。
        </div>
      </div>
    </div>

    <div class="main bkg1 base bg7" v-if="pos == 7">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        如何判断月经正常与否？
      </div>
      <div class="text">
        （3）经期是否正常：
        <div style="padding-left:45px;margin:10px;">
          一般每次月经的出血时间为3~7天，如果经期短于3天为经期过短，长于7天成为经期过长，这些异常月经，偶尔出现1次可以观察，出现2次以上就要重视和就医。
        </div>
      </div>
    </div>

    <div class="main bkg1 base bg8" v-if="pos == 8">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        如何判断月经正常与否？
      </div>
      <div class="text">
        （4）痛经：
        <div style="padding-left:45px;margin:10px;">
          月经期一般无特殊症状，有些女性可出现下腹及腰骶部不适，少数女性可有头痛及轻度神经系统不稳定的症状。可以通过口服对症的药物或物理的方法进行缓解。如果出现难以忍受的痛经或逐渐加重的痛经，就需要就是就医，查明痛经原因并及时进行治疗。
        </div>
      </div>
    </div>

    <div class="main bkg2 base bg9" v-if="pos == 9">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        月经知识小科普
      </div>
      <div class="text">
        （1）来月经是排毒吗？
        <div style="padding-left:45px;margin:10px;">
          经血成分中95%是血液，5%是组织间液、子宫内膜碎片、少量的宫颈粘液以及脱落的阴道上皮细胞。所以说，来月经是子宫内膜自然脱落的结果，并不是排毒
        </div>
      </div>
    </div>

    <div class="main bkg2 base bg10" v-if="pos == 10">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        月经知识小科普
      </div>
      <div class="text">
        什么是正常的月经？
        <div style="padding-left:45px;margin:10px;">
          判断月经是否正常，要看四个标准，分别是月经周期、月经天数、月经量以及周期规律性。
        </div>
      </div>
    </div>


    <div class="main bkg2 base bg11" v-if="pos == 11">
      <div class="title">
        水滴课堂
      </div>
      <div class="subtitle">
        月经知识小科普
      </div>
      <div class="text">
        什么是正常的月经？
        <div style="padding-left:45px;margin:10px;">
          很多人对于5ml没有什么概念，大概就是经期根本不需要卫生巾，只需要少量护垫。80ml也比较难以衡量，但一般每天超过4-5片卫生巾。每个周期要用30片以上卫生巾，就可能属于月经量过多。
          <br />
          不过，每个女性一生可能要来450次月经，影响月经的因素也较多，所以偶尔一次月经异常是在所难免的事，不必太过紧张，可以再观察一下。但是如果出现月经量多超过7天或连续月经不正常的情况，还是建议麻溜地上医院哦！
        </div>
      </div>
    </div>


    <div class="pages">Page：{{ pos }} / {{ total }}</div>
    <div class="buttons">
      <el-button round @click="go_home()">返回</el-button>
      <el-button round @click="next()">下一页</el-button>
      <el-button round @click="last()">上一页</el-button>
    </div>
  </div>
</template>

<style scoped>
.main {
  /* min-width: 1200px; */
  width: 100vw;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.pages {
  position: absolute;
  right: 4vw;
  bottom: 5vh;
  z-index: 10;
  font-weight: 900;
  font-size: larger;
  color: black
}

.bkg1 {
  background-image: url(/image/classBg.png);
  z-index: 2;
}

.bkg2 {
  background-image: url(/image/classBg2.png);
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

.bg3::after {
  background-image: url(/image/bg3.png);
  left: 20vw;
  right: 20vw;
}

.bg4::after {
  background-image: url(/image/bg4.png);
  left: 10vw;
  right: 75vw;
}

.bg5::after {
  background-image: url(/image/bg5.png);
  left: 35vw;
  right: 35vw;
}

.bg6::after {
  background-image: url(/image/bg6.png);
  left: 0;
  right: 0;
  top: 10vh;
  bottom: 10vh;
}

.bg8::after {
  background-image: url(/image/bg8.png);
  top: 10vh;
  bottom: 65vh;
  right: 20vw;
  left: 50vw;
}

.bg9::after {
  background-image: url(/image/bg9.png);
  top: 50vh;
  bottom: 10vh;
  right: 30vw;
  left: 30vw;
}

.bg10::after {
  background-image: url(/image/bg10.png);
  top: 50vh;
  bottom: 10vh;
  right: 30vw;
  left: 30vw;
}


.main>div {
  z-index: 3;
}


.title {
  font-size: 60px;
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-thickness: 1px;
  top: 70px;
  left: 100px;
  position: absolute;
}

.subtitle {
  font-size: 35px;
  top: 22vh;
  left: 220px;
  position: absolute;
}

.text {
  width: 60%;
  font-size: 30px;
  top: 33vh;
  position: absolute;
}


.buttons {
  position: absolute;
  bottom: 20px;
  left: 20px
}
</style>
