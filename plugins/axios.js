import Vue from 'vue'
const { $toast } = Vue.prototype

export default function ({ app: { $axios, router } }, inject) {
  $axios.interceptors.response.use(
    response => {
      console.log(response)
      if (response.status === 200 && response.config.method !== 'get') {
        $toast.open({
          type: 'is-success',
          message: 'İşlem Başarılı'
        })
      }
      return response
    },
    error => {
      console.dir(error)
      console.dir(error.statusCode)
      if (error.statusCode === 401) {
        $toast.open({
          type: 'is-danger',
          message: error.response.data.message
        })
      } else if (error.statusCode === 500) {
        $toast.open({
          type: 'is-danger',
          message: 'Something wrong with the server'
        })
      }
      return Promise.reject(error)
    }
  )

  $axios.interceptors.request.use(
    config => {
      console.log(config)
      return config
    },
    error => {
      console.log(error)
      return Promise.reject(error)
    }
  )
}
