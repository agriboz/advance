import includes from 'lodash/includes'
export default function ({
  store,
  error,
  route,
  redirect
}) {
  const isManager = route.name === 'manager'
  const isSolutionCenter = route.name === 'advance-list'
  const isAdmin = route.name === 'settings'

  if (isManager && !store.state.employeeRoles.some(v => [2, 5].indexOf(v) !== -1)) {
    return redirect('/')
  }
  if (isSolutionCenter && !includes(store.state.employeeRoles, (5))) {
    return redirect('/')
  }

  if (isAdmin && !includes(store.state.employeeRoles, (5))) {
    return redirect('/')
  }
}
