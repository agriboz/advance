const getters = {
  menu (state) {
    return state.ui.menu
  },

  employee (state) {
    return state.employee
  },

  checkedRows (state) {
    return state.advanceList.checkedRows
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
