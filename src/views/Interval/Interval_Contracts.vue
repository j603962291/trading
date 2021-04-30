<template>
  <div class="contracts-container">
  <div class="kline-container">
    <div class="line-block">
      <div class="top">
        <div class="text-center">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div
                  class="select-btn"
                  v-bind="attrs"
                  v-on="on"
              >
                {{val}}  <v-icon
                  color="#fff"
              >
                mdi-menu-down
              </v-icon>
              </div>
            </template>
            <v-list>
              <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  @click="selectType(index)"
              >
                <v-list-item-title style="font-size: 12px;">{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div class="increace down">
          <span>{{count}}</span><span>{{increace}}</span>
        </div>
        <div class="shu">

        </div>
        <ul class="count-list">
          <li v-for="(item ,index) in count_list" :key="index">
            <div class="titles">
              {{$t(item.title)}}
            </div>
            <div class="subtitle">
              {{item.count}}
            </div>
          </li>
        </ul>
      </div>
      <div class="k-line">
        <Kline />
      </div>

    </div>
    <div class="record-block">
      <div class="tab-bar">
        <v-tabs
            v-model="current_index"
            align-with-title
            background-color="#1D1F24"
            color="#fff"
            dark
        >
          <v-tabs-slider color="#0A6FF6"></v-tabs-slider>

          <v-tab
              v-for="item in tabs"
              :key="item"
          >
            {{ $t(item) }}
          </v-tab>
        </v-tabs>
      </div>
      <div>
        <v-tabs-items v-model="current_index" >
          <v-tab-item >
            <div style="width: 360px;height: 579px; ">
              {{text}}
            </div>
          </v-tab-item>
          <v-tab-item>
            <div style="width: 360px;height: 579px; ">
              <Dealrecord />
            </div>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </div>

  </div>
  <div class="deal-list">
    <div class="deal-tab-row">
      <v-tabs
          background-color="#1D1F24"
          color="#fff"
          dark
          @change="handleChangeRecordTab"
      >
        <v-tabs-slider color="#0A6FF6"></v-tabs-slider>

        <v-tab v-for="(item,ie) in record_tabs" :key="ie">{{$t(item)}}</v-tab>
      </v-tabs>
    </div>
    <div class="record-table">
      <el-table
          :data="tableData"
          max-height="200"
          style="width: 100%"
          :row-style="{backgroundColor:'#191B20'}"
          :header-cell-style="{backgroundColor:'#191B20'}"
      >
        <el-table-column
            v-for="(item,ix) in record_table_title" :key="ix"
            :prop="item.prop"
            :label="$t(item.label)"
            :width="item.width"
        />

<!--        <el-table-column-->
<!--            prop="name"-->
<!--            label="姓名"-->
<!--            width="180">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--            prop="address"-->
<!--            label="地址">-->
<!--        </el-table-column>-->
      </el-table>
    </div>
  </div>
  </div>
</template>

<script>
// import { createChart } from "lightweight-charts";
// const chart = createChart(document.body, { width: 400, height: 300 });

import Dealrecord from "@/views/Interval/components/Deal_Record";
import Kline from './components/Kline'
import {Table,TableColumn} from 'element-ui';
import Vue from 'vue';
Vue.use(Table).use(TableColumn)
export default {
  name: "Interval_Contracts",
  components:{
    Dealrecord,
    Kline
  },
  mounted() {

  },
  data(){

    return {
      tableData: [{
        order_num: 'HY827392792839280',
        type: 'BTC-1M',
        buy_time: '01-29  12:00:00',
        buy_count: '10(AQ）',
        buy_type: '涨丨＞+0.005%',
        increace: '1.29',
        status: '已交割',
        open_time: '01-22  12:00:00',
        deal_time: '01-29  12:00:00',
        open_price: '13590.00',
        deal_price: '13590.00',
        deal_res: '+1.098%(张)',
        res_count: '1.09USDT',

      }, ],
      val:'BTC/USDT',
      count:'65390.90',
      increace:'-0.008%',
      items: [
        { title: 'BTC/USDT',lang:'zh-cn' },
        { title: 'ETH/USDT',lang: 'zh-tw' },
        { title: 'EOS/USDT',lang: 'en' },
        { title: 'BCH/USDT',lang: 'en' },
      ],
      count_list:[
        {title:'Kline.count[0]',count:'9400.68BTC'},
        {title:'Kline.count[1]',count:'12000.57'},
        {title:'Kline.count[2]',count:'10406.70'},
      ],
      current_index:0,
      tabs: [
        'Kline.buy', 'Kline.deal_record',
      ],
      record_tabs:[
        'Kline.bottom.tab[0]', 'Kline.bottom.tab[1]',
      ],
      record_table_title:[
        {label:'Kline.bottom.table[0]',prop:'order_num',width:'140'},
        {label:'Kline.bottom.table[1]',prop:'type',width:''},
        {label:'Kline.bottom.table[2]',prop:'buy_time',width:''},
        {label:'Kline.bottom.table[3]',prop:'buy_count',width:''},
        {label:'Kline.bottom.table[4]',prop:'buy_type',width:''},
        {label:'Kline.bottom.table[5]',prop:'increace',width:''},
        {label:'Kline.bottom.table[6]',prop:'status',width:''},
        {label:'Kline.bottom.table[7]',prop:'open_time',width:''},
        {label:'Kline.bottom.table[8]',prop:'deal_time',width:''},
        {label:'Kline.bottom.table[9]',prop:'open_price',width:''},
        {label:'Kline.bottom.table[10]',prop:'deal_price',width:''},
        {label:'Kline.bottom.table[11]',prop:'deal_res',width:''},
        {label:'Kline.bottom.table[12]',prop:'res_count',width:''},
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
  methods:{
    selectType(){
      // console.log(this.items[index].lang);
      // this.$i18n.locale = this.items[index].lang;
      this.$forceUpdate();
    },
    handleChangeRecordTab(e){
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
.contracts-container{
  padding-top: 4px;

}
.kline-container{
  height: 650px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  .line-block{
    height: 100%;
    width: 1550px;
    .top{
      padding: 0 20px;
      height: 65px;
      background-color: #191B20;
      margin-bottom: 4px;
      display: flex;align-items: center;
      .select-btn{
        height: 100%;
        line-height: 65px;
        color: #fff;
        font-size: 20px;
        width: 145px;
        font-weight: bold;
        margin-right: 46px;
      }
      .increace{
        font-size: 22px;
        font-weight: bold;
        height: 100%;
        line-height: 65px;
        width: 215px;
      }
      .up{
        color: #FF7272;
      }
      .down{
        color: #42C871;
      }
      .shu{
        height: 37px;
        width: 1px;
        background-color: #666;
      }
      .count-list{
        display: flex;
        align-items: center;
        li{
          margin-right: 30px;
          .titles{
            font-size: 12px;
            color: #666;
            margin-bottom: 10px;
          }
          .subtitle{
            font-size: 12px;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
    .k-line{
      height: 580px;
      background-color:#191B20;

    }

  }
  .record-block{
    width: 360px;
    height: 100%;
    background-color: #191B20;
    .tab-bar{
      width: 100%;
      height: 65px;
    }
   .v-tabs-bar {
      background-color: transparent!important;
    }
    .theme--light.v-tabs-items {
      background-color: transparent!important;
    }
  }
}
.deal-list{
  height: 233px;
  width: 100%;
  background-color: #191B20;
  .deal-tab-row{
    height: 45px;
  }
  .record-table{
    height: 188px;
    //overflow-y: scroll;
    padding-top: 5px;
    .el-table__header{
      th{
        background: #191B20!important;
      }
    }
  }
}
</style>