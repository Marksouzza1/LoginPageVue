<template>
<router-view />
</template>
<script>

import Home from './views/Home.vue';
import LoginPage from './views/LoginPage.vue';


  export default{
    components: { Home, LoginPage }
}

</script>
<style>
*{
  font-family: Arial, Helvetica, sans-serif;
}

body{
background: linear-gradient(90deg, rgba(1,110,150,1) 1%, rgba(0,212,255,1) 80%);;
}


</style>
 