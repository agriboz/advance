<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Bağlı Çalışan İçin Avans Talep Et</p>
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

       <b-field style="margin-top:30px" label="%50 Oranında maaşımı avans olarak isteniyor">
          <b-switch :disabled="disabled" :value.sync="data.amountPercentage" @input="editAdvance('amountPercentage', $event)"  true-value="50" false-value="0"></b-switch>
        </b-field>
        <b-field label="Avans Tutarı">
          <b-input type="number" min="100" :value.sync="data.amount" @input="editAdvance('amount', $event)"  :disabled="$store.getters.disableAmount" placeholder="Avans Tutarı" required></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot align-end">
        <button :disabled="disabled" @click="updateAdvance(data)" class="button is-info">Talep Et</button>
        <button :disabled="disabled" class="button is-danger" @click="destroyAdvance(data)">İptal Et</button>
        <button class="button" type="button" @click="closeModal('edit')">Kapat</button>
      </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    closeModal (edit) {
      this.$store.dispatch('manager/openModal', edit)
    },
    editAdvance (field, value) {
      this.$store.commit('editAdvance', {[field]: value})
    },

    async destroyAdvance (payload) {
      await this.$store.dispatch('destroyAdvance', payload)
      await this.$store.dispatch('advanceRequestManager')
      await this.closeModal('edit')
    },

    updateAdvance (payload) {
      this.$store.dispatch('updateAdvanceManager', payload)
        .then(this.closeModal('edit'))
    }
  },
  computed: {
    disabled () {
      return this.data.status.id === 5 || this.data.status.id === 7 || this.data.status.id === 11
    },
    ...mapState({
      employeePhoto: state => state.advanceListSolution.employeePhoto,
      data: state => state.advanceRequest.selected,
      disableAmount: state => state.advanceRequest.disableAmount
    }),
    mounted () {
      this.editAdvance()
    }
  }
}
</script>
