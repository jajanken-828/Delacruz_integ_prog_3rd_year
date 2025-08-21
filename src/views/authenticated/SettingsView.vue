
<script setup>
import { ref, onMounted } from 'vue'
import { UserService } from '@/services/userService'

const userService = new UserService()
const userDetails = ref({})

function snakeToTitle(str) {
    return str
        .trim()
        .toLowerCase()
        .split('_')
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
}

onMounted(async () => {
    userService.getUserProfileDetailsOnLoad((profile) => {
        userDetails.value = profile
    })
})
</script>


<template>
  <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p class="mt-1 text-sm text-gray-500">Manage your profile, security, and privacy preferences</p>
      </div>

      <div class="bg-white shadow rounded-lg divide-y divide-gray-200">
        <!-- Profile Section -->
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">Profile Information</h2>
          <p class="mt-1 text-sm text-gray-500">Your personal details</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 gap-x-4">
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700">First name</label>
              <p class="mt-1 text-gray-900">{{ userDetails.firstName }}</p>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700">Last name</label>
              <p class="mt-1 text-gray-900">{{ userDetails.lastName }}</p>
            </div>

            <div class="sm:col-span-6">
              <label class="block text-sm font-medium text-gray-700">Bio</label>
              <p class="mt-1 text-gray-900">
               Class of 2025-2026
              </p>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700">Program</label>
              <p class="mt-1 text-gray-900">{{ userDetails.program }}</p>
            </div>

            <div class="sm:col-span-3">
              <label class="block text-sm font-medium text-gray-700">Year</label>
              <p class="mt-1 text-gray-900">2025-2026</p>
            </div>
          </div>
        </div>

        <!-- Password Section -->
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">Change Password</h2>
          <p class="mt-1 text-sm text-gray-500">Authentication credentials</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <p class="text-gray-900">Password fields are hidden for security.</p>
        </div>

        <!-- Notifications Section -->
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">Notifications</h2>
          <p class="mt-1 text-sm text-gray-500">Notification preferences</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <ul class="space-y-2 text-gray-900">
            <li>Email notifications: Enabled</li>
            <li>Push notifications: Enabled</li>
            <li>Message notifications: Enabled</li>
          </ul>
        </div>

        <!-- Privacy Section -->
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">Privacy Settings</h2>
          <p class="mt-1 text-sm text-gray-500">Your visibility settings</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <ul class="space-y-2 text-gray-900">
            <li>Profile Visibility: Public</li>
            <li>Activity Visibility: Friends Only</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>


