<template>
  <div>
  <div v-for="item in items">
    {{ item.message }}
  </div>

  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
    <li v-for="(value, key) in myObject">
      {{ key }}: {{ value }}
    </li>

    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>

    <span v-for="n in 10">{{ n }}</span>
  </div>
</template>

<script>
export default {
  name: "App4",
  data() {
    return {
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}
</script>

<style scoped>

</style>