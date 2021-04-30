<template>
  <div class="home">
    <div class="home-banner">
      <v-img width="100%" height="577px" src="@/assets/images/home/home_banner.png" />
    </div>
      <div class="contract-table">
        <v-card color="transparent">
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
                  <v-sparkline
                      :fill="true"
                      :gradient="['#00c6ff', '#F0F', '#FF0']"
                      :line-width="2"
                      :padding="0"
                      :smooth="10"
                      :value="item.trend"
                      auto-draw
                  ></v-sparkline>
                </td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </div>
    <div>
      <div class="introduce-block">
        <p class="introduce-title"><span >{{$t('home.introduce.title')}}</span></p>
        <p class="introduce-subtitle"><span >{{$t('home.introduce.subtitle')}}</span></p>
      </div>
      <ul class="introduce-list">
        <li v-for="(item,index) in introduce_list" :key="index">
          <div>
              <v-img style="margin: 0 auto;margin-bottom: 21px;" :width="item.width" :height="item.height" :src="item.icon" />
          </div>
          <div>
            {{$t(item.title)}}
          </div>
          <div>
            {{$t(item.context)}}
          </div>
          <div>
            {{$t(item.context2)}}
          </div>
        </li>
      </ul>
    </div>
    <div class="download-block">
      <div style="position: relative;top: 85px;left: 330px;">
        <div class="download-title">
          <div>{{$t('home.download.title1')}}</div>
          <div>{{$t('home.download.title2')}}</div>
        </div>
        <div class="download-subtitle">
          {{$t('home.download.subtitle')}}
        </div>
        <ul class="download-qrcode-list">
          <li v-for="(item,index) in download_qrcode" :key="index">
            <div class="qrcode-block">
              <v-img style="position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%)" width="106" height="108" :src="item.qrcode" />
            </div>
            <div class="qrcode-title">
                <div style="width:18px;height: 20px;margin-right: 8px;">
                  <v-img :src="item.icon" />
                </div>
              <div>
                {{$t(item.title)}}
              </div>
            </div>
          </li>
        </ul>

      </div>


    </div>
    <div class="join">
        <div class="join-block">
          <div class="title">
            {{$t('home.join.title')}}
          </div>
          <div class="join-btn-row">
            <div class="btn register">
              {{$t('home.join.register')}}
            </div>
            <div class="btn deal">
              {{$t('home.join.deal')}}
            </div>
          </div>
        </div>
    </div>
    <div class="home-footer">
      <div class="footer-top">
        <div class="top-left">
          <v-img width="116" height="40" src="@/assets/images/home/logo2.png" />
          <div class="power">
            © 2013-2020 Bitfox
          </div>
        </div>
        <div class="top-right">
          <div class="linke-items" v-for="(item,index) in link_list" :key="index">
              {{$t(item.title)}}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <dl class="link-row">
          <dt style="padding-bottom: 7px;">{{$t('home.footer.friend')}}</dt>
          <dd v-for="(item,index) in friend_list" :key="index">
            <v-img :src="item.pic" :width="item.width" :height="item.height" />
          </dd>
        </dl>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      table_title:[
        'home.table[0]',
        'home.table[1]',
        'home.table[2]',
        'home.table[3]',
        'home.table[4]',
        'home.table[5]',
        'home.table[6]'
      ],
      table_coins:[
        {name:'BTC',subname:'/USDT',icon:require('@/assets/images/home/btc.png'),newest:'903.900',rise:'-0.79%',heighest:'459.012',downest:'560.070',deal_count:'389.599',trend:[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
        {name:'ETH',subname:'/USDT',icon:require('@/assets/images/home/eth.png'),newest:'903.900',rise:'-0.79%',heighest:'459.012',downest:'560.070',deal_count:'389.599',trend:[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
        {name:'EOS',subname:'/USDT',icon:require('@/assets/images/home/eos.png'),newest:'903.900',rise:'-0.79%',heighest:'459.012',downest:'560.070',deal_count:'389.599',trend:[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
        {name:'BCH',subname:'/USDT',icon:require('@/assets/images/home/bch.png'),newest:'903.900',rise:'-0.79%',heighest:'459.012',downest:'560.070',deal_count:'389.599',trend:[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]},
      ],
      introduce_list:[
        {icon:require('@/assets/images/home/saft.png'),title:'home.introduce_list[0].title',context:'home.introduce_list[0].context',context2:'home.introduce_list[0].context2',width:'59',height:'56'},
        {icon:require('@/assets/images/home/service.png'),title:'home.introduce_list[1].title',context:'home.introduce_list[1].context',context2:'home.introduce_list[1].context2',width:'62',height:'60'},
        {icon:require('@/assets/images/home/good.png'),title:'home.introduce_list[2].title',context:'home.introduce_list[2].context',context2:'home.introduce_list[2].context2',width:'70',height:'55'},
        {icon:require('@/assets/images/home/height.png'),title:'home.introduce_list[3].title',context:'home.introduce_list[3].context',context2:'home.introduce_list[3].context2',width:'66',height:'58'},
      ],
      download_qrcode:[
        {qrcode:require('@/assets/images/home/qrcode.png'),title:'home.download.android',icon:require('@/assets/images/home/android.png')},
        {qrcode:require('@/assets/images/home/qrcode.png'),title:'home.download.ios',icon:require('@/assets/images/home/ios.png')},
      ],
      link_list:[
        {title:'home.footer.about',linke:''},
        {title:'home.footer.law',linke:''},
        {title:'home.footer.privacy',linke:''},
        {title:'home.footer.agreement',linke:''},
        {title:'home.footer.rule',linke:''},
        {title:'home.footer.service',linke:''},
      ],
      friend_list:[
        {pic:require('@/assets/images/home/ouke.png'),width:'82',height:'20',href:''},
        {pic:require('@/assets/images/home/aicoin.png'),width:'60',height:'20',href:''},
        {pic:require('@/assets/images/home/linkmoney.png'),width:'72',height:'20',href:''},
        {pic:require('@/assets/images/home/btcoinhome.png'),width:'110',height:'20',href:''},
        {pic:require('@/assets/images/home/coinvoice.png'),width:'89',height:'12',href:''},
        {pic:require('@/assets/images/home/bbx.png'),width:'40',height:'19',href:''},
        {pic:require('@/assets/images/home/coinfarm.png'),width:'91',height:'19',href:''},
        {pic:require('@/assets/images/home/dcg.png'),width:'40',height:'26',href:''},
        {pic:require('@/assets/images/home/pantera.png'),width:'80',height:'5',href:''},
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
.home{
  background-color: #fff;
  margin: 0 auto;
  width: 100%;
}
.home-banner{
  margin-top: -64px;
}
.contract-table{
  width: 1357px;
  height: 383px;
  margin: 0 auto;
  position: relative;
  top: -60px;
  left: 50%;
  margin-left: -678.5px;
   .theme--light.v-data-table{
    background-color: transparent!important;
  }
  .table-title{
    height: 60px;
    width: 1357px;
    background-color: rgba(0,0,0,.42);
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding:0 36px 0 33px ;
    box-sizing: border-box;
    tr{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .text-left{
        color: #fff;
      }
      th{
        font-size: 12px;
        color: #fff;
        line-height: 60px;
        flex: 1;
        padding: 0;
        text-align: center;
        display: flex;
        //justify-content: center;
        align-items: center;
      }
      th:nth-of-type(1){
        flex: 1.5;
        justify-content: flex-start;
      }
      th:nth-of-type(7){
        flex: 1.5;
        justify-content: flex-end;
      }
    }

  }
  .coin-list{
    width: 1357px;
    tr{
      display: flex;
      justify-content: space-between;
      padding:0 36px 0 33px ;
      box-sizing: border-box;
      align-items: center;
      height: 80px;
      td{
        font-size: 16px;
        height: 80px;
        border-bottom:none;
        line-height: 80px;
        flex: 1;
        padding: 0;
        display: flex;
        align-items: center;
        font-weight: bold;

      }
      td:nth-of-type(1){
        flex: 1.5;
        justify-content: flex-start;

      }
      td:nth-of-type(7){
        flex: 1.5;
        justify-content: flex-end;
      }
    }
  }

}
.introduce-block{
  .introduce-title{
    font-size: 33px;
    font-weight: 800;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  .introduce-subtitle{
    font-size: 17px;
    text-align: center;
    color: #999;
    margin-bottom: 101px;
  }

}
.introduce-list{
  width: 1357px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 95px;
  li{
    div{
      text-align: center;
      font-size: 14px;
      color: #999;
    }
    div:nth-of-type(2){
    font-size: 24px;
      color: #333;
      font-weight: 800;
      margin-bottom: 29px;
    }

  }
}
.download-block{
  width: 100%;
  height: 524px;
  //background-color: #1F9CDD;
  //position: relative;
  background-image: url("../assets/images/home/phones.png");
  background-size: 100% 524px;
  .download-title{
    font-size: 30px;
    color: #fff;
    margin-bottom: 37px;
  }
  .download-subtitle{
    color: rgba(255,255,255,.6);
    font-size: 18px;
    margin-bottom: 73px;
  }
  .download-qrcode-list{
    width: 320px;
    display: flex;
    justify-content: space-between;
    .qrcode-block{
      width: 120px;
      height: 120px;
      position: relative;
      background-color: #fff;
      margin-bottom: 22px;
    }
    .qrcode-title{
      font-size: 14px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.join{
  height: 249px;
  width: 100%;
  position: relative;
  .join-block{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .title{
      font-size: 32px;
      color: #333;
      font-weight: 800;
      font-family: 'PingFang','SC'!important;
      margin-bottom: 24px;
    }
    .join-btn-row{
      display: flex;
      justify-content: center;
      .btn{
        width: 145px;
        height: 41px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin: 0 6px;
        cursor: pointer;
      }
      .register{
        background-color: #3850DA;
        color: #fff;
      }
      .deal{
        color: #3850DA;
        background-color: #fff;
        border: 1px solid #3850DA;
      }
    }
  }
}
.home-footer{
  width: 100%;
  height: 286px;
  background-color: #0E1014;
  padding: 0 322px;
  box-sizing: border-box;
  position: relative;
  .footer-top{
    display: flex;
    justify-content: space-between;
    .top-left{
      padding-top: 49px;
      .power{
        font-size: 12px;
        color: #666;
        width: 116px;
        margin-top: 11px;
      }
    }
    .top-right{
      width: 466px;
      display: flex;
      flex-wrap: wrap;
      padding-top: 78px;
      .linke-items{
        font-size: 14px;
        color: #999;
        cursor: pointer;
        margin-right: 43px;
        margin-bottom: 10px;
      }
      .linke-items:nth-of-type(5){
        margin: 0;
      }
    }
  }
  .footer-bottom{
    position: absolute;
    bottom: 19px;
    color: #4D4D4D;
    font-size: 12px;
    width: 1276px;
    margin: 0 auto;

    .link-row{
      display: flex;
      justify-content: space-between;
      align-items: center;
      dd{
        cursor: pointer;
        filter:grayscale(100%);
      }
    }
  }
}
</style>
