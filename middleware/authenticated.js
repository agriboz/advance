import includes from 'lodash/includes'
export default function ({
  store,
  route,
  redirect
}) {
  const roles = store.state.employeeRoles
  const isManager = route.name === 'manager'
  const isSolutionCenter = route.name === 'advance-list'
  const isAdmin = route.name === 'settings'

  if (roles.length) {
    /* if (isManager && !roles.some(v => [2].indexOf(v) !== -1)) {
      return redirect('/')
    }
    if (isSolutionCenter && !includes(roles, (5))) {
      return redirect('/')
    }

    if (isAdmin && !includes(roles, (5))) {
      return redirect('/')
    } */
    return isManager && !roles.some(v => [2].indexOf(v) !== -1)
      ? redirect('/')
      : isSolutionCenter && !includes(roles, (5))
        ? redirect('/')
        : isAdmin && !includes(roles, (5))
          ? redirect('/')
          : null
  }

}
