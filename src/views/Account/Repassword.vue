<template>
  <div class="login">


      <j-verfy-block v-if="isShowVerfy" :email="email" @handleBack="handleCancel" @sendAgin="handleAgin"></j-verfy-block>

    <div v-if="!isShowVerfy" class="login-block fadeIn">
      <div class="title">
        {{$t('repassword.title')}}
      </div>
      <div class="input-block">
        <label>{{$t('repassword.email')}}</label>
        <input  type="email" v-model="email" :placeholder="$t('repassword.email_placeholder')" />
      </div>
      <div class="input-block">
        <label>{{$t('repassword.new_password')}}</label>
        <input  :type="current_pwd" v-model="password" :placeholder="$t('repassword.password_placeholder')" />
        <span class="see-icon" @click="handleCurrentPwd" v-if="current_pwd=='password'">
           <v-icon color="#999">mdi-eye-outline</v-icon>
        </span>
        <span class="see-icon" @click="handleCurrentPwd" v-if="current_pwd=='text'">
           <v-icon color="#999">mdi-eye-off-outline</v-icon>
        </span>
      </div>
      <div class="input-block">
        <label>{{$t('repassword.re_password')}}</label>
        <input  :type="current_pwd" v-model="re_password" :placeholder="$t('repassword.repassword_placeholder')" />
        <span class="see-icon" @click="handleCurrentPwd" v-if="current_pwd=='password'">
           <v-icon color="#999">mdi-eye-outline</v-icon>
        </span>
        <span class="see-icon" @click="handleCurrentPwd" v-if="current_pwd=='text'">
           <v-icon color="#999">mdi-eye-off-outline</v-icon>
        </span>
      </div>
      <div class="tips">
        {{$t('repassword.tips')}}
      </div>
      <div class="login-btn" @click="handleSubmit">
        {{$t('repassword.send_verfy')}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Repassword",
  data(){
    return{
      email:'',
      password:'',
      re_password: '',
      current_pwd:'password',
      test_email:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
      isShowVerfy:false,
    }
  },
  methods:{
    handleAgin(){
      //再次发送验证码

    },
    handleCurrentPwd(){
      if(this.current_pwd == 'password'){
        this.current_pwd = 'text';
      }else{
        this.current_pwd = 'password';

      }
    },
    handleSubmit(){
      if(this.email==''){
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[1]')
              , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      if(!this.test_email.test(this.email)){
        console.log(this.test_email.test(this.email))
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[2]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }

      if(this.password==''){
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[3]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      if(this.re_password==''){
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[4]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      if(this.password!=this.re_password){
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[5]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      this.verfySuccess();

    },
    verfySuccess(){
      let t=  {title: this.$t('prompts.success[0]'), message: this.$t('prompts.success[1]')
        , type: 'success', timeout: 3000};
      this.showLoginError(t);
      this.isShowVerfy = true;
    },
    handleCancel(e){
      this.isShowVerfy = false;
    },
  },
  notifications: {
    showLoginError: {
      // title: 'Login Failed',
      // message: 'Failed to authenticate',
      // type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  }
}
</script>

<style scoped lang="scss">
.login{
  height: 100%;
  width: 100%;
  background-color: #1C2437;
  //position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-block{
    width: 567px;
    height: 450px;
    border-radius: 8px;
    background-color: #fff;
    //position: absolute;
    //top: 50%;
    //left: 50%;
    //transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding:  45px 48px 42px 48px;
    .title{
      font-size: 32px;
      text-align: center;
      color: #333;
      font-weight: 800;
      margin-bottom: 50px;


    }
  }
  .input-block{
    height: 50px;
    width: 100%;
    position: relative;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    margin-bottom: 13px;
    padding-left: 18px;
    font-size: 14px;
    outline: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label{
      color: #333;
      font-size: 14px;
      font-weight: bold;
    }
    input{
      height: 50px;
      width: 351px;
      outline: transparent;
    }
    .see-icon{
      position: absolute;
      right: 17px;
      top: 50%;
      transform: translate(0,-50%);
      cursor: pointer;
    }
  }
  ::placeholder{
    font-size: 14px;
    font-weight: 500;
    color: #B3B3B3;
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
.tips{
  font-size: 12px;
  color: #999;
  text-align: center;
  margin: 30px auto 10px;
}
</style>