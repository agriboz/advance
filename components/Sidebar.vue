<template>
  <div class="sidebar">
    <div class="has-text-centered">
        <img class="is-128x128" :src="employeeImage">
        <p class="is-size-6">{{employee.name}} {{employee.surname}}</p>
        <p class="is-size-7">{{employee.title}}</p>
        <p class="is-size-7">{{employee.department}}</p>
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
    employeeImage () {
      return `data:image/png;base64, ${this.employee.image} `
    },
    ...mapGetters(['menu', 'employee'])
  },
  mounted () {
    console.log(this.$router)
    if (this.$router.history.current.path !== '/') {
      this.$store.dispatch('employee')
    }
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
