const roles = {
  namespaced: true,
  state: {
    data: [],
    searchEmployee: [],
    selectedEmployee: null
  },
  mutations: {
    settingsAddRoles (state, payload) {
      state.data = [...state.data, payload]
    },

    settingsRemoveRole (state, payload) {
      state.data = state.data.filter(item => item.id !== payload.id)
    },

    settingsRoles (state, payload) {
      state.data = payload
    },

    searchEmployee (state, payload) {
      state.searchEmployee = payload
    },

    selectedEmployee (state, payload) {
      state.selectedEmployee = payload
    }
  },
  actions: {
    async rolesSettings ({ commit }) {
      const { data } = await this.$axios.get('role/5/employees')
      commit('settingsRoles', data)
    },

    async searchEmployee ({ commit, state }, payload) {
      const { data } = await this.$axios.get(`employee/search/${payload}`)
      commit('searchEmployee', data)
    },

    async setRole ({ commit, state }) {
      const selectedEmployee = state.selectedEmployee
      const { status } = await this.$axios.post(`employee/role/${selectedEmployee.id}`, {
        id: 5
      })

      return status === 200
        ? commit('settingsAddRoles', selectedEmployee)
        : null
    },

    async removeRole ({ commit, state }, payload) {
      const { status } = await this.$axios.delete(`employee/role/${payload.id}`)
      return status === 200 ? commit('settingsRemoveRole', payload) : null
    }
  }
}

export default roles
