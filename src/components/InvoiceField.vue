
   <script>
     import MessageIcon from './icons/MessageIcon.vue';
    import AddIcon from './icons/AddIcon.vue'
    import PhoneIcon from'./icons/PhoneIcon.vue'
    import Cards from './Cards.vue'
    import CalenderIcon from  './icons/CalenderIcon.vue'
    import LowerSection from'../components/lowerSection.vue'
   
    export default {
      name: 'App',
      components:{
        AddIcon,
        Cards,
        CalenderIcon,
        MessageIcon,
        LowerSection


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
    }
    </script>
 
  <template>
    <div >
  <div class="">

<div class=" w-full px-3   mt-10 ml-[180px]  mr[180px] pt-10 sm:flex-col sm:justify-conter sm:items-center  border-2 mr-[180px] shadow-xl  h-[1900px] 

content-center  ">
<p  class="text-bold items-center text-center mt-0  mb-2 ">

  <h4 class=" items-center sm:justify-center sm:place-content-center "> invoice</h4>

   <div  class=' border-dotted h-2 w-6  mx-auto'/>

</p>

<div class="block p-6 rounded-lg  max-w-md">
<form>
  <div class="grid lg:grid-cols-2 ">
    <div class=" mb-6">
      <div class=" ">
        <AddIcon class="w-6"  />
         <p  class="
        px-3
        text-base
        font-normal
        text-gray-700
         
         border-b-2
    
        focus:text-gray-700 focus:bg-white focus:outline-none" 
        >invoice No*</p> </div>
    </div>
    <div class="form-group mb-6">
      <input type="text" class="form-control
        block
        w-full
        px-5
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-clip-padding
         border-b
        
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInput124"
        aria-describedby="emailHelp124" placeholder="Enter the Invioce Number ">
    </div>
  </div>
  <div class="grid lg:grid-cols-2 space-y-0 ">
    <div class="form-group mb-6">
      <p  class="
        block
        w-19
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
         border-b-2
        
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:outline-none" id="exampleInput123"
        > Invoice Date*</p>
    </div>
    <div class="flex items-center justify-center">
<div class="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
  <input type="text"
    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding  border-b   transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    placeholder="Select a date" data-mdb-toggle="datepicker" />
  
</div>

</div>

        
  </div>
 
  
 
</form>


</div>
<div class=" gap-6 mb-6 flex">
  <div  v-for="key in count " :key="key" class="flex-wrap">
  
    <div>
  
            <input type="text"  v-model="values['dynamic-field-'+key]" :id="key " class="   text-grey-700 text-5  border-b-2 w-30 p-2  dark:placeholder-[#c8c3cf] " placeholder="Field Name" required>
        </div>
        <div>
           
            <input type="text"  v-model="values['dynamic-field-'+key]" :id="key " class=" text-grey-700 text-5  border-b-2 w-30 p-2  dark:placeholder-[#c8c3cf]" placeholder="Value" required>
        </div>
      </div>
         
      <a href="#" id="remove_fields"  @click="remove"><i class="text-[#4088ea]"></i>x</a>
        </div>
<div class=" p-6 rounded-lg  bg-white max-w-md ">

  <div class="grid grid-cols-2 ">
    <div class="f mb-6">
      <Addicon />
  <div>
    <button type="button" id="add_more_fields" @click="add" class="py-2.5 px-5 mr-2 mb-2 text-5 font-medium text-gray-700 ">Add More Field</button>
  </div>
     
        
    </div>
  
  </div>
  
    <div class="">

     
       <div class=" left-0 absolute w-50  ml-[40px] mr-[10px] pb-5 shadow-[rgb(35,36,38)]">
        
       
        <div class="lg:flex space-x-5 mb-10   ml-[400px]  mr-[100px]">
          <Cards />
        <Cards /> 
        </div>
    
        <div class=""> 
      <LowerSection  />
   

    </div> 
     
      

        
<!--  add button to shopping details -->


  
    
    </div>
     
     
    <!-- <LowerSection  />
         -->
  </div>

  
    
  
  

</div>


 



 



</div>



  




</div>




</div>
   
 
  
  
  </template>
  
  
  
