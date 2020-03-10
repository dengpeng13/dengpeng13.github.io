<template>
  <div>
    <div class="big">
      <van-nav-bar title="设置" left-arrow @click-left="goback"></van-nav-bar>
      <p class="post1">
        <van-cell title="账号ID" is-link url="" />
      </p>
      <p class="post1">
        <van-cell title="登入密码" is-link url="" />
        <van-cell title="安全密码" is-link url="" />
      </p>

      <p class="post1">
        <van-cell title="软件版本" is-link url="" />
        <van-cell title="意见反馈" is-link url="" />
      </p>

      <p class="post1">
        <van-cell title="清除缓存" is-link url="" />
      </p>
      <p class="post5">
        <van-button type="primary" size="large" @click="goremove">退出登入</van-button>
      </p>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goremove(){
        sessionStorage.token ="";
        this.$router.push({name:'login'})
    }
  }
};
</script>




<style lang="scss" scoped>
.big {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  .post1{
      width: 100%;
      margin: 10px auto;
  }
  .post5{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
  }
 
}
</style>