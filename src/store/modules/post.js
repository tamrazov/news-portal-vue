
export default {
  actions: {
    async fetchPosts({commit}, limit = 5) {
      const res = await fetch('http://jsonplaceholder.typicode.com/posts?_limit=' + limit);
      const posts = await res.json();
      commit('updatePosts',posts)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
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
      return _.uniq(arr)
    },
    postsSport(state) {
      return state.posts.filter(post => post.userId == 3);
    }
  }
}