<template>
  <header>
    <div class="navbar has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="~/assets/logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>
        <div class="navbar-end">
          <div class="media">
            <div class="media-content">
              <div class="content">
                <p class="is-size-7">
                  <strong>{{employee.name}} {{employee.surname}}</strong>
                  <br>
                  <small>{{employee.title}}</small>
                  <br>
                  <small>{{employee.department}}</small>
                </p>
              </div>
            </div>
            <figure class="media-right employee-figure">
              <p class="image is-48x48">
                <img v-if="employee.image" class="employee-image" :src="`data:image/png;base64, ${employee.image}`">
                <b-icon v-else icon="account-circle" size="is-large"></b-icon>
              </p>
            </figure>
          </div>
        </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {

    ...mapGetters(['employee'])
  }
}
</script>

<style scoped>
.employee-figure {
    margin-right: 1rem;
    margin-top: .2rem;
}
.employee-image {
  height: 100%;
  border-radius: 100%;
}
</style>
