
<script setup>
import { ref } from 'vue'

// State management for form fields
const userData = ref({
  firstName: 'Kenneth Jan Regalado',
  lastName: 'Dela Cruz',
  email: 'ken@gmail.com',
  bio: 'Bachelor of Science in Information System, Class of 2025-2026',
  program: 'BS Information System',
  year: '2025-2026',
  password: '',
  newPassword: '',
  confirmPassword: '',
  notifications: {
    email: true,
    push: true,
    messages: true
  },
  privacy: {
    profile: 'public',
    activity: 'friends'
  }
})

const handleSubmit = () => {
  alert('Settings updated successfully!')
  // Here you would typically send the updated data to your backend
}
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
          <p class="mt-1 text-sm text-gray-500">Update your personal details</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 gap-x-4">
            <div class="sm:col-span-3">
              <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
              <input 
                v-model="userData.firstName"
                type="text" 
                id="first-name" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>

            <div class="sm:col-span-3">
              <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
              <input 
                v-model="userData.lastName"
                type="text" 
                id="last-name" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>

            <div class="sm:col-span-6">
              <label for="bio" class="block text-sm font-medium text-gray-700">Bio</label>
              <textarea 
                v-model="userData.bio"
                id="bio" 
                rows="3" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>

            <div class="sm:col-span-3">
              <label for="program" class="block text-sm font-medium text-gray-700">Program</label>
              <select 
                v-model="userData.program"
                id="program" 
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>BS Information System</option>
                <option>BS Computer Science</option>
                <option>BS Information Technology</option>
                <option>BS Computer Engineering</option>
              </select>
            </div>

            <div class="sm:col-span-3">
              <label for="year" class="block text-sm font-medium text-gray-700">Year</label>
              <select 
                v-model="userData.year"
                id="year" 
                class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>2023-2024</option>
                <option>2024-2025</option>
                <option>2025-2026</option>
                <option>2026-2027</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Password Section -->
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">Change Password</h2>
          <p class="mt-1 text-sm text-gray-500">Update your authentication credentials</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-6 gap-x-4">
            <div class="sm:col-span-6">
              <label for="current-password" class="block text-sm font-medium text-gray-700">Current Password</label>
              <input 
                v-model="userData.password"
                type="password" 
                id="current-password" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>

            <div class="sm:col-span-3">
              <label for="new-password" class="block text-sm font-medium text-gray-700">New Password</label>
              <input 
                v-model="userData.newPassword"
                type="password" 
                id="new-password" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>

            <div class="sm:col-span-3">
              <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input 
                v-model="userData.confirmPassword"
                type="password" 
                id="confirm-password" 
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            </div>
          </div>
        </div>

        <!-- Notifications Section -->
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">Notifications</h2>
          <p class="mt-1 text-sm text-gray-500">Configure how you receive notifications</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input 
                  v-model="userData.notifications.email"
                  id="email-notifications" 
                  type="checkbox" 
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
              </div>
              <div class="ml-3 text-sm">
                <label for="email-notifications" class="font-medium text-gray-700">Email notifications</label>
                <p class="text-gray-500">Receive notifications via email</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input 
                  v-model="userData.notifications.push"
                  id="push-notifications" 
                  type="checkbox" 
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
              </div>
              <div class="ml-3 text-sm">
                <label for="push-notifications" class="font-medium text-gray-700">Push notifications</label>
                <p class="text-gray-500">Receive push notifications on your devices</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input 
                  v-model="userData.notifications.messages"
                  id="message-notifications" 
                  type="checkbox" 
                  class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
              </div>
              <div class="ml-3 text-sm">
                <label for="message-notifications" class="font-medium text-gray-700">Message notifications</label>
                <p class="text-gray-500">Get notified about new messages</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Privacy Section -->
        <div class="px-4 py-5 sm:px-6">
          <h2 class="text-lg font-medium text-gray-900">Privacy Settings</h2>
          <p class="mt-1 text-sm text-gray-500">Control your visibility and data sharing</p>
        </div>
        <div class="px-4 py-5 sm:p-6">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Profile Visibility</label>
              <div class="mt-2 space-y-2">
                <div class="flex items-center">
                  <input 
                    v-model="userData.privacy.profile"
                    id="profile-public" 
                    value="public"
                    type="radio" 
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="profile-public" class="ml-3 block text-sm font-medium text-gray-700">Public</label>
                </div>
                <div class="flex items-center">
                  <input 
                    v-model="userData.privacy.profile"
                    id="profile-friends" 
                    value="friends"
                    type="radio" 
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="profile-friends" class="ml-3 block text-sm font-medium text-gray-700">Friends Only</label>
                </div>
                <div class="flex items-center">
                  <input 
                    v-model="userData.privacy.profile"
                    id="profile-private" 
                    value="private"
                    type="radio" 
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="profile-private" class="ml-3 block text-sm font-medium text-gray-700">Private</label>
                </div>
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700">Activity Visibility</label>
              <div class="mt-2 space-y-2">
                <div class="flex items-center">
                  <input 
                    v-model="userData.privacy.activity"
                    id="activity-public" 
                    value="public"
                    type="radio" 
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="activity-public" class="ml-3 block text-sm font-medium text-gray-700">Public</label>
                </div>
                <div class="flex items-center">
                  <input 
                    v-model="userData.privacy.activity"
                    id="activity-friends" 
                    value="friends"
                    type="radio" 
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="activity-friends" class="ml-3 block text-sm font-medium text-gray-700">Friends Only</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="px-4 py-4 sm:px-6 bg-gray-50 flex justify-end">
          <button 
            @click="handleSubmit"
            type="button" 
            class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
