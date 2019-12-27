<template>
  <div class="nav-bar container">
    <div class="col-md-2 nav-bar-logo">
      <router-link to="/home">
        <img src="@/assets/logo.jpg"/>
      </router-link>
    </div>
    <div class="col-md-8 nav-bar-items">
      <div class="nav-bar-items-top">
        <router-link to="/home"> Home </router-link>
        <router-link to="/addtitle"> Add Article </router-link>
        <router-link to="/category"> Category </router-link>
        <router-link to="/contact"> Contact </router-link>
      </div>
    </div>
    <div class="col-md-2 nav-bar-login">
      <router-link class="login-link btn" to="/login"> Sign In </router-link>
      <router-link class="register-link btn" to="/register"> Sign Up </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'base-NavBar',
    props: {
      msg: String,
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 40px auto;
    border-radius: 5px;
  }

  .nav-bar-items {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .nav-bar-items-top {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .nav-bar-items-buttom {
    display: flex;
    justify-content: space-between;
  }

  .nav-bar-items-buttom li {
    list-style-type: none;
  }

  a {
    color: dodgerblue;
  }

  hr {
    background-color: red;
    margin-top: 2px;
  }

  .router-link-active {
    color: dimgray;
    text-decoration: none;
  }

  .nav-bar-logo img{
    height: 100px;
    width: auto;
    padding: 10px 5px 0;
  }

  .nav-bar-login {
    display: flex;
    justify-content: space-between;
  }

  .login-link {
    border: cadetblue solid 1px;
    border-radius: 5px;
    padding: 4px 10px;
  }

   .register-link {
      background-color: #1e90ff;
      color: #fff;
      border-radius: 5px;
      padding: 4px 10px;
   }

</style>