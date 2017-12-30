<template>
  <div class="sidebar">
    <aside class="menu">
      <ul class="menu-list">
        <li :key="m.id" v-if="m.visible"  v-for="m of menu">
          <nuxt-link class="menu-link" exact :to="m.link">
            <b-icon :icon="m.icon"></b-icon>
            <span class="menu-item">{{m.name}}</span>
          </nuxt-link>
          <ul>
            <li :key="a.id" v-for="a of m.children">
              <nuxt-link class="menu-link" exact :to="a.link">
                <span class="menu-item">{{a.name}}</span>
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['menu'])
  }
}
</script>
<style scoped>
  .sidebar {
    width: 60px;
    position: sticky;
    top: 10px;
    margin-left: -20px;
    z-index:1;
    overflow: hidden;
    height: calc(100vh - 82px);
    transition: width .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .sidebar:hover {
    width: 300px;
    box-shadow: 4px 4px 20px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1)
  }
  .sidebar:hover .menu-item {
    opacity: 1;
    transform: translate(10px);
  }
  .employee {
    opacity: 0;
  }
  .sidebar:hover .employee {
    opacity: 1;
  }
  .menu-item {
    opacity: 0;
    transform: translate(-10px);
    transition: color .15s ease-in-out,opacity .15s ease-in-out,transform .15s ease-in-out;
  }
  .menu-link {
    display: flex;
    align-items: center;
    height: 44px;
    width: 300px;
    padding: 0 18px;
    transition: all .15s ease-in-out;
  }
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
