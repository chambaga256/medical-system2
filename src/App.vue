<template>
 <div class="">

 <!-- <MySidebar /> -->
 <!-- <Invoice />

   -->
   <!-- <LandingPage />  -->
   <DashBoard />
   <!-- <Homepage /> -->

  
 </div>
</template>

 
  <script>

import MySidebar from'./components/MySidebar.vue'

import LandingPage from './views/LandingPage.vue';
import DashBoard from './views/DashBoard.vue';
import Homepage from './views/Homepage.vue';
  export default {
    components:{
    MySidebar,
    LandingPage,
    DashBoard,
    Homepage
}
  }
</script>