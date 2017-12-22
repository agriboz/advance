const mutations = {
  openSidebar (state) {
    state.ui.openSidebar = !state.ui.openSidebar
  },

  advanceRequestOpenModal (state, type) {
    state.advanceRequest.modal[type] = !state.advanceRequest.modal[type]
  },

  companies (state, payload) {
    state.companies = payload
  },

  advanceStatusList (state, payload) {
    state.advanceStatusList = payload
  },

  // Advance Request

  advanceRequest (state, payload) {
    state.advanceRequest.data = payload
  },

  editSelectedAdvance (state, field) {
    Object.assign(state.advanceRequest.selected, field)
  },

  editAdvance (state, payload) {
    Object.assign(state.advanceRequest.selected, payload)
  },

  updateAdvance (state, payload) {
    state.advanceRequest.data = state.advanceRequest.data.map(
      item => (item.id === payload.id ? payload : item)
    )
  },

  destroyAdvance (state, payload) {
    state.advanceRequest.data = state.advanceRequest.data.filter(
      item => item.id !== payload.id
    )
  },

  createAdvance (state, payload) {
    const employee = state.employee
    const ownerEmployee = {
      id: employee.id
    }
    const status = { id: 1 }
    Object.assign(state.createAdvance, payload, {
      employee,
      ownerEmployee,
      status
    })
  },

  disableAmount (state) {
    state.advanceRequest.disableAmount = !state.advanceRequest.disableAmount
    state.createAdvance.amount = 0
    state.advanceRequest.selected.amount = 0
  },

  // Sidebar

  employee (state, employee) {
    state.employee = employee
  },

  // Advance List

  advanceList (state, payload) {
    state.advanceList.data = payload
  },

  checkedRows (state, payload) {
    state.advanceList.checkedRows = payload
  }

  /* destroyAdvanceList (state, payload) {
    const stated = state.advanceList.checkedRows
    state.advanceList.data = state.advanceList.data.filter(item =>
      !stated.includes(item)
    )
  } */
}

export default mutations
