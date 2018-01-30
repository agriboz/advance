<template>
    <section>
      <AdvanceRequest></AdvanceRequest>
    </section>
</template>

<script>
import AdvanceRequest from '@/components/AdvanceRequest/AdvanceRequest'

export default {
  async asyncData ({store}) {
    if (!store.state.advanceRequest.data.length) {
      await store.dispatch('advanceRequest')
    }
    if (!store.state.key.data.length) {
      await store.dispatch('key/keySettings')
    }
  },
  components: {
    AdvanceRequest
  }
}
</script>
<style>
.page-enter-active, .page-leave-active {
  transition: opacity .5s
}
.page-enter, .page-leave-active {
  opacity: 0
}
</style>
