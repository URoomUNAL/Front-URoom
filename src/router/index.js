import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

// Enrutamiento de la plataforma.
const routes = [
    {   // Ruta Vacia: Vista Home
        path:'/',
        name:'Home',
        component:()=>import('@/views/Home.vue'),
        props: true,
    },
    {   // Ruta 'CompleteData' Formulario para la finalización de registro en la plataforma.
        path:'/CompleteData',
        name:'CompleteData',
        component:()=>import('@/views/CompleteData.vue'),
        props: true
    },
    {   // Ruta 'AddRoom' Formulario para inscribir una habitación en la plataforma.
        path:'/AddRoom',
        name:'AddRoom',
        component:()=>import('@/views/AddRoom.vue'),
        props: true
    },
    {   // Ruta 'Rooms' Buscador principal de la plataforma.
        path:'/Rooms', 
        name:'Rooms',
        component:()=>import('@/views/Rooms.vue'),
        props: true
    },
    {   // Ruta 'MyRooms' Página para que un usuario que inicia sesión pueda ver sus publicaciones.
        path:'/MyRooms', 
        name:'MyRooms',
        component:()=>import('@/views/MyRooms.vue'),
        props: true
    },
    {
        //Ruta 'UpdateData' Página para que un usuario actualice su información
        path:'/ap', 
        name:'UpdateData',
        component:()=>import('@/views/UpdateData.vue'),
        props: true
    },
    {   // Ruta 'MyRooms' Página para que un usuario que inicia sesión pueda ver sus publicaciones.
        path:'/Post', 
        name:'Post',
        component:()=>import('@/views/Post.vue'),
        props: true
    },
    {   // Ruta 'Account' Página para que un usuario pueda visualizar la información de su cuenta.
        path:'/Account', 
        name:'Account',
        component:()=>import('@/views/Account.vue'),
        props: true
    },
    {   // Ruta comodín. Página para soportar el error 404.
        path:'/*', 
        name:'Error404',
        component:()=>import('@/views/404.vue'),
        props: true
    }
]

const router = new VueRouter({
    mode : 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;