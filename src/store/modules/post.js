import Axios from "axios";

export default {
  actions: {
    async fetchPosts({commit}) {
      const res = await fetch('http://localhost:3000/posts');
      const posts = await res.json();
      commit('updatePosts',posts)
    },
    async newPost({commit}, post) {
      await Axios.post('http://localhost:3000/posts', post);
      commit('NEW_POSTS', post)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    NEW_POSTS(state, newpost) {
      state.posts.push(newpost);
    }
  },
  state: {
    posts: [],
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    postsCount(state) {
      return state.posts.length
    },
    users(state) {
      let arr = [];
      for (let i = 0; i < state.posts.length; ++i) {
        arr.push(state.posts[i]['userId']);
      }
      return _.uniq(arr) // lodash function
    },
    postsUser: state => user => {
      return state.posts.filter(post => post.userId == user);
    },
  }
}