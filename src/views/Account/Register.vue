<template>
  <div class="login ">
    <j-verfy-block v-if="isShowVerfy" :email="email" @handleBack="handleCancel" @confirm="handleConfirm" @sendAgin="handleAgin"></j-verfy-block>

    <div v-if="!isShowVerfy" class="login-block fadeIn">
      <div class="title">
        {{$t('login.title')}}
      </div>
      <div class="register-type">
        <span>{{$t('register.type')}}</span>
      </div>
      <div>
        <input class="input-block" type="email" v-model="email" :placeholder="$t('register.email_placeholder')" />
      </div>
      <div>
        <input class="input-block" type="password" v-model="password" :placeholder="$t('login.password_placeholder')" />
      </div>
      <div>
        <input class="input-block" type="password" v-model="re_password" :placeholder="$t('login.repassword_placeholder')" />
      </div>
      <div>
        <input class="input-block" type="text" v-model="invite_code" :placeholder="$t('login.invite_placeholder')" />
      </div>
      <div class="checkbox-row">
        <v-checkbox
            v-model="checkbox"
        ></v-checkbox>
        <span>{{$t('register.agree')}}</span>
        <router-link style="cursor:pointer;color: #638FFE;" to="/web/register" tag="span">
          {{$t('register.agreement')}}
        </router-link>
      </div>
      <div class="login-btn" @click="handleSubmit">
        {{$t('register.register')}}
      </div>
      <div class="login-bottom">
        <div class="left">
          <span style="color: #999;">{{$t('register.haveAccount')}}</span> <router-link style="cursor:pointer;" to="/web/login" tag="span">
          {{$t('register.login')}}
        </router-link>
        </div>

      </div>


    </div>
    <v-dialog
        v-model="isRegister"
        persistent
        max-width="450"
    >
      <v-card>
<div class="dialog-block">
      <span class="close"> <v-icon
          size="11"
          color="#999"
      >
      mdi-close
    </v-icon></span>
    <div class="success-rgs">
      <v-img width="133" height="103" src="@/assets/images/account/register_success.png" ></v-img>
    </div>
    <div class="suc-title">
      {{$t('register.success')}}
    </div>
  <div class="aotu-jump">
    <span style="color: #3078FF">{{go_interval}}S</span>{{$t('register.jump_home')}}
  </div>
</div>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Repassword",
  data(){
    return{
      isRegister:false,
      isShowVerfy:false,
      email:'',
      password:'',
      re_password:'',
      test_email:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
      invite_code:'',
      checkbox:false,
      timer:null,
      go_interval:5
    }
  },
  methods:{
    handleAgin(){
      //再次发送验证码

    },
    handleConfirm(){
      this.isRegister = true;
      this.goHome();

    },
    handleCancel(){
      this.isShowVerfy = false;
    },
    goHome(){
      this.timer = setInterval(()=>{
        this.go_interval--;
        if(this.go_interval <=0){
          clearInterval(this.timer);
          this.timer = null;
          this.isRegister = false;
          this.$router.replace('/');
          this.go_interval = 5;
        }
      },1000)
    },
    verfySuccess(){
      let t=  {title: this.$t('prompts.success[0]'), message: this.$t('prompts.success[1]')
        , type: 'success', timeout: 3000};
      this.showLoginError(t);
      this.isShowVerfy = true;
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
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[6]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      if(this.re_password==''){
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[7]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      if(this.password!=this.re_password){
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[8]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      if(this.invite_code==''){
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[9]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      if(!this.checkbox){
        let t=  {title: this.$t('prompts.error[0]'), message: this.$t('prompts.error[10]')
          , type: 'error', timeout: 3000};
        this.showLoginError(t);
        return;
      }
      this.verfySuccess();
    }
  },
  notifications: {
    showLoginError: {
      title: 'Login Failed',
      message: 'Failed to authenticate',
      type: 'error' // You also can use 'VueNotifications.types.error' instead of 'error'
    }
  }
}
</script>

<style scoped lang="scss">
.login{
  height: 100%;
  width: 100%;
  background-color: #1C2437;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-block{
    width: 567px;
    height: 620px;
    border-radius: 8px;
    background-color: #fff;

    box-sizing: border-box;
    padding:  55px 47px 51px 48px;
    .title{
      font-size: 32px;
      text-align: center;
      color: #333;
      font-weight: 800;
      margin-bottom: 45px;


    }
  }

  .input-block{
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
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #3078FF;
  }
}
.register-type{
  font-size: 16px;
  color: #3078FF;
  font-weight: 600;
  padding-bottom: 14px;
  border-bottom: 1px solid #eee;
margin-bottom: 14px;
  span{
    padding-bottom: 14px;
    border-bottom: 2px solid #3078FF;
  }
}
.checkbox-row{
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #333333;
}
.dialog-block{
  width: 450px;
  height: 286px;
  border-radius: 10px;
  position: relative;
  padding-top: 55px;
  .close{
    cursor: pointer;
    position: absolute;
    top: 14px;
    right: 11px;
  }
  .success-rgs{
    width: 133px;
    height: 103px;
    margin: 0 auto;
    margin-bottom: 28px;
  }
  .suc-title{
    text-align: center;
    color: #333;
    font-style: 16px;
    font-weight: 600;
    margin-bottom: 13px;
  }
  .aotu-jump{
    text-align: center;
    font-size: 14px;
    color: #999;
  }
}
</style>