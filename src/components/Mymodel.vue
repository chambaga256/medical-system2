<template>
<TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
              <slot name="header">
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                Choose Taxation
                </DialogTitle>
              </slot>
               
              <slot name="body">
                <div class="border-b w-full border-[#c8c3cf] pt-5"></div>
                <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
                <div class="flex ml-0">
  <div>
    <ul class="w-48 text-sm font-medium text-black  rounded-lg   ">
    <li class="w-full rounded-t-l text-black ">
        <div class="flex items-center pl-3">
            <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#a483e7]  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-black ">Driver License </label>
        </div>
    </li>
    <li class="w-full rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#a483e7] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-black">State ID</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg  text-black">
        <div class="flex items-center pl-3">
            <input id="list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#a483e7] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-black ">US Millitary</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg  text-black">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#a483e7] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-black ">US Passport</label>
        </div>
    </li>
</ul>
  </div>
   <div>
    <ul class="w-48 text-sm font-medium text-black  rounded-lg   ">
    <li class="w-full rounded-t-l text-black ">
        <div class="flex items-center pl-3">
            <input id="list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#a483e7]  bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-black ">Driver License </label>
        </div>
    </li>
    <li class="w-full rounded-t-lg ">
        <div class="flex items-center pl-3">
            <input id="list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#a483e7] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-black">State ID</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg  text-black">
        <div class="flex items-center pl-3">
            <input id="list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#a483e7] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-black ">US Millitary</label>
        </div>
    </li>
    <li class="w-full rounded-t-lg  text-black">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-[#a483e7] bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-black ">US Passport</label>
        </div>
    </li>
</ul>

   </div>
   
</div>
<div v-for="key in count " :key="key" class="ml-10">

  <p class="text-lg"> Tax Name
    </p>
    <label for="small-input" class="block mb-2 text-sm font-medium  dark:text-gray-300">This will reflect as Tax Name in relevant place</label>
    <input  v-model="values['dynamic-field-'+key]" :id="key "  type="text"  class=" p-2 w-full  border border-[#a483e7] sm:text-xs    dark:text-black ">
</div>
<div class="flex-inline">
  
  <!-- ////// adding more inputs -->
   
    <button   @click="add" id="add_more_fields" class="   object-fit   place-content-center  align-bottom bg-transparent hover:bg-gery-600  hover:text-gery-7000 py-2 px-5 border border-none hover:border-transparent 
     
    ">
    Add Custom Tax
  </button>

  </div> 

</slot>
<!-- ////////add custom tax -->
<slot name="footer">

  <div  class=" ml-[180px] lef-10 flex space-x-3">
  <div class="mt-4">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-300 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="$emit('dismiss')"
                  >
                    Cancel
                  </button>
                </div>
                <div class="mt-4 ">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md border border-transparent bg-[#de175e] px-4 py-2 text-sm font-medium text-white  hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    @click="closeModal"
                  >
                   Sava
                  </button>
                </div>
</div>
</slot> 
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
</template>
  <script>
  import { ref } from 'vue'
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue'

  export default{
    emits:[
      'dismiss'
    ],
    components:{
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  
  
    setup(){
      const isOpen = ref(false)
      const closeModal= ()=>{
        isOpen.value=false
        console.log('test')

      }
      return{
        isOpen,
        closeModal
      }
    }
    }
  
 

  
  </script>
  