import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import ListBreeds from '@/components/ListBreeds'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/listbreeds',
      name: 'listbreeds',
      component: ListBreeds
    },
    {
      path: '/breed/:id/images',
      name: 'imagesbreed',
      component: ListBreeds
    }
  ]
})
