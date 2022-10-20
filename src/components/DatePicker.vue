<script>



import Datepicker from 'vuejs3-datepicker';

export default {
    name:'Date',
    components:{
        Datepicker,
    },
    data(){
        return {
            date:''
    }

}}
</script>
<template>

    <div id="app">
        <date-picker v-model="date" lang="en" type="date" format="YYY-MM-dd">
            </date-picker>


    </div>
</template>