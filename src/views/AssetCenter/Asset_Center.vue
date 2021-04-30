<template>
  <div class="center-constainer">
    <div class="balance">
      {{$t('Assets.sub.center.balance')}}
    </div>
    <div class="price">
      <div>
        72.9300 USDT
      </div>
      <div>
        <v-btn class="address-btn" depressed @click="navToAddress">
          {{$t('Assets.sub.address.manages')}}
        </v-btn>
      </div>
    </div>
    <div class="may">
    ≈ ￥0.00
    </div>
   <div class="table-container">
     <v-simple-table>
       <template v-slot:default>
         <thead  class="table-title">
         <tr >
           <th class="text-left" v-for="(item,index) in table_title" :key="index">
             {{$t(item)}}
           </th>
         </tr>
         </thead>
         <tbody class="coin-list">
         <tr v-for="(item,index) in table_coins" :key="index">
           <td >
             <!--                <v-img width="29" height="29" :src="item.icon" />-->
             <img style="height: 29px;width: 29px;margin-right: 13px;" :src="item.icon" />
             <div>
               <span style="color:#333333;">{{ item.name }}</span>
               <span style="color: #A1A1A1;">{{ item.subname }}</span>
             </div>
           </td>
           <td>{{ item.newest }}</td>
           <td>{{ item.rise }}</td>
           <td>{{ item.heighest }}</td>
           <td>{{ item.downest }}</td>
           <td>{{ item.deal_count }}</td>
           <td>
            <div class="operation" >
              <v-btn class="btn recharge" depressed @click="handleRecharge(item)">
                {{$t('Assets.sub.tabel[7]')}}
              </v-btn>
              <v-btn class="btn withdraw" depressed @click="handleWithdraw(item)">
                {{$t('Assets.sub.tabel[8]')}}
              </v-btn>
            </div>
           </td>
         </tr>
         </tbody>
       </template>
     </v-simple-table>
   </div>
<!--    充值dialog-->
    <v-dialog
        v-model="recharge_dialog"
        width="450"
    >
      <v-card>
        <div class="recharge-dialog-block">
          <div class="top-header">
            <span style="cursor: pointer;" @click="recharge_dialog = false">
              <v-icon size="11">mdi-close</v-icon>
            </span>
          </div>
          <div class="title-row">
            {{$t('Assets.dialog.recharge')}}USDT
          </div>
          <ul class="tag-list">
            <li class="tag-item">
              TRC20
            </li>
            <li class="tag-item">
              OMNI
            </li>
            <li class="tag-item">
              ERC20
            </li>
          </ul>
          <div style="width: 180px;height: 180px;margin: 0 auto;margin-bottom: 6px;">
              <v-img width="180" height="180" src="@/assets/images/qrcode.png" />
          </div>
          <div class="qrcode-bottom">
            {{$t('Assets.dialog.qrcode_address')}}
          </div>
          <div class="invitecode-row">
            {{address_code}}
          </div>
          <div style="text-align: center;margin-bottom: 40px;">
            <span   id="addressCode" :data-clipboard-text="address_code" @click="handleCopy">
              {{$t('Assets.dialog.copy_address')}}
            </span>
          </div>
          <ul class="tips-list">
            <li class="tips-title">{{$t('Assets.dialog.recharge_tip')}}</li>
            <li class="tips-items" v-for="(item,index) in tips_list" :key="index">{{$t(item)}}</li>
          </ul>
        </div>
      </v-card>
    </v-dialog>
<!--    提现dialog-->
    <v-dialog
        v-model="withdraw_dialog"
        width="450"
    >
      <v-card>
        <div class="withdraw-dialog-block">
          <div class="top-header">
            <span style="cursor: pointer;position: absolute;top: 14px;right: 11px;" @click="withdraw_dialog = false">
              <v-icon size="11">mdi-close</v-icon>
            </span>
          </div>
          <div class="title-row">
            {{$t('Assets.dialog.withdraw')}}
          </div>
          <ul class="tag-list">
            <li class="tag-item">
              TRC20
            </li>
            <li class="tag-item">
              OMNI
            </li>
            <li class="tag-item">
              ERC20
            </li>
          </ul>
        <div class="address-block">
          <div class="label">
            {{$t('Assets.dialog.withdraw_address')}}
          </div>
          <div class="select">
            <el-select style="width: 100%;" v-model="value" :placeholder="$t('Assets.dialog.choose')">
              <template slot="empty">
                <div style="width: 368px;
        height: 46px;display: flex;align-items: center;padding-left: 16px;cursor: pointer;" @click="navToAddress">
                  <div style="width: 11px;height: 11px;">
                    <v-img width="11" height="11" src="@/assets/images/plus.png" />
                  </div>
                  <span style="color: #3078FF;margin-left: 7px;">
                    {{$t('Assets.dialog.add_new_address')}}
                  </span>
                </div>
              </template>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
          <div class="address-block">
            <div class="count-label">
              <div class="left">
                {{$t('Assets.dialog.withdraw_count')}}
              </div>
              <div class="right">
                  <span style="color: #B3B3B3;margin-right: 5px; ">{{$t('Assets.dialog.can_use')}}</span>290.0000USDT
              </div>
            </div>
            <div class="select">
              <el-input v-model="input" type="number" :placeholder="$t('Assets.dialog.withdraw_count')">
                <template slot="suffix">
                  <div style="height: 40px;line-height: 40px;cursor: pointer;color: #333;font-weight: bold;">
                    {{$t('Assets.dialog.all')}}
                  </div>
                </template>
              </el-input>
            </div>
          </div>
          <div class="price-row">
            <span>{{$t('Assets.dialog.premium')}}</span>
            <span>0.0000 USDT</span>
          </div>
          <div class="price-row">
            <span>{{$t('Assets.dialog.to_account')}}</span>
            <span>0.0000 USDT</span>
          </div>
          <div class="no-money-row">
            <div style="width: 13px;height: 13px;">
                <v-img width="13"  height="13" src="@/assets/images/tip.png"/>
            </div>
            <div>
              {{$t('Assets.dialog.no_money')}}
            </div>
          </div>
          <div class="confirm">
            {{$t('Assets.dialog.confirm')}}
          </div>
          <ul class="tips-list">
            <li class="tips-title">{{$t('Assets.dialog.withdraw_tip')}}</li>
            <li class="tips-items" v-for="(item,index) in tips_list2" :key="index">{{$t(item)}}</li>
          </ul>

        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Clipboard from '@/assets/js/clipboard.min.js';
import {Select,Option,Input} from 'element-ui';
import Vue from 'vue';
Vue.use(Select).use(Option).use(Input)

export default {
  name: "Asset_Center",
  data(){
    return{
      address_code:'0x4585bc9515794832ab23008dbaa3791415e09',
      recharge_dialog:false,
      withdraw_dialog:false,
      table_title:[
        'Assets.sub.tabel[0]',
        'Assets.sub.tabel[1]',
        'Assets.sub.tabel[2]',
        'Assets.sub.tabel[3]',
        'Assets.sub.tabel[4]',
        'Assets.sub.tabel[5]',
        'Assets.sub.tabel[6]'
      ],
      table_coins:[
        {name:'BTC',subname:'/USDT',icon:require('@/assets/images/home/btc.png'),newest:'903.900',rise:'-0.79%',heighest:'459.012',downest:'560.070',deal_count:'389.599',trend:[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
        {name:'ETH',subname:'/USDT',icon:require('@/assets/images/home/eth.png'),newest:'903.900',rise:'-0.79%',heighest:'459.012',downest:'560.070',deal_count:'389.599',trend:[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
        {name:'EOS',subname:'/USDT',icon:require('@/assets/images/home/eos.png'),newest:'903.900',rise:'-0.79%',heighest:'459.012',downest:'560.070',deal_count:'389.599',trend:[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
        {name:'BCH',subname:'/USDT',icon:require('@/assets/images/home/bch.png'),newest:'903.900',rise:'-0.79%',heighest:'459.012',downest:'560.070',deal_count:'389.599',trend:[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
      ],
      tips_list:[
        'Assets.dialog.recharge_tips[0]',
        'Assets.dialog.recharge_tips[1]',
        'Assets.dialog.recharge_tips[2]',
        'Assets.dialog.recharge_tips[3]',
        'Assets.dialog.recharge_tips[4]',
      ],
      tips_list2:[
        'Assets.dialog.withdraw_tips[0]',
        'Assets.dialog.withdraw_tips[1]',
        'Assets.dialog.withdraw_tips[2]',

      ],
      options:[],
      value:'',
      input:''
    }
  },
  // mounted() {
  //   new Clipboard('#addressCode');
  // },
  methods:{
    navToAddress(){
      this.$router.push('/web/Asset/address');
    },
    handleRecharge(e){
      this.recharge_dialog = true;
      console.log(e);
    },
    handleWithdraw(e){
      this.withdraw_dialog = true;
    },
    handleCopy(){
      new Clipboard('#addressCode');

    }
  }
}
</script>

<style scoped lang="scss">
.center-constainer{
  padding: 37px 52px 0 47px;
  .balance{
    font-size: 14px;
    color: #999;
  margin-bottom: 18px;
  }
  .price{
    font-size: 25px;
    color: #000003;
    font-weight: bold;
    margin-bottom: 11px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .address-btn{
      background-color: #0A6FF6;
      border-radius: 3px;
      color: #fff;
      padding: 12px 21px;
      font-weight: 800;
      font-size: 12px;
    }
  }
  .may{
    font-size: 12px;
    color: #000003;
    margin-bottom: 40px;
    font-weight: 600;
  }

}
.recharge-dialog-block{
  padding: 14px 11px;
  height: 641px;
  background-color: #fff;
  width: 450px;
  box-sizing: border-box;
  .top-header{
    height: 11px;
    display: flex;
    justify-content: flex-end;
  }
  .title-row{
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    //font-weight: normal;
    margin-bottom: 22px;
  }
  .tag-list{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    .tag-item{
      width: 89px;
      height: 28px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      text-align: center;
      line-height: 28px;
      margin: 0 4px;
      border-radius: 3px;
    }
  }
  .qrcode-bottom{
    font-size: 14px;
    color: #999;
    text-align: center;
    margin-bottom: 37px;
  }
  .invitecode-row{
    font-size: 14px;
    text-align: center;
    margin-bottom: 19px;
    font-weight: bold; 
  }
  #addressCode{
    color: #fff;
    background-color: #3078FF;
    padding: 12px 47px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  .tips-list{
    .tips-title{
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .tips-items{
      font-size: 12px;
      color: #999;
      line-height: 18px;
      list-style-type: disc;
    }
  }
}
.withdraw-dialog-block{
  padding: 14px 41px;
  height: 650px;
  background-color: #fff;
  width: 450px;
  box-sizing: border-box;
  position: relative;
  .top-header{
    height: 11px;
    display: flex;
    justify-content: flex-end;
  }
  .title-row{
    text-align: center;
    font-size: 26px;
    font-weight: 600;
    //font-weight: normal;
    margin-bottom: 22px;
  }
  .tag-list{
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    .tag-item{
      width: 89px;
      height: 28px;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
      text-align: center;
      line-height: 28px;
      margin: 0 4px;
      border-radius: 3px;
    }
  }
  .address-block{
    margin-bottom: 30px;
    .label{
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    .select{
      .empty{

      }
    }
    .count-label{
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .right{
        font-size: 12px;
      }
    }
  }
  .price-row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 15px;
    font-weight: bold;

  }
  .no-money-row{
    font-size: 12px;
    color: #FF7575;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
  .confirm{
    height: 46px;
    color: #fff;
    font-size: 16px;
    line-height: 46px;
    text-align: center;
    background-color: #3078FF;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .tips-list{
    .tips-title{
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .tips-items{
      font-size: 12px;
      color: #999;
      line-height: 18px;
      list-style-type: disc;
    }
  }
}
</style>