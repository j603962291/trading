<template>
  <div class="text-center">
    <v-menu
        v-model="menu"
        :nudge-width="200"
        offset-Y
        transition="scale-transition"
        :close-on-click="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <div  v-bind="attrs"
              v-on="on">
          {{$t('navbar[4]')}}
        </div>
      </template>

      <v-card>
       <div class="user-block">
         <v-list>
           <v-list-item>
             <v-list-item-avatar>
               <v-img
                   width="42"
                   height="42"
                   src="https://cdn.vuetifyjs.com/images/john.jpg"
                   alt="John"
               />
             </v-list-item-avatar>

             <v-list-item-content>
               <v-list-item-title>
                 <div style="display: flex;align-items: center;">
                   <span style="font-size: 16px;margin-right: 7px;font-weight: bold;">John Leider</span>
                   <div class="user-tag">
                      <span style="margin-right: 4px">
                        <v-img width="12" height="11" src="@/assets/images/vip.png" />
                      </span>
                      <span style="font-size: 12px;transform: scale(0.9);color: #FFD4A5;">
                        {{$t('UserCard.vip')}}
                      </span>
                   </div>
                 </div>
               </v-list-item-title>
               <v-list-item-subtitle><span style="font-size: 12px;font-weight: bold;">
                UID:313511
              </span></v-list-item-subtitle>
             </v-list-item-content>

             <v-list-item-action>

             </v-list-item-action>
           </v-list-item>
         </v-list>

         <v-divider></v-divider>

         <v-list>
           <v-list-item v-for="(item,index) in sider_list" :key="index" :to="item.path">
             <v-list-item-action>
               <div>
                 <v-img :src="item.meta.u_icon" :width="item.meta.u_size.w" :height="item.meta.u_size.h" />
               </div>
             </v-list-item-action>
             <v-list-item-title>
               <span style="font-size: 13px;color: #666;">{{$t(item.meta.title)}}</span>
             </v-list-item-title>
           </v-list-item>

         </v-list>

       </div>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import sider from '@/router/layout';
export default {
  data: () => ({
    sider_list: [],
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  created() {
    this.sider_list = sider.filter(item=>item.meta);
    console.log(this.sider_list)
  },
}
</script>

<style scoped lang="scss">
  .user-block{
    width: 360px;
    height: 400px;
    padding: 0 22px;
    .user-tag{
      padding: 4px;
      background: #3B3B3B;
      border-radius: 3px;
      display: flex;
      align-items: center;
    }
  }
</style>