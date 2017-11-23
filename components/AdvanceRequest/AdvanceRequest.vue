<template>
  <div>
    <div class="content is-clearfix">
      <a @click="openModalCreate('create')"
         class="button is-info is-pulled-right">Yeni Avans Ekle</a>
    </div>
    <BaseTable :columns="columnsTemplate" :edit="edit" :data="advanceRequest.data"></BaseTable>

    <b-modal :active.sync="advanceRequest.modal.create" has-modal-card>
      <Create></Create>
    </b-modal>

    <b-modal :active.sync="advanceRequest.modal.edit" has-modal-card>
      <Edit></Edit>
    </b-modal>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import BaseTable from '@/components/BaseTable'
import Edit from '@/components/AdvanceRequest/Edit'
import Create from '@/components/AdvanceRequest/Create'

export default {
  mounted () {
    this.$store.dispatch('advanceRequest')
  },
  data () {
    return {
      columnsTemplate: [
        { title: 'Avans Tutarı', field: 'amount' },
        { title: 'Para Birimi', inner: 'currency' },
        { title: '%50 mi', field: 'amountPercentage' },
        { title: 'Talep Tarihi', inner: 'requestDate' }
      ]
    }
  },
  methods: {
    openModalCreate (create) {
      this.$store.dispatch('advanceRequestOpenModal', create)
    },
    ...mapActions({
      edit: 'advanceRequestOpenEditModal'
    })
  },
  computed: {
    ...mapState(['advanceRequest'])
  },
  components: {
    BaseTable,
    Create,
    Edit
  }
}
</script>
