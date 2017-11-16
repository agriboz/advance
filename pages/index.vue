<template>
    <section>
      <BaseTable :data="testData"></BaseTable>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import BaseTable from '@/components/BaseTable'

export default {
  computed: {
    ...mapState(['testData'])
  },
  components: {
    BaseTable
  }
}
</script>
