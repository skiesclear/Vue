<template>
  <div>
    <button @click="awesome = !awesome">Toggle</button>
    <br/>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <hr/>
    <span v-show="false">okokok</span>
    <br/>
    <button @click="changeType">Toggle1</button>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
  </div>

</template>

<script>
export default {
  name: "App3",
  data() {
    return {
      awesome: true,
      type: 'B'
    }
  },
  methods: {
    changeType() {
      if (this.type === 'A') {
        this.type = 'B'
      } else if (this.type === 'B') {
        this.type = 'C'
      } else if (this.type === 'C') {
        this.type = 'D'
      } else {
        this.type = 'A'
      }
    }
  },

}
</script>

<style scoped>

</style>