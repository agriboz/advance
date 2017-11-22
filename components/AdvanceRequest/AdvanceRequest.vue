<template>
  <div>
    <BaseTable :columns="columnsTemplate" :edit="edit" :data="testData"></BaseTable>
    {{advanceRequest}}
    <b-modal :active.sync="advanceRequest.modal.edit" has-modal-card>
      <Edit></Edit>
    </b-modal>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import BaseTable from '@/components/BaseTable'
import Edit from '@/components/AdvanceRequest/Edit'

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
  methods: {
    ...mapActions({
      edit: 'advanceRequestOpenEditModal'
    })
  },
  computed: {
    ...mapState(['testData', 'advanceRequest'])
  },
  components: {
    BaseTable,
    Edit
  }
}
</script>
