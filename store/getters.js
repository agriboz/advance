const getters = {
  menu (state) {
    return state.menu
  },

  employee (state) {
    return state.employee
  },

  deneme (state, heyo) {
    return state.settings.roles.searchEmployee.filter(item => {
      return (
        Object.keys(item)
      )
    })
  }
}

export default getters
