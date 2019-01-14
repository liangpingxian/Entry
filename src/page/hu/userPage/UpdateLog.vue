<template>

  <div id="log-container">
    <page-head title="更新日志"></page-head>
    <div v-for="(logData,index) in logDatas"
         :class="index === logDatas.length -1 ?'log-cell-div':''">
      <log-cell :log-data="logData"></log-cell>
    </div>
  </div>


</template>

<script>
    import LogCell from "../cell/LogCell";
    import PageHead from "../LeftSide/PageHead";
    export default {
        name: "UpdateLog",
      components: {PageHead, LogCell},

      data() {

          return {

            logDatas:[
              {
                icon: require("../../assets/gengxinrizhi.png"),
                logTitle:'接口平台v1.0发布',
                logTime:'2018-12-08',
                isLastData: false,
                logContents:[
                  '1.这个是版本v1.0更新日志这个是更新日志-1',
                  '2.这个是版本v1.0更新日志这个是更新日志-2',
                  '3.这个是版本v1.0更新日志这个是更新日志-3',
                  '4.这个是版本v1.0更新日志这个是更新日志-4',
                  '5.这个是版本v1.0更新日志这个是更新日志-5',
                  '6.这个是版本v1.0更新日志这个是更新日志-6'
                ]
              },
              {
                icon: require("../../assets/gengxinrizhi.png"),
                logTitle:'接口平台v2.0发布',
                logTime:'2018-12-18',
                isLastData: false,
                logContents:[
                  '1.这个是版本v2.0更新日志这个是更新日志-1',
                  '2.这个是版本v2.0更新日志这个是更新日志-2',
                  '3.这个是版本v2.0更新日志这个是更新日志-3',
                  '4.这个是版本v2.0更新日志这个是更新日志-4',
                  '5.这个是版本v2.0更新日志这个是更新日志-5',
                ]
              },
              {
                icon: require("../../assets/gengxinrizhi.png"),
                logTitle:'接口平台v2.1发布',
                logTime:'2018-12-28',
                isLastData: false,
                logContents:[
                  '1.这个是版本v2.1更新日志这个是更新日志-1',
                  '2.这个是版本v2.1更新日志这个是更新日志-2'
                ]
              },
              {
                icon: require("../../assets/gengxinrizhi.png"),
                logTitle:'接口平台v2.2发布',
                logTime:'2018-12-31',
                isLastData: false,
                logContents:[
                  '1.这个是版本v2.2更新日志这个是更新日志-1',
                  '2.这个是版本v2.2更新日志这个是更新日志-2',
                  '3.这个是版本v2.2更新日志这个是更新日志-3'
                ]
              },
              {
                icon: require("../../assets/gengxinrizhi.png"),
                logTitle:'接口平台v2.3发布',
                logTime:'2019-01-08',
                isLastData: true,
                logContents:[
                  '1.这个是版本v2.3更新日志这个是更新日志-1',
                  '2.这个是版本v2.3更新日志这个是更新日志-2',
                  '3.这个是版本v2.3更新日志这个是更新日志-3',
                  '4.这个是版本v2.3更新日志这个是更新日志-4',
                  '5.这个是版本v2.3更新日志这个是更新日志-5',
                ]
              }]
          }
      }

    }
</script>

<style scoped>

  .log-cell-div {
    border-radius: 15px !important;

    margin-bottom: 20px;
  }
</style>
