import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes=[
    {
        path:'/',//ruta (localhost:8080/)
        name:'Home',//nombre de ruta
        component:()=>import('@/components/Home.vue'),//componente que ocupa esa vista
    },
    {
        path:'/SignUp',//ruta (localhost:8080/SignUp)
        name:'SignUp',//nombre de ruta
        component:()=>import('@/components/SignUp.vue'),//componente que ocupa esa vista
    },
    {
        path:'/LogIn',//ruta (localhost:8080/LogIn)
        name:'LogIn',//nombre de ruta
        component:()=>import('@/components/LogIn.vue'),//componente que ocupa esa vista
    },
    {
        path:'/RegistroData',//ruta (localhost:8080/)
        name:'RegistroData',//nombre de ruta
        component:()=>import('@/components/RegistroData.vue'),//componente que ocupa esa vista
    }
]

const router = new VueRouter({
    mode : 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;