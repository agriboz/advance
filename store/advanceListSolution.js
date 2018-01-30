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
      Object.assign(state.searchQuery, field)
    },

    data (state, payload) {
      state.data = payload
    },

    cleanSearchQuery (state) {
      state.searchQuery = {}
    },

    clearCheckedRows () {
      initialState.advanceList.checkedRows = []
    },

    employeePhoto (state, payload) {
      state.employeePhoto = payload
    }

  },

  getters: {
    employee (state, rootState, rootGetters) {
      return rootGetters.employee
    },
    checkedRows (state, rootState, rootGetters) {
      return rootGetters.advanceList.checkedRows
    },
    selectedEmployeeRegistry (state, rootState, rootGetters) {
      return rootGetters.advanceRequest.selected.registery
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

    async getEmployeePhoto ({commit}, paylaod) {
      const {
        data
      } = await this.$axios.get(`employee/${paylaod}/photo`)

      await commit('employeePhoto', data)
    },

    async sendToSap ({ commit, state, getters }) {
      const payload = getters.checkedRows
      const response = await this.$axios.post(`advance/posttosap`, payload)

      const updatedArray = map(assign(
        mapKeys(state.data, k => k.id),
        mapKeys(response.data, k => k.id)
      ))

      const sortUpdatedArray = updatedArray.sort((a, b) => b.id - a.id)

      commit('data', sortUpdatedArray)
      commit('clearCheckedRows')
    },

    async advanceSearch ({
      commit,
      state,
      getters
    }) {
      const searchQuery = state.searchQuery
      // workaround date
      searchQuery.requestStartDate = searchQuery.requestStartDate ? (new Date(searchQuery.requestStartDate).toLocaleDateString()) : null
      searchQuery.requestEndDate =searchQuery.requestEndDate ? (new Date(searchQuery.requestEndDate).toLocaleDateString()) : null

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
