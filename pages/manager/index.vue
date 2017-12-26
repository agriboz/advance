<template>
  <div>
    <AdvanceManager></AdvanceManager>
  </div>
</template>

<script>
import AdvanceManager from '@/components/AdvanceManager/AdvanceManager'
import includes from 'lodash/includes'

export default {

  async asyncData ({app, store, redirect}) {
    const checkRoles = () => {
      const roles = store.state.employee.roles
      const hasRoles = includes(roles, 2 || 5)
      console.log(hasRoles)
      return hasRoles !== true ? redirect('/') : ''
    }

    if (!store.state.employee) {
      await store.dispatch('employee').then(checkRoles)
    }

    if (store.state.employee) {
      return checkRoles()
    }
    if (!store.state.advanceList.data.length) {
      await store.dispatch('advanceList')
    }
    if (!store.state.manager.employeePhoto) {
      await store.dispatch('manager/getEmployeePhoto')
    }
  },
  components: {
    AdvanceManager
  }
}
</script>
