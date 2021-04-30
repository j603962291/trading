<template>
  <div class="layout-inner">
   <div style="margin-bottom: 19px;">
     <v-tabs>
       <v-tab to="/web/Record/recharge">{{$t('Record.tab[0]')}}</v-tab>
       <v-tab to="/web/Record/withdraw">{{$t('Record.tab[1]')}}</v-tab>
     </v-tabs>
   </div>
    <transition name="app" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

</style>