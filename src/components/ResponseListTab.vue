

<template>



 <div><ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap shadow-lg list-none border-b-0 pl-0 mb-4" id="tabs-tab"
    role="tablist">
    <li class="nav-item" role="presentation">
      <routerLink :to="{name:'MedicineResponses'}" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
        aria-selected="true">Home</routerLink>
    </li>
    <li class="nav-item" role="presentation">
      <a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
        aria-controls="tabs-profile" aria-selected="false">Profile</a>
    </li>
    <li class="nav-item" role="presentation">
      <a href="#tabs-messages" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
        aria-controls="tabs-messages" aria-selected="false">Messages</a>
    </li>
    <li class="nav-item" role="presentation">
      <a href="#tabs-contact" class="
      nav-link
      disabled
      pointer-events-none
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab"
        aria-controls="tabs-contact" aria-selected="false">Contact</a>
    </li>
  </ul></div>


  


  <router-view />
</template>

