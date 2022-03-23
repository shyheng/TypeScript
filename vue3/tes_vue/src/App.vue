<template>
  <div style="width:600px;margin-top:16px;margin-left:16px">
    <baidu-calendar @change="change" :range="range" @click="table = true"/>
  </div>
  <el-drawer
      v-model="table"
      title="任务"
      direction="rtl"
      size="50%"
  >
    <el-row :gutter="16">
      <el-col :span="8">
        <el-card shadow="always"> {{msg1}} </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always"> {{msg2}} </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always"> {{msg3}} </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always"> {{msg4}} </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always"> {{msg5}} </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always"> {{msg6}} </el-card>
      </el-col>
    </el-row>
  </el-drawer>

</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import moment from 'moment'
import {reactive, ref} from 'vue'

@Options({
  components: {
    HelloWorld,
  },
})


export default class App extends Vue {

  msg1 = null;
  msg2 = null;
  msg3 = null;
  msg4 = null;
  msg5 = null;
  msg6 = null;
  day;
  table = ref(false)
  range = [2019, 2025]


  async change(obj) {
    const {
      data: res
    } = await this.$http.get("json", {
      params: {day: obj.date}
    });
    this.msg1 = res.Msg2
    this.msg2 = res.Msg2
    this.msg3 = res.Msg3
    this.msg4 = res.Msg4
    this.msg5 = res.Msg5
    this.msg6 = res.Msg6
    this.day = res.Day
    console.log(this.msg1)
  }

}
</script>

<style>
.is-selected {
  color: #1989fa;
}
</style>

