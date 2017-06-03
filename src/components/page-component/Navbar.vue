<template>
  <div id="Navbar">
    <nav class="navbar navbar-default top-navbar navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#sideNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">BliHire</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li v-on:click="chStatePageToFpk(); setActive('fpk'); setActiveSide('');" :class="{active: isActive('fpk')}"><router-link to="/fpk">FPK</router-link></li>
            <li v-on:click="chStatePageToMpp(); setActive('mpp'); setActiveSide('');" :class="{active: isActive('mpp')}"><router-link to="/mpp">MPP</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li :class="{active: isActive('notification')}"><router-link to=""><span class="glyphicon glyphicon-comment"> Notification</span></router-link></li>
            <li :class="{active: isActive('user')}"><router-link to=""><span class="glyphicon glyphicon-user"> Username</span></router-link></li>
            <li :class="{active: isActive('login')}"><router-link to="/login"><span class="glyphicon glyphicon-log-out"></span></router-link></li>
          </ul>
        </div>
      </div>
    </nav>
      <div class="collapse width navbar-collapse" id="sideNavbar" v-bind:style="navbarLeft">
      <div class="navbar navbar-inverse navbar-fixed-left">
        <ul class="nav navbar-nav">
          <li v-on:click="setActiveSide({statePage}+'/human-resource');" :class="{active: isActiveSide({statePage}+'/human-resource')}"><router-link :to="'/'+statePage+'/human-resource'">Human Resource</router-link></li>
          <li v-on:click="setActiveSide({statePage}+'/marketing');" :class="{active: isActiveSide({statePage}+'/marketing')}"><router-link :to="'/'+statePage+'/marketing'">Marketing</router-link></li>
          <li v-on:click="setActiveSide({statePage}+'/trade-partnership');" :class="{active: isActiveSide({statePage}+'/trade-partnership')}"><router-link :to="'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>
          <li v-on:click="setActiveSide({statePage}+'/operation');" :class="{active: isActiveSide({statePage}+'/operation')}"><router-link :to="'/'+statePage+'/operation'">Operation</router-link></li>
          <li v-on:click="setActiveSide({statePage}+'/technology');" :class="{active: isActiveSide({statePage}+'/technology')}"><router-link :to="'/'+statePage+'/technology'">Technology</router-link></li>
          <li v-on:click="setActiveSide({statePage}+'/business-development');" :class="{active: isActiveSide({statePage}+'/business-development')}"><router-link :to="'/'+statePage+'/business-development'">Business Development</router-link></li>
          <li v-on:click="setActiveSide({statePage}+'/finance');" :class="{active: isActiveSide({statePage}+'/finance')}"><router-link :to="'/'+statePage+'/finance'">Finance</router-link></li>
          <li v-on:click="setActiveSide({statePage}+'/project-management');" :class="{active: isActiveSide({statePage}+'/project-management')}"><router-link :to="'/'+statePage+'/project-management'">Project Management</router-link></li>
          <li v-on:click="setActiveSide({statePage}+'/product-management');" :class="{active: isActiveSide({statePage}+'/product-management')}"><router-link :to="'/'+statePage+'/product-management'">Product Management</router-link></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navbarLeft: {
        marginLeft: '-15px'
      },
      statePage: 'fpk',
      activeNavItem: 'fpk',
      activeNavItemSide: ''
    }
  },
  methods: {
    chStatePageToMpp () {
      this.statePage = 'mpp'
      console.log(this.statePage)
    },
    chStatePageToFpk () {
      this.statePage = 'fpk'
      console.log(this.statePage)
    },
    isActive (navItem) {
      return this.activeNavItem === navItem
    },
    setActive (navItem) {
      this.activeNavItem = navItem
    },
    isActiveSide (navItem) {
      return this.activeNavItemSide === navItem
    },
    setActiveSide (navItem) {
      this.activeNavItemSide = navItem
    }
  }
}
</script>

<style scoped>

#myNavbar li:hover {
  background-color: #e5e5ff;
}

.top-navbar {
  background-color: white;
  z-index: 2;
}

.navbar-brand {
  padding-left: 45px;
  padding-right: 42px;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
  /*turn off bootstrap*/
  background-color: white;
  border-bottom: 3px solid #3c8dbc;
  color: black;
}

.navbar-inverse .navbar-nav>.active>a {
  /*turn off bootstrap*/
  background-color: #4c99c6;
  border-left: 3px solid white;
  color: white;
}

</style>
