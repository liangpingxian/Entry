<template>

  <div class="summary-container">

    <page-head title="概述"></page-head>

    <div class="sub-title">概述内容</div>

    <el-input type="textarea"
              autosize
              readonly="true"
              resize="none"
              v-model="textarea" class="input-textarea">
    </el-input>

  </div>

</template>

<script>
import PageHead from '../../hu/components/PageHead'
export default {
  name: 'Summary',
  components: {PageHead},
  data () {
    return {
      textarea: '这个是概述,是概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述' +
            '述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述概述'
    }
  }
}
</script>

<style lang="scss">

  .summary-container {
    text-align: left;
    .sub-title {
      height: 40px;
      line-height: 40px;
      margin-left: 20px;
      text-align: left;
      font-size: 15px;
      font-weight: bold;
    }

    .el-textarea__inner {
      outline: none;
      border: none;
      margin-top: 0px;
      margin-bottom: 15px;
      padding-top: 0px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

</style>
