<script setup>
  
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { scrollToContent, handleParallax } from '@/stores/helper.js'
import {
  titleHomeS1,
  descriptionHomeS1,
  imageHomeS1,
  titleHomeS2,
  descriptionHomeS2,
  storyHomeS2,
  imageHomeS2,
  imageHomeS2LS,
  titleHomeS3,
  descriptionHomeS3,
  bestProducts,
  skillsImage,
  clientImages
} from '@/stores/content.js'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import ProductSheet from '@/components/ProductSheet.vue'

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]

const isSheetOpen = ref(false)
const selectedProduct = ref(null)

const openProduct = (product) => {
  selectedProduct.value = product
  isSheetOpen.value = true
  document.documentElement.classList.add('overflow-hidden')
}

const closeSheet = () => {
  isSheetOpen.value = false
  selectedProduct.value = null
  document.documentElement.classList.remove('overflow-hidden')
}

onMounted(() => {
  window.addEventListener('scroll', () => handleParallax('.parallax-item'));
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => handleParallax('.parallax-item'));
});

</script>

<template>

  <main>

    <section class="relative xl:h-screen bg-white grid items-center grid-cols-1 overflow-x-hidden xl:grid-cols-2">

      <div class="flex justify-center bg-white relative">
        <img :src="imageHomeS1" alt="Profil" class="w-55 md:w-85 xl:w-90 parallax-item" data-speed="0.3" data-direction="X" data-plusminus="minus"/>
      </div>

      <div class="p-6 xl:p-8 bg-white relative">
        <h1 class="text-4xl md:text-6xl font-bold text-slate-950 monserrat parallax-item" data-speed="0.3" data-direction="X" data-plusminus="plus">{{ titleHomeS1 }}</h1>
        <div class="parallax-item" data-speed="0.2" data-direction="X" data-plusminus="minus">
          <p class="mt-4 text-sm md:text-lg text-slate-700 monserrat">{{ descriptionHomeS1 }}</p>
          <button @click="scrollToContent($event, 'story')" class="mt-6 inline-block rounded-full bg-slate-900 text-white px-6 py-3 hover:bg-slate-950 transition monserrat">
            <span class="text-md md:text-lg">Selengkapnya</span>
          </button>
        </div>
      </div>

    </section>

    <section id="story" class="xl:h-screen bg-white grid items-center grid-cols-1 xl:grid-cols-2">

      <div class="xl:hidden block text-center">
        <div class="flex justify-center items-center">
          <img :src="imageHomeS2LS" alt="Story" class="w-full"/>
        </div>
        <q class="font-semibold italic text-md md:text-lg xl:text-sm mt-3">Instead of spinning in thoughts take action</q>
      </div>

      <div class="p-6 xl:p-8 bg-white">

        <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold text-slate-950 monserrat">{{ titleHomeS2 }}</h1>
        <p class="mt-2 md:mt-4 text-sm md:text-lg text-slate-700 monserrat">{{ descriptionHomeS2 }}</p>

        <div class="h-120 overflow-y-auto border-2xl mt-2 md:mt-4 text-sm md:text-lg text-slate-700 monserrat">
          <div v-for="item in storyHomeS2" class="w-full mb-4">
            <p class="mb-2 font-semibold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" /></svg>
              {{ item.title }}
            </p>
            <p class="text-xs md:text-sm">{{ item.desc }}</p>
          </div>
        </div>

      </div>

      <div class="hidden xl:block text-center">
        <div class="flex justify-center bg-white items-center">
          <img :src="imageHomeS2" alt="Story" class="w-96 rounded-2xl"/>
        </div>
        <q class="font-semibold italic text-md mt-3">Instead of spinning in thoughts take action</q>
      </div>

    </section>

    <section class="flex items-center justify-center relative bg-slate-950 h-100 text-white text-center py-12 xl:py-16 monserrat">
      <div class="relative">
        <img :src="value" alt="" v-for="value in skillsImage" class="inline-block w-10 md:w-15 xl:w-17 mx-4 my-2"/>
      </div>
      <p class="text-5xl md:text-7xl xl:text-8xl absolute -bottom-2 md:-bottom-3 xl:-bottom-5 -left-41 font-bold bbh parallax-item" data-speed="0.1" data-direction="X" data-plusminus="plus">TEKNOLOGI</p>
    </section>

    <section class="xl:h-screen py-12 xl:py-16 bg-white">

      <div class="container mx-auto px-6">

        <div class="text-center mb-12">
          <h1 class="text-2xl md:text-4xl xl:text-5xl font-bold text-slate-950 monserrat">{{ titleHomeS3 }}</h1>
          <p class="text-slate-600 text-sm md:text-lg mt-4">{{ descriptionHomeS3 }}</p>
        </div>
        
        <Swiper
          class="expanding-swiper"
          :modules="modules"
          effect="coverflow"
          :grab-cursor="true"
          :centered-slides="true"
          :slides-per-view="'auto'"
          :initial-slide="1"
          :coverflow-effect="{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide v-for="product in bestProducts" :key="product.id">
            <div class="product-card cursor-pointer" @click="openProduct(product)">

              <div class="product-image-wrapper">
                <img :src="product.image" :alt="product.title" class="product-image" />
              </div>

              <div class="product-info">
                <h3 class="product-title">{{ product.title }}</h3>
                <p class="product-desc">{{ product.desc }}</p>
              </div>

            </div>
          </SwiperSlide>
          
        </Swiper>

      </div>

    </section>

    <section class="bg-white py-12 h-100 xl:py-16">

      <div class="container mx-auto px-6">

        <h1 class="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-slate-950 mb-12 monserrat">Klien Kami</h1>

        <Swiper
          class="client-swiper"
          :modules="modules"
          :slides-per-view="1"
          :space-between="10"
          :loop="true"
          :loop-additional-slides="2"
          :autoplay="{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }"
          :grab-cursor="true"
          :breakpoints="{
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
          }"
        >
          <SwiperSlide v-for="(logo, idx) in clientImages" :key="idx">
            <div class="client-logo-wrapper">
              <img :src="logo" alt="Client Logo" class="client-logo" />
            </div>
          </SwiperSlide>

        </Swiper>

      </div>

    </section>

    <ProductSheet :open="isSheetOpen" :product="selectedProduct" @close="closeSheet" />

  </main>

</template>

<style scoped>
  
.expanding-swiper {
  width: 100%;
  padding: 40px 0 60px;
}

.expanding-swiper :deep(.swiper-slide) {
  width: 320px;
  height: 420px;
  transition: transform 0.3s ease;
}

.product-card {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.06) 100%);
  pointer-events: none;
  border-radius: 1.5rem;
}

.expanding-swiper :deep(.swiper-slide-active) .product-card {
  transform: scale(1.05);
}

.product-image-wrapper {
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

.product-info {
  padding: 1.5rem;
  text-align: center;
}

.product-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.product-desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
}

.expanding-swiper :deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #e2e8f0;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.expanding-swiper :deep(.swiper-pagination-bullet-active) {
  background: #0e172b;
  opacity: 1;
  transform: scale(1.2);
}

.expanding-swiper :deep(.swiper-slide-shadow-left),
.expanding-swiper :deep(.swiper-slide-shadow-right) {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.25), transparent) !important;
  filter: blur(10px) !important;
  opacity: 0.95 !important;
  transition: opacity 0.5s ease !important;
}

.expanding-swiper :deep(.swiper-slide-active .swiper-slide-shadow-left),
.expanding-swiper :deep(.swiper-slide-active .swiper-slide-shadow-right) {
  opacity: 0 !important;
  transition: opacity 0.5s ease !important;
}

.expanding-swiper :deep(.swiper-slide-shadow-left) {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.20), transparent) !important;
}

.expanding-swiper :deep(.swiper-slide-shadow-right) {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.20), transparent) !important;
}

@media (max-width: 640px) {

  .expanding-swiper :deep(.swiper-slide) {
    width: 280px;
    height: 380px;
  }
  
  .product-image-wrapper {
    height: 240px;
  }

}

.client-swiper {
  width: 100%;
}

.client-swiper :deep(.swiper-wrapper) {
  justify-content: center;
}

.client-swiper :deep(.swiper-slide) {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.client-logo-wrapper {
  padding: 1.5rem;
  border-radius: 1rem;
  background: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.client-logo {
  max-height: 80px;
  max-width: 180px;
  object-fit: contain;
  opacity: 1;
  transition: all 0.3s ease;
}

.client-logo-wrapper:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.product-action {
  margin-top: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  border-radius: 9999px;
  background-color: #0f172a;
  color: #fff;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.product-action:hover { background-color: #020617; }

</style>
