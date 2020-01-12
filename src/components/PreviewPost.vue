<template>
  <div>
    <div v-for="post in posts" class="preview-post">
      <h2> {{post.title}} </h2>
      <p> {{post.body}} </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'previewPost',
    props: {
      posts: Array
    }
  }
</script>

<style>
  .preview-post {
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    margin: 10px; 
  }
</style>