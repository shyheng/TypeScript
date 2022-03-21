<template>
  <el-calendar>
    <template #dateCell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        <br>
        {{data.day===day ? msg :'' }}
        {{ data.isSelected ? but(data.day) : '' }}
      </p>
    </template>
  </el-calendar>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import moment from 'moment'



@Options({
  components: {
    HelloWorld,
  },
  beforeCreate() {

  }
})

export default class App extends Vue {

  msg;
  day = moment(new Date()).format("YYYY-MM-DD")

  public but(s:string){

  }

   async show(){
    await this.$http.get("/json").then((response) => {
      this.msg = response.data.Msg
      return this.msg
    })
    console.log(this.msg)
    return this.msg
  }
}
</script>

<style>
.is-selected {
  color: #1989fa;
}
</style>

