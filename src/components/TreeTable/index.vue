<template>
  <el-table :data="formatData" :row-style="showRow" v-bind="$attrs">
    <slot />
    <el-table-column v-for="(column, index) in columns" :key="column.prop" :index="index" :label="column.label" :width="column.width"
      :min-width="column.minWidth" :prop="column.prop">
      <template slot-scope="scope">
        <div :style="treeIndex === index ? ('padding-left:'+ (scope.row._level -1) * indentationWidth +'px;') : ''">
          <el-input placeholder="请输入" v-model="scope.row[column.prop]" v-if="column.type === 'input'" class="table-column-edit">
          </el-input>
          <el-select v-model="
            scope.row[column.prop]" placeholder="请选择" v-else-if="column.type === 'select'"
            class="table-column-edit">
            <el-option v-for="option in column.options" :key="option.value" :lable="option.label" :value="option.value">
            </el-option>
          </el-select>
          <el-checkbox v-model="scope.row[column.prop]" v-else-if="column.type === 'checkbox'"></el-checkbox>
          <!-- <span
            v-if="column.type !== 'checkbox'"
            class="table-column-view"
          >
            {{scope.row[column.prop]}}
          </span> -->
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="operate" label="操作" min-width="200" v-if="isEdit == true">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleAdd(scope.$index, scope.row)" class="table-column-view">添加</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" class="table-column-view">删除</el-button>
        <el-button size="mini" @click="handleAddSub(scope.$index, scope.row)" class="table-column-view">添加子项</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
/**
  Auth: Lei.j1ang
  Created: 2018/1/19-13:59
*/
import treeToArray from './customEval'

export default {
  name: 'TreeTable',
  props: {
    /* eslint-disable */
      data: {
        type: [Array, Object],
        required: true
      },
      columns: {
        type: Array,
        default: () => []
      },
      evalFunc: {
        type: Function,
        default: treeToArray
      },
      evalArgs: Array,
      expandAll: {
        type: Boolean,
        default: true
      },
      isEdit: {
        type: Boolean,
        default: true
      },
      treeIndex: {
        type: Number,
        default: 0
      },
      indentationWidth: {
        type: Number,
        default: 10
      }
    },
    computed: {
      // 格式化数据源
      formatData: function () {
        let tmp;
        if (!Array.isArray(this.data)) {
          tmp = [this.data];
        } else {
          tmp = this.data;
        }
        const func = this.evalFunc;
        const args = this.evalArgs ?
          Array.concat([tmp, this.expandAll], this.evalArgs) :
          [tmp, this.expandAll];
        return func.apply(null, args);
      }
    },
    methods: {
      showRow: function (row) {
        const show = row.row.parent ?
          row.row.parent._expanded && row.row.parent._show :
          true;
        row.row._show = show;
        return show ?
          "animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;" :
          "display:none;";
      },
      handleAdd(index, row) {
        var object = {
          _level: row._level,
          parent: row.parent
        };
        object.explain = object._level;
        if (row.parent != undefined) {
          index = row.parent.children.indexOf(row) + 1;
          row.parent.children.splice(index, 0, object);
        } else {
          index = this.data.indexOf(row) + 1;
          this.data.splice(index + 1, 0, object);
        }
      },
      handleDelete(index, row) {
        if (row.parent != undefined) {
          row.parent.children.splice(row.parent.children.indexOf(row), 1);
        } else {
          this.data.splice(this.data.indexOf(row), 1);
        }
      },
      handleAddSub(index, row) {
        var object = {
          _level: row._level + 1,
          parent: row,
          name: "name"
        };
        object.explain = object._level;
        if (!row.children) {
          this.$set(row, "children", []);
        }
        row.children.splice(row.children.length, 0, object);
      }
    }
  };
</script>

<style rel="stylesheet/css">
  @keyframes treeTableShow {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes treeTableShow {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
  // .table-column-edit {
  //   display: none;
  // }

  // .table-column-view {
  //   display: inline-block;
  //   display: none;
  // }
</style>
