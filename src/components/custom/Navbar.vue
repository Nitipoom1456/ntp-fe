<script setup lang="ts">
import ThemeSwitch from '@/components/custom/ThemeSwitch.vue';



</script>
 
<template>
    <nav class="shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="#" class="flex-shrink-0">
                        <span class="text-2xl font-bold text-purple-600">NITIPOOM</span>
                        <span class="text-xl font-semibold text-slate-800 dark:text-white">Portfolio</span>
                    </a>
                </div>
                <div class="flex-grow flex items-center justify-center">
                    <div class="hidden md:block">
                        <div class="flex items-baseline space-x-4">
                            <RouterLink to="/"
                                class="font-poppins active:text-lg focus:text-lg text-gray-600 dark:text-gray-300 hover:underline hover:underline-offset-4 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </RouterLink>
                            <RouterLink to="/blog"
                                class="font-poppins active:text-lg focus:text-lg text-gray-600 dark:text-gray-300 hover:underline hover:underline-offset-4 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Blog
                            </RouterLink>
                            <RouterLink to="/gallery"
                                class="font-poppins active:text-lg focus:text-lg text-gray-600 dark:text-gray-300 hover:underline hover:underline-offset-4 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Gallery</RouterLink>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center space-x-4">
                            <ThemeSwitch />
                            <a href="#"
                                class="bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>