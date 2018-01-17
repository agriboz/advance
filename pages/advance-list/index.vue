<template>
  <div>
    <AdvanceList></AdvanceList>
  </div>
</template>

<script>
import AdvanceList from '@/components/AdvanceList/AdvanceList'

export default {
  middleware: 'authenticated',
  async asyncData ({app, store}) {
    if (!store.state.employee) {
      await store.dispatch('employee')
    }
  },
  components: {
    AdvanceList
  }
}
</script>
