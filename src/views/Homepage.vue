<template>

    <div class="">
       
      
        <router-link :to="{name:'DashBoard'}" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
               
        <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Start  Now
        </button>
    </router-link >

    <router-view />
    </div>
</template>

<script>

// import MySidebar from './../components/MySidebar.vue'

export default {
    components:{
        // MySidebar
    }
}
</script>