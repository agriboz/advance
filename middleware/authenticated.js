import includes from 'lodash/includes'
export default function ({
  store,
  error
}) {
  if (includes(store.state.employeeRoles, (2))) {
    return true
  }
}
