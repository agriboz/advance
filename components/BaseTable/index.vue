<template>
    <section>
        <b-table
            :data="data"
            :paginated="ui.tableOpts.isPaginated"
            :per-page="ui.tableOpts.perPage"
            :pagination-simple="ui.tableOpts.isPaginationSimple"
            :default-sort-direction="ui.tableOpts.defaultSortDirection">

            <template slot-scope="data">
                <b-table-column sortable v-for="(c,i) in columns" :field="c.field"  :label="c.title"  :key="i">
                  {{ data.row[c.field] }}
                </b-table-column>
                <b-table-column>
                  <button class="button field is-info">Detay</button>
                </b-table-column>
            </template>
        </b-table>

    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['data', 'columns'],
  computed: {
    ...mapState(['ui'])
  }
}
</script>
