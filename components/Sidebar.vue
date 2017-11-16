<template>
  <div class="sidebar">
    <div class="has-text-centered">
        <img class="is-128x128" src="http://bulma.io/images/placeholders/128x128.png">
        <p class="is-size-5">John Doe</p>
        <p class="is-size-6">Ücretlendirme ve Yan Haklar</p>
    </div>
    <hr />
    <aside class="menu">
      <ul class="menu-list">
        <li :key="m.id" v-for="m of menu">
          <nuxt-link exact :to="m.link">
            <b-icon :icon="m.icon"></b-icon>

            {{m.name}}
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      menu: 'menu'
    })
  }
}
</script>
<style scoped>
  .menu-list a {
    align-items: center;
    display: flex;
  }

  .material-icons {
    height: 2rem;
    width: 2rem;
    align-items: center;
    justify-content: center;
    display: inline-flex;
  }
</style>
