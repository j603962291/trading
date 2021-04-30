<template>
  <div style="width: 364px;height: 579px;font-size: 12px;padding: 0 10px;">
      <div class="record-title">
        <span>{{$t('Kline.time')}}</span>
        <span>{{$t('Kline.time')}}</span>
      </div>
    <ul class="list">
      <li v-for="item in 20" :key="item">
        <span class="time">2021-03-01 12:08</span>
        <span class="up" :class="item%2==0?'down':''">+0.004%</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Deal_Record"
}
</script>

<style scoped lang="scss">
.record-title{
display: flex;
  justify-content: space-between;
  align-items: center;
  color: #65686D;
}
.list{
  width: 100%;
  overflow-y: scroll;
  height: 579px;
  padding: 0;
  li{
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time{
      color: #C4CADB;
    }
    .up{
      color: #56BD8E;
    }
    .down{
      color: #FF7372;
    }
  }
}
</style>