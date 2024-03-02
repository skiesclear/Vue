<template>
  <div>
    <button @click="count++">Add 1</button>
    <p>Count is: {{ count }}</p>
    <hr/>
    <button @click="greet">Greet</button>
    <hr/>
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>

<!--    有时我们需要在内联事件处理器中访问原生 DOM 事件。-->
<!--    你可以向该处理器方法传入一个特殊的 $event 变量，或者使用内联箭头函数：-->
    <!-- 使用特殊的 $event 变量 -->
    <button @click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>

    <!-- 使用内联箭头函数 -->
    <button @click="(event) => warn('Form cannot be submitted yet.', event)">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: "App5",
  data() {
    return {
      count: 0,
      name: 'Vue.js'
    }
  },
  methods: {
    greet() {
      alert(`Hello ${this.name}!`)
    },
    say(message) {
      alert(message)
    },
    warn(message, event) {
      // 这里可以访问 DOM 原生事件
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }


}
</script>

<style scoped>

</style>