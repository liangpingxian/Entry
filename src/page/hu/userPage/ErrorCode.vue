<template>

  <div>
    <page-head title="全局错误码说明"></page-head>

    <el-table
      class="error-table-content"
      :data="tableData"
      border=""
      style="width: 100%;">

      <el-table-column
        prop="param"
        label="错误码"
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
  import PageHead from "../LeftSide/PageHead";

    export default {
        name: "ErrorCode",
      components: {PageHead},
      data() {
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



  .el-table {

  }

  .error-table-content {
    font-size: 14px;
    border-left: none;
    border-right: none;

    .cell {
      text-indent: 10px !important;
    }

    .el-table__row {

      .el-table_1_column_1 {

      }

    }

  }

</style>
