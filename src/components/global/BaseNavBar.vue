<template>
  <div class="nav-bar">
    <div class="col-md-2 nav-bar-logo"></div>
    <div class="col-md-10 nav-bar-items">
      <router-link to="/"> home </router-link>
      <router-link to="/sport"> sport </router-link>
      <router-link to="/addtitle"> AddTitle </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'base-NavBar',

  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
  }
  .nav-bar-items {
    display: flex;
    justify-content: space-evenly;
    background-color: aqua;
    margin: 30px;
  }
  .nav-bar-logo {
    background-color: blue;
    margin: 0 10px;
  }
</style>