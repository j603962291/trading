<template>
  <div>
    <div class="beard-row">
      Bitfox > <span style="color: #3078FF;">牛年拉牛友，瓜分20000 USDT</span>
    </div>
    <v-divider></v-divider>
    <div class="article-block">
    <ul class="article-title-list">
      <li class="active">牛年拉牛友，瓜分20000 USDT</li>
      <li>牛年拉牛友，瓜分20000 USDT</li>
    </ul>
      <div class="article-content">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notify"
}
</script>

<style scoped lang="scss">
  .beard-row{
    height: 60px;
    padding-left: 320px;
    font-size: 12px;
    line-height: 60px;

  }
  .article-block{
    padding-left: 320px;
    margin-top: 40px;
    min-height: 800px;
    display: flex;
    .article-title-list{
      margin-right: 87px;
      li{
        width: 250px;
        height: 46px;
        font-size: 14px;
        box-sizing: border-box;
        padding: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 3px;
        cursor: pointer;
      }
      .active{
        background: #3078FF;
        color: #fff;
      }
    }
    .article-content{
      width: 640px;
      //min-height: 500px;
      background-color: #999;
    }
  }
</style>