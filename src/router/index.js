import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

// Enrutamiento de la plataforma.
const routes=[
    {   // Ruta Vacia: Vista Home
        path:'/',
        name:'Home',
        component:()=>import('@/components/Home.vue'),
        props: true,
    },
    {   // Ruta 'CompleteData' Formulario para la finalización de registro en la plataforma.
        path:'/CompleteData',
        name:'CompleteData',
        component:()=>import('@/components/CompleteData.vue'),
        props: true
    },
    {   // Ruta 'AddRoom' Formulario para inscribir una habitación en la plataforma.
        path:'/AddRoom',
        name:'AddRoom',
        component:()=>import('@/components/AddRoom.vue'),
        props: true
    },
    {   // Ruta 'Rooms' Buscador principal de la plataforma.
        path:'/Rooms', 
        name:'Rooms',
        component:()=>import('@/components/Rooms.vue'),
        props: true
    },
    {   // Ruta 'MyRooms' Página para que un usuario que inicia sesión pueda ver sus publicaciones.
        path:'/MyRooms', 
        name:'MyRooms',
        component:()=>import('@/components/MyRooms.vue'),
        props: true
    },
    {   // Ruta 'MyRooms' Página para que un usuario que inicia sesión pueda ver sus publicaciones.
        path:'/MyRooms', 
        name:'MyRooms',
        component:()=>import('@/components/MyRooms.vue'),
        props: true
    }
]

const router = new VueRouter({
    mode : 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;