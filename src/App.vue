<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>Movie App</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <movieApp />
    </v-main>
  </v-app>
</template>

<script>
  import movieApp from './components/movieList.vue'

export default {
  name: 'App',

  components: {
    movieApp,
  },

  data: () => ({
    //
  }),
};
</script>
