<template>
    <section>
      <b-notification type="is-info" has-icon>
            İşe girişi tarihiniz, avans talep etmek istediğiniz ay içerisinde olduğu için avans talebi yapamamaktasınız.
      </b-notification>
      <b-notification type="is-warning" has-icon>
            Bulunduğunuz tarihte avans girişi yapılmamaktadır. {{new Date().toLocaleDateString()}} tarihinden sonra avans girişi yapılamamaktadır.
      </b-notification>
      <AdvanceRequest></AdvanceRequest>

    </section>
</template>

<script>
import AdvanceRequest from '@/components/AdvanceRequest/AdvanceRequest'

export default {
  async asyncData ({app, store, params}) {
    await store.dispatch('employee')
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
