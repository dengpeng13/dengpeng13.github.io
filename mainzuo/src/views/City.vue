<template>
  <div>
    <div class="big">
      <van-nav-bar title="我的资料" left-arrow @click-left="goback"></van-nav-bar>
      <div class="ipn">
        <div class="ipn-x">
          <span class="iconfont icon-weibiaoti-"></span>
          <input type="text" v-model="val" />
        </div>
      </div>

      <p v-if="flag">
        <van-cell-group v-if="val!==''">
          <van-cell v-for="(k,i) in kcity" :key="i" :value="k.name" @click="gocinema(ct)" />
        </van-cell-group>
      </p>
      <van-index-bar v-if="flag">
        <div v-for="(n,j) in host" :key="j">
          <van-index-anchor :index="n" />
          <div v-for="(city,i) in citylist" :key="i">
            <van-cell
              v-if="city.pinyin.toUpperCase().slice(0,1)==n"
              :title="city.name"
              @click="gocity(city)"
            />
          </div>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    // keyword: {
    //   get() {
    //     return this.$store.state.keyword;
    //   },
    //   set(newVal) {
    //     console.log(newVal);
    //   }
    // },
    ...mapState(["citylist"])
  },
  watch: {
    val(newVal, oldVal) {
      //监听数据val   时时请求用户查询数据
      var timer = null;
      clearInterval(timer);
      timer = setInterval(() => {
        //防抖节流
        clearInterval(timer);
        this.$axios.get(`/vue/maizuo/c?keyword=${newVal}`).then(res => {
          this.kcity = res.data.result;
          // this.val=newVal;
          console.log(this.kcity);
        });
      }, 1000);
    }
  },

  data() {
    return {
      flag: true,
      kcity: [],
      val: "",
      host: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  methods: {
    ...mapActions(["getCityListAsync"]),
    goback() {
      this.$router.go(-1);
    },
    ...mapMutations(["changCityinfo"]),
    gocity(city) {
      this.changCityinfo(city);

      this.$router.push({ name: "cinema" });
    },
    gocinema(ct) {
      // this.changCityinfo(ct);
      // this.$router.push({ name: "city" });
    }
  },
  mounted() {
    if (!this.citylist.length > 0) {
      this.getCityListAsync({
        url: "/vue/maizuo/c"
      });
    }

    // this.$axios.get("/vue/maizuo/c").then(res => {
    //   this.$nextTick(() => {
    //     // console.log(res);
    //     this.c = res.data.result;
    //   });
    // });
  }
};
</script>



<style lang="scss" scoped>
.big {
  width: 100%;
  background: #f4f4f4;
  .ipn-x {
    background: white;
  }
  .ipn {
    width: 100%;
    height: 1rem;
    position: relative;
    .ipn-x {
      width: 7rem;
      height: 0.6rem;
      background: white;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      .iconfont {
        width: 0.44rem;
        height: 0.6rem;
        text-align: center;
        line-height: 0.6rem;
        font-size: 20px;
        margin-left: 5px;
      }
      input {
        width: 5.6rem;
        height: 0.6rem;
        border: 0;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
    }
  }
}
</style>






