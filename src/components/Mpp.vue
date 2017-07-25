<template>
  <div class="Mpp">
    <div class="panel-dashboard col-md-5">
      <h3>Report Mpp</h3>
      <ReportChart></ReportChart>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ReportChart from './page-component/ReportChart'

export default {
  name: 'Mpp',
  components: {
    ReportChart
  },
  data () {
    return {
      msg: 'Welcome to Mpp dashboard'
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

.Mpp {
  margin-top: 62px;
  margin-left: 150px;
  overflow-y: scroll;
}
</style>
