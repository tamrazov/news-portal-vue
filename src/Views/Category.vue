<template>
  <div class="container container-category">
    <div class="left-section col-2">
      <button class="button btn btn-primary" @click="Load(), component = 'sport' ">sport</button>
      <button class="button btn btn-primary" @click="Load(), component = 'politics'">politics</button>
    </div>
    <div class="main-article col-10">
      <transition name="component-fade" mode="out-in">
        <component :is="component"></component>
      </transition>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  import sport from '@/components/Sport.vue';
  import politics from '@/components/Politics.vue';

  Vue.use(Loading);

  export default {
    name: 'category',
    components: {
      sport,politics
    },
    data() {
      return {
        component: 'politics',
        fullPage: false,
      }
    },
    methods: {
      Load() {
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
        },500);
      }
    }
  }
</script>

<style scoped>
  .container-category {
    display: flex;
    justify-content: space-around;
  }
  
  .left-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .button {
    margin: 0 0 20px 0;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .1s ease;
  }

  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }
</style>
