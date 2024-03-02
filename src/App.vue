<template>
  <router-view></router-view>
</template>


<script>


import App1 from "@/components/App1.vue";
import App2 from "@/components/App2.vue";
import App3 from "@/components/App3.vue";
import App4 from "@/components/App4.vue";
import App5 from "@/components/App5.vue";
import App6 from "@/components/App6.vue";
import App7 from "@/components/App7.vue";
import App8 from "@/components/App8.vue";
import axiosApp1 from "@/components/axiostest/axiosApp1.vue";

export default {
  name: 'App',
  components: {App8, App7, App6, App5, App2, App1,App3,App4,axiosApp1},

}
</script>

<style scoped>

</style>
