<template>
    <section>
        <b-table
        default-sort="['id', 'desc']"
            :checked-rows.sync="checkedRows"
            :data="data"
            :checkable="checkable"
            :paginated="ui.tableOpts.isPaginated"
            :per-page="ui.tableOpts.perPage"
            :striped="ui.tableOpts.isStriped"
            :hoverable="ui.tableOpts.isHoverable"
            :loading="ui.tableOpts.isLoading"
            :pagination-simple="ui.tableOpts.isPaginationSimple"
            :default-sort-direction="ui.tableOpts.defaultSortDirection">

            <template slot-scope="data">
                <b-table-column v-for="(c,i) in columns"   :inner="c.inner" :field="c.field"  :label="c.title"  :key="i">
                  <span v-if="c.field === 'amountPercentage'">%</span>
                  {{ data.row[c.field] }}

                  <span v-if="c.field === 'amount'">TL</span>
                  <span v-if="c.inner === 'status'">
                    <span v-if="data.row[c.inner]['id'] === 11">
                      <b-icon
                          type="is-warning"
                          icon="alert-circle-outline"
                          size="is-medium">
                        </b-icon>
                    </span>
                    <span v-if="data.row[c.inner]['id'] === 5">
                      <b-icon
                          type="is-success"
                          icon="checkbox-marked-circle-outline"
                          size="is-medium">
                        </b-icon>
                    </span>
                      <span v-if="data.row[c.inner]['id'] === 7">
                        <b-icon
                          type="is-danger"
                          icon="close-circle"
                          size="is-medium">
                        </b-icon>
                      </span>
                    </span>
                  <span v-if="c.inner === 'employee'">{{data.row[c.inner]['name']}}</span>
                  <span v-if="c.inner === 'currency'">{{data.row[c.inner]['name']}}</span>
                  <!-- <span v-if="data.row[c.field]['name']">{{data.row[c.field]['name']}}</span> -->
                  <span v-if="c.inner === 'requestDate'">{{new Date(data.row[c.inner]).toLocaleDateString()}}</span>

                  <span v-if="c.inner === 'sapSendDate'">
                    <span v-if="data.row[c.inner] !== null">
                      {{new Date(data.row[c.inner]).toLocaleDateString()}}
                    </span>
                  </span>

                </b-table-column>
                <b-table-column>
                  <button v-if="canEdit" @click="edit(data.row)" class="button field is-info">Detay</button>
                  <button v-if="canDelete" @click="destroy(data.row)" class="button field is-danger">Sil</button>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="sentiment_very_dissatisfied"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Herhangi bir sonuç bulunamadı.</p>
                    </div>
                </section>
            </template>
        </b-table>

    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['data', 'columns', 'edit', 'destroy', 'checkable', 'canEdit', 'canDelete'],
  computed: {
    checkedRows: {
      get () {
        return this.$store.state.advanceList.checkedRows
      },
      set (data) {
        this.$store.commit('checkedRows', data)
      }
    },
    ...mapState(['ui', 'advanceList'])
  }
}
</script>
