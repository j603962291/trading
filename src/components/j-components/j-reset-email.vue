<template>
  <div class="login-block ">
    <span class="close-icon" @click="handleClose">
      <v-icon size="11" color="#999">mdi-close</v-icon>
    </span>
    <div class="title">
      {{$t('Safe.dialog.titles[2]')}}
    </div>
    <div class="input-block">
      <label>{{$t('Safe.dialog.labels[0]')}}</label>
      <input  type="email" v-model="email" :placeholder="$t('Safe.dialog.placeholders[3]')" />
    </div>
    <div class="input-block">
      <label>{{$t('Safe.dialog.labels[1]')}}</label>
      <input  :type="current_pwd" v-model="password" :placeholder="$t('Safe.dialog.placeholders[4]')" />
      <div class="verfy-btn">
        {{$t('Safe.dialog.get')}}
      </div>
    </div>

    <div class="input-block">
      <label>{{$t('Safe.dialog.labels[2]')}}</label>
      <input  :type="current_pwd" v-model="re_password" :placeholder="$t('Safe.dialog.placeholders[5]')" />
      <div class="verfy-btn">
        {{$t('Safe.dialog.get')}}
      </div>
    </div>

    <div class="login-btn" @click="handleSubmit">
      {{$t('Safe.dialog.confirm')}}
    </div>
  </div>
</template>

<script>
export default {
  name: "j-rest-login-pwd",
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
    handleClose(){
      this.$emit('close');
    }
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
.login-block{
  width: 450px;
  height: 410px;
  border-radius: 8px;
  background-color: #fff;
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%,-50%);
  box-sizing: border-box;
  padding: 44px 41px;
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
  padding-left: 14px;
  font-size: 14px;
  outline: transparent;
  display: flex;
  //justify-content: space-between;
  align-items: center;
  label{
    color: #333;
    font-size: 14px;
    font-weight: bold;
    width: 85px;
    margin-right: 20px;
  }
  input{
    height: 50px;
    width: 150px;
    outline: transparent;
  }
  .verfy-btn{
    padding: 0 17px;
    font-size: 14px;
    color: #3078FF;
    height: 48px;
    line-height: 48px;
    display: inline-block;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
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
.close-icon{
  position: absolute;
  top: 14px;
  right: 11px;
  cursor: pointer;
}
</style>