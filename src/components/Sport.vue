<template>
  <div class="container container-sport">
    <div class="posts-list">
      <previewPost :posts="postsSport"></previewPost>
    </div>
  </div>  
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import previewPost from '@/components/PreviewPost.vue'

  export default {
    name: 'sport',
    data() {
      return {
        postsSport: null,
      }
    },
    components: {
      previewPost,
    },
    mounted() {
      this.postsSport = this.$store.getters.postsUser(1);
    } 
  }
</script>

<style scoped>
  .container-sport {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #fff;
    width: auto;
  }

  .posts-list {
    display: flex;
    flex-direction: column;
  }

  .post-preview {
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    margin: 10px; 
  }
</style>