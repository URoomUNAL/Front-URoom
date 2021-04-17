import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        name:'Home',
        component:()=>import('@/components/Home.vue'),
    },
    {
        path:'/SignUp',
        name:'SignUp',
        component:()=>import('@/components/SignUp.vue'),
    },
    {
        path:'/LogIn',
        name:'LogIn',
        component:()=>import('@/components/LogIn.vue'),
    },
    {
        path:'/CompleteData',
        name:'CompleteData',
        component:()=>import('@/components/CompleteData.vue'),
        props: true
    },
    {
        path:'/AddRoom',
        name:'AddRoom',
        component:()=>import('@/components/AddRoom.vue'),
        props: true
    }
]

const router = new VueRouter({
    mode : 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;