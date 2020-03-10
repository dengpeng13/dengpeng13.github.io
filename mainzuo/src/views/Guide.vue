<template>
  <van-swipe :autoplay="3000" show-indicators>
    <van-swipe-item v-for="(m,i) in imgs" :key="i">
        <img :src="m" alt="" class="g-img">

        <van-button @click="gomain" type="warning" class="g-btn" v-if="i==imgs.length-1">进入主页</van-button>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
    name:'guide',
    methods:{
       gomain(){
          this.$router.push({name:"movie"})
       }
    },
  data() {
    return {
      imgs: [
        require("@/assets/images/d1.jpg"),
        require("@/assets/images/d2.jpg"),
        require("@/assets/images/d3.jpg"),
        require("@/assets/images/d4.jpg")
      ]
    };
  }
};
</script>

<style lg="sass" scoped>
        .g-img{
            width: 100%;
            height: 100vh;
        }
        .g-btn{
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
           
        }
</style>>