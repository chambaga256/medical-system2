<template>
  <div class="bg-slate-300 w-full">
    <div class="  ml-[200px] lg:w-full lg:h-full">
     
     <div class="block p-6 rounded-lg shadow-lg shadow-black bg-white max-w-sm">
      <div class="flex items-center mb-6">
            <h1 class="mr-6 text-4xl font-bold text-purple-600">REQUESTS</h1>
          </div>
        <div class="mb-[20px] text-base ">
          <p class="text-blue-600">From: {{data.name}}</p>
        <p class="text-blue-600">Name:{{data.suppliers_email}}</p>
        <p class="text-blue-600">Phone Number:{{data.number}}</p>
        <div  v-for="(medicine,n) in medicineData">
          <p class="text-blue-600">Medicine:{{medicine.name}}</p>
        </div>
        <!-- <p>Equipment: </p> -->
      </div>
        <form  @submit.prevent>
    <div class="form-group mb-6">
      <label for="specification" class="form-label inline-block mb-2 text-gray-700">Spacification</label>
      <input type="text " v-model="responses.spacification" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="InputEmail1"
        aria-describedby="emailHelp" placeholder="Spacification">
     
    </div>
    <div class="form-group mb-6">
      <label for="Response" class="form-label inline-block mb-2 text-gray-700">Response</label>
      <input type="text" v-model="responses.response"   class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
        placeholder="Response">
    </div>

    <div class="form-group mb-6">
      <label for="Response" class="form-label inline-block mb-2 text-gray-700">Price </label>
      <input type="text" v-model="responses.price" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="price"
        placeholder="price">
    </div>
    <button type="submit" class=" ml-[100px]
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" @click="submitResponse">send</button>
  </form>
</div>
    </div>
  </div>

   
</template>

<script>
import {reactive} from 'vue'

export default {
setup(){
  const medicine = localStorage.getItem('checked')
    const medicineData= JSON.parse(medicine);
  const request=localStorage.getItem('medicine');
         const data=JSON.parse(request);
  const responses= reactive({
    spacification:"",
     response:"",
    price:""

  })

  const submitResponse =()=>{
    console.log(responses)
    localStorage.setItem('name',JSON.stringify(responses))
     responses.spacification="",
     responses.response="",
     responses.price=""

 
   
    
  }

 
  return{
    submitResponse,responses,data,medicineData
  }

}}
</script>