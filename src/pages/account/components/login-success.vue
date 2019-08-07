<template>
    <div class="login-success">
      <div class="login-user">
        <img :src="data.avatarUrl" />
        <p>欢迎您, <span style="color:#eb1e1c">{{ data.nickname }}</span></p>
      </div>
      <div class="login-btn">
        <van-button round type="danger" @click="loginOut">退出登录</van-button>
      </div>
    </div>
</template>

<script>
export default {
    name: "login-success",
    props:{
      data:{
        type:Object,
        default: () => {}
      }
    },
    data() {
      return {
      }
    },
    methods: {
      loginOut() {
        this.$request.get({
          url: `/login/status`,
        }).then(res => {
            this.$emit('loginOut')
        })
      }
    }
}
</script>

<style lang="scss">
  .login-success{
    .login-user{
      position: absolute;
      display: flex;
      flex-direction:column;
      align-items: center;
      left:50%;
      top:35%;
      transform: translate(-50%,-50%);
      width:80%;
      img{
        margin-bottom:20px;
        border-radius: 50%;
        height:80px;
        width:80px;
      }
    }
    .login-btn{
      position: absolute;
      top:70%;
      width:100%;
      text-align: center;
      .van-button{
        background-color: $color-primary;
        width:80%;
      }
    }
  }

</style>
