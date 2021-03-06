<template>
  <div>
    <h1 class="title is-size-5">Avans Talepleri Listeme</h1>
    <hr>
    <b-field grouped>
      <b-field label="Şirket">

        <v-select style="width: 300px" v-model="selectedCompanyList"
                  multiple
                  required
                  @input="makeSearch('company', $event)"
                  :value.sync="selectedCompanies"
                  :options="companies"></v-select>
      </b-field>
      <b-field label="Avans Talep Durumu">

        <v-select style="width: 300px" v-model="selectedStatusList"
                  multiple
                  required
                  @input="makeSearch('status', $event)"
                  :value.sync="selectedStatus"
                  :options="advanceStatusList"></v-select>
      </b-field>
    </b-field>
    <b-field grouped>
       <b-field label="Başlangıç Tarihi">
        <b-datepicker
            @input="makeSearch('requestStartDate', $event)"
            v-model="startDate"
            placeholder="Başlangıç Tarihi"
            icon="calendar-today"
            :readonly="false">
        </b-datepicker>
      </b-field>

      <b-field label="Bitiş Tarihi">
        <b-datepicker
            v-model="endDate"
            @input="makeSearch('requestEndDate', $event)"
            placeholder="Bitiş Tarihi"
            icon="calendar-today"
            :readonly="false">
        </b-datepicker>

      </b-field>
      <div class="field is-grouped is-pulled-right is-clearfix" >
        <div class="control" style="margin-top:32px">
          <button @click="advanceSearch" class="button is-info">Arama Yap</button>
        </div>
        <div class="control" style="margin-top:32px">
          <button @click="cleanSearchQuery" class="button is-primary">Kriterleri Temizle</button>
        </div>
        <div class="control" style="margin-top:32px" v-if="data.length">
          <download-excel
              class   = "button is-success"
              :data   = "data"
              :fields = "this.fields"
              name    = "avanslar.xls">
              Excel'e Aktar
          </download-excel>
        </div>
       </div>

    </b-field>
    <div class="is-clearfix">
      <div class="field is-grouped is-pulled-right is-clearfix" v-if="data.length">
        <div class="control">
          <button @click="destroyAdvanceList" :disabled="!this.$store.state.advanceList.checkedRows.length" class="button is-danger">SAP'ye Gönder</button>
        </div>
      </div>
    </div>

    <b-message style="margin-top:20px" :active.sync="warning" title="Hata" type="is-danger">
        İptal olan yada SAP gönderilmiş veriye işlem yapamazsınız.
    </b-message>
    <BaseTable :columns="columnsTemplate" v-if="data.length" :checkable="true" :edit="edit" :data="data" :canEdit="true"></BaseTable>

    <b-modal :active.sync="advanceListSolution.modal.edit" has-modal-card>
      <Edit></Edit>
    </b-modal>
  </div>
</template>
<script>
import vSelect from 'vue-select'
import BaseTable from '@/components/BaseTable'
import { mapState, mapActions } from 'vuex'
import Edit from '@/components/AdvanceList/Edit'
import Create from '@/components/AdvanceList/Create'

export default {
  data () {
    return {
      fields: {
        'Talep Durumu': 'status.name',
        'Talep Numarası': 'id',
        'Sicil Numarası': 'employee.registry',
        'Personel Adı Soyadı': 'employee.name',
        'Avans Tutarı': 'amount',
        '50%': 'amountPercentage',
        'Avans Talep Tarihi': 'requestDate',
        'SAP Gönderildi': 'sapSendDate',
        'SAP Açıklaması': 'sapMessage'
      },
      selectedCompanyList: [],
      selectedStatusList: [],
      startDate: null,
      endDate: null,
      warning: false,
      columnsTemplate: [
        { title: 'Talep Durumu', inner: 'status' },
        { title: 'Talep Numarası', field: 'id' },
        { title: 'Sicil Numarası', field: 'registery' },
        { title: 'Personel Adı Soyadı', inner: 'employee' },
        { title: 'Avans Tutarı', field: 'amount' },
        { title: '50% mi', field: 'amountPercentage' },
        { title: 'Avans Talep Tarihi', inner: 'requestDate' },
        { title: 'SAP Gönderildi', inner: 'sapSendDate' },
        { title: 'SAP Açıklaması', field: 'sapMessage' }
      ]
    }
  },
  methods: {
    cleanSearchQuery () {
      this.$store.dispatch('advanceListSolution/cleanSearchQuery')
        .then(this.clearSearchFields)
    },
    ...mapActions({
      advanceSearch: 'advanceListSolution/advanceSearch'
    }),

    clearSearchFields () {
      this.selectedCompanyList = []
      this.selectedStatusList = []
      this.startDate = null
      this.endDate = null
    },

    makeSearch (field, value) {
      console.log(field, value)
      this.$store.commit('advanceListSolution/makeSearch', {
        [field]: value
      })
    },

    checkRowsStatus () {
      const list = this.$store.state.advanceList.checkedRows

      const rows = list.filter((item) => {
        return item.status.id === 5 || item.status.id === 7
      })
      return rows
    },

    destroyAdvanceList () {
      this.checkRowsStatus().length
        ? this.warning = true
        : this.$store.dispatch('advanceListSolution/sendToSap')
    },

    async edit (payload) {
      const employeeRegistry = payload.employee.registry
      await Promise.all([
        this.$store.dispatch('editSelectedAdvance', payload),
        this.$store.dispatch('advanceListSolution/getEmployeePhoto', employeeRegistry)
      ])
      await this.$store.dispatch('advanceListSolution/openModal', 'edit')
    }
  },
  computed: {
    ...mapState({
      selectedStatus: state => state.advanceListSolution.selectedStatus,
      selectedCompanies: state => state.advanceListSolution.selectedCompanies,
      advanceStatusList: state => state.advanceStatusList,
      advanceListSolution: state => state.advanceListSolution,
      companies: state => state.companies,
      data: state => state.advanceListSolution.data
    })
  },
  async mounted () {
    await this.$store.dispatch('companies')
    await this.$store.dispatch('advanceStatusList')
  },
  components: {
    vSelect,
    BaseTable,
    Create,
    Edit
  }
}
</script>

<style>
.dropdown-toggle {
  width: 100%
}
</style>
