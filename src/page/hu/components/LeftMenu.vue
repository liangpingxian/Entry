<template>

  <div class="left-menu">

    <el-menu background-color=#25293C
             text-color="#8c94B4"
             :default-openeds="['1','2']"
             :default-active="activeIndex">

      <el-submenu v-for="mainItem in menuData"
                  :index=mainItem.id
                  :key="mainItem.id">
        <template slot="title">
          <img class="left-icon" :src="mainItem.mainIcon">
          <span class="left-title">{{mainItem.mainTitle}}</span>
        </template>

        <el-menu-item v-for="item in mainItem.itemArray"
                      :index=item.id
                      :key=item.key
                      @click="menuClick(mainItem.mainId,item.subId,menuData,item)">

          <span class="menu-left-line" v-show='true'></span>
          <img class="sub-icon" :src="item.isSelect ? item.subIcon1 : item.subIcon">
          <span class="sub-title">{{item.subName}}</span>

          <!--<router-link :to="menuClick()"></router-link>-->
          <!--<span class="menu-right-div"></span>-->

        </el-menu-item>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
      activeIndex: '1-1',
      selectMainId: 'summary',
      menuData: [
        {
          id: '1',
          mainId: 'start',
          mainTitle: '开始',
          mainIcon: require('../../../assets/total/kaishi.png'),
          itemArray: [
            {
              id: '1-1',
              subId: 'summary',
              subName: '概述',
              subIcon: require('../../../assets/total/gaishu.png'),
              subIcon1: require('../../../assets/total/gaishu拷贝.png'),
              isSelect: false
            },
            {
              id: '1-2',
              subId: 'updateLog',
              subName: '更新日志',
              subIcon: require('../../../assets/total/gengxinrizhi.png'),
              subIcon1: require('../../../assets/total/gengxinrizhi拷贝.png'),
              isSelect: false
            },
            {
              id: '1-3',
              subId: 'generalParameter',
              subName: '通用参数说明',
              subIcon: require('../../../assets/total/tongyongcanshu.png'),
              subIcon1: require('../../../assets/total/tongyongcanshu拷贝.png'),
              isSelect: false
            },
            {
              id: '1-4',
              subId: 'errorCode',
              subName: '全局错误码',
              subIcon: require('../../../assets/total/quanjucuowuma.png'),
              subIcon1: require('../../../assets/total/quanjucuowuma拷贝.png'),
              isSelect: false
            },
            {
              id: '1-5',
              subId: 'yuan',
              subName: '新增接口',
              subIcon: require('../../../assets/total/yewujianmo.png'),
              subIcon1: require('../../../assets/total/yewujianmo拷贝.png'),
              isSelect: false
            },
            {
              id: '1-6',
              subId: 'versionComparison',
              subName: '接口版本对比',
              subIcon: require('../../../assets/total/yewujianmo.png'),
              subIcon1: require('../../../assets/total/yewujianmo拷贝.png'),
              isSelect: false
            }
          ]
        },
        {
          id: '2',
          mainId: 'interfaceDetail',
          mainTitle: '业务建模用户端',
          mainIcon: require('../../../assets/total/huoqumuban.png'),
          itemArray: [
            {
              id: '2-1',
              subId: '121',
              subIcon: require('../../../assets/total/yewujianmo.png'),
              subIcon1: require('../../../assets/total/yewujianmo拷贝.png'),
              subName: '获取模板信息',
              isSelect: false
            },
            {
              id: '2-2',
              subId: '122',
              subIcon: require('../../../assets/total/yewujianmo.png'),
              subIcon1: require('../../../assets/total/yewujianmo拷贝.png'),
              subName: '获取版本详情',
              isSelect: false
            },
            {
              id: '2-3',
              subId: '123',
              subIcon: require('../../../assets/total/yewujianmo.png'),
              subIcon1: require('../../../assets/total/yewujianmo拷贝.png'),
              subName: '接口C',
              isSelect: false
            }
          ]
        }
      ]
    }
  },
  methods: {

    initDataSelect (menuData, selectId) {
      for (var i = 0; i < menuData.length; i++) {
        var mainItem = menuData[i]
        for (var j = 0; j < mainItem.itemArray.length; j++) {
          var item = mainItem.itemArray[j]
          item.isSelect = false

          if (item.subId === selectId) {
            item.isSelect = true
          }
        }
      }
    },
    pushToLogin () {
      this.$router.push({path: '/login'})
    },
    menuClick (mainId, subId, menuData, item) {
      this.initDataSelect(menuData)

      item.isSelect = true

      this.selectMainId = subId

      if (mainId === 'start') {
        this.$router.push('/userHome/' + subId)
      } else {
        this.$router.push({ name: '接口', params: { id: subId } })
      }
    }
  },
  created () {
    this.initDataSelect(this.menuData, 'summary')

    var paths = this.$route.path.split('/')

    this.selectMainId = paths[paths.length - 1]
  },
  computed: {

  }
}
</script>

<style lang="scss">
  /*@import "../../style/el-mine.scss";*/

  .left-menu {
    .el-menu {
      width: 100%;
      text-align: left;
      border-right: none;

      .el-submenu {

        .left-icon {
          width: 16px;
          height: 16px;

        }
        .left-title {
          height: 20px;
          margin-left: 10px;
          text-align: left;
          font-weight: normal;
          font-size: 14px;
          /*position: absolute;*/
          /*margin-top: 3px;*/
        }

        .el-menu-item.is-active {
          color: white;
          background-color: #35394d !important;
          .menu-left-line {
            display: inline-block;
            width: 3px;
            height: 100%;
            left: 0;
            position: absolute;
            background-color: #48b9ec;
          }
        }
        .el-menu-item:hover {
          .menu-right-div {
            display: inline-block;
            height: 100%;
            right: 0;
            position: absolute;
            width: 20px;
            background-color: yellow;
          }
        }
        .el-menu-item {
          padding-left: 54px !important;
          height: 38px;
          line-height: 38px;
          font-size: 14px;
          font-weight: normal;
          position: relative;
        }
        .el-submenu__title {
          padding-left: 26px !important;
          height: 38px;
          line-height: 38px;
          font-size: 14px;
        }

        .sub-icon {
          width: 16px;
          height: 16px;
        }
        .sub-title {
          margin-left: 10px;
        }
      }
    }
  }

</style>
