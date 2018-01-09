<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Avans Talep Et</p>
      </header>

      <section class="modal-card-body">
       <b-field label="%50 Oranında maaşımı avans olarak istiyorum ">
          <b-switch :value="data.amountPercentage" @input="editAdvance('amountPercentage', $event)"  true-value="50" false-value="0"></b-switch>
        </b-field>

        <b-field label="Avans Tutarı">
          <b-input type="number" :value="data.amount" @input="editAdvance('amount', $event)"
                   :disabled="disableAmount" placeholder="Avans Tutarı" required></b-input>
        </b-field>
      </section>

      <footer class="modal-card-foot align-end">
        <button @click="updateAdvance(data)" class="button is-info">Talep Et</button>
        <button class="button is-danger" @click="destroyAdvance(data)">İptal Et</button>
        <button class="button" type="button" @click="closeModal">Kapat</button>
      </footer>
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
      if (field === 'amountPercentage') {
        this.$store.commit('disableAmount')
      }
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
    ...mapState({
      data: state => state.advanceRequest.selected,
      disableAmount: state => state.advanceRequest.disableAmount
    })
  },
  mounted () {
    this.$store.commit('disableAmount')
  }
}
</script>
