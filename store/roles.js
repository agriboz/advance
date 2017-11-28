const roles = {
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
      state.data = state.data.filter(
        item => item.id !== payload.id
      )
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
  }
}

export default roles
