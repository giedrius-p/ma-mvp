<template>
  <div id="app">
    <div class="header"></div>
    <div class="sidebar"></div>
    <div class="page-content">
      <router-view/>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    line-height: 1.5;
    color: #888da8;
    background-color: #edf2f6;
    margin: 0;
  }

  .header {
    height: 50px;
    background-color: #3f4257;
    padding-right: 70px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
  }

  .sidebar {
    position: fixed;
    height: calc(100% - 50px);
    width: 75px;
    background-color: #fff;
  }

  .page-content {
    margin-top: 50px;
    margin-left: 75px;
    padding: 20px 40px;
  }
</style>
