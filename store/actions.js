const actions = {
  openSidebar ({ commit }) {
    commit('openSidebar')
  },

  advanceRequestOpenModal ({ commit }, type) {
    commit('advanceRequestOpenModal', type)
  },

  // Advance Request

  async advanceRequest ({ commit, dispatch, state, router }) {
    const employeeId = state.employee.id
    const { data } = await this.$axios.get(`advance/${employeeId}/search`)
    commit('advanceRequest', data)
  },

  editSelectedAdvance ({ commit, state }, payload) {
    commit('editSelectedAdvance', payload)
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

  editAdvance ({ commit, state }, payload) {
    commit('editAdvance', payload)
  },

  async updateAdvance ({ commit, state }, payload) {
    const { status } = await this.$axios.put(`advance/${payload.id}`, payload)
    return status === 200 ? commit('updateAdvance', payload) : null
  },

  async destroyAdvance ({ commit, state }, payload) {
    const { status } = await this.$axios.post(`advance/cancel/`, [payload])
    return status === 200 ? commit('destroyAdvance', payload) : null
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

  /* async rolesSettings ({ commit }) {
    const { data } = await this.$axios.get('role/1/employees')
    commit('settingsRoles', data)
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
  }, */

  // Advance List
  async advanceList ({ commit, dispatch, state, router }) {
    const employee = {id: state.employee.id}
    const { data } = await this.$axios.post(`advance/search`, {employee})
    commit('advanceList', data)
  },

  async destroyAdvanceList ({ commit, state }) {
    const payload = state.advanceList.checkedRows
    commit('destroyAdvanceList', payload)
    /* const { status } = await this.$axios.post(`advance/cancel/`, payload)
    return status === 200 ? commit('destroyAdvanceList', payload) : null */
  }
}

export default actions
