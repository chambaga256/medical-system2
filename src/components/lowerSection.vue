<template>
  <div class=" ml-[100px]">
<div class=" lg:flex  ml-[300px] mr-5  space-x-3   pb-[50px] ">
<Mymodel @close="toggleModal" :show="modalActive" @dismiss="modalActive=false" />

    <div claas=" px-5 ">
  <button @click="modalActive=true" class=" w-30 h-30 inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
Add Tax
</button> 
  </div>
  <p class="w-[80px]">Currency <span class="text-[#911c26]">*</span></p>
  <div class="inline-block relative w-64">
<select class="block appearance-none w-full bg-[#f7faff]  border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
  <option>USA Dollars</option>
  <option>USH</option>
  <option>KSH</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
  
</div>
</div>

<div claas=" px-5 ">
  <button   @click="" class=" w-30 h-30 inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
<span  class="text-[#2c7ce7]">246</span> Number Format
</button> 

</div>

<div claas=" px-5 ">
  <button @click="" class=" w-30 h-30 inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
Rename Field 
</button>

</div>

</div>
<!-- button low -->
<div class="   ml-[350px] lg:w-[700px] sm:pt-50  sm:items-center justify-content-center relative  h-10 sm:object-fill  sm:h- bg-[#2c7ce7]  space-y-4 text-white border-rounded items-center place-items-center ">
  <div class="lg:flex  gap-x-[200px]" >
      <p class=""> Item</p>
    
      <p  class ="">Quantiy</p>
   
      <p>
      Rate
      </p>
      <p>
          Amount 
      </p>

  

  </div>
  <!-- /////////////////////////////// more fields -->

<div></div>

  <div class=" gap-6 mb-6  flex-row">
<div  v-for="key in count " :key="key" class="flex-wrap flex">

  <div class="">

   <input type="text"  v-model="values['dynamic-field-'+key]" :id="key " class="   border-[#b4c2d5]  text-grey-700 text-5  border-b-2 w-30 p-2  dark:placeholder-black " placeholder="Items" required>
      </div>
      <div>

<input type="text"  v-model="values['dynamic-field-'+key]" :id="key " class="   text-black text-10 border-[#b4c2d5]  border-b-2 w-30 p-2  dark:placeholder-black " placeholder="$" required>
</div>
<!-- <div>
        <button class="text-[#4088ea]" id="remove_fields" @click="remove">X</button>
       </div> -->

         


       <div class="">

<input type="text"  v-model="values['dynamic-field-'+key]" :id="key " class="   border-[#b4c2d5]  text-grey-700 text-5  border-b-2 w-30 p-2  dark:placeholder-black " placeholder="Items" required>
   </div>
   <div>

<input type="text"  v-model="values['dynamic-field-'+key]" :id="key " class="   text-black text-10 border-[#b4c2d5]  border-b-2 w-30 p-2  dark:placeholder-black " placeholder="$" required>
</div>
<div>
     <button class="text-[#4088ea]" id="remove_fields" @click="remove">X</button>
    </div>


    </div>
    
       

      </div>

   <div>
      <button  @click="add" id="add_more_fields" class=" mb-5 pt-2px  lg:w-[700px]  h-12 space-y-7 px-6 text-[#911c26] transition-colors duration-150 bg-[#f7faff] rounded-lg border-dashed border-2 border-[#e5e7eb] focus:shadow-outline hover:bg-[#f7faff]">
          
          <AddIcon class=" px-[50px] fill-current" />
          <span>  Add New Line </span> </button> 
   </div>


   
</div>
 <div class="  ml-[750px] mt-[60px] space-y-7  ">
  <div>
    <div claas=" px-5 ">
  <button class=" w-30 h-30 inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded shadow">  
     Give Item wise Discount
</button>


</div>

    
  </div>
  <div>
    <div claas="  ">
  <button class=" w-30 h-30 inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">  
    Give Discount on Total
</button>


</div>
 
  </div>
  <div>
    <div claas=" px-5 space-y-10 mt-10">
  <button class="  w-30 h-30 inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">  
    Add Additional Charges
    </button>

</div>
    
  </div>
  <div class="border border-gray-300 w-[300px] px-30">

  </div>
 
  <div claas=" px-5 space-y-10 pt-10">
  <button class="  w-30 h-30 inset-0   hover:bg-gray-100 text-black  text-[40px] font-semibold py-2 px-4 rounded shadow">  
    Total
      (USD)
    </button>

</div>

<div claas=" px-5  ">
  <button class="  w-30 h-30 inset-0  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">  
    Show Total In Words
    </button>

</div>
<div claas=" px-5 space-y-10 mt-5">
  <button class="  w-30 h-30 inset-0  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">  
    Show Total In Words
    </button>

</div>
 </div>
 
 <div class="mt-10  ml-[300px] lg:flex  space-x-5 ">
  <div claas=" px-5 ">
  <button class=" w-30 h-30 inline-flex items-center  inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-dashed border-2 border-gray-400 rounded shadow">
<AddIcon class="w-5  border-[#2c7ce7] rounded"/> Terms & Conditions 
</button>


</div>
<div claas=" px-5 ">
  <button class=" w-30 inline-flex items-center h-30 inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-dashed border-2 border-gray-400 rounded shadow">
<Document class="w-5 border-2 text-[#2c7ce7]" />  Add Notes
</button>


</div>


<form> 
  <label class="block">
    <span class="sr-only">Add Attachments </span>
    <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
  </label>
</form> 

<div claas=" px-5 ml-[250px]">
  <button class=" w-30 h-30 inset-0 bg-[#f7faff]  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-dashed  inline-flex items-center border-2 border-gray-400 rounded shadow">
    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 ">
<path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
Add signiture
</button>


</div>
 </div>
 <div class="lg:flex   ml-[400px] space-x-5 pt-[50px] justify-center items-center place-content-center">
  <button class=" w-30 h-30 inset-0 bg-[#de175e]  hover:bg-[#de175e]] text-white font-semibold py-2 px-4  border-2 ">
Save And Coninue
</button>


</div>


 </div>
 <div claas=" px-5">


  
</div>
</template>
<script>
  import Mymodel from './Mymodel.vue'
  import { ref } from "vue";
  export default {
  components: {
    Mymodel,
  },
    
     setup(){
      const modalActive = ref(false)
      const count=0
      const add =()=>{
        count=count++
        
      }
      const remove =()=>{
        count=count--
      }
      return{
       add,
       remove,
         modalActive
      }
     },
     
  };
  
  </script>