<template>
  <div class="safe-container">
    <ul>
      <li class="list-item">
        <div class="left">
          <div style="width: 44px;height: 44px;">
            <v-img width="44px" height="44px"  src="@/assets/images/safe/login_pwd.png" />
          </div>
          <div style="margin-left: 19px;">
            <div class="title">
              {{$t('Safe.titles[0]')}}<span style="margin-left: 7px;"><v-img width="17" height="17" src="@/assets/images/safe/success.png" /></span>
            </div>
            <div class="subtitle">{{$t('Safe.subtitles[0]')}}</div>
          </div>
        </div>
        <v-btn class="right " @click="dialog_login = true">
          {{$t('Safe.update')}}
        </v-btn>
      </li>
      <li class="list-item">
        <div class="left">
          <div style="width: 44px;height: 44px;">
            <v-img width="44px" height="44px"  src="@/assets/images/safe/login_pwd.png" />
          </div>
          <div style="margin-left: 19px;">
            <div class="title">
              {{$t('Safe.titles[1]')}}<span style="margin-left: 7px;"><v-img width="17" height="17" src="@/assets/images/safe/success.png" /></span>
            </div>
            <div class="subtitle">{{$t('Safe.subtitles[1]')}}</div>
          </div>
        </div>
        <v-btn class="right " @click="dialog_money = true">
          {{$t('Safe.update')}}
        </v-btn>
      </li>
      <li class="list-item">
        <div class="left">
          <div style="width: 44px;height: 44px;">
            <v-img width="44px" height="44px"  src="@/assets/images/safe/login_pwd.png" />
          </div>
          <div style="margin-left: 19px;">
            <div class="title">
              {{$t('Safe.titles[2]')}}<span style="margin-left: 7px;"><v-img width="17" height="17" src="@/assets/images/safe/tips.png" /></span>
            </div>
            <div class="subtitle">{{$t('Safe.subtitles[2]')}}</div>
          </div>
        </div>
        <v-btn class="right " @click="dialog_email = true">
          {{$t('Safe.update')}}
        </v-btn>
      </li>
    </ul>
    <v-dialog v-model="dialog_login"
    width="450"
    >
        <v-card>
          <j-reset-login-pwd @close="dialog_login = false" />
        </v-card>
    </v-dialog>
    <v-dialog v-model="dialog_money"
              width="450"
    >
      <v-card>
        <j-set-money-pwd v-if="!forget_pwd" @forget="forget_pwd = true" @close="handleCloseMoney" />
        <j-reset-money-pwd v-if="forget_pwd"  @close="handleCloseMoney" />
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog_email"
              width="450"
    >
      <v-card>
        <j-reset-email @close="dialog_email = false" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Account_Safe",

  data(){
    return{
      dialog_login:false,
      dialog_money:false,
      dialog_email:false,
      forget_pwd:false,
    }
  },
  methods:{
    handleCloseMoney(){
      this.dialog_money = false;
      setTimeout(()=>{
        this.forget_pwd = false;
      },500)
    }
  }
}
</script>

<style scoped lang="scss">
.safe-container{
  padding: 48px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  background: #fafbfc;
  .list-item{
    width: 100%;
    height: 130px;
    background-color: #fff;
    margin-bottom: 20px;
    box-shadow: 0px 12px 111px 0px rgba(200, 208, 223, 0.3);
    border-radius: 8px;
    padding: 0 44px 0 39px;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    .left{
      display: flex;
      align-items: center;
      .title{
        font-size: 18px;
        color: #333;
        margin-bottom: 11px;
        font-weight: 800;
        display: flex;
        align-items: center;
      }
      .subtitle{
        color: #999;
        font-size: 14px;
      }
    }
    .right{
      padding: 14px 36px;
      background: #3078FF;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 800;
      color: #FFFFFF;
      cursor: pointer;
    }
  }
}
</style>