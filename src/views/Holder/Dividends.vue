<template>
  <div class="container">
      <div class="top-row">
          <div class="left">
            <div class="title-r">
              {{$t('Holder.red')}}
            </div>
            <div class="money">
              72.9300 USDT
            </div>
            <div class="maybe">
              ≈ ￥ 0.00
            </div>
          </div>
        <v-btn class="right" color="#0A6FF6;" @click="rule_dialog = true">
          {{$t('Share.rule')}}
        </v-btn>
      </div>
    <div class="table-container">
      <v-simple-table
          fixed-header
          height="550px"
      >
        <template v-slot:default>
          <thead  class="table-title">
          <tr >
            <th class="text-left" v-for="(item,index) in table_title" :key="index">
              {{$t(item)}}
            </th>
          </tr>
          </thead>
          <div v-if="!table_coins.length" class="empty-block">
            <v-img width="109" height="71" src="@/assets/images/table/empty.png" />
            <div class="text">
              {{$t('prompts.empty')}}
            </div>
          </div>
          <tbody class="coin-list">
          <tr v-for="(item,index) in table_coins" :key="index">
            <td >{{item.time}}</td>
            <td>{{ item.count }}</td>


          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div>
      <v-pagination
          v-model="page"
          class="my-4"
          :length="15"
          color="#0A6FF6"
          :total-visible="7"
          @input="currentPage"

      ></v-pagination>
    </div>
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
export default {
  name: "Dividends",
  data(){
    return{
      rule_dialog:false,
      page:1,
      table_title:[
        'Record.recharge.table[0]',

      ],
      table_coins:[
        {time:'2020.09.25 18.00.00',count:248.12411,},
        {time:'2020.09.25 18.00.00',count:248.12411,},
        {time:'2020.09.25 18.00.00',count:248.12411,},
        {time:'2020.09.25 18.00.00',count:248.12411,},
        {time:'2020.09.25 18.00.00',count:248.12411,},

      ]
    }
  },
  methods:{
    currentPage(e){
      console.log(e);
    },
  }
}
</script>

<style scoped lang="scss">
  .container{
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: 37px 48px;
    margin-bottom: 40px;
    .top-row{
      display: flex;
      justify-content: space-between;
      .left{
        .title-r{
          font-size: 14px;
          color: #999;
          margin-bottom: 18px;
        }
        .money{
          color: #000003;
          font-size: 25px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        .maybe{
          font-size: 12px;
          color: #000003;
        }
      }
      .right{
        padding: 10px 29px;
        font-size: 12px;
        color: #fff;
        background-color: #0A6FF6;
      }
    }
    .table-container{
      margin-bottom: 50px;
      position: relative;
      .table-title{
        padding: 0;



        th{
          flex: 1!important;
          color: #999!important;
          background-color: #F7F9FB!important;
        }

      }
      .operation{
        .btn{
          padding: 0;
          border: none;
          display: flex;
          justify-content: flex-end;
        }
      }
      .coin-list{
        tr{
          padding: 0;

          td{
            flex: 1;

          }
          td:nth-of-type(2){
            flex: 2!important;
            justify-content: flex-end;

          }
          td:nth-of-type(6){

            flex: 0.5;
          }
        }
      }
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