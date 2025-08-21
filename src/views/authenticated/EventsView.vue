<script setup>

</script>

<template>
  <!-- Main Content Area -->
  <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
    <!-- Events Section -->
    <section class="bg-white rounded-2xl shadow-lg p-6">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Calendar class="w-5 h-5 text-indigo-600" /> Upcoming Events
        </h3>
        <button class="text-sm font-medium text-indigo-600 hover:underline">
          View All
        </button>
      </div>
      <!-- Filter Tabs -->
      <div class="flex gap-3 mb-6">
        <button class="px-4 py-1.5 text-sm rounded-full bg-indigo-600 text-white">All</button>
        <button class="px-4 py-1.5 text-sm rounded-full border hover:bg-gray-100">Online</button>
        <button class="px-4 py-1.5 text-sm rounded-full border hover:bg-gray-100">Onsite</button>
        <button class="px-4 py-1.5 text-sm rounded-full border hover:bg-gray-100">Competition</button>
      </div>
      <!-- Events Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Event Card -->
        <div class="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800">Webinar: Career in AI</h4>
              <p class="text-sm text-gray-500">Aug 3, 2025 – 3:00 PM</p>
            </div>
            <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              Online
            </span>
          </div>
          <p class="text-sm text-gray-600 line-clamp-2">
            Learn from industry experts about AI career opportunities and future skills.
          </p>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <MapPin class="w-4 h-4" /> Zoom
            </div>
            <button
              class="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-indigo-700 transition"
            >
              Join
            </button>
          </div>
        </div>

        <!-- Event Card -->
        <div class="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800">Study Group Session</h4>
              <p class="text-sm text-gray-500">Aug 6, 2025 – 10:00 AM</p>
            </div>
            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              Onsite
            </span>
          </div>
          <p class="text-sm text-gray-600 line-clamp-2">
            Collaborate with peers and review exam materials together.
          </p>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <Users class="w-4 h-4" /> Library Hall A
            </div>
            <button
              class="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-indigo-700 transition"
            >
              Join
            </button>
          </div>
        </div>

        <!-- Event Card -->
        <div class="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800">Hackathon Kickoff</h4>
              <p class="text-sm text-gray-500">Aug 15, 2025 – 9:00 AM</p>
            </div>
            <span class="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
              Competition
            </span>
          </div>
          <p class="text-sm text-gray-600 line-clamp-2">
            Join us for the hackathon kickoff! Team formation and rules briefing.
          </p>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <MapPin class="w-4 h-4" /> Innovation Hub
            </div>
            <button
              class="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-indigo-700 transition"
            >
              Join
            </button>
          </div>
        </div>
         <!-- Event Card -->
        <div class="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800">Webinar: Career in AI</h4>
              <p class="text-sm text-gray-500">Aug 3, 2025 – 3:00 PM</p>
            </div>
            <span class="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              Online
            </span>
          </div>
          <p class="text-sm text-gray-600 line-clamp-2">
            Learn from industry experts about AI career opportunities and future skills.
          </p>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <MapPin class="w-4 h-4" /> Zoom
            </div>
            <button
              class="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-indigo-700 transition"
            >
              Join
            </button>
          </div>
        </div>

        <!-- Event Card -->
        <div class="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800">Study Group Session</h4>
              <p class="text-sm text-gray-500">Aug 6, 2025 – 10:00 AM</p>
            </div>
            <span class="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              Onsite
            </span>
          </div>
          <p class="text-sm text-gray-600 line-clamp-2">
            Collaborate with peers and review exam materials together.
          </p>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <Users class="w-4 h-4" /> Library Hall A
            </div>
            <button
              class="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-indigo-700 transition"
            >
              Join
            </button>
          </div>
        </div>

        <!-- Event Card -->
        <div class="border rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition">
          <div class="flex justify-between items-start">
            <div>
              <h4 class="text-lg font-semibold text-gray-800">Hackathon Kickoff</h4>
              <p class="text-sm text-gray-500">Aug 15, 2025 – 9:00 AM</p>
            </div>
            <span class="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
              Competition
            </span>
          </div>
          <p class="text-sm text-gray-600 line-clamp-2">
            Join us for the hackathon kickoff! Team formation and rules briefing.
          </p>
          <div class="flex justify-between items-center mt-2">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <MapPin class="w-4 h-4" /> Innovation Hub
            </div>
            <button
              class="bg-indigo-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-indigo-700 transition"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
