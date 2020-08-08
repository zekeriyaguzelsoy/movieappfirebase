<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center">
      <v-col>
        <v-text-field label="New Movie" outlined v-model="newItem" @keyup.enter="addItem"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  
}
</script>