<template>
<div>
  <div class="home">
  </div>
  <!-- <router-link to='list'>list</router-link> -->
  <HomeHeader></HomeHeader>  
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/Header.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader 
  }
}
</script>

<style></style>
