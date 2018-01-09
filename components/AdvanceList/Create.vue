<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Bağlı Çalışan İçin Avans Talep Et</p>
      </header>
      <form @submit.prevent="setAdvance($store.state.createAdvance)">
        <section class="modal-card-body">
          <b-field label="Personel Ad Soyad"
                      :type="errors.has('subordinate') ? 'is-danger': ''"
                      :message="errors.first('subordinate')">

          <v-select v-validate="'required'"
                    name="subordinate"
                    multiple
                    required
                    @input="createAdvance('employeeList', $event)"
                    :value.sync="selectedSubordinates"
                    :options="subordinates"></v-select>

        </b-field>

        <b-field label="%50 Oranında maaşımı avans olarak istiyorum">
            <b-switch :value="amountPercentage" true-value="50" false-value="0" @input="createAdvance('amountPercentage', $event)"></b-switch>
          </b-field>

          <b-field label="Avans Tutarı">

            <b-input type="number" min="100" :disabled="disableAmount"  @input="createAdvance('amount', $event)" :value="amount" placeholder="Avans Tutarı" required></b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot align-end">
          <button type="submit" class="button is-info">Talep Et</button>
          <button class="button" @click="closeModal('create')" type="button">Kapat</button>
        </footer>
      </form>
    </div>
</template>

<script>
import vSelect from 'vue-select'
import {mapState} from 'vuex'

export default {
  components: {
    vSelect
  },

  computed: {
    ...mapState({
      selectedSubordinates: state => state.manager.selectedSubordinates,
      subordinates: state => state.manager.subordinates,
      amount: state => state.createAdvance.amount,
      amountPercentage: state => state.createAdvance.amountPercentage,
      disableAmount: state => state.advanceRequest.disableAmount
    })
  },
  mounted () {
    this.$store.dispatch('manager/getSubordinates')
    this.createAdvance()
  },
  methods: {
    closeModal (create) {
      this.$store.dispatch('manager/openModal', create)
    },

    setAdvance (data) {
      const payload = { url: 'advance/bulk', data }
      this.$validator.validateAll().then((result) => {
        if (result) {
          return this.$store.dispatch('setAdvance', payload)
        }
      }).catch(e => {
        console.log(e)
      })
    },

    createAdvance (field, value) {
      this.$store.commit('createAdvance', {[field]: value})
      if (field === 'amountPercentage') {
        this.$store.commit('disableAmount')
      }
    }
  }
}
</script>

<style>
.v-select, .v-select .dropdown-toggle {
  width: 100%
}

</style>
