<template>
  <div id="Login" class="container">
    <form name="loginForm" class="form-signin">
      <h3 class="form-signin-heading">Login</h3>
          <input type="email" class="form-control" name="internalEmail" ng-model="storage.localEmail" placeholder="email" required/>
          <br/>
          <span class="error">Required!</span>
    		  <span class="error">Not valid email!</span>
    		  <br/>
          <input type="password" class="form-control" name="internalPassword" placeholder="password" ng-model="storage.localPassword"/>
          <button type="Login" class="btn btn-primary btn-block" ng-click="login();loginForm.$setPristine()">Login</button>
    </form>
  </div>
</template>

<script>
export default() {
  name: 'Login'
}
</script>
