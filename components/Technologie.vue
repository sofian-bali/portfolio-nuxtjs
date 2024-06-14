<template>
    <div class="swiper-container">
        <h2 class="text-4xl font-bold text-center">Technologies</h2>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="slide-content">
            <component v-for="(logo, idx) in slide" :is="logo.component" :key="idx" class="logo"/>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/swiper-bundle.css';
  
  // Importez vos composants de logo ici
  import JavaScriptLogo from '@/components/Icons/js.vue';
  import HtmlLogo from '@/components/Icons/html5.vue';
  import CssLogo from '@/components/Icons/css3.vue';
  import VueLogo from '@/components/Icons/vue.vue';
  import TailwindLogo from '@/components/Icons/tailwind.vue';
  import NodeLogo from '@/components/Icons/nodejs.vue';
  import ExpressLogo from '@/components/Icons/express.vue';
  import Saas from '@/components/Icons/saas.vue';
  import GitLogo from '@/components/Icons/git.vue';
  import GithubLogo from '@/components/Icons/github.vue';
  import MysqlLogo from '@/components/Icons/mysql.vue';
  import BootstrapLogo from '@/components/Icons/bootstrap.vue';
  import PhpLogo from '@/components/Icons/php.vue';
  import DartLogo from '@/components/Icons/dart.vue';
  import FlutterLogo from '@/components/Icons/flutter.vue';
  import FigmaLogo from '@/components/Icons/figma.vue';
  import GraphqlLogo from '@/components/Icons/graphql.vue';
  import NuxtLogo from '@/components/Icons/nuxt.vue';
  import SequelizeLogo from '@/components/Icons/sequelize.vue';
  import WordpressLogo from '@/components/Icons/wordpress.vue';
  import PrismaLogo from '@/components/Icons/prisma.vue';
  
  const logos = [
    { component: JavaScriptLogo },
    { component: HtmlLogo },
    { component: CssLogo },
    { component: VueLogo },
    { component: TailwindLogo },
    { component: NodeLogo },
    { component: ExpressLogo },
    { component: Saas },
    { component: GitLogo },
    { component: GithubLogo },
    { component: MysqlLogo },
    { component: BootstrapLogo },
    { component: PhpLogo },
    { component: DartLogo },
    { component: FlutterLogo },
    { component: FigmaLogo },
    { component: GraphqlLogo },
    { component: NuxtLogo },
    { component: SequelizeLogo },
    { component: WordpressLogo },
    { component: PrismaLogo },
  ];
  
  const slides = ref([]);
  const logosPerSlide = 4;
  
  // Diviser les logos en groupes pour chaque slide
  for (let i = 0; i < logos.length; i += logosPerSlide) {
    slides.value.push(logos.slice(i, i + logosPerSlide));
  }
  
  const swiperOptions = {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'slide', // Par défaut, l'effet est 'slide', mais vous pouvez le changer en 'fade', 'cube', etc.
  };
  </script>
  
  <style scoped>
  /* Styles personnalisés pour le swiper */
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-top: 100px;
  }
  h2{
    margin-bottom: 50px;
  }
  .swiper-pagination-bullet {
    background: #000;
    opacity: 1;
  }
  
  .swiper-pagination-bullet-active {
    background: #ff0000;
  }
  
  .slide-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
  
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 10%; /* Ajustez cette valeur en fonction de la taille souhaitée des logos */
    height: 150px;
    animation: fadeInUp 1s ease-in-out;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
  }

 



  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 40px, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  </style>
  