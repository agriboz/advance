<template>
  <div>
    <h1 class="title is-size-5">Uygulama Ayarları</h1>
    <hr>
    <BaseTable :columns="columns"
               :canEdit="true"
               :edit="edit"
               :data="key.data">
    </BaseTable>
    <b-modal :active.sync="key.modal.edit" has-modal-card>
      <Edit></Edit>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseTable from '@/components/BaseTable'
import Edit from '@/components/Key/Edit'

export default {
  data () {
    return {
      columns: [
        { title: 'Tarih Bilgileri', field: 'key' },
        { title: 'Gün', field: 'value' },
        { title: 'Açıklama', field: 'description' }
      ]
    }
  },

  methods: {
    edit (payload) {
      this.$store.dispatch('key/editSelectedKey', payload)
      this.$store.dispatch('key/keyOpenEditModal')
    }
  },

  computed: {
    ...mapState(['key'])
  },

  components: {
    BaseTable,
    Edit
  }
}
</script>
