<template>
  <div>
    <h1 class="title is-size-4">Bağlı Çalışan İçin Avans Talepleri</h1>
    <hr>
    <div class="is-clearfix">
      <div class="field is-grouped is-pulled-right is-clearfix">
        <div class="control">
          <button @click="destroyAdvanceList"
                  v-if="this.$store.state.advanceList.checkedRows.length"
                  :disabled="!this.$store.state.advanceList.checkedRows.length" class="button is-danger">Talepleri İptal Et</button>
        </div>
        <div class="control">
          <button @click="openModalCreate('create')" class="button is-info">Bağlı Çalışan İçin Avans Talebi Ekle</button>
        </div>
      </div>
    </div>

    <b-message style="margin-top:20px" :active.sync="warning" title="Hata" type="is-danger">
        İptal olan yada SAP'e gönderilmiş veriye işlem yapamazsınız.
    </b-message>
    <BaseTable :columns="columnsTemplate" :checkable="true" :edit="edit" :data="data"  :canEdit="true"></BaseTable>

    <b-modal :active.sync="manager.modal.create" has-modal-card>
      <Create></Create>
    </b-modal>

    <b-modal :active.sync="manager.modal.edit" has-modal-card>
      <Edit></Edit>
    </b-modal>
  </div>
</template>
<script>
import BaseTable from '@/components/BaseTable'
import { mapState, mapGetters } from 'vuex'
import Edit from '@/components/AdvanceManager/Edit'
import Create from '@/components/AdvanceManager/Create'

export default {
  data () {
    return {
      warning: false,
      columnsTemplate: [
        { inner: 'status' },
        { title: 'Talep Numarası', field: 'id' },
        { title: 'Sicil Numarası', field: 'registery' },
        { title: 'Personel Adı Soyadı', inner: 'employee' },
        { title: 'Avans Tutarı', field: 'amount' },
        { title: '50% mi', field: 'amountPercentage' },
        { title: 'Avans Talep Tarihi', inner: 'requestDate' }
      ]
    }
  },
  methods: {
    checkRowsStatus () {
      const list = this.$store.state.advanceList.checkedRows

      const rows = list.filter((item) => {
        return item.status.id === 5 || item.status.id === 7 || item.status.id === 11
      })
      return rows
    },

    destroyAdvanceList () {
      this.checkRowsStatus().length
        ? this.warning = true
        : this.$store.dispatch('destroyAdvanceList')
    },

    async edit (payload) {
      const employeeRegistry = payload.employee.registry
      await this.$store.dispatch('editSelectedAdvance', payload)
      await this.$store.dispatch('advanceListSolution/getEmployeePhoto', employeeRegistry)
      await this.$store.dispatch('manager/openModal', 'edit')
    },
    openModalCreate () {
      this.$store.dispatch('manager/openModal', 'create')
    }
  },
  computed: {
    ...mapGetters({
      data: 'advanceRequestListManager'
    }),
    ...mapState({
      manager: state => state.manager
    })
  },
  components: {
    BaseTable,
    Create,
    Edit
  }
}
</script>
