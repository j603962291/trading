<template>
  <div id="tradingview_4f066" style="">

  </div>
</template>
<script>
export default {
  mounted() {
    new TradingView.widget(
        {
          "width": 1550,
          "height": 580,
          "symbol": "BITBAY:BTCUSDT",
          "interval": "1",
          "timezone": "Asia/Shanghai",
          "theme": "dark",
          "style": "8",
          "locale": "zh_CN",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "container_id": "tradingview_4f066"
        }
    );
  }
}
</script>