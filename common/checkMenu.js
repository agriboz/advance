import state from '../store/state'

export const deneme = () => {
  return state.employee.roles[0] === 2
}
