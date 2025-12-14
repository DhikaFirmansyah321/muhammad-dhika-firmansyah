<script setup>
    import { RouterLink } from 'vue-router';
    import { scrollToContent } from '@/stores/helper.js';
    import { nameOwner } from '@/stores/content';

    import {ref} from 'vue';
    const openHiddenMenu = ref(false);

    function toggleSubMenu(){
        openHiddenMenu.value = !openHiddenMenu.value;
    }

</script>
<template>
    <div class="sticky top-0 z-50">
        <nav class="flex items-center justify-between w-full bg-white p-5 text-slate-950 text-center monserrat relative">
            <h1 class="text-4xl xl:text-5xl maytra">{{ nameOwner }}.</h1>
            <div class="hidden xl:flex gap-8">
                <RouterLink to="/" :class="'text-slate-800 hover:text-slate-950 hover:font-semibold'">Beranda</RouterLink>
                <RouterLink to="/product" :class="'text-slate-800 hover:text-slate-950 hover:font-semibold'">Produk</RouterLink>
            </div>
            <button @click="scrollToContent($event, 'contact')" class="rounded-full bg-slate-900 text-white px-4 py-2 hover:bg-slate-950 transition hidden xl:block">
                Kontak Saya
            </button>
            <!-- Burger icon when menu is closed -->
            <svg v-if="!openHiddenMenu" @click="toggleSubMenu()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 xl:hidden cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
            <!-- Close icon when menu is open -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" @click="toggleSubMenu()" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 xl:hidden cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </nav>
        <transition name="menu">
          <div v-if="openHiddenMenu" class="xl:hidden w-full absolute bg-white shadow-2xl z-50">
              <div class="grid grid-cols-1 text-base md:text-xl items-center monserrat text-left p-4 gap-8">
                  <RouterLink to="/" :class="'text-slate-800 hover:text-slate-950 hover:font-semibold'">Beranda</RouterLink>
                  <RouterLink to="/product" :class="'text-slate-800 hover:text-slate-950 hover:font-semibold'">Produk</RouterLink>
              </div>
          </div>
        </transition>
    </div>
</template>
<style scoped>
.menu-enter-active, .menu-leave-active {
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}
.menu-enter-from, .menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>