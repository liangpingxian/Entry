<template>
  <div class="parameter-container">
    <page-head title="通用参数说明"></page-head>

    <div class="group-title">APP</div>

    <el-table
      class="parameter-table-content"
      :data="tableData"
      border=""
      style="width: 100%; margin-top: 10px">

      <el-table-column
        prop="param"
        label="参数"
        width="240">
      </el-table-column>

      <el-table-column
        prop="descText"
        label="说明">
      </el-table-column>

    </el-table>

    <div class="group-title">PC</div>

    <el-table
      class="parameter-table-content"
      :data="tableData"
      border=""
      style="width: 100%; margin-top: 10px">

      <el-table-column
        prop="param"
        label="参数"
        width="240">
      </el-table-column>

      <el-table-column
        prop="descText"
        label="说明">
      </el-table-column>

    </el-table>

    <div style="height: 50px"></div>
  </div>
</template>

<script>

import PageHead from '../../hu/components/PageHead'
export default {
  name: 'GeneralParameter',
  components: {PageHead},

  data () {
    return {
      tableData: [{
        param: 'id',
        type: 'string',
        isMust: '是',
        descText: '上海市普陀区金沙江路 1518 弄'
      }, {
        param: 'name',
        type: 'string',
        isMust: '是',
        descText: '上海市普陀区金沙江路 1517 弄'
      }, {
        param: 'pageNo',
        type: 'int',
        isMust: '否',
        descText: '上海市普陀区金沙江路 1519 弄'
      }, {
        param: 'pageSize',
        type: 'int',
        isMust: '否',
        descText: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style lang="scss">

  .parameter-container {
    text-align: left;

    .group-title {
      margin-left: 20px;
      margin-top: 12px;
      font-weight: bold;
      font-size: 14px;

    }

    .parameter-table-content {
      font-size: 14px;

      border-left: none;
      border-right: none;

      .cell {
        text-indent: 10px !important;
      }
    }
  }

</style>
