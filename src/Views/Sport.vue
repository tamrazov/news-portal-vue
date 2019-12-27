<template>
    <div class="container container-sport">
      <div class=" row posts-list">
        <div v-for="post in postsUser">
          {{ post.id }}
          {{ msg }}
        </div>
      </div>
    </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'sport',
  props: {
    msg: String
  },
  methods: {
  },
  computed:{
    postsUser() {
     return this.$store.getters.postsUser(1)
    }
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
    min-height: 500px;
  }

  .posts-list {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .post-preview {
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    margin: 10px; 
  }

  .asd {
    display: flex;
  }
</style>