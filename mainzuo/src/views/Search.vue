<template>
  <div>
    <div class="box">
      <input type="text" class="ipn" placeholder="输入影城名称" />
      <span class="de" @click="goback">取消</span>
    </div>
  </div>
</template>



<script>
export default {
  components: {},
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>


<style lang="scss" scoped>
div {
  width: 100%;
  height: 100vh;
  .box {
    width: 100%;
    height: 0.96rem;
    padding: 0.18rem;
    box-sizing: border-box;
    .ipn {
      width: 6.04rem;
      height: 0.6rem;
      border: 0;
      background: #f4f4f4;
      font-size: 12px;
    }
    .de {
      display: inline-block;
      width: 0.8rem;
      height: 0.6rem;
      text-align: right;
      font-size: 14px;
    }
  }
}
</style>