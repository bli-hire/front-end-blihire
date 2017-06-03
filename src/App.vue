<template>
  <div id="app">

    <navbar></navbar>
    <!-- <img src="./assets/logo.png"> -->
      <router-view></router-view>

  </div>
</template>

<script>

import Navbar from './components/page-component/Navbar'

export default {
  name: 'app',

  components: {
    Navbar
  }
}

</script>

<style>
body {
  background-color: #e5e5ff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #e5e5ff;
}

.navbar-fixed-left {
  margin-top: -22px;
  width: 140px;
  position: fixed;
  border-radius: 0;
  height: 100%;
  background-color: #3c8dbc;
  border-color: #3c8dbc;
}

.navbar-fixed-left .navbar-nav > li {
  float: none;
  width: 139px;
}

.navbar-fixed-left + .container {
  padding-left: 160px;
}

.navbar-fixed-left .navbar-nav > li > .dropdown-menu {
  margin-top: -50px;
  margin-left: 140px;
}

.navbar-inverse .navbar-nav>li>a {
  color: #dbdbdb;
}

.navbar-inverse .navbar-nav>li>a:hover{
  color: black;
  background-color: #e5e5ff;
  /*background-color: #e9e9e9;*/
}

</style>
