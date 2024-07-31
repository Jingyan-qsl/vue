<template>
    <div class="loginBox">
        <div class="navBox">
            <form class="formBox" @submit.prevent>
                <div id="titleHeader">
                </div>
                <p>
                    <label for="username">账号:</label>
                    <input type="text" id="username" placeholder="请输入您的账号" v-model="loginData.username">
                </p>
                <br>
                <p>
                    <label for="password">密码:</label>
                    <input type="password" id="password" placeholder="请输入您的密码" v-model="loginData.password">
                </p>
                <br>
                <button @click="login">登录</button>

            </form>
        </div>

    </div>

</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { userStoreFunction } from "../store/user.js"
let userStore = userStoreFunction();
console.log("用户仓库:", userStore)
const router = useRouter();
let loginData = reactive({
    username: "",
    password: "",
});
const login = () => {
    if (loginData.username == "" || loginData.password == "") {
        alert("信息缺失")
    } else {
        if (loginData.username == "7" || loginData.password == "7") {
        router.push("/all");
      }else{
        alert("登录失败")
      }
    }
}
</script>


<style>
*{
    margin: 0px;
    padding: 0px;
}
.loginBox{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 40%;
}
/* .formBox{
    
} */

</style>