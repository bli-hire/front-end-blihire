<template>
  <div col-md-12>
    <div class="box-content">
      <h3>{{title}}</h3>
      <h4>{{message}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'box',
  data () {
    return {
      title: '',
      message: ''
    }
  }
}
</script>

<style scoped>
.box-content {
    background-color: white;
    height: 120px;
    position: relative;
    margin:0 auto;
    box-shadow: 1px 1px 1px #888888;
    margin-left: 150px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
</style>
