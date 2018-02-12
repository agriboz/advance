<template>
  <header>
    <div class="navbar">

      <img style="height: 25px; margin-top:7px"
           src="http://sistem.borusaninsan.com:81/ProStaff/Content/images/BORUSAN_INSAN_LOGO-03.png" alt="Logo"
           width="145" height="25">

      <!--<div class="navbar-end">
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
      </div>-->
    </div>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {

      ...mapGetters(['employee'])
    }
  }
</script>

<style scoped>
  .navbar {
    background-color: #2b3643;
    min-height: 38px;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 2;
    padding-left: 20px;
  }
</style>
