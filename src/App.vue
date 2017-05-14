<template>
  <div id="app">

    <NavbarTop></NavbarTop>

    <div class="navbar navbar-inverse navbar-fixed-left">
      <ul class="nav navbar-nav">
        <li><router-link :to="'/'+statePage+'/technology'">Technology</router-link></li>
        <li><router-link :to="'/'+statePage+'/hrd'">Human Resource</router-link></li>
      </ul>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>

import NavbarTop from './components/page-component/NavbarTop'

export default {
  name: 'app',
  data () {
    return {
      statePage: 'fpk'
    }
  },
  methods: {
    chStatePageToMpp () {
      this.statePage = 'mpp'
      alert(this.statePage)
    },
    chStatePageToFpk () {
      this.statePage = 'fpk'
      console.log(this.statePage)
    }
  },
  components: {
    NavbarTop
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.navbar-fixed-left {
  margin-top: -20px;
  width: 140px;
  position: fixed;
  border-radius: 0;
  height: 100%;
}

.navbar-fixed-left .navbar-nav > li {
  float: none;  /* Cancel default li float: left */
  width: 139px;
}

.navbar-fixed-left + .container {
  padding-left: 160px;
}

/* On using dropdown menu (To right shift popuped) */
.navbar-fixed-left .navbar-nav > li > .dropdown-menu {
  margin-top: -50px;
  margin-left: 140px;
}
</style>
