<template>
  <div id="index">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  beforeMount () {
    this.$router.push('/login')
  }
}
</script>
