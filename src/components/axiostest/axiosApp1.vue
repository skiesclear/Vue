<template>
<div>
  <el-table :data="jobs" style="width: 100%">
    <el-table-column prop="jobId" label="jobId" width="180" />
    <el-table-column prop="jobTitle" label="jobTitle" width="180" />
    <el-table-column prop="minSalary" label="minSalary" width="180" />
    <el-table-column prop="maxSalary" label="maxSalary" width="180" />
  </el-table>
</div>
</template>
<script>
import API from "@/axios/axiosInstance.js";
export default {
  name: "axiosApp1",
  data() {
    return {
      emp: [],
      jobs:[],
      size:5,
      pageNumber:1
    }
  },
  created() {
    API({
      url:'/jobs/list',
      method:'get',
      params:{
        size:this.size,
        pageNumber:this.pageNumber
      }
    }).then((res)=>{
      // alert('请求成功!');
      this.jobs=res.data;
    });
  }
}
</script>

<style scoped>

</style>