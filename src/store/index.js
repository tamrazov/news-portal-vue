import Vue from 'vue';
import Vuex from 'vuex';
import post from './modules/post.js'
import auth from './modules/auth.module.js'
import login from './modules/login.module.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post,auth,login
  }
});
