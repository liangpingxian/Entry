<template>

  <div class="interface-container">

    <el-button class="right-button" size="mini" @click="pushToSummary">更新日志</el-button>

    <page-head title="获取模板信息"></page-head>

    <div class="group-title">接口说明</div>

    <p class="group-content">接口说明接口说明接口说明接口说明接口说明接口说明
      接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明接口说明
    </p>

    <p class="group-content">这个是注意事项</p>

    <div class="group-title">接口地址</div>

    <p class="group-content">questlocalhost</p>

    <div class="group-title">HTTP请求方式</div>

    <p class="group-content">GET</p>

    <div class="group-title">请求参数</div>

    <el-table
      class="table-content"
      :data="tableData"
      border=""
      style="width: 100%; margin-top: 10px">

      <el-table-column
        prop="param"
        label="参数"
        width="150">
      </el-table-column>

      <el-table-column
        prop="type"
        label="类型"
        width="150">
      </el-table-column>

      <el-table-column
        prop="isMust"
        label="是否必填"
        width="150">
      </el-table-column>

      <el-table-column
        prop="descText"
        label="说明">
      </el-table-column>

    </el-table>

    <div class="group-title">返回结果</div>
    <p class="group-content">JSON示例</p>

    <div class="group-content">
      <el-input
        type="textarea"
        :rows="8"
        readonly="true"
        resize="none"
        v-model="textarea">
      </el-input>
    </div>

    <div class="group-title">返回参数</div>

    <el-table
      class="table-content"
      :data="tableData"
      border=""
      style="width: 100%; margin-top: 10px">

      <el-table-column
        prop="param"
        label="参数"
        width="150">
      </el-table-column>

      <el-table-column
        prop="type"
        label="类型"
        width="150">
      </el-table-column>

      <el-table-column
        prop="isMust"
        label="是否必填"
        width="150">
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
  name: 'InterfaceDetail',
  components: {PageHead},
  data () {
    var descAreaText = '海市普陀区金沙江路上市普陀区金沙江普陀区金沙江路上海市路123'
    for (var i = 0; i < 10; i++) {
      descAreaText = descAreaText + descAreaText
    }
    return {
      textarea: descAreaText,
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
      }],

      openeds: ['1', '2'],
      selectMainId: 'summary',
      menuData: [
        {
          mainId: 'start',
          mainTitle: '开始',
          itemArray: [
            {
              subId: 'summary',
              subName: '概述'
            },
            {
              subId: 'updateLog',
              subName: '更新日志'
            },
            {
              subId: 'generalParameter',
              subName: '通用参数说明'
            },
            {
              subId: 'errorCode',
              subName: '全局错误码'
            }
          ]
        },
        {
          mainId: 'interfaceDetail',
          mainTitle: '接口分类',
          itemArray: [
            {
              subId: '121',
              subName: '接口A'
            },
            {
              subId: '122',
              subName: '接口B'
            },
            {
              subId: '123',
              subName: '接口C'
            }
          ]
        }
      ],

      data: {

      },
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>

<style lang="scss">

  .interface-container {
    text-align: left;

    .right-button {
      height: 30px;
      width: 80px;
      float: right;
      margin-top: 10px;
      margin-right: 20px;
    }

    .group-title {
      margin-left: 20px;
      margin-top: 12px;
      font-weight: bold;
      font-size: 14px;

    }
    .group-content {
      margin-left: 20px;
      margin-right: 20px;
      margin-top: 8px;
      font-size: 14px;

      .el-textarea__inner {
        padding: 5px 5px 5px 8px;
        border-color: rgb(242,243,244);
        border-radius: 1px;
      }
    }

    .table-content {
      font-size: 14px;
    }
  }
</style>
