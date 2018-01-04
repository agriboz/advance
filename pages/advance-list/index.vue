<template>
  <div>
    <AdvanceList></AdvanceList>
  </div>
</template>

<script>
import AdvanceList from '@/components/AdvanceList/AdvanceList'

export default {
  middleware: 'authenticated',
  async asyncData ({app, store, redirect}) {
    if (!store.state.employee) {
      await store.dispatch('employee')
    }

    if (!store.state.manager.employeePhoto) {
      await store.dispatch('advanceListSolution/getEmployeePhoto')
    }
  },
  components: {
    AdvanceList
  }
}
</script>
