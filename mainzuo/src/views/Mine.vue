<template>
  <div>
    <div class="big">
      <div class="top">
        <p class="imgs" @click="gouser">
          <img :src="pic" alt />
        </p>
        <p  class="lo">{{userinfo.mobile}}</p>
        <!-- <p @click="gologin" class="lo" v-else>马上登入</p> -->
      </div>
      <div class="center">
        <ul>
          <li>
            <img src="../assets/images/bb.png" alt />
            <span>电影订单</span>
          </li>
          <li>
            <img src="../assets/images/cc.png" alt />
            <span>商品订单</span>
          </li>
        </ul>
      </div>

      <div class="bottom">
        <p>
          <span class="iconfont icon-yingyuan"></span>
          <span class="po">卖座卷</span>
          <span class="right">></span>
        </p>
        <p>
          <span class="iconfont icon-hongbao_huabanfuben"></span>
          <span class="po">组合红包</span>
          <span class="right">></span>
        </p>
        <p>
          <span class="iconfont icon-yue"></span>
          <span class="a">¥</span>
          <span class="b">0</span>
          <span class="po">余额</span>
          <span class="right">></span>
        </p>
        <p @click="goset">
          <span class="iconfont icon-xianxingtubiao_huabanfuben"></span>
          <span class="po">设置</span>
          <span class="right">></span>
        </p>
      </div>
    </div>
  </div>
</template>



<script>
import initPic from "@/assets/images/photo.png";
import Uploadimg from "@/components/Uploadimg.vue";
import { baseURL } from "@/utils";
export default {
  name: "guide",
  data() {
    return {
      userinfo: {},
      pic: initPic
    };
  },
  mounted() {
    var userInfo = localStorage.userInfo;
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      if (userInfo.mobile == sessionStorage.mobile) {
        // this.pic = userInfo.pic;
        //  this.getServerPic();
      } else {
        this.getServerPic();
      }
    } else {
      // this.getServerPic();
    }
    this.$axios.get("/vue/getInfo").then(res => {
      if (res.data.code == 200) {
        this.userinfo = res.data.result;
      }
    });
  },
  methods: {
    gologin() {
      this.$router.push({ name: "login" });
    },
    gouser() {
      this.$router.push({ name: "user" });
    },
    goset() {
      this.$router.push({ name: "set" });
    },
    getServerPic() {
      this.$axios.post("/vue/getAvatarImg").then(res => {
        if (!!res.data.type) {
          this.pic = res.data.result.pic.replace(/public/, baseURL);
        } else {
          this.pic = initPic;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.big {
  width: 100%;
  height: 100vh;

  background: #f5f5f5;

  .top {
    width: 100%;
    height: 3.4rem;
    position: relative;
    background: url("../assets/images/dd.jpg");
    .imgs {
      width: 1.3rem;
      height: 1.3rem;
      border: 1px solid red;
      border-radius: 50%;
      float: left;
      position: absolute;
      top: 1.2rem;
      left: 1rem;
      img {
        width: 1.3rem;
        height: 1.3rem;
        border: 1px solid red;
        border-radius: 50%;
      }
    }
    .lo {
      float: left;
      margin-left: 2.6rem;
      margin-top: 1.6rem;
      font-weight: 600;
      font-size: 18px;
    }
  }
  .center {
    width: 100%;
    height: 1.6rem;
    background: white;
    margin-bottom: 10px;
    ul {
      width: 100%;
      display: flex;
      height: 1.6rem;
      li {
        flex: 1;
        text-align: center;
        // line-height: 1.6rem;
        height: 1rem;
        margin-top: 15px;
        position: relative;
        img {
          width: 0.5rem;
          height: 0.5rem;
          // display: inline-block;
          margin-left: 1.6rem;
        }
        span {
          // position: absolute;
          // left: 1.2rem;
          // top: 0rem;
          display: inline-block;
          text-align: center;
          //   display: inline-block;
          //  margin-left: 1.2rem;
          //  display: inline;
          //  margin-bottom: -1rem;
        }
      }
    }
    // z-index: 6;
  }
  .bottom {
    width: 100%;

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
}
</style>