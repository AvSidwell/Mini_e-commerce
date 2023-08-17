<template>
<NavBarComp/>
<router-view/>
<FooterComp/>

  <!-- <nav>
   <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
 </nav> -->
</template>

<script>
import NavBarComp from './components/NavBar.vue';
import FooterComp from './components/Footer.vue';
export default {
  components: {NavBarComp, FooterComp}
  
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  background-color:ghostwhite;
}
/* 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #3571ad;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
