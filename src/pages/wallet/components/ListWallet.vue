<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Number" width="180"> </el-table-column>
    <el-table-column prop="name" label="Name" width="180"> </el-table-column>
    <el-table-column prop="total" label="Total"> </el-table-column>
    <el-table-column prop="action" label="Action"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          total: '100.000 $'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          total: '100.000 $'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          total: '100.000 $'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          total: '100.000 $'
        }
      ]
    }
  }
}
</script>
