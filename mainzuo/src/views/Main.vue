<template>
  <div>
   
    <router-view></router-view>


    
  
   
    <Footes></Footes>
  </div>
</template>



<script>
import Footes from "@/components/Foot.vue"
export default {
    
    components:{
        Footes
    }
}
</script>