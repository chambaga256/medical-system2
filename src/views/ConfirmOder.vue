<template>

<div class="p-10  ml-[200px]    mt-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg  ">
   
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 place-items-center mt-[50px]">Here are the biggest Medical Solution acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#"  @click="modalActive=true" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Confirm Your order
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
    <MyModal @close="toggleModal" :show="modalActive" @dismiss="modalActive=false" >
    
        <template v-slot:header> 
            <h3 class="text-lg font-medium leading-6 text-gray-900">
                Order  successful
            </h3>
          </template>

      <template v-slot:body>
         <div class="mt-2">
        <p class="text-sm text-gray-500">
         Your order has been successfully submitted. We’ve sent you
         an email with all of the details of your order.
        </p>
       </div>
</template>

      <template v-slot:footer> You can put your footer here </template>
    
    </MyModal>
</div>
</template>



<script>
import MyModal from'./../components/MyModal.vue'
import { ref} from 'vue'

export default{

    components:{
        MyModal,
    },
    setup(){
        const modalActive = ref(false)
    return{
        modalActive
    }
        
    }
}

</script>