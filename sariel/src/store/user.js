//用户信息相关的仓库文件token+userinfo
//在新建的store/user.js下引入pinia，并解构defineStore
import {defineStore} from 'pinia';
/*
定义用户信息仓库:defineStore("仓库名、仓库ID(唯一性)",仓库配置项{})
    配置项1- state:仓库的状态数据
        - state是带返回值的函数，返回值是一个对象
    配置项2- actions: 动作(修改仓库的方法) --methods
        - actions 是个对象
    配置项3- getters: 根据state数据进行计算的新数据 --computed
        - getters 是个对象
*/
export const userStoreFunction =  defineStore("user", {
    state() {
        return {
            //共享数据:值
            token: "",
            userInfo: {}
        }
    },
    actions: {
        changeToken(str){
            //在actions中修改state数据,通过this--仓库本身
            this.token = str;
            console.log("changeToken方法:",str)
        },
        changeUserInfo(obj){
            this.userInfo = obj;
            console.log("changeUserInfo方法:",obj)
        }
    },
    getters: {},
    persist: {
        enabled: true,
        strategies: [
            {
                key: "user",
                storage: localStorage
            }
        ]
       // enable: true, //开启数据缓存
       //  strategies:[//持久化的策略
       //      {
       //          key: "user",//关联仓库ID
       //          storage: localStorage,//缓存方法
       //          //所有数据都要缓存,不设置paths
       //          // paths: ['token','userinfo'] 指定缓存数据
       //      }
       //  ]
    }
});
