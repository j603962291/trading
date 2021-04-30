<template>
  <div class="layout">

      <v-navigation-drawer
          absolute
          color="#f2f5fa"
          width="209"
          height="100%"
          style="float: left;"
          permanent
      >
                    <v-list>

                      <v-list-item
                          v-for="(item, i) in sider_list"
                          :key="i"
                          :to="item.path"
                          :style="{background:$route.meta.root==item.path?'#fff':'transparent'}"
                      >
                         <div :style="{width:item.meta.size.w,height:item.meta.size.h,marginRight:'10px'}">
                           <v-img :width="item.meta.size.w" :height="item.meta.size.h"  :src="$route.meta.root==item.path?item.meta.icon_select:item.meta.icon"></v-img>
                         </div>
                        <v-list-item-content>
                          <v-list-item-title style="font-size: 14px;" :style="{color:$route.meta.root==item.path?'#0A6FF6':'#333'}" v-text="$t(item.meta.title)"></v-list-item-title>
                        </v-list-item-content>
                         </v-list-item>
         </v-list>
      </v-navigation-drawer>

    <div class="layout-app-container" >
      <transition name="app" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import sider from '@/router/layout';
export default {
  name: "Layout",
  data () {
    return {
      sider_list: [],
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    }
  },
  created() {
    this.sider_list = sider.filter(item=>item.meta);
    console.log(this.sider_list)
  },
  mounted() {
    document.querySelector('.v-navigation-drawer__border');

  }
}
</script>

<style scoped lang="scss">
.layout{
  width: 100%;
  height: 100%;
  .layout-app-container{
    background-color: #fff;
    height: 100%;
    margin-left:209px;
    min-width: 1710px;
    //overflow-x: scroll;
  }
  //.layout:after{
  //  content: "";
  //  height: 0;
  //  line-height: 0;
  //  display: block;
  //  visibility: hidden;
  //  clear: both;
  //}
}
.actived{
  background-color: #fff;
  color: #0A6FF6;
}
.v-navigation-drawer__border{
  border: none!important;
  background-color:transparent!important;
  width: 0!important;
}

</style>