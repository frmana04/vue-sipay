import axios from 'axios'

export default {
  getAllBreeds () {
    return axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
      return response.data.message
    })
  },
  getImagesByBreed (breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(response => {
      return response.data.message
    })
  },
  getSubBreed (breed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/list`).then(response => {
      return response.data.message
    })
  },
  getSubBreedImages (breed, subBreed) {
    return axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`).then(response => {
      return response.data.message
    })
  }
}
