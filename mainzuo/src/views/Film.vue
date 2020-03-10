<template>
  <div class="init">
    <Head title="冰雪奇缘" show="true"></Head>
    <van-image width="100%" height="5rem" :src="film.poster" />
    <div class="details">
      <div class="col">
        <div class="film-name">
          <span class="name">{{film.name}}</span>
          <!-- <span class="item">{{film.item.name}}</span> -->
        </div>
        <div class="film-grade">
          <span class="grade">{{film.grade}}分</span>
          <span class="grade-text"></span>
        </div>
      </div>
      <div class="film-category">{{film.category}}</div>
      <div class="film-premiere-time"> 上映时间{{film.timeType*2.5}}</div>
      <div class="film-nation-runtime">{{film.nation}} | {{film.runtime}}分钟</div>
      <!-- <div :class="count%2==0?'showSynopsis':'film-synopsis'">{{film.synopsis}}</div> -->
      <!-- <div class="toggle" @click="showMore">
        <van-icon name="arrow-down" size="15" />
      </div>-->
    </div>
    <div class="actor">演职人员</div>

    <div class="actors-list">
      <ul class="row-scroll-items-nav">
        <li v-for="(m,i) in film.actors" :key="i">
          <img :src="m.avatarAddress" alt  />
          <p class="one" style="font-size:12px;color: #191a1b">{{m.name}}</p>
          <p class="two">{{m.role}}</p>
        </li>
      </ul>
    </div>
    <div class="photos-title-bar">
      <span>剧照</span>
    </div>
    <div class="photos-list">
      <ul class="row-scroll-items-nav img">
        <li v-for="(m,i) in film.photos" :key="i" >
          <img :src="m" alt />
        </li>
      </ul>
    </div>
    <router-link :to="{name:'cinema'}">
      <van-button type="danger" class="goSchedule">选座购票</van-button>
    </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      film: {}
    };
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
.details {
  /* height: 3.72rem; */
  padding: 0.24rem 0.3rem 0.3rem;
  background: #fff;
  vertical-align: middle;
  margin-bottom: 10px;
}
.actor {
  width: 6.9rem;
  height: 0.6rem;
  padding: 0.3rem;
  font-size: 0.32rem;
  text-align: left;
  color: #191a1b;
  background: #fff;
}
.actors-list {
  height: 2.8rem;
  //   background: gray;
}
.photos-title-bar {
  height: 2rem;
}
.photos-list {
  height: 2.3rem;
}
.col {
  display: flex;
}
.film-name {
  width: 5rem;
  height: 0.5rem;
  text-align: left;
}
.name {
  font-size: 0.36rem;
  line-height: 0.5rem;
  margin-right: 7px;
  color: #191a1b;
}
.item {
  font-size: 0.18rem;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
  line-height: 0.28rem;
  height: 0.28rem;
  background-color: #d2d6dc;
  color: #fff;
}
.film-grade {
  width: 1.8rem;
  color: #ffb232;
  text-align: right;
}
.grade {
  font-size: 0.36rem;
  font-style: italic;
}
.grade-text {
  font-size: 0.2rem;
}
.film-premiere-time,
.film-nation-runtime,
.film-category {
  margin-top: 0.08rem;
  text-align: left;
}
.test {
  width: 6.9rem;
  position: absolute;
  opacity: 0;
  margin-left: -10000px;
}

// sssssssssss
.film-synopsis {
  transition: 2s;
  height: 0.72rem;
  overflow: hidden;
  margin-top: 0.24rem;

  text-align: left;
}
.showSynopsis {
  transition: 2s;
  height: auto;
  margin-top: 0.24rem;
  text-align: left;
}
.toggle {
  text-align: center;
  display: block;
  height: auto;
  width: 0.4rem;
  margin: auto;
  line-height: normal;
  margin-top: 15px;
}
.row-scroll-items-nav {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 0.3rem;
}

.goSchedule {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1rem;
  width: 100%;
  text-align: center;
  color: #fff;
  font-style: 0.32rem;
  line-height: 1rem;
  margin-top: 15px;
}
.row-scroll-items-nav {
  background-color: #fff;
  display: flex;
  overflow: scroll;
  padding-bottom: 15px;
  li {
    flex: 1;
    text-align: center;
    margin-right: 8px;
    img {
      margin-bottom: 15px;
      width: 85px;
      height: 85px;
    }
    .two {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 10px;
      color: #797d82;
    }
  }
}
.photos-title-bar {
  background: #fff;
  height: 62px;
  width: 100%;
  // margin: 15px 0;
  margin-top: 15px;
  text-align: left;
  vertical-align: top;
  span {
    font-size: 16px;
    color: #191a1b;
    padding: 15px;
  }
}
.photos-list {
  background: #fff;
  height: 145px;
  line-height: 18px;
  font-size: 14px;
  color: #bdc0c5;
  margin: auto;
  text-align: center;
}

.img{
  background-color: #fff;
  display: flex;
  overflow: scroll;
  padding-bottom: 15px;
  box-sizing: border-box;
  li {
    flex: 1;
    text-align: center;
    margin-right: 8px;
    img {
      // margin-bottom: 15px;
      width: 3rem;
      height: 2rem;
      // margin-bottom:15px; 
     
    }
  }
}
</style>
