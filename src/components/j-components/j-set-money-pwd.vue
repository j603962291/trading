<template>
  <div class="login-block">
    <span class="close-icon" @click="handleClose">
      <v-icon size="11" color="#999">mdi-close</v-icon>
    </span>
    <div class="title">
      {{$t('Safe.dialog.titles[1]')}}
    </div>
    <div class="subtitle">
      {{$t('Safe.dialog.subtitles[1]')}}
    </div>

    <div class="input-block">
      <label>{{$t('Safe.dialog.new_pwd')}}</label>
      <input  :type="current_pwd2" v-model="password" :placeholder="$t('Safe.dialog.placeholders[1]')" />
      <div class="input-tips">
        {{new_tip}}
      </div>
      <span class="see-icon" @click="handleCurrentPwd(2)" v-if="current_pwd2=='password'">
           <v-icon color="#999">mdi-eye-outline</v-icon>
        </span>
      <span class="see-icon" @click="handleCurrentPwd(2)" v-if="current_pwd2=='text'">
           <v-icon color="#999">mdi-eye-off-outline</v-icon>
        </span>
    </div>
    <div class="input-block">
      <label>{{$t('Safe.dialog.re_pwd')}}</label>
      <input  :type="current_pwd3" v-model="re_password" :placeholder="$t('Safe.dialog.placeholders[2]')" />
      <div class="input-tips">
        {{re_tip}}
      </div>
      <span class="see-icon" @click="handleCurrentPwd(3)" v-if="current_pwd3=='password'">
           <v-icon color="#999">mdi-eye-outline</v-icon>
        </span>
      <span class="see-icon" @click="handleCurrentPwd(3)" v-if="current_pwd3=='text'">
           <v-icon color="#999">mdi-eye-off-outline</v-icon>
        </span>
    </div>
    <div class="login-btn" @click="handleSubmit">
      {{$t('Safe.dialog.confirm')}}
    </div>
    <div class="foget-pwd" @click="handleForget">
      {{$t('Safe.dialog.forget_pwd')}}
    </div>

  </div>
</template>

<script>
export default {
  name: "j-rest-login-pwd",
  data(){
    return{
      old_password:'',
      password:'',
      re_password: '',
      current_pwd1:'password',
      current_pwd2:'password',
      current_pwd3:'password',
      isShowVerfy:false,
      old_tip:'旧密码错误',
      new_tip:'包含字母、数字且长度在8-20位的密码',
      re_tip:'新密码2次输入不一样',
    }
  },
  methods:{
    handleAgin(){
      //再次发送验证码

    },
    handleForget(){
      this.$emit('forget');
    },
    handleCurrentPwd(e){
      switch (e){
        case 1:
          if(this.current_pwd1 == 'password'){
            this.current_pwd1 = 'text';
          }else{
            this.current_pwd1 = 'password';

          }
          break;
        case 2:
          if(this.current_pwd2 == 'password'){
            this.current_pwd2 = 'text';
          }else{
            this.current_pwd2 = 'password';

          }
          break;
        case 3:
          if(this.current_pwd3 == 'password'){
            this.current_pwd3 = 'text';
          }else{
            this.current_pwd3 = 'password';

          }
          break;
      }
    },
    handleSubmit(){


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
  position: relative;
  width: 450px;
  height: 400px;
  border-radius: 10px;
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
    margin-bottom:15px;
  }
  .subtitle{
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-bottom: 40px;
  }
}
.input-block{
  height: 50px;
  width: 100%;
  position: relative;
  border: 1px solid #EEEEEE;
  border-radius: 5px;
  margin-bottom: 13px;
  padding-left: 16px;
  font-size: 14px;
  outline: transparent;
  display: flex;
  //justify-content: center;
  align-items: center;
  label{
    color: #333;
    font-size: 14px;
    font-weight: bold;
    width: 70px;
    margin-right: 5px;
  }
  input{
    height: 50px;
    width: 111px;
    outline: transparent;
    margin-right: 5px;
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
  .input-tips{
    width: 110px;
    font-size: 12px;
    color: #FF7575;
    text-align: right;
    height: 28px;
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
.foget-pwd{
  font-size: 12px;
  color: #3078FF;
  text-align: center;
  cursor: pointer;
}
.login-bottom{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #3078FF;
}
.tips{
  font-size: 12px;
  color: #999;
  text-align: center;
  margin: 30px auto 10px;
}
.close-icon{
  position: absolute;
  top: 14px;
  right: 11px;
  cursor: pointer;
}
</style>