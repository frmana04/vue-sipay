<template>

<div>
Subrazas:{{listSubBreed.length}}
<div v-for="subBreed in listSubBreed" >

   <router-link  :to="`/subBreed/${breed}/${subBreed}/images`">{{subBreed}}</router-link>
  </div>

<div v-for="image in showedImages" >
   <img :src="image">
  </div>

<button :disabled="controlImages.end>=listImages.length" @click="viewFollowImages()">Delante</button>
<button :disabled="controlImages.init<=0" @click="viewBackImages()">Atrás</button>

</div>

</template>

<script>
import ApiBreedsService from '../services/ApiBreedsService.js'
export default {
  name: 'BreedImages',
  data () {
    return {
      listImages: [],
      showedImages:[],
      listSubBreed:[],
      breed:this.$route.params.breed,
      controlImages:{
        init:0,
        end: 10
      }
    }
  },
  methods: {
     viewFollowImages: function() {
      if (this.controlImages.end+10>this.listImages.length){
        this.controlImages.init=this.controlImages.init+this.listImages.length-this.controlImages.end
        this.controlImages.end=this.listImages.length
      }
      else{
         this.controlImages.end+=10
         this.controlImages.init+=10;
      }

      this.showedImages=this.listImages.slice(this.controlImages.init,this.controlImages.end)
  },
  viewBackImages: function() {
 if (this.controlImages.init-10<0){
   this.controlImages.end-=this.controlImages.init
   this.controlImages.init=0
   }
      else {
        this.controlImages.init-=10
        this.controlImages.end-=10

      }
       this.showedImages=this.listImages.slice(this.controlImages.init,this.controlImages.end)
  }
 },
   mounted: function () {

     ApiBreedsService.getImagesByBreed(this.breed).then(response => {
      this.listImages = response
      if (this.listImages.length<10) this.controlImages.end=this.listImages.length
      this.showedImages=this.listImages.slice(0,10)
    })

     ApiBreedsService.getSubBreed(this.breed).then(response => {
      this.listSubBreed = response
    })
  }

}
</script>

<style></style>
