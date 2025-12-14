<script setup>

    import { bestProducts } from '@/stores/content';
    import { ref } from 'vue';
    import ProductSheet from '@/components/ProductSheet.vue';

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

</script>
<template>
    <main>
    
        <section class="h-screen grid grid-cols-1 items-center overflow-y-auto">
            <div class="grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-center px-4 py-10">
                <div @click="openProduct(product)" v-for="(product) in bestProducts" :key="product.id" class="rounded-2xl box-border overflow-hidden">
                    <div class="imageContent overflow-hidden" >
                        <img :src="product.image" :alt="product.title" class="w-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out">
                    </div>
                </div>
            </div>
        </section>

        <ProductSheet :open="isSheetOpen" :product="selectedProduct" @close="closeSheet" />

    </main>
</template>