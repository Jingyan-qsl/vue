<template>
  <div class="appBox">
    <p>
      <router-link to="/login">dj</router-link>
    </p>
  </div>
  <div class="homeBox">
    <router-view></router-view>
  </div>
</template>


<script setup>
import '../router.js'
</script>


<style>
/* .appBox{
  height: 37px;
} */
</style>