<template>
      <Key></Key>
</template>

<script>
import Key from '@/components/Key/Key'

export default {
  middleware: 'authenticated',
  async asyncData ({app, store, params}) {
    if (!store.state.employee) {
      await store.dispatch('employee')
    }
    if (!store.state.key.data.length) {
      await store.dispatch('key/keySettings')
    }
  },
  components: {
    Key
  }
}
</script>
