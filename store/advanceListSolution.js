import initialState from './state'

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
      const { result } = await this.$axios.post(`advance/posttosap`, payload)
      return result === 200 ? commit('clearCheckedRows') : null
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
