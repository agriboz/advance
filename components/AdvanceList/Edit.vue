<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Personel Avans Talebi</p>
      </header>
      <section class="modal-card-body">
      <b-field grouped>
        <b-field label="Personel Ad Soyad">
          <b-select :placeholder="data.employee.name + ' ' + data.employee.registry" disabled>
          </b-select>
        </b-field>
        <b-field label="Personel Fotoğrafı">
          <p class="image is-64x64">
            <img v-if="employeePhoto" :src="`data:image/png;base64, ${employeePhoto}`">
          </p>
        </b-field>
       </b-field>
        <b-field style="margin-top:30px" label="%50 Oranında maaş avans olarak isteniyor">
          <b-switch :disabled="data.status.id === 7" :value="data.amountPercentage" @input="editAdvance('amountPercentage', $event)"  true-value="50" false-value="0"></b-switch>
        </b-field>

        <b-field label="Tutar belirtmek istiyorum">
          <b-input type="number" :value="data.amount" @input="editAdvance('amount', $event)"  :disabled="$store.getters.disableAmount || data.status.id === 7" placeholder="Avans Tutarı" required></b-input>
        </b-field>

        <b-field style="margin-top:30px" label="SAP Sistemine Gönderildi mi?">
          <b-switch :disabled="true" :value="checkSendDate"></b-switch>
        </b-field>

        <b-field label="Açıklama">
            <b-input :disabled="true" :value="data.sapMessage"></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot align-end">
        <button v-if="data.status.id !== 7"  @click="updateAdvance(data)" class="button is-info">Kaydet</button>
        <button v-if="data.status.id !== 7" class="button is-danger" @click="destroyAdvance(data)">İptal Et</button>
        <button class="button" type="button" @click="closeModal('edit')">Kapat</button>
      </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    closeModal (edit) {
      this.$store.dispatch('advanceListSolution/openModal', 'edit')
    },
    editAdvance (field, value) {
      this.$store.commit('editAdvance', {[field]: value})
    },

    destroyAdvance (payload) {
      this.$store.dispatch('destroyAdvance', payload)
        .then(this.closeModal)
    },

    updateAdvance (payload) {
      this.$store.dispatch('updateAdvance', payload)
        .then(this.closeModal)
    }
  },
  computed: {
    ...mapState({
      data: state => state.advanceRequest.selected,
      employeePhoto: state => state.advanceListSolution.employeePhoto,
      disableAmount: state => state.advanceRequest.disableAmount
    }),
    checkSendDate () {
      return !!this.data.sapSendDate
    }
  },
  mounted () {
    this.editAdvance()
  }
}
</script>
