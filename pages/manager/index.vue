<template>
  <div>
    <AdvanceManager></AdvanceManager>
  </div>
</template>

<script>
import AdvanceManager from '@/components/AdvanceManager/AdvanceManager'

export default {
  middleware: 'authenticated',
  async asyncData ({app, store, redirect}) {
    if (!store.state.employee) {
      await store.dispatch('employee')
    }

    if (!store.state.advanceRequestManager.data.length) {
      await store.dispatch('advanceRequestManager')
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
