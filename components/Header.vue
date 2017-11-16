<template>
  <header>
    <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <div @click="openSidebar" class="navbar-item">
          <div class="block">
            <b-icon icon="menu"></b-icon>
          </div>
        </div>

        <a class="navbar-item">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['openSidebar'])
  }
}
</script>
