<template>
  <div>
    <span v-bind:id="testAttribute">Message: {{ this.msg }}</span><br/>
    <button @click="changeWords">click words</button><br/>
    <button @click="changeColor">click color</button><br/>
    <span>{{directFunction()}}</span><br/>
    <a v-on:click="doSomething"> ... </a>
  </div>
</template>

<script>
import {nextTick} from "vue";
export default {
  name: "App1",
  data() {
    return {
      msg: "Hello World!",
      testAttribute:"blueAttribute",
    }
  },

  methods: {
    async increment() {
      this.count++
      await nextTick()
      // 当你修改了响应式状态时，DOM 会被自动更新。但是需要注意的是，DOM 更新不是同步的。
      // Vue 会在“next tick”更新周期中缓冲所有状态的修改，以确保不管你进行了多少次状态修改，每个组件都只会被更新一次。
    },
    changeWords(){
      this.msg="Hello Vue!"
    },
    changeColor(){
      this.testAttribute="redAttribute"
    },
    doSomething(){
      console.log("doSomething")
    },
    directFunction(){
      return "directFunction"
    }
  },

  // `mounted` 是生命周期钩子，之后我们会讲到
  mounted() {
    // `this` 指向当前组件实例
    console.log(this.count) // => 1
    // 数据属性也可以被更改
    this.count = 2
  }
}
</script>

<style scoped>
#blueAttribute{
  color: blue;
}
#redAttribute{
  color: red;
}
</style>