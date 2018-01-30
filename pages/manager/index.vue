<template>
  <div>
    <AdvanceManager></AdvanceManager>
  </div>
</template>

<script>
import AdvanceManager from '@/components/AdvanceManager/AdvanceManager'

export default {
  middleware: 'authenticated',
  async asyncData ({ app, store, redirect }) {
    await store.dispatch('employee')

    if (!store.state.key.data.length) {
      await store.dispatch('key/keySettings')
    }
    if (!store.state.advanceRequestManager.data.length) {
      await store.dispatch('advanceRequestManager')
    }
  },
  components: {
    AdvanceManager
  }
}
</script>
