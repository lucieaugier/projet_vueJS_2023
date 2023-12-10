import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import CharactersGallery from './components/CharactersGallery.vue'
import EpisodesList from './components/EpisodesList.vue'
import LocationsList from './components/LocationsList.vue'
import CharacterID from './components/CharacterID.vue'


const routes = [
    { path: '/characters', component: CharactersGallery},
    { path: '/episodes', component: EpisodesList },
    { path: '/locations', component: LocationsList },
    { path: '/characters/:id', component: CharacterID },
    { path: '/' , component: CharactersGallery },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')


