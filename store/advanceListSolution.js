import initialState from './state'
var _ = require('lodash')

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
      console.log('fire')
      // const response = await this.$axios.post(`advance/posttosap`, payload)
      const response = [
        {"id":20,"status":{"id":5,"name":"siktirgit"}},
        {"id":21,"status":{"id":5,"name":"siktirgit"}},
        {"id":22,"status":{"id":5,"name":"siktirgit"}},
        {"id":23,"status":{"id":5,"name":"siktirgit"}},
        {"id":24,"status":{"id":5,"name":"siktirgit"}}
      ]

      var newArr = response.map((item, index) => {
        return state.data.map((res, ine) => {
          return res.id === item.id ? item : res
        })
      })
      console.log(newArr)
        commit('data', newArr)
        // commit('clearCheckedRows')

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
