<template>
  <div id="Login" class="container">
    <!-- <form name="loginForm" class="form-signin" method="post"> -->
      <h3 class="form-signin-heading">Login</h3>
      <div class="form-group">
        <label for="author-name" class="form-control-label">Author:</label>
        <input type="email" class="form-control" name="internalEmail" id="author-name" v-model="email" required placeholder="email"/>
      </div>

      <div class="form-group">
        <input type="password" class="form-control" name="internalPassword" placeholder="password" id="message-text" v-model="password"/>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" v-on:click="login()">Login</button>
      </div>

      <!-- <button type="Login" class="btn btn-primary btn-block">Login</button> -->
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      message: 'login',
      email: '',
      password: '',
      user: null
    }
  },
  ready: function () {
    // this.$session.start()
    // if (window.sessionStorage.getItem('user')) {
    //   this.$router.push('/')
    // }
    if (this.$session.get('user')) {
      this.$router.push('/')
    }
  },
  beforeMount () {
    if (window.sessionStorage.getItem('user') != null) {
      this.$router.push('/')
    }
  },
  methods: {
    login () {
      var self = this
      self.$http.post('http://localhost:8080/users/login', {
        email: self.email,
        password: self.password }, (json) => {
          // this.$session.start()
          // this.$session.clear()
          // this.$session.destroy()

          // window.sessionStorage.setItem('user', json)
          window.sessionStorage.setItem('user', json)
          this.user = json
          if (this.user.id != null) {
            this.$router.push('/')
          }
        })
    }
  }
}
</script>
