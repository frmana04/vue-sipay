<template>
<div id="main-container" >
<h1> Lista de todas las razas </h1>
    <input class="search-input" v-model="breedQuery" placeholder="Buscar Raza">
    <button @click="search(breedQuery)">Buscar Raza</button>
    <div  v-if="breedSearh" class="item-founded">
      Raza encontrada:

        <router-link  :to="`/breed/${breedSearh}/images`">{{breedSearh}}</router-link>

    </div>

<ul class="flex-container">
  <li class="flex-item"  v-for="(value, key) in listBreeds"  >
   <router-link  :to="`/breed/${key}/images`">{{key}}</router-link>
  </li>
</ul>
</div>
</template>

<script>

import ApiBreedsService from '../services/ApiBreedsService.js'
export default {
  name: 'ListBreeds',
  data () {
    return {
      listBreeds: [],
      breedQuery: '',
      breedSearh: undefined
    }
  },

  methods: {
    search: function () {
      this.breedSearh = Object.keys( this.listBreeds ).find( breed => {
         return breed.toLowerCase() == this.breedQuery.toLowerCase()
       })
     }

 },

  mounted: function () {
    ApiBreedsService.getAllBreeds().then(response => {
      this.listBreeds = response
      console.log(this.listBreeds)
    })
  },

}
</script>

<style scoped>

h1{
  font-size:3em;
  text-align:center;
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

.item-founded {

 font-weight: bold;
  font-size: 2em;
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

input {
	box-sizing: border-box;
	background: #E9E9E9;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding: 0.35em 0.75em;
	border: none;
	font-size: 1.1em;
	text-decoration: none;
	line-height: normal;
	max-height: 3em;
}
button {
	box-sizing: border-box;
	border-radius: 0px 2px 2px 0px;
	background: #8B798C;
	font-weight: 300;
	text-transform: uppercase;
	color: white;
	padding: 0.35em 0.75em;
	border: none;
	font-size: 1.1em;
	text-decoration: none;
	cursor: pointer;
}
button:hover {
	background: #C17CCF;
}



</style>
