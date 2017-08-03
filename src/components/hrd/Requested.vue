<template>
  <div class="listContent col-md-10">
  <h2>List of Requested {{content.toUpperCase()}}</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Position Needed</th>
        <th>Target Date</th>
        <th>View Detail</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>Accounting Jr.</td>
          <td>28 Februari 2017</td>
          <td><button class="btn btn-primary"><router-link :to="'/hrd/requested/view-detail'">View {{content.toUpperCase()}}</router-link></button></td></td>
        </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'requeted',
  props: ['department', 'content'],
  data () {
    return {
    }
  },
  beforeMount () {
    self.$http.post('http://localhost:8080/users/login', {
      email: self.email,
      password: self.password }, (json) => {
        window.sessionStorage.setItem('user', JSON.stringify(json))
        this.user = json
        if (this.user.id != null) {
          if (this.user.role === 'HR') {
            this.$router.push('/hrd')
          } else if (this.user.role === 'CEO') {
            this.$router.push('/ceo')
          } else if (this.user.role.includes('Department')) {
            this.$router.push('/department')
          }
        } else {
          alert('Sorry username/password not correct')
        }
      })
  }
}
</script>

<style scoped>
a {
  color: white;
}

th {
  text-align: center;
}
</style>
