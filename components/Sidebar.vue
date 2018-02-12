<template>
  <div class="sidebar">
    <div class="loginUserInfo">
      <div class="userPhoto">
        <img v-if="employee.image" class="employee-image" :src="`data:image/png;base64, ${employee.image}`">
        <b-icon v-else icon="account-circle" size="is-large"></b-icon>
      </div>
      <div class="userName">
        {{employee.name}} {{employee.surname}}
      </div>
      <div class="userTitle">
        {{employee.title}}
      </div>
      <div class="userId">
        {{employee.registry}}
      </div>
    </div>
    <aside class="menu">
      <ul class="menu-list">
        <li :key="m.id" v-if="m.visible"  v-for="m of menu">
          <nuxt-link class="menu-link" exact :to="m.link">
            <b-icon :icon="m.icon" class="mdi-18px"></b-icon>
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
    ...mapGetters(['menu', 'employee'])
  }
}
</script>
<style scoped>
  .sidebar {
    width: 210px;
    margin-left: -20px;
    z-index:1;
    transition: width .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .sidebar:hover {
    box-shadow: 4px 4px 20px hsla(0,0%,7%,.1), 0 0 0 1px hsla(0,0%,7%,.1)
  }

  .menu-link {
    display: flex;
    align-items: center;
    height: 44px;
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

  .menu-list a {
    font-size: 13px;
  }

  .menu-list a.is-active {
    background-color: #e0e3f2;
    color: #34495e;

    border-left: 3px solid #34495e;
  }

</style>
