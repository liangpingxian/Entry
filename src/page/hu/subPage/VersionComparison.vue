<template>
    <div class="versionComparison-container">
      <page-head title="接口版本对比"></page-head>
      <div class="group-title">待开发</div>
      <div style="height: 20px"></div>
    </div>
</template>

<script>
import PageHead from '../../hu/components/PageHead'
export default {
  name: 'VersionComparison',
  components: {
    PageHead
  }
}
</script>

<style lang="scss">

  .versionComparison-container {
    text-align: left;
    .group-title {
       margin-left: 20px;
       margin-top: 12px;
       font-weight: bold;
       font-size: 14px;
  }
}
</style>
