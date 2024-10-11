<script>
import AppHeader from './views/AppHeader.vue';
import AppBody from './views/AppBody.vue';




export default {
  name: 'App',

  components: {
    AppHeader,
    AppBody

  },

  data() {
    return {

    }
  },
  methods: {

  },


  mounted() {

  }

}
</script>

<template>
  <div class="app_Container w-100">

    <AppHeader />
    <AppBody />

  </div>
</template>

<style scoped></style>
