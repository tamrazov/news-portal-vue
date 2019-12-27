<template>
  <div class="container container-politics">
    <div class="posts-list">
      <previewPost :posts="postsPolitics"></previewPost>
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
        postsPolitics: null,
      }
    },
    components: {
      previewPost,
    },
    computed:{
    },
    mounted() {
      this.postsPolitics = this.$store.getters.postsUser(2);
    } 
  }
</script>

<style scoped>
  .container-politics {
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
</style>