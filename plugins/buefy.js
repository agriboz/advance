import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy, {
  defaultDayNames: ['Pz', 'Pzts', 'Sal', 'Çrş', 'Prş', 'Cuma', 'Cmts'],
  defaultMonthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  defaultFirstDayOfWeek: 1,
  defaultDateFormatter: date => date.toLocaleDateString('tr-Tr')
})
