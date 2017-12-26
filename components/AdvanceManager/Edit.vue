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
            <img v-if="employeePhoto" :src="employeePhoto">
          </p>
        </b-field>
       </b-field>

       <b-field style="margin-top:30px" label="%50 Oranında maaşımı avans olarak isteniyor">
          <b-switch :disabled="disabled" :value="data.amountPercentage" @input="editAdvance('amountPercentage', $event)"  true-value="50" false-value="0"></b-switch>
        </b-field>

        <b-field label="Avans Tutarı">
          <b-input type="number" :value="data.amount" @input="editAdvance('amount', $event)"  :disabled="disableAmount" placeholder="Avans Tutarı" required></b-input>
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
      if (field === 'amountPercentage') {
        this.$store.commit('disableAmount')
      }
      this.$store.commit('editAdvance', {[field]: value})
    },

    destroyAdvance (payload) {
      this.$store.dispatch('destroyAdvance', payload)
      this.closeModal()
    },

    updateAdvance (payload) {
      this.$store.dispatch('updateAdvance', payload)
      this.closeModal()
    }
  },
  computed: {
    disabled () {
      return this.data.status.id === 5 || this.data.status.id === 7 || this.data.status.id === 11
    },
    employeePhoto () {
      return `data:image/png;base64, ${this.employeeImage}`
    },
    ...mapState({
      employeeImage: state => state.manager.employeePhoto,
      data: state => state.advanceRequest.selected,
      disableAmount: state => state.advanceRequest.disableAmount
    })
  }
}
</script>
