<template >
  <div>
    <div class="bg-[#fafafa]  w-full h-full ml-[5px]  items-center ">
 
 <h1 class=" items-center text-xl font-extrabold mb-2 dark:text-white"><span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">Medicine List</span></h1>
 
 <div class="items-center  ml-[450px]">
   <input id="default-checkbox" type="checkbox"  @click="selectAll"  v-model="allSelected"  value=""  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
   <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-700">Select More</label>
  
 </div>
  <div>
   <div class=" items-center mb-0" v-for="Medicine in MedicineList " :key="Medicine.id">
   <input id="default-checkbox" v-model="checkedBox"  type="checkbox" :value="Medicine.name" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
   <label for="default-checkbox" :for="Medicine" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-700">{{Medicine.name}}</label>
   <div class="lg:ml-[500px] space-x-10">
       <button type="button" class="text-black hover:focus:outline-none focus:ring-4 focus:ring-purple-300 font-small rounded-full text-base px-5 py-2.5 text-center mb-2  ">Add</button>
 <button type="button" class="text-black  focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-small px-5 py-2.5 text-center   ">Remove</button>
 <button type="button"  @click="modalActive=true" class="text-black focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-small px-5 py-2.5 text-center   ">Send</button>
 
    </div>
 
 </div>
 <div>Checked medicine: {{ checkedBox }}</div>
  </div>
   
   </div>
   <MyModal @close="toggleModal" :show="modalActive" @dismiss="modalActive=false" >

    <template v-slot:header> 
      <div class="text-lg font-medium leading-6 text-gray-900 items-center ml-5 pb-5">
        <h2> Please Enter  The Suppliers infomation Here </h2>
      </div>
  
      </template>
        <template v-slot:body><div>
            <form  @submit.prevent>
              <div class="form-group mb-6">
      <label for="Response" class="form-label inline-block mb-2 text-gray-700">suppliers Name </label>
      <input type="text" v-model="request.name"  class="form-control block
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
        placeholder="suppliers Name ">
    </div>
    
  <div class="form-group mb-6">
      <label for="Response" class="form-label inline-block mb-2 text-gray-700">Suppliers Email </label>
      <input type="email"  v-model="request.suppliers_email" class="form-control block
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
        placeholder="Suppliers Email ">
    </div>
       
  <div class="form-group mb-6">
      <label for="Response" class="form-label inline-block mb-2 text-gray-700">Phone Number </label>
      <input type="phone"  v-model="request.number" class="form-control block
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
        placeholder="Phone Number ">
    </div>
    
</form>
<p class="text-gray-700 ml-[140px] text-lg mb-10">
  ......Or......</p>

<div class="shadow-lg">

<div class=" flex space-x-2  ml-[100px]  mt-10">  <svg
class="w-6 h-6 text-green-400 fill-current"
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 448 512">
<path
  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
></path>
</svg>  <span class=" rounded-lg border-gray-500 cursor-pointer "> WhatsApp</span></div>
</div>
        </div> 
        </template>

      <template v-slot:footer> 
        <button type="submit" class=" mt-10
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
      ease-in-out" @click="submitRequest">send</button>
            
      </template>

    </MyModal>

    <router-view />
  </div> 


    
</template>


<script>
import MyModal from'./../components/MyModal.vue'
import { ref,reactive} from 'vue'
export default{
  components:{
    MyModal,
  },
  setup(){
    const modalActive = ref(false)
    
  const request = reactive({
    name:"",
    suppliers_email:"",
    number:""

  

  })
  const submitRequest =()=>{
    localStorage.setItem('medicine',JSON.stringify(request))
    request.name="",
    request.suppliers_email="",
    request.number=""
     
  }
  const mutiFunction=()=>{
    return closeModal && submitRequest
  }
   const isOpen = ref(true)
 const closeModal=()=>{
     isOpen.value=false
 }
  
    const checkedBox=ref([])
    const  MedicineList=[
              {name:'Metformin.' ,id:1},
              {name:'Losartan' ,id:2},
              {name:'Antibiotics' ,id:3},
              {name:'Albuterol' ,id:4},
              {name:'Gabapentin.' ,id:5},
          ]
    const allSelected= ref(false)
    const selected =ref([])
      
    function selectAll(){

      for(let i=0;i<MedicineList.length; i++){
        checkedBox.value.push(MedicineList[i].id)
       
       
      }
      
      

        function ischecked(){

         if(checkedBox.value=!checkedBox.value){
          
         }
          
        }
    }
  
    localStorage.setItem('checked',JSON.stringify((MedicineList)))
  
      return{
        MedicineList,checkedBox, selectAll,selected, allSelected, modalActive,submitRequest,request
         
       
        
         
      }

  }
}

</script>


  
