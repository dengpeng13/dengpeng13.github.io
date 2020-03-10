<template>
  <div>
    <button @click="goback" class="btn">返回</button>

    <div class="logo-box">
      <img src="../assets/images/logo.png" alt class="logo" />
    </div>
    <van-tabs v-model="active" title-active-color="#0f0">
      <van-tab title="登入">
        <van-cell-group>
          <van-field
            v-model="login.mobile"
            required
            clearable
            label="手机号"
            right-icon="question-o"
            placeholder="请输入手机号"
          />

          <van-field
            v-model="login.password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
          <van-button @click="todoLogin" type="primary" size="large">立即登入</van-button>
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field v-model="register.mobile" required clearable label="手机号" placeholder="请输入手机号" />
          <van-field
            v-model="register.username"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"
          />
          <van-field v-model="register.password" required clearable label="密码" placeholder="请输入密码" />
          <van-field
            v-model="register.dbpwd"
            type="dbpwd"
            label="确认密码"
            placeholder="确认密码"
            required
          />
          <van-button @click="todoRegister" type="danger" size="large">立即注册</van-button>
        </van-cell-group>
      </van-tab>

      <van-tab title="验证码">
        <van-cell-group>
          <van-field v-model="moblie" clearable label="手机号" placeholder="请输入手机号" />
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
          <van-button type="info" size="large">校验登入</van-button>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>



<script>
export default {
  name: "login",
  mounted() {},
  data() {
    return {
      active: 0,
      login: {},
      register: {},
      moblie: "",
      sms: ""
    };
  },
  methods: {
    todoLogin() {
        

      this.$axios.post("/vue/login", this.login).then(res => {
        if (!!res.data.type) {
          this.$router.push({ name: "mine" });
          sessionStorage.token = res.data.token;
          sessionStorage.moblie = this.login.moblie;
        }
      });
    },
    todoRegister() {

      // if(this.moblie){

      // }
      this.$axios.post("/vue/register", this.register).then(res => {
        if (!!res.data.type) {
          this.active = 0;
          this.login.moblie = res.data.result[0].moblie;
        }
      });
    },
    goback() {
      this.$router.go(-1);
    },
 
    

  }
};
</script>


<style lang="scss" scoped>
.btn {
  background: white;
  border: 0;
  color: #ff5f16;
  font-size: 18px;
  font-weight: 700;
  margin: 5px 0 0 5px;
}
.logo-box {
  width: 100%;
  height: 4rem;
  position: relative;
  .logo {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>