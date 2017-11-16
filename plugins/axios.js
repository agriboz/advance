import Vue from 'vue'
const { $toast } = Vue.prototype

export default function ({ app: { $axios, router } }, inject) {
  $axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      console.dir(error)
      if (error.statusCode === 401) {
        $toast.open({
          type: 'is-danger',
          message: error.response.data.message
        })
      }
      return Promise.reject(error)
    }
  )

  $axios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )
}
