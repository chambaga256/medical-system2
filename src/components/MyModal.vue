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
                    modal title
                    </DialogTitle>
                  </slot>
                   
                  <slot name="body">
                    <div class="border-b w-full border-[#c8c3cf] pt-5">
                        
                    </div>
                    <h3>hi body</h3>

            </slot>
   
                    <slot name="footer">
                        <div  class=" ml-[180px] lef-10 flex space-x-3">
                
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
                <div class="mt-4">
                      <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-300 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        @click="$emit('dismiss')"
                      >
                        Cancel
                      </button>
                    </div>
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
      