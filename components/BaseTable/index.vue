<template>
    <section>
        <b-table
            :data="data"
            :selected.sync="selected"
            :paginated="ui.tableOpts.isPaginated"
            :per-page="ui.tableOpts.perPage"
            :pagination-simple="ui.tableOpts.isPaginationSimple"
            :default-sort-direction="ui.tableOpts.defaultSortDirection">

            <template slot-scope="data">
                <b-table-column sortable v-for="(c,i) in columns" :field="c.field"  :label="c.title"  :key="i">
                  {{ data.row[c.field] }}
                </b-table-column>
                <b-table-column>
                  <button v-if="canEdit" @click="edit(data.row)" class="button field is-info">Detay</button>
                  <button v-if="canDelete" @click="destroy(data.row)" class="button field is-danger">Sil</button>
                </b-table-column>
            </template>
        </b-table>

    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['data', 'columns', 'edit', 'destroy', 'canEdit', 'canDelete', 'actionName'],
  computed: {
    selected: {
      get () {

      },
      set (value) {
        /* const actionName = this.actionName
        this.$store.commit(actionName, value) */
      }
    },
    ...mapState(['ui'])
  }
}
</script>
