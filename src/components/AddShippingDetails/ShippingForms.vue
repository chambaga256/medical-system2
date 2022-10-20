


<template>


<div v-show="modalActive" class=" w-96 h-96   py-0 justify-center ">
       <div  class=" px-5 py-5 left-0 absolute flex w-50 h-50  pb-5 shadow-[rgb(35,36,38)]">
      <ShippedFrom />
      <ShippinedTo />
      

         </div>
<!-- 
        add button to shopping details -->


    
    </div>
    
</template>


<script>
import ShippinedTo from './ShippinedTo.vue';

import ShippedFrom from './ShippedFrom.vue'

    export default {
      components:{
        ShippedFrom,
       ShippinedTo
      },
      props: ["modalActive"],
      setup(props, { emit }) {
        const close = () => {
          emit("close");
        };
        return { close };
      },
      data: function () { 
        return {
          count: 0,
         values: {}
    
        }
      },
      methods: {
        add: function(){
          this.count++;
        },
        remove: function () {
         this.count--;
         
        },
        
        submit: function(){
         for (var key of Object.keys(this.values)) {
              console.log(key + " -> " + this.values[key])
          }
        }
    
        
      }
       
    };
    </script>