<template>
  <transition name="sheet">
    <div v-if="open" class="fixed inset-0 z-50">
      <div class="absolute inset-0 bg-black/40" @click="onClose"></div>
      <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-2xl w-full"
           :class="sheetClasses"
           role="dialog" aria-modal="true">
        <div class="p-4 sm:p-6">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
                <h2 class="text-xl sm:text-2xl font-bold text-slate-900">{{ product?.title }}</h2>
            </div>
            <button class="inline-flex items-center justify-center p-2 text-slate-600"
                    @click="onClose" aria-label="Tutup">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-y-auto max-h-[70vh] pr-2">
            <div>
              <img v-if="product?.image" :src="product.image" :alt="product?.title" class="w-full h-auto rounded-lg shadow" />
            </div>
            <div class="space-y-3">
              <p v-if="product?.desc" class="text-slate-700 text-xl font-semibold">{{ product.desc }}</p>
              <p v-for="(item, index) in product?.longdesc" :key="index" class="text-slate-700 leading-relaxed">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  product: { type: Object, default: null },
})

const emit = defineEmits(['close'])
const onClose = () => emit('close')

const sheetClasses = computed(() => [
  'max-h-[90vh]',
  'mx-auto',
])

</script>

<style scoped>
.sheet-enter-active, .sheet-leave-active {
  transition: transform 300ms ease, opacity 300ms ease;
}
.sheet-enter-from, .sheet-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
