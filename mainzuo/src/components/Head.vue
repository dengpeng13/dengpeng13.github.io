<template>
  <van-nav-bar 
  title="影院" 


 >
    <van-icon @click="gosearch" name="search" slot="right" />
  </van-nav-bar>
</template>




<script>
export default {
 
  methods:{
    gosearch(){
      this.$router.push({name:'search'})
    },
    goback(){
      this.$router.go(-1)
    }
  }
};
</script>