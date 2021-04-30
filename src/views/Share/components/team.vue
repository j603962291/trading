<template>
 <div>
   <div class="table-container">
     <v-simple-table
         fixed-header
         height="350"
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
           <td >{{index+1}}</td>
           <td>{{ item.account }}</td>
           <td>{{ $t(item.level) }}</td>

           <td>{{ item.time }}</td>

         </tr>
         </tbody>
       </template>
     </v-simple-table>

   </div>



 </div>
</template>

<script>
export default {
  name: "team",


  data(){
    return{
      page:1,
      table_title:[
        'Share.table[0]',
        'Share.table[1]',
        'Share.table[2]',
        'Share.table[3]',
      ],
      table_coins:[
        {time:'2020.09.25 18.00.00',account:'541332142341',level:'Share.level[1]'},
        {time:'2020.09.25 18.00.00',account:'541332142341',level:'Share.level[0]'},
        {time:'2020.09.25 18.00.00',account:'541332142341',level:'Share.level[0]'},
        {time:'2020.09.25 18.00.00',account:'541332142341',level:'Share.level[0]'},
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
  //overflow-y: auto;
  margin-bottom: 20px;
  //position: relative;
.table-title{
  padding: 0;


th{
  flex: 1!important;
  color: #999!important;
}
th:nth-of-type(4){
  //flex: 1.5!important;
  justify-content: flex-end;

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
td:nth-of-type(4){
  //flex: 1.5!important;
  justify-content: flex-end;

}

}
}
}
</style>