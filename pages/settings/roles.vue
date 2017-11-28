<template>
  <Roles></Roles>
</template>

<script>
import Roles from '@/components/Roles/Roles'
export default {
  async asyncData ({app, store, params}) {
    console.log(store)
    if (!store.state.employee) {
      await store.dispatch('employee')
    }
    if (!store.state.roles.data.length) {
      await store.dispatch('roles/rolesSettings')
    }
  },
  components: {
    Roles
  }
}
</script>
