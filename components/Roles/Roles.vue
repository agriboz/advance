<template>
  <div>
    <h1 class="title is-size-4">Çözüm Merkezi Bordro Yetkilisi Tanımlama</h1>
    <hr>
    <div class="content">
      <b-field label="Personel Ara">
          <b-autocomplete
              v-model="name"
              @input="getEmployeeData(name)"
              :data="settings.roles.searchEmployee"
              placeholder="Personel Ara"
              icon="magnify"
              field="name"
              @select="option => settings.roles.selectedEmployee = option">

              <template slot="empty">Arama kriterine uygun sonuç bulunamadı.</template>
          </b-autocomplete>
      </b-field>
      <button v-if="settings.roles.selectedEmployee"
              @click="setRole(settings.roles.selectedEmployee.id)"
              class="button field is-info">Rol Listesine Ekle</button>
    </div>
    <BaseTable :columns="columns"
               :destroy="removeRole"
               :canDelete="true"
               :canEdit="false"
               :data="settings.roles.data">
    </BaseTable>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

import { mapState, mapActions } from 'vuex'
import BaseTable from '@/components/BaseTable'

export default {
  data () {
    return {
      name: '',
      columns: [
        { title: 'Ad', field: 'name' },
        { title: 'Soyad', field: 'surname' },
        { title: 'Title', field: 'title' },
        { title: 'Departman', field: 'department' },
        { title: 'Registry', field: 'registry' }
      ]
    }
  },
  methods: {
    getEmployeeData: debounce(function (data) {
      return data.length >= 3
        ? this.$store.dispatch('searchEmployee', data)
        : ''
    }, 1000),

    removeRole (payload) {
      this.$store.dispatch('removeRole', payload)
    },

    ...mapActions(['setRole'])
  },

  computed: {
    ...mapState(['settings'])
  },

  mounted () {
    this.$store.dispatch('rolesSettings')
  },

  components: {
    BaseTable
  }
}
</script>
