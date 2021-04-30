<template>
  <div class="text-center">
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-Y
        transition="scale-transition"
    >
      <template v-slot:activator="{ on, attrs }">
          <div  style="margin-right: 53px;" v-bind="attrs"
                v-on="on">
            {{$t('navbar[4]')}}
          </div>
      </template>

      <v-card>
          <div class="download-block">
            <div class="d-title">
              {{$t('Download.title')}}
            </div>
            <div class="d-subtitle">
              {{$t('Download.subtitle')}}

            </div>
            <ul class="qrcode-list">
              <li>
                <div class="img">
                  <v-img width="115" height="115" src="@/assets/images/qrcode.png" />
                </div>
                <div class="bottom">
                  <div class="icon">
                    <v-img width="13" height="15" src="@/assets/images/logo/Android.png" />
                  </div>
                  <span>Android</span>
                </div>
              </li>
              <li>
                <div class="img">
                  <v-img width="115" height="115" src="@/assets/images/qrcode.png" />
                </div>
                <div class="bottom">
                  <div class="icon">
                    <v-img width="13" height="15" src="@/assets/images/logo/Android.png" />
                  </div>
                  <span>IOS</span>
                </div>
              </li>
            </ul>

<!--            <v-card-actions>-->
<!--              <v-spacer></v-spacer>-->

<!--              <v-btn-->
<!--                  text-->
<!--                  @click="menu = false"-->
<!--              >-->
<!--                Cancel-->
<!--              </v-btn>-->
<!--              <v-btn-->
<!--                  color="primary"-->
<!--                  text-->
<!--                  @click="menu = false"-->
<!--              >-->
<!--                Save-->
<!--              </v-btn>-->
<!--            </v-card-actions>-->
          </div>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
}
</script>

<style scoped lang="scss">
.download-block{
  width: 310px;
  height: 230px;
  padding: 20px 28px;
  .d-title{
font-size: 14px;
    text-align: center;
    margin-bottom: 7px;
  }
  .d-subtitle{
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-bottom: 14px;
  }
.qrcode-list{
  display: flex;
  justify-content: space-between;
  padding: 0;
  li{
    margin: 0 8px;
  }
  .img{
    width: 115px;
    height: 115px;
  }
  .bottom{
    display: flex;
    justify-content: center;
    align-items: center;
    .icon{
      width: 13px;
      height: 15px;
      margin-right: 6px;
    }
    span{
      font-size: 12px;
    }
  }
}
}

</style>