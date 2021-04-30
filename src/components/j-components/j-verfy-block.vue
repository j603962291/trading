<template>
  <div  class="verfy-block fadelogIn">
    <div class="title">
      {{$t('verfy.safe')}}
    </div>
    <div class="email-row">
      {{$t('verfy.input')}}<span >{{email}}</span>{{$t('verfy.verfy_code')}}
    </div>
    <div class="send-row" v-if="!send_agin">
      {{$t('verfy.no_get')}}<span style="color: #3078FF;">{{send_interval}}S</span>{{$t('verfy.agin_send')}}
    </div>
    <div class="send-row" v-if="send_agin" >
      <span style="color: #3078FF;cursor: pointer;" @click="handleSendAgin">{{$t('verfy.agin')}}</span>
    </div>
          <div class="input-block">
            <label>{{$t('verfy.label')}}</label>
            <input  type="text" v-model="verfy_code" :placeholder="$t('verfy.placeholder')" />
          </div>
          <div class="login-btn" @click="handleConfirm">
            {{$t('verfy.confirm')}}
          </div>
    <div class="center" @click="handleBack">
      <span style="text-align: center;color: #999;font-size: 14px;cursor: pointer;">{{$t('verfy.cancel')}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      send_interval:60,
      timer:null,
      verfy_code:'',
      send_agin:false,

    }
  },
  mounted() {
    this.handleInterval();
  },
  props:{
    email:{
      type:String,
      default:'',
    }
  },
  methods:{
    handleSendAgin(){
      //发送ajax
      this.$emit('sendAgin');
      this.handleInterval();
    },
    handleInterval(){
      this.send_agin = false;
      this.timer = setInterval(()=>{
        this.send_interval--;
        if(this.send_interval <=0){
          clearInterval(this.timer);
          this.timer = null;
          this.send_interval = 60;
          this.send_agin = true;
        }
      },1000)

    },
    handleConfirm(){
      this.$emit('confirm')
    },
    handleBack(){
      this.$emit('handleBack');
    }
  }
}
</script>

<style scoped lang="scss">
.verfy-block{
  width: 483px;
  height: 358px;
  border-radius: 8px;
  background-color: #fff;
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%,-50%);
  box-sizing: border-box;
  padding:  45px 40px 41px 40px;
  .title{
    font-size: 26px;
    text-align: center;
    color: #333;
    font-weight: 800;
    margin-bottom: 25px;
  }
  .input-block{
    height: 50px;
    width: 100%;
    position: relative;
    border: 1px solid #EEEEEE;
    border-radius: 5px;
    margin-bottom: 14px;
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
      margin-right: 25px;
    }
    input{
      height: 50px;
      width: 288px;
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
  .email-row{
    color: #333;
    font-size: 14px;
    text-align: center;
    margin-bottom: 9px;
  }
  .send-row{
    color: #999;
    font-size: 12px;
    text-align: center;
    margin-bottom: 35px;
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
    font-size: 16px;
    color: #fff;
    font-weight: 800;
    margin-bottom: 12px;
  }
}
</style>