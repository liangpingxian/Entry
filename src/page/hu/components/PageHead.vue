<template>

  <div class="header">
    <span class="title" v-text="title">

    </span>
  </div>

</template>

<script>
export default {
  name: 'PageHead',

  props: ['title']
}

</script>

<style lang="scss">

  .header {
    height: 50px;
    line-height: 50px;
    text-align: left;
    border-bottom: rgb(242,243,244) 1px solid;
    padding-left: 15px;
    /*margin-left: 15px;*/
    /*margin-right: 15px;*/
    .title {
      font-weight: bold;
      font-size: 16px;
      color: black;
      margin-left: 5px;
    }
  }

</style>
