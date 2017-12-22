<template>
  <div>
    <AdvanceManager></AdvanceManager>
  </div>
</template>

<script>
import AdvanceManager from '@/components/AdvanceManager/AdvanceManager'

export default {
  async asyncData ({app, store, params}) {
    if (!store.state.employee) {
      await store.dispatch('employee')
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
