<template>
  <div class="container container-home">
    <div class="left-section">
      <div v-for="user in users" class="left-section-button">
        {{ user }}
      </div>
    </div>
    <div class="posts-list">
      <div v-for="post in allPosts" class="post-preview">
        <h2> {{post.title}} </h2>
        <p> {{post.body}} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home',
  computed: mapGetters(['allPosts','postsCount','users']),
  methods: 
    mapActions(['fetchPosts']),
  components: {
  },
  async mounted() {
    this.fetchPosts(30);
  }
  
}
</script>

<style scoped>
  .container-home {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .posts-list {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: burlywood;
    width: 20%;
    height: fit-content;
  }

  .left-section-button {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    margin: 10px;
    padding: 5px;
  }

  .post-preview {
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    margin: 10px; 
  }
</style>