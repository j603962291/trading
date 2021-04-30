<template>
  <div class="login">
    <div class="login-block">
      <div class="title">
        {{$t('login.title')}}
      </div>
  <div>
    <input id="account" type="text" v-model="account" :placeholder="$t('login.account_placeholder')" />
  </div>
  <div>
    <input id="password" type="password" v-model="password" :placeholder="$t('login.password_placeholder')" />
  </div>
    <div class="login-btn">
        {{$t('login.login')}}
    </div>
      <div class="login-bottom">
          <div class="left">
          <span style="color: #999;">{{$t('login.no_account')}}</span> <router-link style="cursor:pointer;" to="/web/register" tag="span">
            {{$t('login.register')}}
          </router-link>
          </div>
        <div class="right">
         <router-link style="cursor:pointer;" to="/web/repassword">
           {{$t('login.forget')}}
         </router-link>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "Repassword",
  data(){
    return{
      account:'',
      password:''
    }
  }
}
</script>

<style scoped lang="scss">
.login{
  height: 100%;
  width: 100%;
  background-color: #1C2437;
  position: relative;
  .login-block{
    width: 567px;
    height: 420px;
    border-radius: 8px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding:  55px 47px 51px 48px;
    .title{
      font-size: 32px;
      text-align: center;
      color: #333;
      font-weight: 800;
      margin-bottom: 50px;


    }
  }
  #account{
    height: 50px;
    width: 100%;
    background-color: #f3f5f9;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 14px;
    font-size: 14px;
    outline: transparent;
  }
  ::placeholder{
    font-size: 14px;
    font-weight: 500;
     color: #A9B1C0;
  }
#password{
  height: 50px;
  width: 100%;
  background-color: #f3f5f9;
  border-radius: 5px;
  padding-left: 14px;
font-size: 14px;
  outline: transparent;
  margin-bottom: 13px;

}
.login-btn{
  width: 100%;
  height: 50px;
  background-color: #3078FF;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  color: #fff;
font-weight: 800;
  margin-bottom: 23px;
}
  .login-bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #3078FF;
  }
}
</style>