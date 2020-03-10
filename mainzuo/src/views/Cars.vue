<template>
  <div>
    <van-nav-bar title="评论列表" left-arrow @click-left="goback" />

    <van-row type="flex" justify="space-between">
      <van-col span="24">
        <table class="tbs">
          <tr class="pp">
            <td>姓名</td>
            <td>标题</td>
            <td>内容</td>
            <td>操作</td>
          </tr>

          <tr v-for="(m,i) in film" :key="i">
            <td>{{userinfo.username}}</td>

            <td>叶问4</td>

            <td >{{film.message}}</td>
            <td class="lll">
              <van-button type="info" class="hh">修改</van-button>
              <van-button type="info"  class="hh">删除</van-button>
            </td>
          </tr>
        </table>
      </van-col>
    </van-row>
  </div>
</template>




<script>
export default {
  data() {
    return {
      film: {},
      userinfo: {}
    };
  },
  mounted() {
    this.$axios.get("/vue/cars").then(res => {
      this.film = res.data.result[0];
      console.log(this.film);
    });
    var userInfo = localStorage.userInfo;
    this.$axios.get("/vue/getInfo").then(res => {
      if (res.data.code == 200) {
        this.userinfo = res.data.result;
      }
    });
  },
  methods: {
    goback() {
      this.$router.push({ name: "zixu" });
    }
  },
  created() {}
};
</script>


<style lang="scss" scoped>
.tbs {
  width: 100%;
  overflow: hidden;
  .pp {
    width: 100%;
    td {
      width: 15px;
      height: 30px;
    }
  }
}
.lll{
//  padding-left: 15px;
 box-sizing: border-box;

}
td {
  width: 25px;
  border: 1px solid #000;
}
</style>