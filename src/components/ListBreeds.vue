<template>
<div>
<input v-model="breedQuery" placeholder="Buscar Raza">
<button @click="search(breedQuery)">Buscar Raza</button>

  <div v-for="(value, key) in listBreeds"  >

   <router-link  :to="`/breed/${key}/images`">{{key}}</router-link>


  </div>
</div>
</template>

<script>

import ApiBreedsService from '../services/ApiBreedsService.js'
export default {
  name: 'ListBreeds',
  data () {
    return {
      listBreeds: [],
      breedQuery:''

    }
  },

// methods: {
//     filteredList: function() {
//       return this.listBreeds.filter(breed => {
//         return Object.keys( breed ).toLowerCase().includes(this.breedQuery.toLowerCase())
//       })
//     }
//   }
// },

  mounted: function () {
    ApiBreedsService.getAllBreeds().then(response => {
      this.listBreeds = response
      console.log(this.listBreeds)
    })
  },

}
</script>

<style></style>
