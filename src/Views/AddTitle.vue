<template>
  <div class="container container-add-title">
    <div class="title">
      <h2>Title</h2>
      <input type="text" class="input-title">
    </div>
    <div class="body">
      <h2>Body</h2>
      <textarea class="form-control body-text" aria-label="With textarea"></textarea>
    </div>
    <div class="author">
      <h2>Author</h2>
      <input type="text" class="input-author">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddTitle'
  }
</script>

<style scoped>
  .container-add-title {
    padding: 10px;
  }
  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .body-text {
    max-width: 70%;
    height: 70%;
  }
</style>