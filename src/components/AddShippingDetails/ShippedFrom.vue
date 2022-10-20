
<script>
import MessageIcon from '../icons/MessageIcon.vue';
  import AddIcon from '../icons/AddIcon.vue'
  import PhoneIcon from'../icons/PhoneIcon.vue'
  export default {
    components:{
      MessageIcon,
      AddIcon,
      PhoneIcon

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
<template>



  <div class=" p-7 w-[500px] h-[400px]  shadow-md  items-center right-5 content-center" >
    <P class=" pt-5"> Form</P>
  <div class="border px-7    ">
  <div class="p-0">
    <label class="block">

<select class="form-select block w-full px-5 mt-1 outline-none border-b-2 text-gray-500">
  <option >uganda</option>
  <option>State Unites of America</option>
</select>
</label>

<div class="mb-3 pt-0">
  <input type="text" placeholder="Your Businesss Freelancer Name(Required)" class="px-3 py-3  text-sm border-b-2  outline-none w-full"/>
</div>
<div class="mb-3 pt-0">
  <input type="text" placeholder="Address (optional)" class="px-3 py-3  text-sm border-b-2  outline-none w-full"/>
</div>

<div class="flex  px-2   space-x-10">
  <div class="mb-3 pt-0">
  <input type="text" placeholder="City (Optional)" class="px-0 py-3  text-sm border-b-2  outline-none "/>
</div>
<div class="mb-3 pt-0">
  <input type="text" placeholder="Postal Code /Zip Code" class="px-0 py-3 w-full text-sm border-b-2  outline-none "/>
</div>

</div>
<div class="mb-3 pt-0">
  <input type="text" placeholder="State (optional)" class="px-3 py-3  text-sm border-b-2  outline-none w-full"/>
</div>

  </div>


</div>


</div>


</template>