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

  advanceRequestManager (state, payload) {
    state.advanceRequestManager.data = payload
  },

  editSelectedAdvance (state, field) {
    Object.assign(state.advanceRequest.selected, field)
  },

  editAdvance (state, payload) {
    state.advanceRequest.selected = Object.assign(state.advanceRequest.selected, payload)
    if ((state.advanceRequest.selected.amountPercentage === '50') || (state.advanceRequest.selected.amountPercentage === 50)) {
      state.advanceRequest.disableAmount = true
      state.advanceRequest.selected.amount = 0
    }
    if ((state.advanceRequest.selected.amountPercentage === '0') || (state.advanceRequest.selected.amountPercentage === 0)) {
      state.advanceRequest.disableAmount = false
    }
  },

  updateAdvance (state, payload) {
    state.advanceRequest.data = state.advanceRequest.data.map(
      item => (item.id === payload.id ? payload : item)
    )
  },

  updateAdvanceManager (state, payload) {
    state.advanceRequestManager.data = state.advanceRequestManager.data.map(
      item => (item.id === payload.id ? payload : item)
    )
  },

  updateAdvanceListSolution (state, payload) {
    state.advanceListSolution.data = state.advanceListSolution.data.map(
      item => (item.id === payload.id ? payload : item)
    )
  },

  destroyAdvance (state, payload) {
    state.advanceRequest.data = state.advanceRequest.data.filter(
      item => item.id !== payload.id
    )
  },

  canAdvanceEmployee (state, payload) {
    state.advanceRequest.canAdvanceEmployee = payload
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
    if ((state.createAdvance.amountPercentage === '50') || (state.createAdvance.amountPercentage === 50)) {
      state.advanceRequest.disableAmount = true
      state.createAdvance.amount = 0
    }
    if ((state.createAdvance.amountPercentage === '0') || (state.createAdvance.amountPercentage === 0)) {
      state.advanceRequest.disableAmount = false
    }
  },

  // Sidebar

  employee (state, employee) {
    state.employee = employee
  },

  employeeRoles (state, employeeRoles) {
    state.employeeRoles = employeeRoles
  },

  // Advance List

  advanceList (state, payload) {
    state.advanceList.data = payload
  },

  checkedRows (state, payload) {
    state.advanceList.checkedRows = payload
  },

  /* destroyAdvanceList (state, payload) {
    const stated = state.advanceList.checkedRows
    state.advanceList.data = state.advanceList.data.filter(item =>
      !stated.includes(item)
    )
  } */
  canMakeAdvanceRequest (state, payload) {
    state.canMakeAdvanceRequest = payload
  }

}

export default mutations
