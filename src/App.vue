<template>
  <div id="app">
    <base-NavBar msg="mess"></base-NavBar>
    <transition name="component-fade" mode="out-in">
      <router-view id="view"/>
    </transition>
    <base-footer></base-footer>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'app',
  methods: {
    ...mapActions(['fetchPosts']),
  },
  async mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow: hidden;
    overflow-y:hidden;
    background-color: #f5f5f5;
    color: #152c3d;
  }

  #view {
    min-height: 500px;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .2s ease;
  }

  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
</style>
