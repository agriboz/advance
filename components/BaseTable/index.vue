<template>
    <section>
        <b-table
            :data="data"
            :paginated="ui.tableOpts.isPaginated"
            :per-page="ui.tableOpts.perPage"
            :pagination-simple="ui.tableOpts.isPaginationSimple"
            :default-sort-direction="ui.tableOpts.defaultSortDirection">

            <template slot-scope="props">
                <b-table-column label="ID" field="id"  sortable width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column label="First Name">
                    {{ props.row.first_name }}
                </b-table-column>

                <b-table-column label="Last Name">
                    {{ props.row.last_name }}
                </b-table-column>

                <b-table-column label="Date" centered>
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </b-table-column>

                <b-table-column label="Gender">
                    {{ props.row.gender }}
                </b-table-column>
            </template>
        </b-table>

    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['data'],
  computed: {
    ...mapState(['ui'])
  }
}
</script>
