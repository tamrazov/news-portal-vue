import Vue from 'vue';
import post from './modules/post.js'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post,
  }
});
