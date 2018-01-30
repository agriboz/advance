<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Avans Talep Et</p>
      </header>
      <form @submit.prevent="updateAdvance(data)">
        <section class="modal-card-body">
          <b-field label="%50 Oranında maaşımı avans olarak istiyorum ">
            <b-switch :value.sync="data.amountPercentage" @input="editAdvance('amountPercentage', $event)"  true-value="50" false-value="0"></b-switch>
          </b-field>
          <b-field label="Avans Tutarı">
            <b-input type="number" min="100" :value.sync="data.amount" @input="editAdvance('amount', $event)"
            :disabled="$store.getters.disableAmount" placeholder="Avans Tutarı" required></b-input>
          </b-field>
        </section>

        <footer class="modal-card-foot align-end">
          <button :disabled="disabled" class="button is-info">Talep Et</button>
          <a :disabled="disabled" class="button is-danger" @click="destroyAdvance(data)">İptal Et</a>
          <button class="button" type="button" @click="closeModal">Kapat</button>
        </footer>
      </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    closeModal () {
      this.$store.dispatch('advanceRequestOpenModal', 'edit')
    },
    editAdvance (field, value) {
      this.$store.commit('editAdvance', {[field]: value})
    },

    async destroyAdvance (payload) {
      await this.$store.dispatch('destroyAdvance', payload)
      await this.$store.dispatch('advanceRequest')
      await this.closeModal()
    },

    updateAdvance (payload) {
      this.$store.dispatch('updateAdvance', payload)
        .then(this.closeModal)
    }
  },
  computed: {
    disabled () {
      return this.data.status.id === 5 || this.data.status.id === 7 || this.data.status.id === 11
    },
    ...mapState({
      data: state => state.advanceRequest.selected,
      disableAmount: state => state.advanceRequest.disableAmount
    })
  },
  mounted () {
    this.editAdvance()
  }
}
</script>
