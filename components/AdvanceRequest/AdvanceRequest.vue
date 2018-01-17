<template>
  <div>
    <h1 class="title is-size-4">Avans Taleplerim</h1>
    <hr>
    <b-message v-if="!employee.canDemandAdvance" type="is-info" has-icon>
          İşe girişi tarihiniz, avans talep etmek istediğiniz ay içerisinde olduğu için avans talebi yapamamaktasınız.
    </b-message>
    <b-message v-if="employee.canDemandAdvance && (employee.canDemandAdvanceInCurrentDay === false)" type="is-warning" has-icon>
          Bulunduğunuz tarihte avans girişi yapılmamaktadır. Ayın {{key.data[1].value}} - {{key.data[0].value}} günleri arasında avans girişi yapılabilmektedir.
    </b-message>

    <div class="content is-clearfix" v-if="employee.canDemandAdvance && employee.canDemandAdvanceInCurrentDay">
      <a @click="openModalCreate('create')"
         class="button is-info is-pulled-right">Yeni Avans Ekle</a>
    </div>
    <BaseTable :columns="columnsTemplate" :canEdit="true" :edit="edit" :data="advanceRequestList"></BaseTable>

    <b-modal :active.sync="advanceRequest.modal.create" has-modal-card>
      <Create></Create>
    </b-modal>

    <b-modal :active.sync="advanceRequest.modal.edit" has-modal-card>
      <Edit></Edit>
    </b-modal>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import BaseTable from '@/components/BaseTable'
import Edit from '@/components/AdvanceRequest/Edit'
import Create from '@/components/AdvanceRequest/Create'

export default {
  data () {
    return {
      columnsTemplate: [
        { title: 'Talep Durumu', inner: 'status' },
        { title: 'Avans Tutarı', field: 'amount' },
        { title: '%50 mi', field: 'amountPercentage' },
        { title: 'Talep Tarihi', inner: 'requestDate' }
      ]
    }
  },
  methods: {
    canAdvanceMessage () {
      this.$toast.open({
        message: 'Aktif avans talep ayı içerisinde avans talebiniz bulunduğu için işlem yapamazsınız.',
        type: 'is-warning'
      })
    },
    async openModalCreate (create) {
      await this.$store.dispatch('canAdvanceEmployee')
      if (this.advanceRequest.canAdvanceEmployee) {
        this.canAdvanceMessage()
      } else {
        await this.$store.dispatch('advanceRequestOpenModal', create)
      }
    },
    async edit (payload) {
      await this.$store.dispatch('canAdvanceEmployee')
      if (this.advanceRequest.canAdvanceEmployee) {
        this.canAdvanceMessage()
      } else {
        await this.$store.dispatch('editSelectedAdvance', payload)
        await this.$store.dispatch('advanceRequestOpenModal', 'edit')
      }
    }
  },
  computed: {
    ...mapState(['advanceRequest', 'employee', 'key']),
    ...mapGetters(['advanceRequestList'])
  },
  mounted () {

  },
  components: {
    BaseTable,
    Create,
    Edit
  }
}
</script>
