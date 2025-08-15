
import mid from '@/views/authenticated/ProfileView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/guest/LoginView.vue'),
        },
        {
            path: '/reg',
            name: 'reg',
            component: () => import('@/views/guest/RegistrationView.vue'),
        },
        {
            path: '/',
            component: mid,
            children: [
                {
                    path: '/feed',
                    name: 'feed',
                    component: () => import('@/views/authenticated/FeedView.vue'),
                },
                {
                    path: '/comm',
                    name: 'comm',
                    component: () => import('@/views/authenticated/CommunitiesView.vue'),
                },
                {
                    path: '/ass',
                    name: 'ass',
                    component: () => import('@/views/authenticated/AssView.vue'),
                },
                {
                    path: '/event',
                    name: 'event',
                    component: () => import('@/views/authenticated/EventsView.vue'),
                },
                {
                    path: '/chat',
                    name: 'chat',
                    component: () => import('@/views/authenticated/ChatsView.vue'),
                },
                {
                    path: '/edit',
                    name: 'edit',
                    component: () => import('@/views/authenticated/EditView.vue'),
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('@/views/authenticated/SettingsView.vue'),
                },
            ]
        },
    ],
})

export default router
