<template>
  <div class="container register-container">
    <h2> Sign Up </h2>
    <form @submit.prevent="">
      <fieldset class="form-group">
        <input 
          class="form-control"
          type="text"
          v-model="$v.username.$model"
          placeholder="username"
        >
        <p class="error" v-if="$v.username.$dirty && !$v.username.required "> error </p>
      </fieldset>
      <fieldset class="form-group">
        <input 
          class="form-control"
          type="text"
          v-model="email"
          placeholder="email"
        >
        <p class="error" v-if="!$v.email.email"> error </p>
      </fieldset>
      <fieldset class="form-group">
        <input 
          class="form-control"
          type="text"
          v-model="$v.password.$model"
          placeholder="password"
        >
        <p class="error" v-if="$v.password.$dirty && !$v.password.required "> error </p>
      </fieldset>
      <button 
        class="btn btn-primary pull-xs-right"
        :disabled="$v.$invalid"
      >
        Sign up
      </button>
    </form>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators';

  export default {
    name: 'register',
    data() {
      return {
        email: '',
        password: '',
        username: '',
      }
    },
    validations: {
      email: {email},
      password: {required},
      username: {required},
    }
  }
</script>

<style scoped>
  .register-container {
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