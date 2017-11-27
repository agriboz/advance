<template>
  <div>
    <AdvanceManager></AdvanceManager>
  </div>
</template>

<script>
import AdvanceManager from '@/components/AdvanceManager/AdvanceManager'

export default {
  async asyncData ({app, store, params}) {
    if (!store.employee) {
      await store.dispatch('employee')
    }
  },
  components: {
    AdvanceManager
  }
}
</script>
