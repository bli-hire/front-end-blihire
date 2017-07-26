<template>
  <div id="index">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  beforeMount () {
    if (window.sessionStorage.getItem('user') === null) {
      this.$router.push('/login')
    }
  }
}
</script>
