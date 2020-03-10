<template>
  <div class="init">
           <van-nav-bar :title="film.name" left-arrow  @click-left="goback"/>
    <div class="col">
      <div class="film-name">
        <!-- <span class="name">{{film.name}}</span> -->
           <!-- <van-nav-bar :title="film.name" left-arrow  @click-left="goback"/> -->
      </div>
    </div>

    <div class="pin">
      <p>电影评论</p>
    </div>

    <div class="lun">
      <van-cell-group>
        <van-field
          v-model="register.message"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入留言"
        />
      </van-cell-group>
    </div>
    <van-button color="linear-gradient(to right, #bbb232, #ffb999)" size="large " class="box" @click="gocars()">进入评论</van-button>
    <van-button
      color="linear-gradient(to right, #ccb232, #ffb999)"
      size="large "
      class="box1"
      @click="pinlun"
    >点击评论</van-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      film: {},
      host: {},
      register: {},
      msg:'',
    };
  },
  methods: {
    pinlun() {
      var filmId = this.$route.query.filmId;
      this.$axios
        .post(`/vue/pinlun?filmId=${filmId}`, this.register)
        .then(res => {
          console.log(res);
       this.$toast('提交成功');
        });
    },
    
    gocars(){
       this.$router.push({ name: "cars"});
    },
    goback(){
       this.$router.go(-1);
    }
  },
  created() {
    if (this.$route.query.filmId) {
      var filmId = this.$route.query.filmId;
    }

    this.$axios.get(`/vue/maizuo/detail?filmId=${filmId}`).then(res => {
      console.log(res.data.result.data.film);
      this.film = res.data.result.data.film;
    });
  }
};
</script>

<style lang="scss" scoped>
.init {
  height: 100vh;
  color: #797d82;
  font-size: 0.26rem;
}



.pin {
  width: 100%;
  height: 0.9rem;
  box-sizing: border-box;
  text-align: center;
  line-height: 0.9rem;
  border: 2px solid red;
  color: black;
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.lun {
  width: 100%;
  height: 8rem;
  box-sizing: border-box;
  position: relative;
  border: 2px solid #ffb232;

  .lun-a {
    border: 0;

    font-size: 14px;
  }
}
.box {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
