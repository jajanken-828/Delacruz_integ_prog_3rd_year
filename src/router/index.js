import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/guest',
            name: 'guest',
            component: import('@/layouts/GuestLayout.vue'),
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: import('@/views/guest/LoginView.vue'),
                },
                {
                    path: '/register',
                    name: 'register',
                    component: import('@/views/guest/RegisterView.vue'),
                },
            ],
        },
        {
            path: '/',
            name: 'dashboard',
            component: import('@/layouts/AppLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'feed',
                    component: import('@/views/authenticated/FeedView.vue'),
                },
                {
                    path: '/communities',
                    name: 'communities',
                    component: import('@/views/authenticated/CommunitiesView.vue'),
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: import('@/views/authenticated/Profile.vue'),
                },
                {
                    path: '/ass',
                    name: 'ass',
                    component: import('@/views/authenticated/AssView.vue'),
                },
                {
                    path: '/chats',
                    name: 'chats',
                    component: import('@/views/authenticated/ChatsView.vue'),
                },
                {
                    path: '/events',
                    name: 'events',
                    component: import('@/views/authenticated/EventsView.vue'),
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: import('@/views/authenticated/SettingsView.vue'),
                },
            ],
        },

        {
            path: '/page-not-found',
            name: 'page.not.found',
            component: import('@/views/errors/NoPageFound.vue'),
        },
    ],
})

export default router
