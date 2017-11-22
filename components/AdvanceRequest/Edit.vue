<template>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Avans Talep Et</p>
      </header>
      <section class="modal-card-body">
       <b-field label="%50 Oranında maaşımı avans olarak istiyorum ">
          <b-switch @input="editAdvance('percent', $event)"></b-switch>
        </b-field>

        <b-field label="Avans Tutarı">
          <b-input type="number" @input="editAdvance('amount', $event)" placeholder="Avans Tutarı" required></b-input>
        </b-field>
      </section>
      <footer class="modal-card-foot align-end">
        <button @click="updateAdvance(selected)" class="button is-info">Talep Et</button>
        <button class="button is-danger" @click="deleteAdvance(selected)">İptal Et</button>
        <button class="button" type="button" @click="closeModal">Kapat</button>
      </footer>
    </div>
</template>

<script>

</script>
