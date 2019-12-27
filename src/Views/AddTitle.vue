<template>
  <div class="container container-add-title">
    <div class="title">
      <h2>Title</h2>
      <input v-model="article.title" type="text" :class="{ 'border-danger': $v.article.title.$invalid }" class="input-title">
    </div>
    <div class="body">
      <h2>Body</h2>
      <textarea v-model="article.body" :class="{ 'border-danger': $v.article.body.$invalid }" class="form-control body-text" aria-label="With textarea"></textarea>
    </div>
    <button :disabled="$v.article.$invalid" class="button-add-title btn btn-info" @click="addPost" > Add </button>
  </div>
</template>

<script>
  import Axios from 'axios';
  import { required } from 'vuelidate/lib/validators';
  import { mapActions } from 'vuex';

  export default {
    name: 'AddTitle',
    data() {
      return {
        article: {
         title: '',
         body: ''          
        }
      }
    },
    methods: {
      ...mapActions(['newPost']),
      addPost() {
        this.newPost(this.article);
      }
    },
    validations: {
      article: {
        title: { required },
        body: { required }
      }
    }
  }
</script>

<style scoped>
  .container-add-title {
    padding: 10px;
    min-height: 500px;
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
  .button-add-title {
    margin: 10px;
  }
</style>