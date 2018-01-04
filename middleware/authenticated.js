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

  if (isManager && !includes(store.state.employeeRoles, (2))) {
    error({
      message: 'Bu sayfayı görüntülemeye izniniz yok.'
    })
  }
  if (isSolutionCenter && !includes(store.state.employeeRoles, (5))) {
    error({
      message: 'Bu sayfayı görüntülemeye izniniz yok.'
    })
  }

  if (isAdmin && !includes(store.state.employeeRoles, (5))) {
    error({
      message: 'Bu sayfayı görüntülemeye izniniz yok.'
    })
  }
}
