import includes from 'lodash/includes'

const getters = {
  menu (state) {
    const employeeRoles = state.employeeRoles
    const isManager = includes(employeeRoles, 2)
    const isSolutionCenter = includes(employeeRoles, 5)
    // dirty check
    if (state.employee) {
      return state.ui.menu.filter(item => {
        if (isManager && item.id === 3) {
          item.visible = true
        }
        if ((isManager || isSolutionCenter) && item.id === 3) {
          item.visible = true
        }
        if (isSolutionCenter && (item.id === 5 || item.id === 4)) {
          item.visible = true
        }
        return item
      })
    }
  },

  employee (state) {
    return state.employee
  },

  checkedRows (state) {
    return state.advanceList.checkedRows
  },

  advanceRequestList (state) {
    return state.advanceRequest.data
  },

  advanceRequestListManager (state) {
    const {
      employeeRequested,
      ownerRequested,
      transferToSap
    } = state.advanceStatus
    return state.advanceRequestManager.data.filter(item => {
      return (
        console.log(item.status.id),
        item.status.id <= employeeRequested || ownerRequested || transferToSap
      )
    })
  }
}

export default getters
