<template>
  <div id="app">
    <base-NavBar></base-NavBar>
    <router-view/>
    <base-footer></base-footer>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
  overflow-y:hidden;
  background-color: #fff;
}
</style>
