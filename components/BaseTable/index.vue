<template>
    <section>
        <b-table
            :data="data"
            :paginated="ui.tableOpts.isPaginated"
            :per-page="ui.tableOpts.perPage"
            :pagination-simple="ui.tableOpts.isPaginationSimple"
            :default-sort-direction="ui.tableOpts.defaultSortDirection">

            <template slot-scope="data">
                <b-table-column sortable v-for="(c,i) in columns" :inner="c.inner" :field="c.field"  :label="c.title"  :key="i">
                  {{ data.row[c.field] }}

                  <span v-if="c.inner === 'currency'">{{data.row[c.inner]['name']}}</span>
                  <!-- <span v-if="data.row[c.field]['name']">{{data.row[c.field]['name']}}</span> -->
                  <span v-if="c.inner === 'requestDate'">{{new Date(data.row[c.inner]).toLocaleDateString()}}</span>
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
  props: ['data', 'columns', 'edit', 'destroy', 'canEdit', 'canDelete'],
  computed: {
    ...mapState(['ui'])
  }
}
</script>
