<template>
  <div>
    <h1 class="title is-size-5">Çözüm Merkezi Bordro Yetkilisi Tanımlama</h1>
    <hr>
    <div class="content">
      <b-field label="Personel Ara">
          <b-autocomplete
              v-model="name"
              @input="getEmployeeData(name)"
              :data="roles.searchEmployee"
              placeholder="Personel Ara"
              icon="magnify"
              field="name"
              @select="option => $store.commit('roles/selectedEmployee', option)">

              <template slot="empty">Arama kriterine uygun sonuç bulunamadı.</template>
          </b-autocomplete>
      </b-field>
      <button v-if="roles.selectedEmployee"
              @click="setRole"
              class="button field is-info">Rol Listesine Ekle</button>
    </div>

    <BaseTable :columns="columns"
               :destroy="removeRole"
               :canDelete="true"
               :canEdit="false"
               :data="roles.data">
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
    ...mapActions('roles', ['setRole']),

    getEmployeeData: debounce(function (data) {
      return data.length >= 3
        ? this.$store.dispatch('roles/searchEmployee', data)
        : ''
    }, 1000),

    removeRole (payload) {
      this.$store.dispatch('roles/removeRole', payload)
    }

  },

  computed: {
    ...mapState(['roles'])
  },

  components: {
    BaseTable
  }
}
</script>
