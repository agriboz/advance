<template>
  <div>
    <AdvanceList></AdvanceList>
  </div>
</template>

<script>
import AdvanceList from '@/components/AdvanceList/AdvanceList'

export default {
  async asyncData ({app, store, params}) {
    if (!store.state.employee) {
      await store.dispatch('employee')
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
