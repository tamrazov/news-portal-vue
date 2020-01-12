<template>
  <div class="container container-contact">
    <a  href="https://github.com/aleksandrtamrazov"  > Me on github </a>
  </div>  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'contact',
  computed:{
  } 
}
</script>

<style scoped>
  .container-contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #fff;
    width: auto;
    min-height: 500px;
  }
</style>