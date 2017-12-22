const actions = {
  openSidebar ({ commit }) {
    commit('openSidebar')
  },

  advanceRequestOpenModal ({ commit }, type) {
    commit('advanceRequestOpenModal', type)
  },

  async companies ({
    commit,
    state
  }) {
    const {
      data
    } = await this.$axios.get(`advance/companies`)
    commit('companies', data)
  },

  async advanceStatusList ({
    commit,
    state
  }) {
    const {
      data
    } = await this.$axios.get(`advance/status`)
    commit('advanceStatusList', data)
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
    const { status } = await this.$axios.post(payload.url, payload.data)

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

  // Advance List
  async advanceList ({ commit, dispatch, state, router }) {
    const employee = {id: state.employee.id}
    const { data } = await this.$axios.post(`advance/search`, {employee})
    commit('advanceList', data)
  },

  async destroyAdvanceList ({ commit, dispatch, state }) {
    const payload = state.advanceList.checkedRows

    const { status } = await this.$axios.post(`advance/cancel/`, payload)
    return status === 200 ? dispatch('advanceList') : null
  }
}

export default actions
