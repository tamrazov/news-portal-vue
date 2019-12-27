<template>
  <div class="container login-container">
    <h2 class="animated bounce infinite"> Sign In </h2>
    <form @submit.prevent="Login">
      <fieldset class="form-group">
        <input 
          class="form-control"
          type="text"
          v-model="$v.login.email.$model"
          placeholder="email"
        >
        <p class="error" v-if="$v.login.email.$dirty && !$v.login.email.email"> error </p>
      </fieldset>
      <fieldset class="form-group">
        <input 
          class="form-control"
          type="text"
          v-model="$v.login.password.$model"
          placeholder="password"
        >
        <p class="error" v-if="$v.login.password.$dirty && !$v.login.password.required "> error </p>
      </fieldset>
      <button 
        class="btn btn-primary pull-xs-right"
        :disabled="$v.$invalid"
      >
        Sign in
      </button>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  import { required, email } from 'vuelidate/lib/validators';
  import { mapGetters } from 'vuex'

  Vue.use(Loading);

  export default {
    name: 'login',
    data() {
      return {
        login: {
          email: '',
          password: '',
          fullPage: false,
        }
      }
    },
    validations: {
      login: {
        email: {email},
        password: {required},
      }
    },
    methods: {
      Login() {
        this.$store.dispatch('LOG_REQUEST', this.login) 
        let loader = this.$loading.show({
        // Optional parameters
          container: this.fullPage ? null : this.$refs.formContainer,
          canCancel: true,
          onCancel: this.onCancel,
          width: 30,
          height: 30,
          color: '#1e90ff',
        });
        // simulate AJAX
        setTimeout(() => {
          loader.hide();
          this.$router.push('/')
        },1000);
      },
      onCancel() {
        console.log('User cancelled the loader.')
      },   
      ...mapGetters(['getToken','getErrors'])
    }
  }
</script>

<style scoped>
  .login-container {
    width: 30%;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }

  .error {
    padding: 0;
    margin: 5px;
    background-color: inherit;
    color: rgb(151, 35, 35);
  }
</style>