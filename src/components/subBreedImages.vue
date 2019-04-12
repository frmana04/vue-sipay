<template>

<div>

<div v-for="image in listImages" >
   <img :src="image">
  </div>


</div>

</template>

<script>
import ApiBreedsService from '../services/ApiBreedsService.js'
export default {
  name: 'subBreedImages',
  data () {
    return {
      listImages: [],
      subBreed:this.$route.params.subBreed,
      breed:this.$route.params.breed
    }
  },
   mounted: function () {

console.log("sdff")

     ApiBreedsService.getSubBreedImages(this.breed,this.subBreed).then(response => {
      this.listImages = response
      console.log(this.listSubBreed)
    })
  }

}
</script>

<style></style>
