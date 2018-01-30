const manager = {
  namespaced: true,
  state: {
    data: [],
    subordinates: [],
    selectedSubordinates: [],
    updateSelected: {},
    modal: {
      edit: false,
      create: false
    }
  },
  mutations: {
    editSelectedKey (state, field) {
      Object.assign(state.selected, field)
    },

    openModal (state, type) {
      state.modal[type] = !state.modal[type]
    },

    subordinates (state, payload) {
      state.subordinates = payload
    },

    employeePhoto (state, payload) {
      state.employeePhoto = payload
    }
  },

  getters: {
    employee (state, rootState, rootGetters) {
      return rootGetters.employee
    },

    subordinates (state) {
      return state.subordinates.filter(i => i.canDemandAdvance)
    }

  },

  actions: {
    openModal ({ commit }, type) {
      commit('openModal', type)
    },

    async getEmployeePhoto ({commit, getters}) {
      const employeeRegistry = getters.employee.registry

      const {
        data
      } = await this.$axios.get(`employee/${employeeRegistry}/photo`)

      commit('employeePhoto', data)
    },

    async getSubordinates ({ commit, getters }) {
      const employeeId = getters.employee.id
      const {
        data
      } = await this.$axios.get(`employee/${employeeId}/subordinates`)

      commit('subordinates', data)
    }
  }
}

export default manager
