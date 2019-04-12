<template>

<div>
<h1>Raza: {{breed}}</h1>
<h2>Subrazas:{{listSubBreed.length}}</h2>
<ul class="flex-container">
<li class="flex-item" v-for="subBreed in listSubBreed" >

   <router-link  :to="`/subBreed/${breed}/${subBreed}/images`">{{subBreed}}</router-link>
  </li>
</ul>
<ul class="">
<li  v-for="image in showedImages" >
   <img :src="image">
  </li>
</ul>
<div class="buttons">
<button class="previous" :disabled="controlImages.init<=0" @click="viewBackImages()">Volver</button>
<button class="next" :disabled="controlImages.end>=listImages.length" @click="viewFollowImages()">Siguiente</button>
</div>
    <h3>
   <router-link  to="/listbreeds">Volver a todas las razas</router-link>
    </h3>
</div>

</template>

<script>
import ApiBreedsService from '../services/ApiBreedsService.js'
export default {
  name: 'BreedImages',
  data () {
    return {
      listImages: [],
      showedImages: [],
      listSubBreed: [],
      breed: this.$route.params.breed,
      controlImages: {
        init: 0,
        end: 10
      }
    }
  },
  methods: {
    viewFollowImages: function () {
      if (this.controlImages.end + 10 > this.listImages.length) {
        this.controlImages.init = this.controlImages.init + this.listImages.length - this.controlImages.end
        this.controlImages.end = this.listImages.length
      } else {
        this.controlImages.end += 10
        this.controlImages.init += 10
      }

      this.showedImages = this.listImages.slice(this.controlImages.init, this.controlImages.end)
    },
    viewBackImages: function () {
      if (this.controlImages.init - 10 < 0) {
        this.controlImages.end -= this.controlImages.init
        this.controlImages.init = 0
      } else {
        this.controlImages.init -= 10
        this.controlImages.end -= 10
      }
      this.showedImages = this.listImages.slice(this.controlImages.init, this.controlImages.end)
    }
 },
   mounted: function () {

     ApiBreedsService.getImagesByBreed(this.breed).then(response => {
      this.listImages = response
      if (this.listImages.length < 10) this.controlImages.end = this.listImages.length
      this.showedImages = this.listImages.slice(0,10)
    })

     ApiBreedsService.getSubBreed(this.breed).then(response => {
      this.listSubBreed = response
    })
  }

}
</script>

<style scoped>

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: stretch;
  padding: 0;
  margin: 10px 0;
}
li {
  list-style-type: none;
  margin: 10px;
  flex: 1 0 auto;
}
img {
  width: 100%;
  height: 160px;
  height: 20vh;
  display: block;
  object-fit: cover;
  border: 1px solid black;
  box-shadow: 1px 3px 8px rgba(0,0,0,0.5);
}

#main-container{
	background: #88686A;
  padding: 1em;
}
.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;


  display: flex;
  flex-wrap:  wrap;


}



.flex-item {

  padding: 5px;
  width: 200px;
  height: 100px;
  margin-top: 10px;

  line-height: 10px;
  font-weight: bold;
  font-size: 1.8em;
  text-align: center;
}

.buttons{
  display:flex;
   justify-content: center;

}

.button {
  width: 64px;
  height: 64px;
  text-align: center;
  display: inline-block;
  margin-top: 10px;
  padding-top: 2px;
}
.previous {

  background-color: #f8f7f8;

  font-size: 1.5em;
  font-weight: bold;
}
.next {
  background-color: #f8f7f8;
  font-weight: bold;

  font-size: 1.5em;
}

</style>
