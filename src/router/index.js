import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
const routes=[
    {
        path:'/',//ruta (localhost:8080/)
        name:'App',//nombre de ruta
        component:App,//componente que ocupa esa vista
        meta: {
            requiresAuth: false//flag para saber si esta ruta necesita tener sesión iniciada
        }
    }
]
const router = new VueRouter({
        mode : 'history',
        base: process.env.BASE_URL,
        routes
    })