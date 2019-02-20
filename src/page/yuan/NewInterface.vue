<template>
  <div class="newInterface">
    <div class="header">
      <div class="right">
        <el-button>添加</el-button>
      </div>
    </div>

    <div class="main">
      <div class="main-header clearfix line">
        <div class="left">
          <p><b>新增接口</b></p>
        </div>
        <div class="right">
          <el-dropdown>
            <span class="el-dropdown-link">
              添加
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown-menu">
              <el-dropdown-item>切换成模板</el-dropdown-item>
              <el-dropdown-item>切换成接口新增</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="container">
        <div id="form">
          <el-form ref="editForm" :model="data" label-width="100px" label-position="left" size="mini">
            <span class="title"><b>基本信息</b></span>

            <el-form-item label="接口名字">
              <el-input v-model="data.name"></el-input>
            </el-form-item>
            <el-form-item label="所属分类">
              <el-select v-model="data.category" placeholder="请选择">
                <el-option label="首页" value="shoye"></el-option>
                <el-option label="业务建模" value="yewujianmo"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="接口说明" class="textarea" style="width: 100%;">
              <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 20}" placeholder="请输入" v-model="data.instructions">
              </el-input>
            </el-form-item>
            <el-form-item style="width: 100%;" label="注意事项" class="textarea">
              <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 20}" placeholder="请输入" v-model="data.attention">
              </el-input>
            </el-form-item>
            <el-form-item style="width: 100%;" label="接口地址">
              <el-input v-model="data.address" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="接口类型">
              <el-select v-model="data.type" placeholder="请选择">
                <el-option label="post" value="post"></el-option>
                <el-option label="get" value="get"></el-option>
              </el-select>
            </el-form-item>

            <div class="line">
            </div>

            <span class="title"><b>请求参数</b></span>

            <tree-table :data="data.requestParameters.data" :columns="columns" style="width: 100%" size="mini" border>
            </tree-table>
            <el-form-item label="返回结果" class="el-form-item-margin-top" style="width: 100%;">
              <el-select v-model="data.requestParameters.result" placeholder="请选择" style="width: 50%;">
                <el-option label="12312312" value="shoye"></el-option>
                <el-option label="321312321" value="yewujianmo"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item style="width: 100%;">
              <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 20}" placeholder="请输入" v-model="data.requestParameters.content">
              </el-input>
            </el-form-item>

            <div class="line"></div>
            <span class="title"><b>返回字段说明</b></span>
            <tree-table :data="data.returnFieldInstructions.data" :columns="returnColumns" style="width: 100%" size="mini"
              border>
            </tree-table>

            <div class="line"></div>
            <span class="title"><b>内链</b></span>
            <tree-table :data="data.internalChain.data" :columns="internalChainColumns" style="width: 100%" size="mini"
              border>
            </tree-table>

            <el-form-item label="通知人" class="el-form-item-margin-top">
              <el-select v-model="data.internalChain.notifier" placeholder="请选择">
                <el-option label="李" value="li"></el-option>
                <el-option label="荒" value="huang"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="submitButtons clearfix">
      <el-button>保存</el-button>
      <el-button type="primary">提交</el-button>
    </div>
    <br>
    <br>
    <br>
    <br>

  </div>
</template>

<script>
import treeTable from '@/components/TreeTable'

export default {
  components: {
    treeTable
  },
  data () {
    return {
      columns: [{
        type: 'input',
        placeholder: '请输入',
        prop: 'name',
        label: '参数',
        width: '230',
        minWidth: '150'
      }, {
        type: 'select',
        placeholder: '请选择',
        prop: 'type',
        label: '类型',
        width: '230',
        minWidth: '150',
        options: [{
          label: 'Array',
          value: 'Array'
        },
        {
          label: 'Number',
          value: 'Number'
        },
        {
          label: 'String',
          value: 'String'
        },
        {
          label: 'null',
          value: 'null'
        },
        {
          label: 'undefined',
          value: 'undefined'
        }
        ]
      },
      {
        type: 'checkbox',
        prop: 'required',
        label: '是否必填',
        width: '100',
        minWidth: '50'
      },
      {
        type: 'input',
        placeholder: '请输入',
        prop: 'explain',
        label: '说明',
        minWidth: '150'
      }
      ],
      returnColumns: [{
        type: 'input',
        placeholder: '请输入',
        prop: 'name',
        label: '返回值字段',
        width: '230',
        minWidth: '150'
      },
      {
        type: 'select',
        placeholder: '请选择',
        prop: 'type',
        label: '类型',
        width: '230',
        minWidth: '150',
        options: [{
          label: 'Array',
          value: 'Array'
        },
        {
          label: 'Number',
          value: 'Number'
        },
        {
          label: 'String',
          value: 'String'
        },
        {
          label: 'null',
          value: 'null'
        },
        {
          label: 'undefined',
          value: 'undefined'
        }
        ]
      },
      {
        type: 'input',
        prop: 'explain',
        label: '字段说明',
        width: '230',
        minWidth: '150'
      },
      {
        type: 'input',
        placeholder: '请输入',
        prop: 'remark',
        label: '备注',
        minWidth: '150'
      }
      ],
      internalChainColumns: [{
        type: 'input',
        placeholder: '请输入',
        prop: 'name',
        label: '内链名称',
        width: '230',
        minWidth: '150'
      },
      {
        type: 'select',
        placeholder: '请选择',
        prop: 'address',
        label: '内链地址',
        minWidth: '150'
      }
      ],
      space: 10,
      data: {
        name: '登录接口',
        category: '首页',
        instructions: null,
        attention: '修改需要备注',
        address: null,
        type: 'post',
        requestParameters: {
          data: [{
            name: 'id',
            type: 'array',
            required: true,
            explain: '唯一id',
            children: []
          }],
          result: {
            type: 'Json',
            content: ''
          }
        },
        returnFieldInstructions: {
          data: [{
            name: 'id',
            type: null,
            explain: '唯一id',
            remark: null,
            children: []
          }]
        },
        internalChain: {
          data: [{
            name: 'id',
            address: null,
            children: []
          }],
          notifier: null
        }
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

  $space-width: 15px;

  .clearfix::before,
  .clearfix::after {
    content: '';
    display: table;
  }

  /* .container::after, */
  .clearfix::after {
    clear: both;
  }

  .newInterface {
    background-color: #e5edf6;
    min-height: 200px;
  }

  .header {
    background-color: white;
    height: 60px;
    line-height: 60px;

    .right {
      position: absolute;
      right: 10px;
      width: 80px;
    }

    el-button {
      height: 60px;
      line-height: 60px;
    }
  }

  .main {
    background-color: white;
    margin: 10px;
    padding: 0 $space-width 1px;

    .container span {
      display: block;
      text-align: left;
    }

    .container {
      .title {
        height: 50px;
        line-height: 50px;
      }
    }
  }

  .main-header {
    height: 50px;
    position: relative;
    margin: 0;
    padding: 0;

    .left {
      float: left;
      margin: 0;
      height: 50px;
      line-height: 50px;
    }

    .right {
      float: right;
      margin: 10px 0 0;
      width: 40px;
      height: 30px;
      line-height: 30px;
    }

    p {
      display: inline;
    }
  }

  .el-form-item {
    margin-bottom: 10px;
  }

  .line {
    border-bottom: 1px solid #eff0f2;
  }

  .el-form-item-margin-top {
    margin-top: 20px;
  }
  .submitButtons {
    float: right;
    margin-right: $space-width;
  }

</style>

<style>
  .dropdown-menu {
    margin: 0;
    padding: 0;
  }

  .el-form-item {
    width: 50%;
  }

  .el-form {
    width: 100%;
  }

  .el-form-item .el-select,
  .el-form-item .el-input,
  .el-form-item .textarea {
    width: 100%;
  }

  .el-table-column {
    background-color: red;
  }

  .el-form-item--mini {
    min-height: 30px;
  }

  .el-table-item--mini {
    min-height: 30px;
  }
</style>
