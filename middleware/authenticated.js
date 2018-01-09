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

  if (isManager && !includes(store.state.employeeRoles, (2, 5))) {
    return redirect('/')
  }
  if (isSolutionCenter && !includes(store.state.employeeRoles, (5))) {
    return redirect('/')
  }

  if (isAdmin && !includes(store.state.employeeRoles, (5))) {
    return redirect('/')
  }
}
