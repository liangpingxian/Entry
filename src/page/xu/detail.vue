<template>
  <div class="main-container">

    <p>行程单详情</p>
    <div class="sepLineStyle"></div>
    <div v-for="item in dataSource" :key="item.index" class="section-container" type="1">
      <p>{{item.name}}</p>
      <div v-if="item.index == 0">
        <span>接口说明啊  我是说明接口说明我是说明我是说明接口说明我是说明我是说明接口说明我是说明我是说明接口说明我是说明</span>
      </div>
      <div v-else-if="item.index == 1">
      <a href="www.baidu.com">百度一下我</a>
      </div>
      <div v-else-if="item.index == 2">
        <a href="www.baidu.com" target="_blank">www.baidu.com</a>
      </div>
      <div v-else-if="item.index == 3">
        <el-table :data="params" border style="width: 100%;" :header-cell-style="tableHeaderColor">
          <el-table-column prop="param" label="参数" width="180"></el-table-column>
          <el-table-column prop="type" label="类型" width="180"></el-table-column>
          <el-table-column  label="是否必填">
            <template slot-scope="scope">{{ tableCellName_isMust(scope.row) }}</template>
          </el-table-column>
          <el-table-column prop="note" label="说明"></el-table-column>
        </el-table>
      </div>
      <div v-else-if="item.index == 4">
        <el-input type="textarea"  style="width: 100%" value="json格式撒旦发SaaS"></el-input>
      </div>
      <div v-else-if="item.index == 5">
        <el-table :data="params" border style="width: 100%;" :header-cell-style="tableHeaderColor">
          <el-table-column prop="param" label="参数" width="180"></el-table-column>
          <el-table-column prop="type" label="类型" width="180"></el-table-column>
          <el-table-column  label="是否必填">
            <template slot-scope="scope">{{ tableCellName_isMust(scope.row) }}</template>
          </el-table-column>
          <el-table-column prop="note" label="说明"></el-table-column>
        </el-table>
      </div>
      <div v-else>
        <p>Ω</p>
      </div>

      <div v-show="item.index != dataSource.length-1" class="sepLineStyle"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      keyValues: {1: '接口说明', 2: '接口地址', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: ''},
      params: [{
        param: 'username',
        type: '用户名',
        isMust: '',
        note: '妙士大夫撒大法师打发斯蒂芬阿道夫'
      },
      {
        param: 'password',
        type: '密码',
        isMust: '0',
        note: '妙士大夫撒大大事发生大发是撒旦发射的法师打发斯蒂芬阿道夫'
      },
      {
        param: 'username',
        type: '用户名',
        isMust: '0',
        note: '妙士大夫撒大dsfsadfas的发射点法撒旦是的法师打发斯蒂芬撒旦发法师打发斯蒂芬阿道夫'
      }],
      dataSource: []
    }
  },
  created () {
    this.requestItems()
  },
  methods: {
    // 修改table tr行的背景色
    tableRowStyle ({ row, rowIndex }) {
      return 'background-color: pink'
    },

    // 修改table header的背景色
    tableHeaderColor ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: lightblue;color: #fff;font-weight: 500;'
      }
    },

    tableCellName_isMust (cellData) {
      return cellData.isMust.toString() === '0' ? '是' : '否'
    },
    requestItems: function () {
      for (var index = 0; index < 21; ++index) {
        if (index === 0) {

        }
        let item = {'index': index, 'name': '接口说明'}

        this.dataSource.push(item)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .main-container {
    border-radius: 5px;
    background-color: #FFFFFe;
    margin: 8px;
    padding: 8px 8px 37px 8px;
    text-align: left;

    .sepLineStyle {
      background-color: #F5F5F5;
      height: 1px;

    }
    .section-container {
      font-size: 12px;
      /*background-color: #007aff;*/
      ::first-letter {
        font-weight: bold;
      }

      p::before {
        color: #007aff;
        content: '\260E';
      }
      ::selection {
        background-color: aqua;

      }

    }
  }
  /*begin*/

  //.....ss.s.s..s.s.s.

  /*.section-container[type='21'] {*/
      /*background-color: #007aff;*/
  /*}*/

</style>
