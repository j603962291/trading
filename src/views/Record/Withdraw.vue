<template>
  <div>
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
            <td >{{item.time}}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.count }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.status }}</td>

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
export default {
  name: "Recharge",
  data(){
    return{
      page:1,
      table_title:[
        'Record.recharge.table[0]',
        'Record.recharge.table[1]',
        'Record.recharge.table[2]',
        'Record.recharge.table[3]',
        'Record.recharge.table[4]',
        'Record.recharge.table[5]',
      ],
      table_coins:[
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
        {time:'2020.09.25 18.00.00',type:'USDT',count:248,price:0.00,address:'HAI02489284907DUU93849389024',status:0},
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
.table-container{
  height: 55vh;
  overflow-y: auto;
  margin-bottom: 50px;
  position: relative;
  .table-title{
    padding: 0;



    th{
      flex: 1!important;
      color: #999!important;
    }
    th:nth-of-type(5){
      flex: 2!important;
    }
    th:nth-of-type(6){
      justify-content: flex-end;
      flex: 0.5!important;
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
      td:nth-of-type(5){
        flex: 2!important;
      }
      td:nth-of-type(6){
        justify-content: flex-end;

        flex: 0.5;
      }
    }
  }
}
</style>