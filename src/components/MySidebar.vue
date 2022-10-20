<template>   
<aside class="w-64 shadow-lg h-full" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3  rounded ">
      <a href="" class="flex items-center pl-2.5 mb-5">
         <img src="https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?cs=srgb&dl=pexels-pixabay-139398.jpg&fm=jpg" class="mr-2 h-[20px]  sm:h-7 rounded" alt="system Logo">
         <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
      </a>
      <ul class="space-y-2">
         
         <li>
            <router-link :to=" {name: 'MedicalEquipments'}" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">MedicalEquipments</span>
               <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">90</span>
            </router-link >
         </li>
         <li>
            <router-link :to="{name:'MedicineList'}" class="flex items-center p-2 text-base font-normal text-black rounded-lg  dark:hover:bg-gray-700">
              
               <span class="flex-1 ml-3 whitespace-nowrap">Medicines</span>
               <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </router-link>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-black rounded-lg   dark:hover:bg-gray-700">
               
               <span class="flex-1 ml-3 whitespace-nowrap">invoice</span>
            </a>
         </li>
        
         <li>
            <router-link :to="{name:'AddEquipments'}" href="#" class="flex items-center p-2 text-base font-normal text-black rounded-lg   dark:hover:bg-gray-700">
               <!-- <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg> -->
               <span class="flex-1 ml-3 whitespace-nowrap">AddEquipments</span>
            </router-link>
         </li>
         <li>
            <router-link :to="{name:'Addmedicine'}" class="flex items-center p-2 text-base font-normal text-black rounded-lg   dark:hover:bg-gray-700">
              
               <span class="flex-1 ml-3 whitespace-nowrap">Addmedicine</span>
            </router-link>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-black rounded-lg   dark:hover:bg-gray-700">
              
               <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li><li>
            <router-link :to="{name:'MedicineResponses'}"  class="flex items-center p-2 text-base font-normal text-black rounded-lg   dark:hover:bg-gray-700">
              
               <span class="flex-1 ml-3 whitespace-nowrap">MedicineResponses</span>
            </router-link>
         </li><li>
            <router-link  :to="{name:'SuppliersForm'}" class="flex items-center p-2 text-base font-normal text-black rounded-lg   dark:hover:bg-gray-700">
              
               <span class="flex-1 ml-3 whitespace-nowrap">SuppliersForm</span>
            </router-link >
         </li><li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-black rounded-lg   dark:hover:bg-gray-700">
              
               <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<router-view />

</template>