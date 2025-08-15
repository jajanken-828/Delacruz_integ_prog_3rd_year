<script setup>
// import { useRoute } from 'vue-router'
// import { computed } from 'vue'

import Leftbar from "@/views/authenticated/LeftbarView.vue"
import Rightbar from "@/views/authenticated/RightbarView.vue"
import Topbar from "@/views/authenticated/TopnavView.vue"




</script>

<template>
    <body class="bg-gray-100 text-gray-800 antialiased">
    <!-- Top Navigation Bar -->
    
    <Topbar />
    <!-- Layout wrapper -->
    <div class="pt-16 max-w-7xl mx-auto flex flex-col lg:flex-row">
      <!-- Left Sidebar -->
      <Leftbar />
      <!-- Main Content Area -->
      <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
       
        <router-view />
      </main>
      <!-- Right Sidebar -->
      <Rightbar />
    </div>
   
  </body>
</template>

<style scoped></style>