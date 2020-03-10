<template>
  <div>

    <div class="pinrun">
      <p>电影评论</p>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(m,i) in shangyin" :key="i">
        <img :src="m.poster" alt class="g-img" />
      
      </van-swipe-item>
    </van-swipe>
  
 
        <div class="big" v-for="(m,index) in shangyin" :key="index"  @click=" gofilm({filmId:m.filmId})" >
          <div  class="bigbox">
        
            <div class="small">
              <p class="user">
                <span>{{m.name}}</span>
                <span v-for="(m,i) in m.filmType" :key="i" class="dd">{{m.name}}</span>
              </p>
              <p class="center">
                <span v-if="m.grade?m.grade:''">
                  观众评分:
                  <span class="ping">{{m.grade}}</span> 分
                </span>
              </p>

              <p class="actor">
                <span v-for="(item,index) in m.actors" :key="index">{{item.name}}</span>
              </p>
              <p class="zui">
                <span>{{m.synopsis}}</span>
              </p>
              <p class="gou" @click="gocinema">
                    <img :src="m.poster" class="imgs"/>
              </p>
            </div>
          </div>
        </div>
   
     
  
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["cityInfo", "jijinag"])
  },
  data() {
    return {
      imgs: [
        require("@/assets/images/m1.jpg"),
        require("@/assets/images/m2.jpg")
      ],
      shangyin: [],
      // jijinag: [],

      active: 0
    };
  },
  methods: {
    gocity() {
      this.$router.push({ name: "city" });
    },
    gocinema() {
      this.$router.push({ name: "cinema" });
    },
    gofilm(filmId) {
      this.$router.push({ name: "pinrun", query: filmId });
      // console.log(this.jijiang)
    },
    ...mapActions([ "getJijiang"])
  },
  mounted() {
  

    this.getJijiang({
      url: "/vue/maizuo/jijiang"
    });
    this.$axios.get("/vue/maizuo/shangyin").then(res => {
      this.$nextTick(() => {
        // console.log(res);
        this.shangyin = res.data.result;
      });
    });
  
  }
};
</script>



<style lang="scss" scoped>
.g-img {
  width: 100%;
  height: 4.2rem;
}
.pinrun{
  width: 100%;
  height: 0.5rem;
  text-align: center;line-height: 0.5rem;
}
.city {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
.big {
  width: 100%;
  overflow: hidden;
  .bigbox {
    width: 6.8rem;
    height: 1.8rem;
    margin: 15px auto;
    position: relative;
    .imgs {
      width: 1.3rem;
      height: 1.8rem;

      float: left;
    }
    .small {
      width: 4.5rem;
      height: 100%;
      float: left;
      padding: 5px 10px;
      box-sizing: border-box;

      .user {
        width: 100%;
        .dd {
          font-size: 12px;
          width: 17px;
          height: 14px;
          background: #d2d6dc;
          color: white;
          text-align: center;
          margin-left: 5px;
        }
      }
      .center {
        width: 100%;
        span {
          font-size: 13px;
          color: #797d82;
          .ping {
            color: #ff5f16;
          }
        }
      }
      .actor {
        width: 100%;
        font-size: 14px;
        width: 100%;
        word-break: keep-all; /* 不换行 */
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis;
        span {
          margin-right: 5px;
          color: #797d82;
        }
      }
      .zui {
       width: 100%;
        word-break: keep-all; /* 不换行 */
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis;
        span {
          font-size: 13px;
          color: #797d82;
        }
      }
      .gou {
        width: 1rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.5rem;
        position: absolute;
        right: 0.2rem;
        top: 0;
    
        font-weight: 200;
      }
    }
  }
}
</style>