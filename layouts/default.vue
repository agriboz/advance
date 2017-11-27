<template>
  <div>
    <AdvanceHeader />
    <div class="columns container is-fluid">
      <Sidebar class="column is-2 animated" :class="[{['fadeOutLeft hide-sidebar']: openSidebar}, 'fadeInLeft']" />

      <nuxt class="column main animated" :class="[{['slideInRight']: openSidebar}]" />

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AdvanceHeader from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {

  components: {
    AdvanceHeader,
    Sidebar
  },

  computed: {
    ...mapState({
      openSidebar: state => state.openSidebar
    })
  }
}
</script>

<style>
html {
  background: #f5f5f5;
  height: 100vh;
}

.sidebar, .main {
  background-color: #fff;
  margin-top: 1rem;
  box-shadow: 0 2px 3px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1);
}

.columns {
  margin-top: 0;
}

.sidebar {
  margin-right: 1rem;
}

.align-end {
  justify-content: flex-end !important;
}

.container {
  min-height: 93vh;
}
.hide-sidebar {
  position: absolute;
}

</style>

