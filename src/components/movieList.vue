<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center">

      <v-col cols="6">
        <v-text-field label="New Movie" outlined v-model="newItem" @keyup.enter="addItem"></v-text-field>
      </v-col>

      <v-col cols="1">
        <v-btn large color="primary" @click="addItem">Add</v-btn>
      </v-col>

    </v-row>

    <transition-group name="fade">
      <v-card class="mx-auto pa-3 ma-2 text-center" max-width="400" v-for="movie in movies" :key="movie.id">
        <v-row>

          <v-col cols="8">
            <v-list-item-title class="headline mb-1">{{movie.name}}</v-list-item-title>
          </v-col>

          <v-col cols="4"> 
            <v-btn icon color="red" @click="deleteMovie(movie.id)">
              <v-icon>mdi-delete</v-icon>  
            </v-btn> 
          </v-col>

        </v-row>
      </v-card>
    </transition-group>
  </div>
</template>

<script>
import {db} from '../firebase/db'

export default {
  data(){
    return {
      movies: [],
      newItem: ""
    };
  },
  methods: {
    deleteMovie(id){
      db.collection("movies")
      .doc(id)
      .delete();
    },
    async addItem() {
      if(this.newItem) {
        await db.collection("movies").add({name: this.newItem});

        this.newItem = "";
      }
    },
  },

  firestore: {
    movies: db.collection("movies")
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>