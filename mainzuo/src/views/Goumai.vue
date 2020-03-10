<template>
  <div class="film">
       <van-nav-bar  left-arrow  @click-left="goback"/>
    <Head title show="true"></Head>
    <div class="cinema_name">{{cinema.name}}</div>
    <div class="services">
      <van-tag v-for="(s,i) in cinema.services" :key="i" type="warning">{{s.name}}</van-tag>
    </div>
    <div class="address">{{cinema.address}}</div>

    <div class="bg">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(f,i) in film " :key="i" class="swiper-slide">
            <img :src="f.poster" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="filmcontent">
      <div class="filmtitle">
        <!-- <span>{{film[0].name}}</span> -->
        <!-- <span class="grade">{{film[0].grade}}分</span> -->
      </div>
      <div class="filmdesc">
        <!-- <span>{{film[0].category}}</span>
        <span>| {{film[0].runtime}}分|</span>
        <span>{{film[0].director}}</span> -->
      </div>
    </div>
    <van-button size="large" class="goorder" type="danger">购票</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cinema: {},
      film: []
    };
  },
  mounted() {
    var cinemaId = this.$route.query.cinemaId;
    console.log(cinemaId);
    this.$axios
      .get("/vue/maizuo/film1", { params: { cinemaId: cinemaId } })
      .then(res => {
        console.log(res.data.result.data.cinema);
        this.cinema = res.data.result.data.cinema;
      });
    this.$axios
      .get("/vue/maizuo/film2", { params: { cinemaId: cinemaId } })
      .then(res => {
        console.log(res.data.result.data.films);
        this.film = res.data.result.data.films;
      });
  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  },
  updated() {
    var mySwiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      effect: "coverflow",
      centeredSlides: true,
      coverflow: {
        rotate: 0,
        stretch: 5,
        depth: 60,
        modifier: 2,
        slideShadows: false
      }
    });
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 1.8rem;
  height: 2.4rem;
}
.film {
  position: relative;
  height: 100vh;
  background-color: #fff;
  text-align: center;
  .cinema_name {
    line-height: 1rem;
  }
  .services {
    span {
      margin-right: 5px;
    }
  }
  .address {
    line-height: 1rem;
  }
  .filmcontent {
    .filmtitle {
      line-height: 1rem;
      .grade {
        font-size: 0.32rem;
        font-style: italic;
        color: #ffb232;
        margin-left: 0.1rem;
      }
    }
    .filmdesc {
      line-height: 0.6rem;

      color: #797d82;
      font-size: 0.26rem;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .goorder{
    position: fixed;
    bottom: 1rem;
    left: 0;
  }
}
</style>