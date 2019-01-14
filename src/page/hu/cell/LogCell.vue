<template>

  <div>
    <div class="logcell-container">
      <img :src=logData.icon class="icon-view">
      <div class="text-container">
        <div class="text-head">
          <div class="text-head-title">{{logData.logTitle}}</div>
          <div class="text-head-right">{{logData.logTime}}</div>
        </div>
        <div class="text-bottom">
          <ul>
            <li v-for="item in logData.logContents">{{item}}</li>
          </ul>
        </div>
      </div>

    </div>

    <div class="logcell-bottom-line" v-show="!logData.isLastData"></div>
  </div>


</template>

<script>
    export default {
        name: "LogCell",

        props: {
          logData: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
              return {
                logTitle: '版本信息',
                logTime: '更新时间',
                isLastData: true,
                logContents: []
              }
            }
          }
        }
    }
</script>

<style lang="scss">

  .logcell-bottom-line {
    background-color:#ccc;
    width: auto;
    height: 1px;
    margin-left: 20px;
    margin-right: 20px
  }

  .logcell-container {
    width: 100%;
    height: auto;
    /*border-bottom: rgb(222,222,222) 1px solid;*/
    /*background-color: rgba(255,0,0,0.05);*/
    text-align: left;
    position: relative;
    display: flex;

    .icon-view {
      width: 40px;
      height: 40px;
      float: left;
      border-radius: 20px;
      margin-top: 20px;
      margin-left: 20px;
    }

    .text-container {
      float: left;
      margin-left: 20px;
      margin-top: 20px;
      margin-right: 20px;
      /*background-color: #aaa;*/
      flex: 1;

      .text-head {
        /*margin-left: 0px;*/
        /*margin-right: 0px;*/
        /*background-color: #eee;*/
        position: relative;

        .text-head-title {
          /*background-color: orange;*/
          position: absolute;
          display: inline-block;
          height: 20px;
          right: 100px;
          left: 0px;
          text-align: left;
          font-size: 16px;
          font-weight: bold;
          color: black;
        }
        .text-head-right {
          /*background-color: brown;*/
          display: inline-block;
          position: absolute;
          width: 100px;
          height: 20px;
          right: 0px;
          text-align: right;
          font-size: 14px;
          color: lightslategray;
        }
      }

      .text-bottom {
        /*background-color: pink;*/
        text-align: left;
        width: 100%;
        height: auto;
        margin-top: 30px;
        margin-bottom: 10px;
        /*top: 100px;*/
        /*position: relative;*/
        /*float: top;*/
      }
    }
  }

</style>
