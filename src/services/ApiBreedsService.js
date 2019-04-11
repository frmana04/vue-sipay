import axios from 'axios'

export default {
  getAllBreeds () {
    return axios.get('https://dog.ceo/api/breeds/list/all').then(response => {
      return response.data.message
    })
  },
  getImagesByBreed (breed) {
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(response => {
      return response.data.message
    })
  }
}
