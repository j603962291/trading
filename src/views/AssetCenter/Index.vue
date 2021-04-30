<template>
  <div>
    <div class="asset">
      <transition name="app" mode="out-in">
      <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>
.asset{
  width: 100%;
  height: 100%;
}
</style>