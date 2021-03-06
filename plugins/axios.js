import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const { $toast } = Vue.prototype

export default function ({ app: { $axios, store } }) {
  $axios.interceptors.response.use(
    response => {
      if (response.status === 200 && response.config.method !== 'get') {
        $toast.open({
          type: 'is-success',
          message: 'İşlem Başarılı'
        })
      }

      store.state.ui.tableOpts.isLoading = false
      return response
    },
    error => {
      if (error.statusCode === 401) {
        $toast.open({
          type: 'is-danger',
          message: error.response.data.message
        })
      } else if (error.statusCode === 404) {
        $toast.open({
          type: 'is-info',
          message: 'Sonuç Bulunamadı'
        })
      } else if (error.statusCode === 500) {
        $toast.open({
          type: 'is-danger',
          message: error.response.data.error
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
      return Promise.reject(error)
    }
  )
}
