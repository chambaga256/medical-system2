<template>   
<div>
  <div class=" w-screen">
    <ResponseListTab />
    <div class=" ">
      <div class="  max-w-sm  bg-white" >
        <div class="flex items-center justify-center  w-full     lg:ml-[200px]">
        <div  class=" w-full px-4 py-8 mx-auto shadow-lg shadow-black   ">
          <div class="flex items-center mb-6">
            <h1 class="ml-[50px] text-4xl font-bold text-purple-600">RESPONSES</h1>
          </div>
          <ul class="list-reset">
            <li class="relative flex items-center justify-between px-2 py-6 border-b">
              <div>
                <button type="button"  @click="modalActive=true"  class="text-gray-900 bg-gray-100 hover:bg-gray-200  focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 lg:w-[300px] mb-2">
             <svg class="w-4 h-4 mr-2 -ml-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                        {{data.response}}</button>

              </div>
                 </li>

          </ul> 
        </div>
    </div>

    </div>
    </div> 
</div>
<myModal :show="modalActive" @dismiss="modalActive=false" >
  <template v-slot:header> 
      <div class="text-lg font-medium leading-6 text-gray-900 items-center ml-5 pb-5">
        <h2 class="lg:ml-[130px]"> {{data.response}} </h2>
      </div>
         
      </template>
      
      <template v-slot:body>
        <div class=" mb-5 border border-gray-300">
      <div class="text-medium font-medium  items-center ml-5 pb-5">
        <div class="text-gray-300 space-x-5">
          <p> <span class="">Response:</span> {{data.response}} </p>
        <p><span class=""> specification:</span> {{data.spacification}} </p>
        <p><span class="">Price:</span> {{data.price}} </p>
        </div>

      </div>
    </div> 
      </template>
    <template v-slot:footer> 
     <router-link :to="{name: 'Invoice'}"> 
         <button type="button" class="text-white  focus:outline-none  font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-300 dark:hover:bg-gray-600   ">
      Make Invoice
    <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
       </button>
      </router-link>
      
      </template>
      
      <router-view />
</myModal>
</div>
</template>
<script>
import ResponseListTab from '../components/ResponseListTab.vue'
import SuppliersForm from"../views/SuppliersForm.vue"
import myModal from "../components/MyModal.vue"
import {ref} from "vue"
export default {
    components:{
    ResponseListTab,
    SuppliersForm,
    myModal,
  
    },
    setup(){  
           const modalActive = ref(false)
         const responses=localStorage.getItem('name');
         const data=JSON.parse(responses);
       
        return{
            data,modalActive 
        }

    }
}
</script>