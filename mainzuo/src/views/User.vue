<template>
  <div>
    <van-nav-bar title="我的资料" left-arrow @click-left="goback"></van-nav-bar>

    <div class="bottom">
      <div class="bigbox">
        <van-cell title="头像" is-link value=""  class="small"/>
      </div>
      <div>
        <van-cell title="昵称" is-link value="内容" />
      </div>
      <div>
        <van-cell is-link @click="showPopup">性别</van-cell>

        <van-popup v-model="show" v-if="show" closeable position="bottom" :style="{ height: '20%' }">内容</van-popup>
      </div>
      <div>
        <van-cell is-link @click="showPopup">出生日期</van-cell>

        <van-popup v-model="show"   v-if="show" closeable position="bottom" :style="{ height: '20%' }">内容</van-popup>
      </div>
      <div class="img">
        <Uploadimg></Uploadimg>
      </div>
    </div>
  </div>
</template>


<script>
import Uploadimg from "@/components/Uploadimg.vue";
export default {
  components: {
    Uploadimg
  },
  data() {
    return {
      userinfo: {},
      show: false,
      
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    }
  }
};
</script>



<style lang="scss" scoped>
.bottom {
  width: 100%;
  .bigbox{
    width: 100%;
    height: 1.4rem;
    position: relative;
    
    
  }
  .img{
    position: absolute;
    top: 1rem;
    right: 0.3rem;

  }

  p {
    width: 100%;
    height: 1rem;
    padding: 0 15px;
    box-sizing: border-box;
    background: white;
    border-bottom: 1px solid #f5f5f5;

    span {
      line-height: 1rem;
      //   line-height: 1rem;
    }

    .po {
      margin-left: 15px;
    }
    .right {
      float: right;
    }
    .a {
      position: absolute;

      right: 0.9rem;
      font-size: 12px;
    }
    .b {
      position: absolute;
      right: 0.7rem;
    }
    .iconfont {
      font-size: 20px;
      color: red;
    }
  }
}
</style>