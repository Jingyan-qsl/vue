import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";
const routerObj = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            redirect:"./home"
        },
        {
            path:'/home',
            component:()=>import("./components/home.vue"),
        },
        {
            path:'/login',
            component:()=>import("./components/login.vue"),
        },
        {
            path:'/all',
            component:()=>import("./view/all.vue"),
            children:[
                {
                    path:"/card",
                    component:()=>import("./view/card.vue"),
                },
                {
                    path:"/creation",
                    component:()=>import("./view/creation.vue"),
                },
                {
                    path:"/detail",
                    component:()=>import("./view/detail.vue"),
                },
                {
                    path:"/index",
                    component:()=>import("./view/index.vue"),
                },
                {
                    path:"/introduce",
                    component:()=>import("./view/introduce.vue"),
                },
                {
                    path:"/video",
                    component:()=>import("./view/video.vue"),
                },
                {
                    path:"/write",
                    component:()=>import("./view/write.vue"),
                },
            ]
        }
    ]
})
export default routerObj;