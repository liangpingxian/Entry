<template>
  <div class="main-container">

    <p>行程单详情</p>
    <div class="sepLineStyle"></div>
    <div v-for="item in dataSource" :key="item.index">
      <p>{{item.name}}</p>
      <p>Ω</p>
      <div v-show="item.index != dataSource.length-1" class="sepLineStyle"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      dataSource: []
    }
  },
  created () {
    this.requestItems()
  },
  methods: {
    requestItems: function () {
      for (var index = 0; index < 10; ++index) {
        let item = {'index': index, 'name': '接口说明'}

        this.dataSource.push(item)
      }
    }
  }
}
</script>

<style scoped>

  .main-container {
    border-radius: 5px;
    background-color: #FFFFFe;
    margin: 8px;
    padding: 8px 8px 37px 8px;
    height: 100%;
    overflow: hidden;
    text-align: left;
  }
  .sepLineStyle {
    background-color: #F5F5F5;
    height: 1px;
  }

</style>
