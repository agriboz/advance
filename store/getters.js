const getters = {
  menu (state) {
    return state.menu
  },

  employee (state) {
    return state.employee
  },

  advanceRequestList (state) {
    const {
      employeeRequested,
      ownerRequested,
      transferToSap
    } = state.advanceStatus
    return state.advanceRequest.data.filter(item => {
      return (
        item.status.id <= (employeeRequested || ownerRequested || transferToSap)
      )
    })
  }
}

export default getters
