<template>
  <v-app>
    <v-app-bar
      app
      :color="appBar_color"
      flat
    >
       <div class="app-header" style="">
        <div class="app-header-left">
          <v-img

              contain

              src="@/assets/images/logo.png"
              width="113"
              height="39"
          />
          <router-link style="color:#3989FF; " tag="div" to="/web/home">{{$t('navbar[0]')}}</router-link>
          <router-link tag="div" to="/web/layout">个人中心</router-link>
          <router-link tag="div" to="/web/interval_contracts">{{$t('navbar[1]')}}</router-link>
        </div>


         <div class="app-header-right">
           <router-link style="margin-right: 29px;" tag="div" to="/web/login">{{$t('navbar[2]')}}</router-link>
           <router-link tag="div" class="register" to="/web/register">{{$t('navbar[3]')}}</router-link>

<!--           <router-link style="margin-right: 53px;" tag="div" to="/web/download">{{$t('navbar[4]')}}</router-link>-->
              <j-download />
<!--           <j-user />-->
           <div class="text-center">
             <v-menu offset-y>
               <template v-slot:activator="{ on, attrs }">
                 <v-btn
                     color="transparent"
                      style="color: #fff;font-size: 12px;"
                     v-bind="attrs"
                     v-on="on"
                 >
                   {{$t('lang')}}  <v-icon
                     color="#fff"
                 >
                   mdi-menu-down
                 </v-icon>
                 </v-btn>
               </template>
               <v-list>
                 <v-list-item
                     v-for="(item, index) in items"
                     :key="index"
                     @click="selectLanguage(index)"
                 >
                   <v-list-item-title style="font-size: 12px;">{{ item.title }}</v-list-item-title>
                 </v-list-item>
               </v-list>
             </v-menu>
           </div>
         </div>
       </div>


<!--       </div>-->
    </v-app-bar>

    <v-main>
      <div class="app-container">
        <transition name="app" mode="out-in">
          <router-view />
        </transition>
      </div>
    </v-main>
  </v-app>
</template>

<script>



import JDownload from "@/components/j-components/j-download";
export default {
  name: 'App',
  data(){
    return{
      appBar_color:'',
      route_path:'',
      items: [
        { title: '简体中文',lang:'zh-cn' },
        { title: '繁體中文',lang: 'zh-tw' },
        { title: 'English',lang: 'en' },
        // { title: 'Click Me3' },
        // { title: 'Click Me 2' },
      ],
    }
  },
  components: {
    JDownload

  },
  watch:{
    "$route":{
      handler(n,o){
        console.log(n);
        if(n.path =='/web/home'){
          this.appBar_color = 'transparent';
          this.route_path = n.path;
          window.addEventListener('scroll',this.handleScrollWindow);

        }else{
          this.appBar_color = '#191B20';
          window.removeEventListener('scroll',this.handleScrollWindow);
          this.$forceUpdate();

        }
      },
      immediate:true
    },
    // route_path:{
    //   handler(n,o){
    //     if (n=='/web/home'){
    //      window.addEventListener('scroll',this.handleScrollWindow);
    //     }else{
    //       window.removeEventListener('scroll',()=>{})
    //     }
    //   }
    // }
  },
  mounted() {

    // this.$http.getHomeListApi().then(res=>{
    //   console.log(res);
    // })
  },
methods:{
  handleScrollWindow(){
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("滚动距离" + scrollTop);
    if(scrollTop>=370){
      this.appBar_color = '#191B20';
    }else if (scrollTop<270){
      this.appBar_color = 'transparent';
    }
  },
  selectLanguage(index){
    // console.log(this.items[index].lang);
    this.$i18n.locale = this.items[index].lang;
    this.$forceUpdate();
  }
}

};
</script>
<style scoped lang="scss">
.app-container{
  width: 100%;
  margin: 0 auto;
  height: 100%;
  //height: 1920px;
}
.app-header{
  width: 100%!important;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 220px;
  .app-header-left{
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      cursor: pointer;
      margin-left: 73px;
      color: #fff;
      font-size: 12px;
      line-height: 18px;
    }
  }
  .app-header-right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 12px;
    div{
      cursor: pointer;
    }
    .register{
       margin-right: 41px;
      padding: 9px 22px;
      background: #2D60E0;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
