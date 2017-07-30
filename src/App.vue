<template>
  <div id="app">

    <navbar :loginStatus=status></navbar>
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
  },
  beforeMount () {
    // alert(JSON.parse(window.sessionStorage.getItem('user')).role.roleName)
    if (window.sessionStorage.getItem('user') == null) {
      this.$router.push('/login')
    } else {
      const user = window.sessionStorage.getItem('user')
      var userLogged = JSON.parse(user).role.roleName
      if (userLogged === 'CEO') {
        this.$router.push('/ceo')
        if (window.location.href.includes('hrd') || window.location.href.includes('department') || window.location.href.includes('login')) {
          alert('403 : Forbidden')
          this.$router.push('/ceo')
        }
      } else if (userLogged === 'HR') {
        this.$router.push('/hrd')
        if (window.location.href.includes('ceo') || window.location.href.includes('department') || window.location.href.includes('login')) {
          alert('403 : Forbidden')
          this.$router.push('/hrd')
        }
      } else if (userLogged.includes('Department')) {
        this.$router.push('/department')
        if (window.location.href.includes('hrd') || window.location.href.includes('ceo') || window.location.href.includes('login')) {
          alert('403 : Forbidden')
          this.$router.push('/department')
        }
      }
    }
  },
  props: ['status']
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
  overflow: auto;
}

.navbar-fixed-left {
  margin-top: 0px;
  padding-top: 50px;
  width: 140px;
  position: fixed;
  height: 100%;
  border-radius: 0;
  background-color: #3c8dbc;
  border-color: #3c8dbc;
  max-width:100%;
  max-height:100%;
  z-index: 10;
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
.content{
  margin-top: 63.2px;
}

.panel-dashboard {
  /*background-color: #3c8dbc;*/
  background-color: white;
  position:absolute;
  margin: auto;
  max-width:100%;
  max-height:100%;
  box-shadow: 1px 1px 1px #888888;
  /*untuk membuat div menyesuaikan content graphs */
  display: table;
}

.detail-box {
  background-color: white;
  position: absolute;
  max-width:100%;
  max-height:100%;
  box-shadow: 1px 1px 1px #888888;
  /*untuk membuat div menyesuaikan content graphs */
  display: table;
  margin-left: 150px;
  margin-top: 62.5px;
  text-align: left;
  padding-left: -100px;
  overflow-x: scroll;
}

.listContent {
  margin-top:72px;
  margin-left:160px;
  background: white;
}

.msg-empty{
  margin-top: 40vh;
}
</style>
