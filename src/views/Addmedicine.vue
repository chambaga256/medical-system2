<template>
    <div class="lg:ml-[40px]  shadow-2xl  w-[900px] mt-[50px] border">
        <h2 class="text-4xl font-extrabold dark:text-black mb-5 lg:ml-[50px]">Add Medicine</h2>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="Medicine-Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medicine Name</label>
                <input type="text" id="Medicine-Name" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 0  dark:placeholder-gray-700 dark:text-black  " placeholder="Medicine " required="">
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Spacification</label>
                <input type="text" id="specification" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required="">
            </div>
            <div>
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Decription</label>
                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required="">
            </div>  
            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678"  required="">
            </div>
            <div>
                <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Suppliers url</label>
                <input type="text" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required="">
            </div>
            <div>
                <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unique visitors (per month)</label>
                <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            </div>
        </div>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required="">
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
    </form>
    
    </div>
    
    </template>
    
    <script>
    </script>