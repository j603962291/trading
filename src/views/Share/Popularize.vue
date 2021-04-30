<template>
  <div class="container">
    <div class="title">
      {{$t('Share.title')}}
    </div>
    <div class="user-block center">
      <div class="left">
        <div style="width: 55px;height: 55px;">
          <v-img  src="@/assets/images/share/avator.png" />

        </div>
        <div style="margin-left: 13px;">
          <div class="user-name">18902930088</div>
          <div class="user-tag center">
            {{$t('Share.member_level[0]')}}
          </div>
        </div>
      </div>
      <v-btn class="right" @click="rule_dialog = true">
        {{$t('Share.rule')}}
      </v-btn>
    </div>
    <div class="count-block">
      <v-card>
      <div class="item-block">
        <div class="item-title" style="margin-bottom: 46px;">
          {{$t('Share.title')}}
        </div>
        <div class="invitecode-row">
            <div class="code-l">
              <span>{{$t('Share.share.poster')}}：</span>
              <v-btn color="btn">{{$t('Share.share.poster2')}}</v-btn>
            </div>
          <div class="code-r">
            <span>{{$t('Share.share.poster')}}：</span>
            <el-input  class="input1" v-model="invite_code" placeholder="请输入内容">
            </el-input>
            <v-btn color="btn" @click="copyInviteCode" id="copycode" :data-clipboard-text="invite_code">{{$t('Share.share.copy')}}</v-btn>
          </div>
        </div>
        <div class="invitelink-row">
          <span >{{$t('Share.share.link')}}：</span>
          <el-input  class="input2" v-model="invite_link" placeholder="请输入内容">
          </el-input>
          <v-btn class="btn" @click="copyInviteLink" id="copylink" :data-clipboard-text="invite_link">{{$t('Share.share.copy')}}</v-btn>

        </div>
      </div>
      </v-card>

      <v-card>
      <div class="item-block">
        <div class="item-title" style="margin-bottom: 10px;">
          {{$t('Share.back.title')}}
        </div>
        <div class="back-money">
          2890.00USDT<span style="font-size: 16px;color: #999;margin-left: 13px;">≈12923.00CNY</span>
        </div>
        <ul class="back-list">
          <li v-for="(item,index) in back_list" :key="index">
            <div class="list-item-count">{{item.count}}</div>
            <div class="list-item-title">{{$t(item.title)}}</div>
          </li>
        </ul>
      </div>
      </v-card>


    </div>
    <v-card>
      <div class="table-block">
        <div class="tab-row">
          <v-tabs v-model="tab">
            <v-tab>{{$t('Share.tabs[0]')}}</v-tab>
            <v-tab>{{$t('Share.tabs[1]')}}</v-tab>
          </v-tabs>
          <div style="height: 10px;">

          </div>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <div style="">
                  <Teamtable :tabIndex="tab" />
                  <v-pagination
                      v-model="page1"
                      class="my-4"
                      :length="15"
                      color="#0A6FF6"
                      :total-visible="7"
                      @input="currentPage1"

                  ></v-pagination>
                </div>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <div style="">
                <Backtable :tabIndex="tab"   />
                  <v-pagination
                      v-model="page2"
                      class="my-4"
                      :length="15"
                      color="#0A6FF6"
                      :total-visible="7"
                      @input="currentPage2"

                  ></v-pagination>
                </div>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>

    </v-card>
    <v-dialog
        v-model="rule_dialog"
        width="474"
    >
      <v-card>
        <div class="" style="width: 474px;
    height: 244px;
    background-color: #fff;padding: 14px;margin: 0!important;border-radius: 10px;">
        <div class="rule-top">
          <span style="float: right;cursor:pointer;" @click="rule_dialog=false">
            <v-icon size="11">mdi-close</v-icon>
          </span>
        </div>
          <div class="rule-title">
              {{$t('Share.rule')}}
          </div>
          <ul class="rule-list">
            <li >初级合伙人：直推用户交易额，30天内达到5000USDT。</li>
            <li>初级合伙人：直推用户交易额，30天内达到5000USDT。</li>
            <li>初级合伙人：直推用户交易额，30天内达到5000USDT。</li>
          </ul>
          <div style="text-align: center;">
            <v-btn class="know-btn" color="#3078FF" @click="rule_dialog=false">
              {{$t('Share.rules.know')}}
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Clipboard from '@/assets/js/clipboard.min.js';
import Teamtable from './components/team';
import Backtable from './components/back'

import {Input} from 'element-ui';
import Vue from 'vue';
Vue.use(Input);
export default {
  name: "Popularize",
components:{
  Teamtable,
  Backtable
},
  data(){
    return{
      rule_dialog:false,
      invite_code:'65681',
      invite_link:'https://coinw.ai/user/register.html?r=20187006',
      back_list:[
        {title:'Share.back.today',count:'3090.00'},
        {title:'Share.back.week',count:'3090.00'},
        {title:'Share.back.cumulative',count:'3090.00'},
        {title:'Share.back.fail',count:'3090.00'},
      ],
      tab: 0,
      page1:1,
      page2:1,
    }
  },
  watch:{
    tab(n,o){
      console.log(n);
      this.page = 1;
    }
  },
  mounted(){

  },
  methods:{
    copyInviteCode(){
      new Clipboard('#copycode');
    },
    copyInviteLink(){
      new Clipboard('#copylink');

    },
    currentPage1(e){
      console.log(e);
    },
    currentPage2(e){
      console.log(e);
    },
  }
}
</script>

<style scoped lang="scss">
.container{
  width: 100%;
  height: 100%;
  padding: 26px 46px;
  background: #fbfbfc;
  color: #333;

  .title{
    font-size: 24px;
    font-weight: 800;
  }
  .user-block{
    width: 100%;
    height: 107px;
    background-color: #3078FF;
    border-radius: 5px;
    justify-content: space-between;
    padding: 0 29px;
    align-items: center;
    margin-bottom: 16px;
    .left{
      display: flex;
      align-items: center;
      .user-name{
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .user-tag{
        width: 66px;
        height: 21px;
        background: #6197FF;
        border-radius: 11px;
        font-size: 12px;
        color: #fff;
        align-items: center;
      }
    }
    .right{
    padding: 10px 29px;
      font-size: 12px;
      color: #3077FE;
    }
  }
  .count-block{
    height: 234px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    .item-block{
      //flex: 1;
      height: 234px;
      width: 796px;
      background-color: #fff;
      box-shadow: 0px 12px 111px 0px rgba(200, 208, 223, 0.3);
      border-radius: 5px;
      padding: 29px 36px 44px;

      .btn{
        padding: 11px 21px;
        background-color: #3078FF;
        color: #fff;
      }
      .item-title{
        font-size: 18px;
        font-weight: 800;
      }
      .invitecode-row{
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 22px;
        .code-l{
          display: flex;
          align-items: center;
        }
        .code-r{
          display: flex;
          align-items: center;
          .input1{
            height: 37px;
            //width:211px;
            width: 144px;
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
      .invitelink-row{
        font-size: 14px;
        display: flex;
        align-items: center;
        .input2{
          width: 552px;
          height: 35px;
        }
      }
      .back-money{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 30px;
      }
      .back-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
          div{
            text-align: center;
          }
          .list-item-count{
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 8px;
          }
          .list-item-title{
            font-size: 13px;
            color: #999;
          }
        }

      }
    }
  }
.table-block{
  height: 519px;
  width: 1610px;
  padding: 20px;
  .tab-row{

  }
}
  .rule-blcok{
    width: 474px;
    height: 244px;
    background-color: #fff;
  }
}
.rule-top{
  margin-bottom: 15px;
}
.rule-title{
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 26px;
}
.rule-list{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  li{
    list-style-type: decimal;
    line-height: 20px;
    font-size: 14px;

  }
}
.know-btn{
  //padding: 15px 42px!important;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
}
</style>