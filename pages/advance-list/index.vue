<template>
  <div>
    <AdvanceList></AdvanceList>
  </div>
</template>

<script>
import AdvanceList from '@/components/AdvanceList/AdvanceList'

export default {
  async asyncData ({app, store, redirect}) {
    if (!store.state.manager.employeePhoto) {
      await store.dispatch('manager/getEmployeePhoto')
    }
  },
  components: {
    AdvanceList
  }
}
</script>
