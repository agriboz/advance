<template>
  <div>
    <AdvanceList></AdvanceList>
  </div>
</template>

<script>
import AdvanceList from '@/components/AdvanceList/AdvanceList'
import includes from 'lodash/includes'

export default {
  async asyncData ({app, store, redirect}) {
    const checkRoles = () => {
      const roles = store.state.employee.roles
      const hasRoles = includes(roles, 5)
      return hasRoles !== true ? redirect('/') : ''
    }

    if (!store.state.employee) {
      await store.dispatch('employee').then(checkRoles)
    }

    if (store.state.employee) {
      return checkRoles()
    }

    if (!store.state.manager.employeePhoto) {
      await store.dispatch('manager/getEmployeePhoto')
    }
  },
  components: {
    AdvanceList
  }
}
</script>
