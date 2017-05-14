<template>
  <div id="Navbar">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">BliHire</a>
        </div>
        <ul class="nav navbar-nav">
          <li v-on:click="chStatePageToFpk()"><router-link to="/fpk">FPK</router-link></li>
          <li v-on:click="statePage = 'mpp'"><router-link to="/mpp">MPP</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class=""><a href="#">Notification</a></li>
          <li class=""><a href="#">Logout</a></li>
        </ul>
      </div>
    </nav>
    <div class="navbar navbar-inverse navbar-fixed-left">
      <ul class="nav navbar-nav">
        <li><router-link :to="'/'+statePage+'/technology'">Technology</router-link></li>
        <li><router-link :to="'/'+statePage+'/hrd'">Human Resource</router-link></li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'navbar',
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
  }
}
</script>
