<template>
  <div>
    <h1 class="title is-size-4">Bağlı Çalışan İçin Avans Talepleri Ekranı</h1>
    <hr>
    <div class="field is-grouped is-pulled-right">
      <div class="control">
        <button @click="destroyAdvanceList" class="button is-danger">Talepleri İptal Et</button>
      </div>
      <div class="control">
        <button class="button is-info">Bağlı Çalışan İçin Avans Talebi Ekle</button>
      </div>
    </div>

    <BaseTable :columns="columnsTemplate" :checkable="true" :data="data"  :canEdit="true"></BaseTable>

  </div>
</template>
<script>
import BaseTable from '@/components/BaseTable'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      columnsTemplate: [
        { title: 'Sicil Numarası', field: 'registery' },
        { title: 'Personel Adı Soyadı', inner: 'employee' },
        { title: 'Avans Tutarı', field: 'amount' },
        { title: '50% mi', field: 'amountPercentage' },
        { title: 'Avans Talep Tarihi', inner: 'requestDate' }
      ]
    }
  },
  methods: {
    ...mapActions(['destroyAdvanceList'])
  },
  computed: {
    ...mapState({
      data: state => state.advanceList.data
    })
  },
  components: {
    BaseTable
  }
}
</script>
