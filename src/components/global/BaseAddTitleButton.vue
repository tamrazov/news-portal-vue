<template>
  <div class="add-title">
    <router-link to="/addtitle">
      <button type="button" class="btn button-add-title">Добавить статью</button>
    </router-link>
    
  </div>
</template>

<script>
  export default {
    name: 'base-addTitleButton',
  }
</script>

<style scoped>
  .add-title {
    display: flex;
    justify-content: center;
  }
  .button-add-title{
    color: azure;
    background-color: cornflowerblue;
    margin: 15px;
    padding: 10px;
  }
</style>