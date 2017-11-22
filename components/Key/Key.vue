<template>
  <div>
    <h1 class="title is-size-4">Uygulama Ayarları</h1>
    <hr>
    <BaseTable :columns="columns"
               :canEdit="true"
               :edit="edit"
               :data="settings.key.data">
    </BaseTable>
    <b-modal :active.sync="settings.key.modal.edit" has-modal-card>
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
        { title: 'Key', field: 'key' },
        { title: 'Value', field: 'value' },
        { title: 'Açıklama', field: 'description' }
      ]
    }
  },

  mounted () {
    this.$store.dispatch('keySettings')
  },

  methods: {
    edit (payload) {
      console.log(payload)
      this.$store.dispatch('editSelectedKey', payload)
      this.$store.dispatch('keyOpenEditModal')
    }
  },

  computed: {
    ...mapState(['settings'])
  },

  components: {
    BaseTable,
    Edit
  }
}
</script>
