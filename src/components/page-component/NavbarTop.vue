<template>
  <div id="NavbarTop">
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
  </div>
</template>

<script>
export default {
  name: 'NavbarTop'
}
</script>
