<script setup>
import { ref } from "vue";
const show = ref(false);
</script>


<template>
  <header class="bg-white border-b shadow-sm fixed top-0 inset-x-0 z-50">
    <div class="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex items-center space-x-4">
        <a href="feed.html" class="text-2xl font-bold text-indigo-600">EduConnect</a>
        <div class="hidden md:block">
          <input
            type="text"
            placeholder="Search assignments…"
            class="w-64 bg-gray-100 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div class="relative">
        <button @click="show = !show" class="flex items-center focus:outline-none">
          <img
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
            alt="Avatar"
            class="w-8 h-8 rounded-full"
          />
        </button>
        <div
          v-show="show"
          class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-10"
        >
          <router-link to="edit" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">View Profile</router-link>
          <router-link to="settings" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Settings</router-link>
          <router-link to="login" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Log Out</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>