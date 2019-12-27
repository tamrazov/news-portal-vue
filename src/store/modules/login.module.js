import Axios from 'axios';

export default {
  actions: {
    async LOG_REQUEST({commit}, login) {
      await Axios.post('https://reqres.in/api/login', login)
      .then(res => {
        const token = res.data.token;
        commit('LOG_SUCCESS', token);
      })
      .catch(err => {
        commit('LOG_ERROR', err)
      })
    },
    UPDATE_STATE({commit}) {
      commit('UPDATE_STATE');
    }
  },
  mutations: {
    LOG_SUCCESS(state, token) {
      state.token = token;
    },

    LOG_ERROR(state, err) {
      state.errors = err
    },
    UPDATE_STATE(state) {
      state.token = null;
      state.errors = null;
    }
  },
  state: {
    token: null,
    errors: null,
  },
  getters: {
    getToken(state) {
      return state.token;
    },

    getErrors(state) {
      return state.errors;
    }
  }
}