import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './../views/Homepage.vue'
import MedicalEquipments from './../views/MedicalEquipments.vue'
import MedicineList from'../views/MedicineList.vue'
import ConfirmOder from'../views/ConfirmOder.vue'
import AddEquipments from'../views/AddEquipments.vue'
import Addmedicine from'../views/Addmedicine.vue'
import MedicalResponses from'../views/MedicalResponses.vue'
import MedicineResponses from'../views/MedicineResponses.vue'
import SuppliersForm from '../views/SuppliersForm.vue'
import LandingPage from '../views/LandingPage.vue'
import DashBoard from'../views/DashBoard.vue'
import Invoice from '../views/Invoice.vue'
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component:Invoice,

  },
  {
    path: '/dashBoard',
    name: 'DashBoard',
    component: DashBoard,
  },
  {
    path: '/medicalequipments',
    name: 'MedicalEquipments',
    component: MedicalEquipments,
  },
  {
    path: '/medicinelist',
    name: 'MedicineList',
    component: MedicineList,
  },
  {
    path: '/confirmOder',
    name: 'ConfirmOder',
    component:ConfirmOder,
  },
  {
    path: '/addequipments',
    name: 'AddEquipments',
    component:AddEquipments,
  },
  {
    path: '/addmedicine',
    name: 'Addmedicine',
    component:Addmedicine,
  },
  
  {
    path: '/medicineResponses',
    name: 'MedicineResponses',
    component:MedicineResponses,
  },
  {
    path: '/MedicalResponses',
    name: 'MedicalResponses',
    component:MedicalResponses,
  },
  {
    path: '/suppliersForm',
    name: 'SuppliersForm',
    component:SuppliersForm,
  },
 
  
 
 
 
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
