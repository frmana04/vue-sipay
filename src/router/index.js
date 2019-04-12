import Vue from 'vue'
import Router from 'vue-router'
import ListBreeds from '@/components/ListBreeds'
import BreedImages from '@/components/BreedImages'
import subBreedImages from '@/components/subBreedImages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: ListBreeds
    },
    {
      path: '/listbreeds',
      name: 'listbreeds',
      component: ListBreeds
    },
    {
      path: '/breed/:breed/images',
      name: 'imagesbreed',
      component: BreedImages
    },
    {
      path: '/subbreed/:breed/:subBreed/images',
      name: 'imagessubbreed',
      component: subBreedImages
    }
  ]
})
