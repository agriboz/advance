import axios from 'axios'
import values from 'lodash/values'

const actions = {
  async browserInit ({ commit }) {
    const {
      data
    } = await axios.get(`${process.env.baseURL}employee`, {
      withCredentials: true
    })
    console.log(process.env.baseURL)
    commit('employee', data)
    commit('employeeRoles', values(data.roles))
  },

  openSidebar ({ commit }) {
    commit('openSidebar')
  },

  advanceRequestOpenModal ({ commit }, type) {
    commit('advanceRequestOpenModal', type)
  },

  async companies ({
    commit
  }) {
    const {
      data
    } = await this.$axios.get(`advance/companies`)
    commit('companies', data)
  },

  async advanceStatusList ({
    commit
  }) {
    const {
      data
    } = await this.$axios.get(`advance/status`)
    commit('advanceStatusList', data)
  },

  // Advance Request

  async advanceRequest ({ commit, state }) {
    const employeeId = state.employee.id
    if (employeeId) {
      const { data } = await this.$axios.get(`advance/${employeeId}/search`)
      commit('advanceRequest', data)
    }
  },

  async canAdvanceEmployee ({ commit, state }) {
    const employeeId = state.employee.id
    const { data } = await this.$axios.get(`canAdvanceEmployee/${employeeId}`)
    commit('canAdvanceEmployee', data)
  },

  async canAdvanceEmployeeManager ({ commit }, payload) {
    const data = await this.$axios.get(`canAdvanceEmployee/${payload}`)
    return data ? commit('canMakeAdvanceRequest', data.data) : null
  },

  async advanceRequestManager ({ commit, state }) {
    const employeeId = state.employee.id
    const { data } = await this.$axios.get(`advance/manager/${employeeId}/search`)
    commit('advanceRequestManager', data)
  },

  editSelectedAdvance ({ commit }, payload) {
    commit('editSelectedAdvance', payload)
  },

  async setAdvance ({ commit, dispatch, state }, payload) {
    const { data } = await this.$axios.post(payload.url, payload.data)

    return data
      ? dispatch('advanceRequest').then(() => {
        commit('manager/openModal', 'create')
        state.createAdvance = {
          amount: 100,
          amountPercentage: '0'
        }
      })
      : null
  },

  editAdvance ({ commit }, payload) {
    commit('editAdvance', payload)
  },

  async updateAdvance ({ commit }, payload) {
    const { status, data } = await this.$axios.put(`advance/${payload.id}`, payload)
    return status === 200 ? commit('updateAdvanceListSolution', data) : null
  },

  async updateAdvanceManager ({
    commit
  }, payload) {
    const {
      status
    } = await this.$axios.put(`advance/${payload.id}`, payload)
    return status === 200 ? commit('updateAdvanceManager', payload) : null
  },

  async destroyAdvance ({ commit }, payload) {
    const { status } = await this.$axios.post(`advance/cancel/`, [payload])
    return status === 200 ? commit('destroyAdvance', payload) : null
  },

  createAdvance ({ commit }, payload) {
    commit('createAdvance', payload)
  },

  // Sidebar Employee
  async employee ({commit}) {
    const { data } = await this.$axios.get(`employee`)
    commit('employee', data)
  },

  // Advance List
  async advanceList ({ commit, state }) {
    const employee = {id: state.employee.id}
    const { data } = await this.$axios.post(`advance/search`, {employee})
    commit('advanceList', data)
  },

  async destroyAdvanceList ({ dispatch, state }) {
    const payload = state.advanceList.checkedRows

    const { status } = await this.$axios.post(`advance/cancel/`, payload)
    return status === 200 ? dispatch('advanceRequestManager') : null
  }
}

export default actions
