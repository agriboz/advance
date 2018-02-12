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
                <b-table-column v-for="(c,i) in columns" :innerId="c.innerId"  :inner="c.inner" :field="c.field"  :label="c.title"  :key="i">
                  <span v-if="c.field === 'amountPercentage' && data.row[c.field] === 50">
                    Evet
                  </span>
                  <span v-if="c.field === 'amountPercentage' && data.row[c.field] === 0">
                    Hayır
                  </span>
                  <span v-if="data.row[c.field] !== 50 && data.row[c.field] !== 0">
                    {{ data.row[c.field] }}
                  </span>

                  <span v-if="c.field === 'amount' && data.row[c.field] >= 100">
                   TL
                  </span>

                  <span v-if="c.field === 'amount' && data.row[c.field] < 100">
                   -
                  </span>


                  <span v-if="c.inner === 'status'">
                    <span v-if="data.row[c.inner]['id'] === 1">
                      Değerlendiriliyor
                      <!-- <b-tooltip label="Değerlendiriliyor">
                        <b-icon
                          type="is-info"
                          icon="timer"
                          size="is-medium">
                        </b-icon>
                      </b-tooltip> -->
                    </span>
                    <span v-if="data.row[c.inner]['id'] === 3">
                      Talep Edildi
                      <!-- <b-tooltip label="Talep Edildi">
                        <b-icon
                          type="is-info"
                          icon="timer"
                          size="is-medium">
                        </b-icon>
                      </b-tooltip> -->
                    </span>
                    <span v-if="data.row[c.inner]['id'] === 11">
                      SAP Transfer Hatası
                      <!-- <b-tooltip label="SAP Transfer Hatası">
                        <b-icon
                          type="is-warning"
                          icon="alert-circle-outline"
                          size="is-medium">
                        </b-icon>
                      </b-tooltip> -->
                    </span>
                    <span v-if="data.row[c.inner]['id'] === 5">
                      Avans Talebiniz Alındı
                      <!-- <b-tooltip label="Avans Talebiniz Alındı">
                        <b-icon
                            type="is-success"
                            icon="checkbox-marked-circle-outline"
                            size="is-medium">
                        </b-icon>
                      </b-tooltip> -->
                    </span>
                      <span v-if="data.row[c.inner]['id'] === 7">
                        İptal Edildi
                        <!-- <b-tooltip label="İptal Edildi">
                          <b-icon
                            type="is-danger"
                            icon="close-circle"
                            size="is-medium">
                          </b-icon>
                        </b-tooltip> -->
                      </span>
                    </span>



                  <span v-if="c.inner === 'employee'">{{data.row[c.inner]['name']}}</span>
                  <span v-if="c.innerId === 'employee'">{{data.row[c.innerId]['registry']}}</span>

                  <span v-if="c.inner === 'currency'">{{data.row[c.inner]['name']}}</span>
                  <!-- <span v-if="data.row[c.field]['name']">{{data.row[c.field]['name']}}</span> -->
                  <span v-if="c.inner === 'requestDate'">{{new Date(data.row[c.inner]).toLocaleDateString('tr-Tr')}}</span>

                  <span v-if="c.inner === 'sapSendDate'">
                    <span v-if="data.row[c.inner] !== null">
                      {{new Date(data.row[c.inner]).toLocaleDateString()}}
                    </span>
                  </span>

                </b-table-column>
                <b-table-column>
                  <button v-if="canEdit" @click="edit(data.row)" class="button field is-info">Değiştir/İptal Et</button>
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
