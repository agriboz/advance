<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Ayarlar - Düzenle</p>
      </header>
      <form ref="form" @submit.prevent="update(data)">
        <section class="modal-card-body">
          {{data}}
            <b-field label="Key">
              <b-input :value="data.key"
                       type="number" @input="editSelectedKey('key', $event)"
                       placeholder="Key"
                       disabled></b-input>
            </b-field>

            <b-field label="Value"
                     :type="errors.has('value') ? 'is-danger': ''"
                     :message="errors.first('value')">
              <b-input v-validate="'required|numeric'"
                       name="value" :value="data.value"
                       type="number"
                       @input="editSelectedKey('value', $event)"
                       placeholder="Value"></b-input>
            </b-field>

            <b-field label="Açıklama">
                <b-input :value="data.description" maxlength="200" type="textarea" required @input="editSelectedKey('description', $event)"></b-input>
            </b-field>
          </section>
          <footer class="modal-card-foot align-end">
            <button type="submit" class="button is-info">Güncelle</button>
            <button class="button" type="button" @click="closeModal">Kapat</button>
          </footer>
        </form>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      data: state => state.settings.key.selected
    })
  },

  methods: {
    update (payload) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          return this.$store.dispatch('updateSelectedKey', payload)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    editSelectedKey (field, value) {
      this.$store.commit('editSelectedKey', {
        [field]: value
      })
    },
    ...mapActions({
      closeModal: 'keyOpenEditModal'
    })
  }
}
</script>

