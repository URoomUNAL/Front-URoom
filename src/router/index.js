import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
const routes=[
    {
        path:'/',//ruta (localhost:8080/)
        name:'HomeContent',//nombre de ruta
        component:()=>import('@/components/HomeContent.vue'),//componente que ocupa esa vista
    },
    {
        path:'/SignIn',//ruta (localhost:8080/SignIn)
        name:'SignIn',//nombre de ruta
        component:()=>import('@/components/SignIn.vue'),//componente que ocupa esa vista
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
    })

export default router;