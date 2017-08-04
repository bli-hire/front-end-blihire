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
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatePageToFpk(); setActive('ceo/fpk'); setActiveSide('ceo/fpk');" :class="{active: isActive('ceo/fpk')}"><router-link to="/ceo/fpk">FPK</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="chStatePageToMpp(); setActive('ceo/mpp'); setActiveSide('ceo/mpp');" :class="{active: isActive('ceo/mpp')}"><router-link to="/ceo/mpp">MPP</router-link></li>

            <li v-if="loginStatus === 'department'" v-on:click="chStatePageToFpk(); setActive('department/fpk'); setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActive('department/fpk')}"><router-link to="/department/fpk/dashboard">FPK</router-link></li>
            <li v-if="loginStatus === 'department'" v-on:click="chStatePageToMpp(); setActive('department/mpp'); setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActive('department/mpp')}"><router-link to="/department/mpp/dashboard">MPP</router-link></li>

            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToFpk(); setActive('hrd/fpk'); setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActive('hrd/fpk')}"><router-link to="/hrd/fpk/dashboard">FPK</router-link></li>
            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToMpp(); setActive('hrd/mpp'); setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActive('hrd/mpp')}"><router-link to="/hrd/mpp/dashboard">MPP</router-link></li>
            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdRequestedFpk(); chContentRequestToFpk(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/requested/fpk');" :class="{active: isActive('hrd/requested/fpk')}"><router-link to="/hrd/requested/fpk/human-resource">Requested FPK</router-link></li>
            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdRequestedMpp(); chContentRequestToMpp(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/requested/mpp');" :class="{active: isActive('hrd/requested/mpp')}"><router-link to="/hrd/requested/mpp/human-resource">Requested MPP</router-link></li>

             <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdPublishedFpk(); chContentRequestToFpk(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/published/fpk');" :class="{active: isActive('hrd/published/fpk')}"><router-link to="/hrd/published/fpk/human-resource">Published FPK</router-link></li>
            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdPublishedMpp(); chContentRequestToMpp(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/published/mpp');" :class="{active: isActive('hrd/published/mpp')}"><router-link to="/hrd/published/mpp/human-resource">Published MPP</router-link></li>

            <li v-if="loginStatus === 'hrd'" v-on:click="chStatePageToHrdCandidates(); setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource'); setActive('hrd/candidates');" :class="{active: isActive('hrd/candidates')}"><router-link to="/hrd/candidates/human-resource">Candidates</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li
              class="dropdown-toggle"
              data-toggle="dropdown"
              :class="{active: isActive('notification'), open: isNotifActive('notification')}"
              v-on:click="setNotifActive('notification')">
              <router-link to="">
                <span class="glyphicon glyphicon-comment"> Notification</span>
              </router-link>
              <ul class="dropdown-menu">
                <li><p>No FPK/MPP request</p></li>
              </ul>
            </li>
            <li :class="{active: isActive('user')}"><router-link to=""><span class="glyphicon glyphicon-user"> {{username}}</span></router-link></li>
            <!-- <li :class="{active: isActive('login')}"><router-link to="/login"><span class="glyphicon glyphicon-log-out"></span></router-link></li> -->
            <!-- <li class="" v-if="check() != null" > -->
            <li class="" v-on:click="logout ()">

                <router-link to="/login"> <span class="glyphicon glyphicon-log-out"></span></router-link>

            </li >

          </ul>
        </div>
      </div>
    </nav>
      <div class="collapse width navbar-collapse" id="sideNavbar" v-bind:style="navbarLeft">
      <div class="navbar navbar-inverse navbar-fixed-left">
        <ul class="nav navbar-nav">
            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/human-resource')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/human-resource'">Human Resource</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/marketing');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/marketing')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/marketing'">Marketing</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>
            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/operation');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/operation')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/operation'">Operation</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/technology');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/technology')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/technology'">Technology</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/business-development');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/business-development')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/business-development'">Business Development</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/finance');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/finance')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/finance'">Finance</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/project-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/project-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/project-management'">Project Management</router-link></li>

            <li v-if="loginStatus === 'ceo'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/product-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/product-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/product-management'">Product Management</router-link></li>            <!---->

            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/human-resource')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/human-resource'">Human Resource</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/marketing');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/marketing')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/marketing'">Marketing</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/operation');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/operation')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/operation'">Operation</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/technology');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/technology')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/technology'">Technology</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/business-development');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/business-development')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/business-development'">Business Development</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/finance');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/finance')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/finance'">Finance</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/project-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/project-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/project-management'">Project Management</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'requested/fpk' || statePage === 'requested/mpp' || statePage === 'published/fpk' || statePage === 'published/mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/product-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/product-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/product-management'">Product Management</router-link></li>

            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/human-resource');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/human-resource')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/human-resource'">Human Resource</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/marketing');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/marketing')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/marketing'">Marketing</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/trade-partnership')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/trade-partnership'">Trade Partnership</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/operation');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/operation')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/operation'">Operation</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/technology');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/technology')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/technology'">Technology</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/business-development');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/business-development')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/business-development'">Business Development</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/finance');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/finance')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/finance'">Finance</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/project-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/project-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/project-management'">Project Management</router-link></li>
            <li v-if="loginStatus === 'hrd' && statePage === 'candidates'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/product-management');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/product-management')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/product-management'">Product Management</router-link></li>

            <li v-if="loginStatus === 'hrd' && (statePage === 'fpk' || statePage === 'mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/dashboard')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/dashboard'">Dashboard</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'fpk' || statePage === 'mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/create-new');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/create-new')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/create-new'">Create New</router-link></li>
            <li v-if="loginStatus === 'hrd' && (statePage === 'fpk' || statePage === 'mpp')" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/history');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/history')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/history'">History</router-link></li>
            <!---->

            <li v-if="loginStatus === 'department'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/dashboard');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/dashboard')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/dashboard'">Dashboard</router-link></li>
            <li v-if="loginStatus === 'department'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/create-new');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/create-new')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/create-new'">Create New</router-link></li>
            <li v-if="loginStatus === 'department'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/history');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/history')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/history'">History</router-link></li>
            <li v-if="role === 'DepartmentHead' && statePage === 'mpp'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/pending');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/pending')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/pending'">Pending</router-link></li>
            <li v-if="role === 'DepartmentHead' && statePage === 'mpp'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/accepted');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/accepted')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/accepted'">Accepted</router-link></li>
            <li v-if="role === 'DepartmentHead' && statePage === 'mpp'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/rejected');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/rejected')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/rejected'">Rejected</router-link></li>
            <li v-if="role === 'DepartmentHead' && statePage === 'fpk'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/pending');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/pending')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/pending'">Pending</router-link></li>
            <li v-if="role === 'DepartmentHead' && statePage === 'fpk'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/accepted');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/accepted')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/accepted'">Accepted</router-link></li>
            <li v-if="role === 'DepartmentHead' && statePage === 'fpk'" v-on:click="setActiveSide({loginStatus}+'/'+{statePage}+'/rejected');" :class="{active: isActiveSide({loginStatus}+'/'+{statePage}+'/rejected')}"><router-link :to="'/'+loginStatus+'/'+statePage+'/rejected'">Rejected</router-link></li>
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
      content: '',
      activeNavItem: 'fpk',
      activeNavItemSide: '',
      notifPopMenu: '',
      username: JSON.parse(window.sessionStorage.getItem('user')).name,
      role: JSON.parse(window.sessionStorage.getItem('user')).role
    }
  },
  props: ['loginStatus'],
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
    },
    isNotifActive (notif) {
      return this.notifPopMenu === notif
    },
    setNotifActive (notif) {
      if (this.notifPopMenu !== notif) {
        this.notifPopMenu = notif
      } else {
        this.notifPopMenu = ''
      }
    },
    chStatePageToHrdRequestedFpk () {
      this.statePage = 'requested/fpk'
    },
    chStatePageToHrdRequestedMpp () {
      this.statePage = 'requested/mpp'
    },
    chStatePageToHrdPublishedFpk () {
      this.statePage = 'published/fpk'
    },
    chStatePageToHrdPublishedMpp () {
      this.statePage = 'published/mpp'
    },
    chStatePageToHrdCandidates () {
      this.statePage = 'candidates'
    },
    chContentRequestToFpk () {
      this.content = 'fpk'
    },
    chContentRequestToMpp () {
      this.content = 'mpp'
    },
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    check: function () {
      return window.sessionStorage.getItem('user')
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
  z-index: 11;
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

/*Navigation notification popup*/
.dropdown-menu{
  position: absolute;
  right: 0;
  left: auto;
  width: 280px;
  padding: 0 0 0 0;
  top: 100%;
  box-shadow: 2px 2px 2px grey;
  border-color: #eee;
}

.open>.dropdown-menu{
  padding-top: 10px;
  text-align: center;
  display: block;
}

.open>.dropdown-menu>li{

}
</style>
