<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Ayarlar - Düzenle</p>
      </header>
      <form ref="form" @submit.prevent="update(data)">
        <section class="modal-card-body">
            <b-field label="Tarih Bilgileri">
              <b-input :value="data.key"
                       type="number" @input="editSelectedKey('key', $event)"
                       :placeholder="data.key"
                       disabled></b-input>
            </b-field>

            <b-field label="Gün"
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
      data: state => state.key.selected
    })
  },

  methods: {
    update (payload) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          return this.$store.dispatch('key/updateSelectedKey', payload)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    editSelectedKey (field, value) {
      this.$store.commit('key/editSelectedKey', {
        [field]: value
      })
    },
    ...mapActions({
      closeModal: 'key/keyOpenEditModal'
    })
  }
}
</script>

