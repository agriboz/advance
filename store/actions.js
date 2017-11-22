const actions = {
  openSidebar ({ commit }) {
    commit('openSidebar')
  },

  advanceRequestOpenEditModal ({ commit }) {
    commit('advanceRequestOpenEditModal')
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
    return status === 200
      ? commit('settingsRemoveRole', payload)
      : null
  }
}

export default actions
