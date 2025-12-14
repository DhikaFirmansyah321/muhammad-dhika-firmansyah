<script setup>
    const year = new Date().getFullYear();
    import { nameOwner, whatsappLink, instagramLink, facebookLink, linkedinLink, ardhacodesLink, footerPartner } from '@/stores/content';
</script>
<template>
    <footer id="contact" class="bg-slate-950 w-full h-70 text-white monserrat">
        <div class="icon flex justify-center items-center bg-white gap-4">
            <a :href="whatsappLink" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/wa.png" alt="Whatsapp" class="w-8 xl:w-10 cursor-pointer"></a>
            <a :href="instagramLink" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/ig.png" alt="Instagram" class="w-8 xl:w-10 cursor-pointer"></a>
            <a :href="facebookLink" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/fb.png" alt="Facebook" class="w-8 xl:w-10 cursor-pointer"></a>
            <a :href="linkedinLink" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/li.png" alt="LinkedIn" class="w-8 xl:w-10 cursor-pointer"></a>
        </div>
        <div class="copyright mt-5">
            <div class="flex justify-center items-center gap-2">
                <p class="text-5xl maytra">{{ nameOwner }}</p>
                <a :href="ardhacodesLink" target="_blank" rel="noopener noreferrer"><img :src="footerPartner" alt="Partner Logo" class="w-35 py-4"></a>
            </div>
            <p class="text-center text-sm xl:text-base py-4">© {{ year }} {{ nameOwner }}. All rights reserved.</p>
        </div>
    </footer>
</template>