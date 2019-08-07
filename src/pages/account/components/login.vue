<template>
    <div class="account-login">
      <van-toast id="van-toast" />
      <div class="login-title ">
          手机号登录
      </div>
      <van-cell-group>
        <van-field
          :value="username"
          required
          clearable
          @change="changeUserName"
          label="+86"
          placeholder="手机号码"
        />

        <van-field
          :value="password"
          type="password"
          label="密码"
          @change="changePwd"
          placeholder="请输入密码"
          required
          border="false"
        />
      </van-cell-group>


      <div class="login-btn">
        <van-button round type="danger" @click="handleLogin">立即登录</van-button>
      </div>
    </div>
</template>

<script>
  import Toast from '../../../../static/vant/toast/toast'
  export default {
    name: "login",
    data() {
      return {
        username:'',
        password:''
      }
    },
    methods: {
      changeUserName(event){
        this.username = event.mp.detail
      },
      changePwd(event){
        this.password = event.mp.detail
      },
      handleLogin() {
        // 登录
        this.$request.get({
          url: `/login/cellphone?phone=${this.username}&password=${this.password}`,
        }).then(res => {
          console.log(res)
          if(res.code === 200){
            Toast.success('登录成功')
            this.$emit('jumpSuccess',res.profile)
          }else{
            Toast.fail(res.msg)
          }
        })
      }
    }
}
</script>

<style lang="scss">
  .account-login{
    .login-title{
      width:100%;
      text-align:center;
      font-size: 16px;
      margin:20px 0;
    }
    .login-btn{
      margin-top:50px;
      width:100%;
      text-align: center;
      .van-button{
        background-color: $color-primary;
        width:80%;
      }
    }
  }
</style>
