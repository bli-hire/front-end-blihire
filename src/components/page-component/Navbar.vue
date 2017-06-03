<template>
  <div id="Navbar">
    <nav class="navbar navbar-default top-navbar navbar-static-top">
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
            <li v-on:click="chStatePageToFpk()"><router-link to="/fpk">FPK</router-link></li>
            <li v-on:click="chStatePageToMpp()"><router-link to="/mpp">MPP</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/notification"><span class="glyphicon glyphicon-comment"> Notification</span></router-link></li>
            <li><router-link to="/login"><span class="glyphicon glyphicon-log-out"> Logout</span></router-link></li>
          </ul>
        </div>
      </div>
    </nav>
      <div class="collapse width navbar-collapse" id="sideNavbar" v-bind:style="navbarLeft">
      <div class="navbar navbar-inverse navbar-fixed-left">
        <ul class="nav navbar-nav">
          <li><router-link :to="'/'+statePage+'/human-resource'">Human Resource</router-link></li>
          <li><router-link :to="'/'+statePage+'/marketing'">Marketing</router-link></li>
          <li><router-link :to="'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>
          <li><router-link :to="'/'+statePage+'/operation'">Operation</router-link></li>
          <li><router-link :to="'/'+statePage+'/technology'">Technology</router-link></li>
          <li><router-link :to="'/'+statePage+'/business-development'">Business Development</router-link></li>
          <li><router-link :to="'/'+statePage+'/finance'">Finance</router-link></li>
          <li><router-link :to="'/'+statePage+'/project-management'">Project Management</router-link></li>
          <li><router-link :to="'/'+statePage+'/product-management'">Product Management</router-link></li>
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
      statePage: 'fpk'
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
}

.navbar-brand {
  padding-left: 45px;
  padding-right: 42px;
}

.active {
  background-color: #e5e5ff;
}

</style>
