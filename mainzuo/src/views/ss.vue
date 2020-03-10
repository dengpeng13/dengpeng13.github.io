<template>
  <div class="yinyuan">
    <h1>{{cinemaId}}</h1>
    <Head 
    :show="show"
    search="false"
    login="false"
    ></Head>
    <div class="title">{{cinemaList.name}}</div>
    <div class="tag">
      <div class="child">儿童票</div>
      <div class="yj">3d眼睛</div>
    </div>
    <div class="address">
      <div class="dz">{{cinemaList.address}}</div>
    </div>
    <van-tabs
    :color="color"
       :title-active-color="color"
       :ellipsis="false"  
       line-width="80px"
       class="title-style"
       title-inactive-color="#191a1b"
    >
      <van-tab
       v-for="(t,index,i) in arr" 
       :key="i" 
       :title="t.text"
       class="van"
       ></van-tab>
    </van-tabs>
    <div class="foot">
      <div class="img">
        <img :src="imgs[0]" alt />
      </div>
      <div class="value">暂无场次</div>
    </div>
    <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" type="primary"  to="/news">去吐槽...</van-button>
    <van-button color="linear-gradient(to right, #4bb0ff, #6149f6)" type="primary" to="/mcar">放进订单</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news:"/main.news",
      color:"#ff5f16",
      arr:[
        {text:"今天12月21日",index:0},
        {text:"明天12月22日",index:1},
        {text:"后天12月23日",index:2},
        {text:"周二12月24日",index:3},
        {text:"周三12月25日",index:4},
        {text:"周四12月26日",index:5},
        {text:"周五12月27日",index:6},
      ],
      title: "",
      show: true,
      imgs: [require("@/assets/images/y1.png")],
      cinemaId: "",

      cinemaList: {}
    };
  },
  mounted() {
    console.log(sessionStorage.mobile)
    this.cinemaId = this.$route.query.cinemaId;
    this.$axios
      .get(`/vue/cinema?cinemaId=${this.cinemaId}`)
      .then(res => {
        console.log(res.data.result[0]);
        this.cinemaList = res.data.result[0];
      });
  }
};
</script>

<style lang="scss" scoped>
.yinyuan {
  background: #fff;
  height: 100%;
  .title {
    text-align: center;
  }
  .tag {
    justify-content: center;
    font-size: 15px;
    color: #ffb232;
    overflow: hidden;
    position: relative;

    display: flex;
    .child {
      border: 1px solid #ffb232;
      position: relative;
      padding: 0 6px;
      margin: 0 2.5px;
      font-size: 10px;
    }
    .yj {
      border: 1px solid #ffb232;
      position: relative;
      padding: 0 6px;
      margin: 0 2.5px;
      font-size: 10px;
    }
  }
  .address {
    .dz {
      font-size: 14px;
      height: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .title-style{
    margin: 0 10px;
    .van{
      margin-right:10px;
    }
  }
  .foot {
    .img {
      height: 70px;
      width: 70px;
      margin: 0 auto 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .value {
      text-align: center;
      color: #bdc0c5;
      font-size: 14px;
    }
  }
}
</style>
