<template>
  <div class="contracts-container">
    <div id="k-line" >

    </div>
  </div>
</template>

<script>
var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
  var now = new Date(base += oneDay);
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

export default {
  name: "Interval_Contracts",

  mounted() {
    this.drawLine();

  },
  created() {

  },
  data(){

    return {
      option: {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        title: {
          left: 'center',
          text: '大数据量面积图',
        },
        // toolbox: {
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: 'none'
        //     },
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // data: date
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 10
        }, {
          start: 0,
          end: 10
        }],
        series: [
          {
            name: '模拟数据',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(255, 158, 68)'
              }, {
                offset: 1,
                color: 'rgb(255, 70, 131)'
              }])
            },
            // data: data
          }
        ]
      }
    };
  },
  methods:{
    drawLine() {

      var option = this.option;
      // console.log(option)
      option.xAxis.data = ['01','02','03','04','05','06','07','08','09','10','11','12 (月)'];
      option.series[0].data = [21,25,27,12,22,21,25,27,12,22,42,32];
      var myChart = this.$echarts.init(document.getElementById("k-line"));
      myChart.setOption(option);
      // option && myChart.setOption(option);
    },
  }
}
</script>

<style scoped>
#k-line {
  width: 1552px;
  height: 575px;
}
</style>