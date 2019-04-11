<template>

<div>


</div>

</template>

<script>
import ApiBreedsService from '../services/ApiBreedsService.js'
export default {
  name: 'BreedImages',
  data () {
    return {
      listImages: []

    }
  },
   mounted: function () {
     console.log(this.$route.query)
    // ApiBreedsService.getAllBreeds().then(response => {
    //   this.listImages = response
    //   console.log(this.listBreeds)
    // })
  }

}
</script>

<style></style>
