



<template>
<div class="">l
    <div class=" ml-2 place-items-center mt-1 pb-10 ">
    <P class=" pt-5"> Form</P>
  <div class="border w-full  content-center justify-center  ">
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
<div class="flex space-x-1">
  
<MessageIcon class="w-4  bg-[#ffffff] px-0" />
  <button class="bg-white hover:bg-gray-100 text-gray-500 f py-2 px-4  ">
  Add Email
</button>
<PhoneIcon class="w-4 border-circle border-spacing-0 " />
<button class="bg-white hover:bg-gray-100 text-gray-500  py-2 px-4   ">
  Add Phone Number
</button>


</div> <div class="flex px-0 py-2 pb-2 ">
  <AddIcon class="w-4 border" />
  <button class= "bg-white hover:bg-gray-100 text-gray-500  py-2 px-4 -grey-700"> Add Custom Fields</button>
</div>
  </div>


</div>

<div class="flex object-fit   absolute px-2 pt-5 pb-2">
     <ShippingForms @close="toggleModal" :modalActive="modalActive" />
  <input type="checkbox" class="default:ring-2 border-gray-600 ..."  />
 
  <button @click="toggleModal" class="   object-fit   place-content-center  align-bottom bg-transparent hover:bg-gery-600  hover:text-gery-7000 py-2 px-5 border border-none hover:border-transparent 
   
  ">
  Add Shipping Details
</button>



</div>


</div>

  </div>





<!-- <LowerSection /> -->

</template>


<script>
  import ShippingForms from "./AddShippingDetails/ShippingForms.vue";
  import MessageIcon from './icons/MessageIcon.vue';
  import AddIcon from './icons/AddIcon.vue'
  import PhoneIcon from'./icons/PhoneIcon.vue'
    
  import { ref } from "vue";
  export default {
    name: "App",
    components: {
    ShippingForms,
    AddIcon,
    PhoneIcon,
    MessageIcon


    },
    setup() {
      const modalActive = ref(false);
      const toggleModal = () => {
        modalActive.value = !modalActive.value;
      };
      return { modalActive, toggleModal };
    },
  };
  </script>
  