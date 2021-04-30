<template>
  <div class="center-constainer">
    <div class="title">
      <span>
        {{$t('Assets.sub.address.manages')}}
      </span>
      <span style="cursor: pointer;" @click="navTo">
        <v-icon>
          mdi-close
        </v-icon>
      </span>
    </div>
    <div class="tips">
      {{$t('Assets.sub.address.tips')}}
    </div>
    <div class="search-row">
      <div class="select-mr">
        <el-select v-model="coinType" placeholder="请选择">
          <el-option
              v-for="item in coinList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="select-mr">
        <el-select v-model="agreementType" placeholder="请选择">
          <el-option
              v-for="item in agreementList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="select-mr">
        <el-input style="width: 148px;" v-model="remark" :placeholder="$t('Assets.sub.address.address_remark')"></el-input>
      </div>
      <div class="select-mr">
        <el-input style="width: 294px;border: 1px solid #0A6FF6;border-radius: 3px;box-sizing: border-box;" v-model="address" :placeholder="$t('Assets.sub.address.address')"></el-input>
      </div>
      <div>
        <v-btn class="add">{{$t('Assets.sub.address.add')}}</v-btn>
      </div>
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
          <div v-if="!table_coins.length" class="empty-block">
            <v-img width="109" height="71" src="@/assets/images/table/empty.png" />
            <div class="text">
                {{$t('prompts.empty')}}
            </div>
          </div>
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
            <td>{{ item.address }}</td>
            <td>{{ item.remark }}</td>

            <td style="justify-content: flex-end;">
              <div class="operation" >
                <span class="del"> {{$t('Assets.sub.address.table[4]')}}</span>

              </div>
            </td>
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
  </div>
</template>

<script>
import Vue from 'vue';
import { Select,Button,Table,Option,Input } from 'element-ui';
Vue.use(Select).use(Button).use(Table).use(Option).use(Input);
export default {
  name: "Address_Management",
  data(){
    return{
      coinType:'',
      agreementType:'',
      remark:'',
      address:'',
      page: 1,
      coinList: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      agreementList: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      table_title:[
        'Assets.sub.address.table[0]',
        'Assets.sub.address.table[1]',
        'Assets.sub.address.table[2]',
        'Assets.sub.address.table[3]',
      ],
      table_coins:[
        // {name:'BTC',subname:'/USDT',icon:require('@/assets/images/home/btc.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'ETH',subname:'/USDT',icon:require('@/assets/images/home/eth.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'EOS',subname:'/USDT',icon:require('@/assets/images/home/eos.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'BCH',subname:'/USDT',icon:require('@/assets/images/home/bch.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'BTC',subname:'/USDT',icon:require('@/assets/images/home/btc.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'ETH',subname:'/USDT',icon:require('@/assets/images/home/eth.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'EOS',subname:'/USDT',icon:require('@/assets/images/home/eos.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'BCH',subname:'/USDT',icon:require('@/assets/images/home/bch.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'BTC',subname:'/USDT',icon:require('@/assets/images/home/btc.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},
        // {name:'ETH',subname:'/USDT',icon:require('@/assets/images/home/eth.png'),address:'YSH20849384UF94RU45935650',remark:'火币钱包'},

      ],
    }
  },
  methods:{
    navTo(){
      this.$router.push('/web/Asset/center');
    },
    currentPage(e){
      console.log(e);
    },
    // handleNext(e){
    //   console.log(e);
    // },
    // handlePrevios(e){
    //   console.log(e);
    // }
  }
}
</script>

<style scoped lang="scss">
.center-constainer{

}
.select-mr{
  margin-right: 9px;
}
.title{
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tips{
  line-height: 38px;
  background: #F0F6FF;
  height: 38px;
  font-size: 13px;
  color: #3078FF;
  padding-left: 12px;
  margin-bottom: 45px;
}
.search-row{
display: flex;
  align-items: center;
  .add{
    padding: 9px 34px;
    background-color: #0A6FF6;
    color: #fff;
    font-size: 13px;
    border-radius: 3px;
  }
}


.table-container{
  height: 55vh;
  overflow-y: auto;
  margin-bottom: 50px;
  position: relative;
  .table-title{
    padding: 0;

    background-color: transparent;
    th:nth-of-type(4){
      justify-content: flex-end;
    }

    th{
      flex: 1!important;
      color: #999!important;
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
    }
  }
}
</style>