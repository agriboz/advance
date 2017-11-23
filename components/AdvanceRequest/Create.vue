<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Yeni Avans Talep Et</p>
      </header>
      <section class="modal-card-body">
       <b-field label="%50 Oranında maaşımı avans olarak istiyorum ">
          <b-switch :value="amountPercentage" true-value="50" false-value="0"  @input="createAdvance('amountPercentage', $event)"></b-switch>
        </b-field>

        <b-field label="Avans Tutarı">

          <b-input type="number" min="100" :disabled="disableAmount"  @input="createAdvance('amount', $event)" :value="amount" placeholder="Avans Tutarı" required></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot align-end">
        <button @click="setAdvance($store.state.createAdvance)" class="button is-info">Talep Et</button>
        <button class="button" @click="closeModal('create')" type="button">Kapat</button>
      </footer>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    disableAmount () {
      return this.$store.state.createAdvance.amountPercentage === '50'
    },
    ...mapState({
      amount: state => state.createAdvance.amount,
      amountPercentage: state => state.createAdvance.amountPercentage,
      disableAmount: state => state.advanceRequest.disableAmount
    })
  },
  mounted () {
    this.createAdvance()
  },
  methods: {
    closeModal (create) {
      this.$store.dispatch('advanceRequestOpenModal', create)
    },

    setAdvance (data) {
      this.$store.dispatch('setAdvance', data)
    },

    createAdvance (field, value) {
      if (field === 'amountPercentage') {
        this.$store.commit('disableAmount')
      }
      this.$store.commit('createAdvance', {[field]: value})
    }
  }
}
</script>
