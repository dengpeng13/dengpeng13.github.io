<template>
  <div>
    <p class="city" @click="gocity">
      <span>{{cityInfo.name}}</span>
    </p>
    <div class="one">
      <Head></Head>
    </div>
    <div class="two">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value" :options="option1" @change="changeArea" />
        <van-dropdown-item v-model="value2" :options="option2" />

        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
      <!-- <p
        v-for="(f,i) in d"
        :key="i"
        
      >{{f.districtId}}
      {{f.districtName}}</p>-->
    </div>

    <div class="pad">
      <div class="pad-a" v-for="(m,i) in d" :key="i"  @click="gogoumai({cinemaId:m.cinemaId})">
        <p class="pad-b">
          <span class="spn1">{{m.name}}</span>
          <span class="spn2">{{m.address}}</span>
        </p>
        <p class="pad-d">
          <span class="spnb">¥{{(m.lowPrice*0.01).toFixed(1)}}起</span>

          <span class="spnd">距离未知</span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Head from "@/components/Head.vue";
export default {
  data() {
    return {
      d: [],
      cityName: "",

      value: 0,
      value2: "a",
      value3: "a",
      option1: [{ text: "全部", value: 0 }],
      // option: [
      //   { text: "全城", value: 0 },
      //   { text: "新款商品", value: 1 },
      //   { text: "活动商品", value: 2 }
      // ],
      option2: [
        { text: "APP订票", value: "a" },
        { text: "前台兑换", value: "b" }
      ],
      option3: [
        { text: "最近去过", value: "a" },
        { text: "离我最近", value: "b" }
      ]
    };
  },
  components: {
    Head
  },
  computed: {
    ...mapState(["cityInfo", "cinema"])
  },
  methods: {
    gocity() {
      this.$router.push({ name: "city" });
    },
    gogoumai(cinemaId) {
      // this.$router.push({ name: "goumai" });
        this.$router.push({ name: "goumai", query: cinemaId });
    },
    changeArea(val) {
      // var word = this.option1[val].text;

      // this.getCinemanew({
      //   url: `/vue/maizuo/d`

      // });
      console.log(this.option1[val].text);
      var word = this.option1[val].text;
      this.$axios.get(`/vue/maizuo/d1?districtName=${word}`).then(res => {
        this.d = res.data.result;
      });
    }
  },

  mounted() {
    this.$axios.get("/vue/maizuo/d").then(res => {
      this.$nextTick(() => {
        var list = [];
        var count = 1;
        console.log(res);
        this.d = res.data.result;
        console.log(this.cinema);
        res.data.result.forEach(item => {
          var obj = {};
          if (!list.includes(item.districtName)) {
            list.push(item.districtName);
            obj["text"] = item.districtName;
            obj["value"] = count;
            count++;
            this.option1.push(obj);
          }
        });
        // console.log(this.option1);
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.two {
  width: 100%;
  height: 1rem;
  // display: flex;
}
.pad {
  width: 100%;
  overflow: hidden;
  .pad-a {
    width: 100%;
    height: 1.5rem;
    padding: 15px;
    box-sizing: border-box;
    .pad-b {
      width: 5.2rem;
      height: 1rem;
      float: left;
      .spn1 {
        display: inline-block;
        margin-bottom: 6px;
      }
      .spn2 {
        display: inline-block;
        width: 100%;
        word-break: keep-all; /* 不换行 */
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        text-overflow: ellipsis;
        color: #797d82;
        font-size: 12px;
      }
    }
    .pad-d {
      width: 1.2rem;
      height: 1rem;
      float: right;
      .spnb {
        color: #ff5f16;
      }
      .spnd {
        display: inline-block;
        font-size: 12px;
        color: #797d82;
      }
    }
  }
}
.city {
  position: absolute;
  top: 10px;
  left: 7px;
  color: black;
  z-index: 10;
  font-size: 14px;

  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
</style>