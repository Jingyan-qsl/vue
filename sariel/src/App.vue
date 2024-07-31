<template>
  <div id="appBox">
    <div class="nav">
      <h5>gyyzl</h5>
      <p>
        <router-link to="/home">touch</router-link>
      </p>
    </div>
  </div>
  <div class="main">
      <router-view></router-view>
    </div>
</template>


<script setup>
import './router.js'
</script>


<style>
* {
  margin: 0px;
  padding: 0px;
}

#appBox {
  width: 100%;
}

.nav {
  background-color: #f7c8d0;
  height: 27px;
}
.nav p{
  position: absolute;
  top: 7px;
  right: 2px ;
}

/* .banner {
  background-color: #8ef4c6;
  height: 100px;
} */
</style>