<template>
  <div>
    <div class="account-cloud" v-if="showComponent === 1">
        <div class="account-cloud-div">
          <img src="cloud://dev-hu-gd3p3.6465-dev-hu-gd3p3/logo.png" class="account-cloud-logo"/>
        </div>

        <div class="login-btn">
          <van-button plain round type="danger" @click="handleLoginIndex">手机号登录</van-button>
        </div>
    </div>


    <div v-if="showComponent === 2">
        <login @jumpSuccess="jumpSuccess"></login>
    </div>
    <div v-if="showComponent === 3">
      <login-success
        :data="accountData"
        @loginOut="loginOut">
      </login-success>
    </div>
  </div>
</template>

<script>
  import Login from './components/login'
  import LoginSuccess from './components/Login-success'
  export default {
    name:'index',
    components:{
      Login,
      LoginSuccess
    },
    data() {
      return {
        showComponent: 1,
        accountData:null
      }
    },
    mounted() {

    },
    methods: {
      handleLoginIndex() {
        this.showComponent = 2
      },
      jumpSuccess(data) {
        this.accountData = data
        this.showComponent = 3
      },
      loginOut() {
        this.accountData = null
        this.showComponent = 1
      }
    }
  }
</script>

<style lang="scss">
  .account-cloud{
    background-color: $color-primary;
    height: 100vh;
    left:0px;
    top:0px;
    position: static;
    z-index:-1;
    .login-title{
      text-align: center;
    }
    .account-cloud-div{
      width:84px;
      height:84px;
      position: absolute;
      top:30%;
      left:50%;
      background-color: #fff;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border:1px solid $color-primary;
    }
    .account-cloud-logo{
      width:85px;
      height:85px;
      margin-left: -1px;
    }
    .login-btn{
      width:100%;
      text-align: center;
      position: absolute;
      top:75%;
      .van-button{
        width:80%;
      }
    }
  }
</style>
