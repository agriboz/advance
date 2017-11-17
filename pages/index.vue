<template>
    <section>
      <b-notification type="is-info" has-icon>
            İşe girişi tarihiniz, avans talep etmek istediğiniz ay içerisinde olduğu için avans talebi yapamamaktasınız.
      </b-notification>
      <b-notification type="is-warning" has-icon>
            Bulunduğunuz tarihte avans girişi yapılmamaktadır. {{new Date().toLocaleDateString()}} tarihinden sonra avans girişi yapılamamaktadır.
        </b-notification>
      <BaseTable :repeat="testData.length" :columns="columnsTemplate" :data="testData"></BaseTable>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import BaseTable from '@/components/BaseTable'

export default {
  data () {
    return {
      columnsTemplate: [
        { title: 'id', field: 'id' },
        { title: 'First Name', field: 'first_name' },
        { title: 'Last Name', field: 'last_name' },
        { title: 'Date', field: 'date' },
        { title: 'Gender', field: 'gender' }
      ]
    }
  },
  computed: {
    ...mapState(['testData'])
  },
  components: {
    BaseTable
  }
}
</script>
