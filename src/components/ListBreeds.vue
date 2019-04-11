<template>
<div>
  <div v-for="(value, key) in listBreeds" >
   <router-link :to="`/breed/${key}/images`">{{key}}</router-link>
  </div>
</div>
</template>

<script>

import ApiBreedsService from '../services/ApiBreedsService.js'
export default {
  name: 'ListBreeds',
  data () {
    return {
      listBreeds: []

    }
  },

  mounted: function () {
    ApiBreedsService.getAllBreeds().then(response => {
      this.listBreeds = response
      console.log(this.listBreeds)
    })
  }
}
</script>

<style></style>
