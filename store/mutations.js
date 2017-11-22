const mutations = {
  openSidebar (state) {
    state.openSidebar = !state.openSidebar
  },

  advanceRequestOpenEditModal (state) {
    state.advanceRequest.modal.edit = !state.advanceRequest.modal.edit
  },

  employee (state, employee) {
    state.employee = employee
  },

  editSelectedKey (state, field) {
    Object.assign(state.settings.key.selected, field)
  },

  keyOpenEditModal (state) {
    state.settings.key.modal.edit = !state.settings.key.modal.edit
  },

  keySettings (state, payload) {
    state.settings.key.data = payload
  },

  setSelectedKey (state, selectedKey) {
    state.settings.key.selected = selectedKey
  },

  // Settings - Roles

  settingsAddRoles (state, payload) {
    state.settings.roles.data = [...state.settings.roles.data, payload]
  },

  settingsRemoveRole (state, payload) {
    state.settings.roles.data = state.settings.roles.data.filter(
      item => item.id !== payload.id
    )
  },

  settingsRoles (state, payload) {
    state.settings.roles.data = payload
  },

  searchEmployee (state, payload) {
    state.settings.roles.searchEmployee = payload
  },

  selectedEmployee (state, payload) {
    state.settings.roles.selectedEmployee = payload
  }
}

export default mutations
