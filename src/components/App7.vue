<template>
<div>
  <span>{{count}}</span>
  <br/>
  <button @click="count++">Add 1</button>
</div>
</template>

<script>
export default {
  name: "App7",
  data() {
    return {
      count: 0,
      name: 'Vue.js'
    }
  },
  mounted() {
    console.log('App7 mounted')

  },
  beforeUpdate() {
    console.log('App7 beforeUpdate')

  },
  updated() {
    console.log('App7 updated')
  },
  unmounted() {
    console.log('App7 unmounted')

  }
}
</script>

<style scoped>

</style>