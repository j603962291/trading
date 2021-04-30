<template>
  <div class="container">
    <v-card>
      <div class="author-title-block">
        <div class="title">
          {{$t('Identity.title')}}
        </div>
        <ul class="tips-list">
          <li>{{$t('Identity.tips[0]')}}</li>
          <li>{{$t('Identity.tips[1]')}}</li>
          <li>{{$t('Identity.tips[2]')}}</li>
        </ul>
      </div>
    </v-card>
    <div style=" margin-top: 14px;">
      <v-card>
        <div class="author-list-block">
          <div class="select-row">
                            <div class="input-item">
                              <div class="select-label">{{$t('Identity.input.label[0]')}}</div>
                              <el-select class="select-item" style="width: 330px;" v-model="value" :placeholder="$t('Identity.input.placeholder[0]')" >

                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                              </el-select>
                            </div>
            <div class="input-item" style="margin-left: 13px;">
              <div class="select-label">{{$t('Identity.input.label[1]')}}</div>
              <el-input v-model="input" style="width: 330px;" :placeholder="$t('Identity.input.placeholder[1]')"></el-input>
            </div>
            <div class="input-item" style="margin-left: 13px;">
              <div class="select-label">{{$t('Identity.input.label[2]')}}</div>
              <el-input v-model="input" style="width: 330px;" :placeholder="$t('Identity.input.placeholder[2]')"></el-input>
            </div>
          </div>
          <div style="margin-top: 22px;">
            <v-btn color="#3078FF" class="submit-btn">{{$t('Identity.input.submit')}}</v-btn>
          </div>
        </div>
      </v-card>
    </div>

  </div>
</template>

<script>
import {Select,Option,Input} from 'element-ui';
import Vue from 'vue';
Vue.use(Select).use(Option).use(Input);
export default {
  name: "Identity_Author",
  data(){
    return{
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input:''
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  color: #333;

  width: 100%;
  height: 100%;
  padding: 28px 28px 0 28px;
  .author-title-block{
    height: 156px;
    background-color: #fff;
    box-shadow: 0px 17px 83px 0px rgba(35, 24, 65, 0.1);
    padding: 30px 28px;
    .title{
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .tips-list{
      color: #666;
      font-size: 12px;
      li{
        list-style-type: disc;

        line-height: 20px;
      }

    }

  }
  .author-list-block{
    width: 100%;
    height: 700px;
    background-color: #fff;
    box-shadow: 0px 17px 83px 0px rgba(35, 24, 65, 0.1);
    border-radius: 5px;
    padding: 32px 28px;
    .select-row{
      display: flex;
      .input-item{
        display: flex;
        //justify-content: ;
      align-items: center;
        .select-label{
          display: flex;
          height: 100%;
          justify-content: center;
          align-items: center;
          //width: 60px;
          margin-right: 10px;
          font-weight: 600;
          font-size: 14px;
        }
      }

    }
  }
  .submit-btn{
    padding: 16px 120px;
    color: #fff;
  }
}
</style>