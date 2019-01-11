<template>
  <div id="app">
    <!--<img src="./assets/login/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    /*text-align: center;*/
    color: #2c3e50;
    margin: 0px;
    /*height: 100%;*/
    /*width: 100%;*/
  }
  a {
    text-decoration: none;
  }
  body{
    margin:0px;
    /*height: 100%;*/
    /*overflow-y:auto;*/
    /*overflow: hidden;*/
  }
  html {
    /*height: 100%;*/
    /*box-sizing:border-box;*/
    /*-moz-box-sizing:border-box; !* Firefox *!*/
    /*-webkit-box-sizing:border-box; !* Safari *!*/
  }
  /**,*/
  /**:before,*/
  /**:after {*/
    /*box-sizing: inherit;*/
  /*}*/
</style>
