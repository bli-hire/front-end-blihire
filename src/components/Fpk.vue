<template>
  <div class="fpk">
    <div class="panel-dashboard">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Fpk',
  data () {
    return {
      msg: 'Welcome to FPK dashboard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fpk {
  margin-top: 62px;
  margin-left: 150px;
  overflow-y: scroll;
}

.panel-dashboard {
  width: 800px;
  height: 1200px;
  /*background-color: #3c8dbc;*/
  background-color: white;
  position:absolute;
  margin: auto;
  max-width:100%;
  max-height:100%;
  box-shadow: 1px 1px 1px #888888;
}
</style>
