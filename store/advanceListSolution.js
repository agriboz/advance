import initialState from './state'
import {
  map,
  assign,
  mapKeys
} from 'lodash'

const advanceListSolution = {
  namespaced: true,
  state: {
    data: [],
    searchQuery: {},
    modal: {
      edit: false
    }

  },
  mutations: {
    openModal (state, type) {
      state.modal[type] = !state.modal[type]
    },

    makeSearch (state, field) {
      state.searchQuery = Object.assign(state.searchQuery, field)
    },

    data (state, payload) {
      state.data = payload
    },

    cleanSearchQuery (state) {
      state.searchQuery = {}
    },

    clearCheckedRows (state) {
      initialState.advanceList.checkedRows = []
    }

  },

  getters: {
    employee (state, rootState, rootGetters) {
      return rootGetters.employee
    },
    checkedRows (state, rootState, rootGetters) {
      return rootGetters.advanceList.checkedRows
    }
  },

  actions: {
    openModal ({
      commit
    }, type) {
      commit('openModal', type)
    },

    cleanSearchQuery ({ commit }) {
      commit('cleanSearchQuery')
    },

    async getEmployeePhoto ({commit, state, getters}) {
      const employeeRegistry = getters.employee.registry

      const {
        data
      } = await this.$axios.get(`employee/${employeeRegistry}/photo`)

      commit('employeePhoto', data)
    },

    async sendToSap ({ commit, state, getters }) {
      const payload = getters.checkedRows
      const response = await this.$axios.post(`advance/posttosap`, payload)

      const updatedAray = map(assign(
        mapKeys(state.data, k => k.id),
        mapKeys(response.data, k => k.id)
      ))

      commit('data', updatedAray)
      commit('clearCheckedRows')
    },

    async advanceSearch ({
      commit,
      state,
      getters
    }) {
      const searchQuery = state.searchQuery
      const sendData = {
        ...searchQuery, employee: { id: getters.employee.id }
      }
      const {
        data
      } = await this.$axios.post(`advance/search`, sendData)
      commit('data', data)
    }

  }
}

export default advanceListSolution
