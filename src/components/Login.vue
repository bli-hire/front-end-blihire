<template>
  <div id="Login" class="container">

      <div class="information-bar">
        <h3 class="form-signin-heading">Login</h3>
        <p>Blibli Hiring System Internal , please login below</p>
        <br/>
      </div>

      <br/>
      <br/>
      <div class="form-group">
        <input type="email" class="form-control" name="internalEmail" id="author-name" v-model="email" required="true" placeholder="email / username" />
      </div>
      <br/>
      <div class="form-group">
        <input type="password" class="form-control" name="internalPassword" placeholder="password" id="message-text" required="true" v-model="password"/>
      </div>
      <br/>
      <br/>
      <div class="form-group">
        <button class="btn-login btn btn-primary" v-on:click="login()">Login</button>
      </div>
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
      // this.$router.push('/')
      alert('Please Logout First')
      var roleUser = JSON.parse(window.sessionStorage.getItem('user')).role.roleName
      if (roleUser === 'HR') {
        this.$router.push('/hrd')
      } else if (roleUser === 'CEO') {
        this.$router.push('/ceo')
      } else if (roleUser === 'Department') {
        this.$router.push('/department')
      }
    }
  },
  methods: {
    login () {
      var self = this
      self.$http.post('http://localhost:8080/users/login', {
        email: self.email,
        password: self.password }, (json) => {
          window.sessionStorage.setItem('user', JSON.stringify(json))
          this.user = json
          if (this.user.id != null) {
            if (this.user.role.roleName === 'HR') {
              this.$router.push('/hrd')
            } else if (this.user.role.roleName === 'CEO') {
              this.$router.push('/ceo')
            } else if (this.user.role.roleName === 'Department') {
              this.$router.push('/department')
            }
          }
        })
    }
  }
}
</script>

<style scoped>

h3{
  text-align: center;
  font-size: 32pt;
  font-style: italic;
}

#Login {
  width: 600px;
  height: 400px;
  background-color: #3c8dbc;
  position:absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width:100%;
  max-height:100%;
  box-shadow: 10px 10px 10px #888888;
}

.btn-login {
  display: block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.information-bar {
  background-color: rgba(255,255,255,0.6);
  padding-top:20px;
  margin-left: -15px;
  margin-right: -15px;
}

.information-bar>p{
  text-align: center;
}

</style>
