<template>
  <div style="width:600px;margin-top:16px;margin-left:16px">
    <baidu-calendar @change="change" :range="range" />
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
      <br><br><br><br>
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
    <br><br><br><br>
    <el-button type="primary" @click="dialogVisible = true">加入任务</el-button>
  </el-drawer>
  <el-dialog v-model="dialogVisible" title="任务修改" width="30%" draggable>
    <div>
      <el-form label-width="120px">
        <el-form-item label="任务一">
          <el-input v-model="msg1" />
        </el-form-item>
        <el-form-item label="任务二">
          <el-input v-model="msg2" />
        </el-form-item>
        <el-form-item label="任务三">
          <el-input v-model="msg3" />
        </el-form-item>
        <el-form-item label="任务四">
          <el-input v-model="msg4" />
        </el-form-item>
        <el-form-item label="任务五">
          <el-input v-model="msg5" />
        </el-form-item>
        <el-form-item label="任务六">
          <el-input v-model="msg6" />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import moment from 'moment'
import { ElMessage } from 'element-plus'
import {reactive, ref} from 'vue'

@Options({
  components: {
    HelloWorld,
  },
})


export default class App extends Vue {

  msg1 = null;msg2 = null;msg3 = null;msg4 = null;msg5 = null;msg6 = null;
  day;
  f = ref(false)
  t = ref(true)
  table = ref(false)
  range = [2019, 2025]
  dialogVisible = ref(false)

  async change(obj) {
    this.table = this.t
    const {
      data: res
    } = await this.$http.get("json", {
      params: {day: obj.date}
    });
    this.msg1 = res.Msg1
    this.msg2 = res.Msg2
    this.msg3 = res.Msg3
    this.msg4 = res.Msg4
    this.msg5 = res.Msg5
    this.msg6 = res.Msg6
    this.day = obj.date
  }
  async onSubmit () {
    this.dialogVisible = this.f
    const {data: res} = await this.$http.get("cu", {
      params: {
        day: this.day,
        msg1:this.msg1,
        msg2:this.msg2,
        msg3:this.msg3,
        msg4:this.msg4,
        msg5:this.msg5,
        msg6:this.msg6,}
    });
    if (res){
      ElMessage({
        showClose: true,
        message: '成功',
        type: 'success',
      })
    }else {
      ElMessage({
        showClose: true,
        message: '失败',
        type: 'error',
      })
    }

  }
}
</script>

<style>
.is-selected {
  color: #1989fa;
}
</style>

