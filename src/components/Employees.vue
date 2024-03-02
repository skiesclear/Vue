<template>
<div>
  <table border="1" align="center">
    <tr>
      <td>FirstName:</td>
      <td><input v-model.lazy.trim="firstName"></td>
    </tr>
    <tr>
      <td>LastName:</td>
      <td><input v-model.lazy.trim="lastName"></td>
    </tr>
    <tr>
      <td colspan="2" align="center">
        <button v-on:click="searchEmployees">Search</button>
      </td>
    </tr>
    <tr v-for="emp in employees">
      <td>{{ emp.firstName }}</td>
      <td>{{ emp.lastName }}</td>
    </tr>
  </table>
  </div>
</template>

<script>
import API from "@/axios/axiosInstance.js";

export default {
  name: "Employees",
  data() {
    return {
      firstName: 'sa',
      lastName: '',
      employees: []
    }
  },
  methods: {
    searchEmployees: function () {
      API.get('employees/findByName', {
        params: {
          firstName: this.firstName,
          lastName: this.lastName
        }}).then((response) => {
          console.log(response);
          console.log(response.data);
          console.log(response.data.data);
          this.employees = response.data.data;
        })

    },
  },
  watch: {
    firstName: "searchEmployees",
    lastName: "searchEmployees",
  },
  created: function () {
    this.searchEmployees();
  },
}
</script>

<style scoped>

</style>