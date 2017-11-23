const actions = {
  openSidebar ({ commit }) {
    commit('openSidebar')
  },

  advanceRequestOpenModal ({ commit }, type) {
    commit('advanceRequestOpenModal', type)
  },

  // Advance Request

  async advanceRequest ({ commit, dispatch, state, router }) {
    await dispatch('employee')
    const employeeId = state.employee.id
    const { data } = await this.$axios.get(`advance/${employeeId}/search`)
    commit('advanceRequest', data)
  },

  async setAdvance ({ commit, dispatch, state }, payload) {
    const { status } = await this.$axios.post(`advance`, payload)

    return status === 200
      ? dispatch('advanceRequest').then(() => {
        commit('advanceRequestOpenModal', 'create')
        state.createAdvance = {
          amount: 100,
          amountPercentage: '0'
        }
      })
      : null
  },

  createAdvance ({ commit, state }, payload) {
    commit('createAdvance', payload)
  },

  // Sidebar Employee
  async employee ({ commit }) {
    const { data } = await this.$axios.get('employee')
    commit('employee', data)
  },

  // Settings - Roles

  async rolesSettings ({ commit }) {
    const { data } = await this.$axios.get('role/1/employees')
    commit('settingsRoles', data)
  },

  // Settings - Key
  keyOpenEditModal ({ commit }) {
    commit('keyOpenEditModal')
  },

  async keySettings ({ commit }) {
    const { data } = await this.$axios.get('appsettings')
    commit('keySettings', data)
  },

  setSelectedKey ({ commit }) {
    commit('setSelectedKey')
  },

  editSelectedKey ({ commit, state }, payload) {
    commit('editSelectedKey', payload)
  },

  async updateSelectedKey ({ commit, dispatch, state }, payload) {
    await this.$axios.put(`appsettings/${payload.key}`, payload)
    await commit('keyOpenEditModal')
    await dispatch('keySettings')
    // data has no id that is why getting again
  },

  async searchEmployee ({ commit, state }, payload) {
    const { data } = await this.$axios.get(`employee/search/${payload}`)
    commit('searchEmployee', data)
  },

  async setRole ({ commit, dispatch, state }, payload) {
    const { status } = await this.$axios.post(`employee/role/${payload}`, {
      id: 1
    })

    return status === 200
      ? commit('settingsAddRoles', state.settings.roles.selectedEmployee)
      : null
  },

  async removeRole ({ commit, state }, payload) {
    const { status } = await this.$axios.delete(`employee/role/${payload.id}`)
    return status === 200 ? commit('settingsRemoveRole', payload) : null
  }
}

export default actions
