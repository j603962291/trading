<template>
  <div id="k-line">

  </div>
</template>

<script>
import {createChart} from "_lightweight-charts@3.3.0@lightweight-charts";
import { createSocket } from '@sven0706/websocket'
export default {
  name: "Kline",
  mounted() {
    const chart = createChart(document.getElementById('k-line'), {
      width: 1400, height: 500,
    });
    // const chart2 = createChart(document.getElementById('histogram'), {
    //   width: 1400, height:200,
    // });
    chart.applyOptions({
      timeScale: {
        rightOffset: 12,
        barSpacing: 3,
        fixLeftEdge: true,
        lockVisibleTimeRangeOnResize: true,
        rightBarStaysOnScroll: true,
        borderVisible: false,
        borderColor: "#fff000",
        visible: true,
        timeVisible: true,
        secondsVisible: true
      }
    });
    this.kline = chart.addCandlestickSeries();
    // this.kline.applyOptions({
    //   upColor: "#FF7272",
    //   downColor: "#42C871"
    // });
    // this.histogram = chart2.addHistogramSeries({
    //   base: 10
    // });
    // const barSeries = chart.addBarSeries();
    // this.kline = candlestickSeries;
    this.kline.setData([]);
    // this.histogram.setData([]);
    console.log(this.kline);
    // this.initSocket("BTC-USDT", "1min");
    this.useSoket("BTC-USDT", "1min",);
    // this.timer = setInterval(()=>{
    //   this.is_draw = true;
    // },5000)
  },
  data(){
    return{
      kline:null,
      is_draw:true,
      histogram:null,
      k_data:[],
      timer:null,
      interval1:60,
      arr:[],
      arr2:[],
      query:{},
      timelocat:28800,
      timeType:60
    }
  },
  destroyed() {
    window.removeEventListener('onmessageWS', this.getsocketData)
  },
  methods:{
    useSoket(pairs, time){
      createSocket("ws://kline.bitfox.xyz/websocket/optionKline/" + pairs + "/" + time);
      window.addEventListener('onmessageWS', this.getsocketData)
    },
    getsocketData (e){  // 创建接收消息函数

      const data = e && e.detail.data

      console.log(JSON.parse(data));
      let a = JSON.parse(data).data;

      // this.kline.update({
      //   time: a.ctime,
      //   open: Number(a.open),
      //   high: Number(a.high),
      //   low: Number(a.low),
      //   close: Number(a.close)
      // })
      // if(parseInt(a.ctime)%60==0){
        if(this.is_draw){
        let obj = {
          time: a.ctime+this.timelocat,
          open: Number(a.open),
          high: Number(a.high),
          low: Number(a.low),
          close: Number(a.close)
        };
        this.arr.push(obj);
        console.log(a.increase.indexOf('+')==0)
        // this.arr2.push({
        //   time:  a.ctime+this.timelocat,
        //   value:parseFloat(a.increase.replace('%')),
        //   color:a.increase.indexOf('+')==0?'#FF7272':'#42C871'
        // //       '#ff0000'
        // // #42C871
        // })
        // this.kline.update(obj)
        // this.kline.update(obj)

        this.query = obj;
        this.is_draw = false;
      }else{
        // console.log(this.query.time)
        // this.arr.push({
        //   // time: new Date(this.query.time*1000).toUTCString().substring(17,25),
        //   // time: new Date(this.query.time*1000).toUTCString().substring(17,25),
        //   time: a.ctime+this.timelocat,
        //   open: Number(a.open),
        //   high: Number(a.high),
        //   low: Number(a.low),
        //   close: Number(a.close)
        // });
        // this.arr.push({
        //   time: this.query.time,
        //   open: Number(a.open),
        //   high: Number(a.high),
        //   low: Number(a.low),
        //   close: Number(a.close)
        // })
          this.arr.push({
          time: this.query.time,
          open: this.query.open,
          high: this.query.high,
          low: this.query.low,
          close: Number(a.close)
        })
        // this.kline.update({
        //
        //   time: this.query.time,
        //   open: this.query.open,
        //   high: this.query.high,
        //   low: this.query.low,
        //   close: Number(a.close)
        // })

        // this.arr2.push({
        //   time: this.query.time,
        //   value:parseFloat(a.increase.replace('%')),
        //   color:a.increase.indexOf('+')==0?'#ff0000':'#42C871'
        // })
        if(this.arr.length%this.timeType==0){
          this.is_draw  = true;
        }
        // this.kline.update({
        //
        //     time: this.query.time,
        //     open: this.query.open,
        //     high: this.query.high,
        //     low: this.query.low,
        //     close: Number(a.close)
        //   })
      }
      // console.log(this.arr)
      //   this.histogram.setData(this.arr2);
      this.kline.setData(this.arr);
      // setInterval(()=>{
      //   console.log(JSON.parse(data),'time');
      //   this.kline.update({
      //     // time: this.datechange(a.ctime),
      //     time: a.ctime,
      //     open: Number(a.open),
      //     high: Number(a.high),
      //     low: Number(a.low),
      //     close: Number(a.close)
      //   })
      // },15000)
      // let a = JSON.parse(data.data);
      // this.kline.setData([
      //   {}
      // ])

    },
    datechange(t){
      return  new Date(t).toISOString().substr(0, 10)
      // console.log(new Date(t).toISOString().substr(11, 17))
      // return  new Date(t).toISOString().substr(11, 17)
    },
    initSocket(pairs, time) {
      console.log("ws");
      var ws = new WebSocket(
          "ws://kline.bitfox.xyz/websocket/optionKline/" + pairs + "/" + time
      );
      ws.onopen = () => {
        console.log("ws has connected");
      };
      ws.onmessage = resp => {
        console.log(resp)
      };
      ws.onclose = () => {
        this.close();
      };
      ws.onerror = err => {
        this.error(err);
      };
    }
  }
}
</script>

<style scoped>
#k-line{
  width: 1550px;
  height: 575px;
}
</style>