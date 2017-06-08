<template>
  <div class="HRD">
    <BoxComponent v-for="n in 10" v-bind:title="content" message="Please we need ..."></BoxComponent>
  </div>
</template>

<script>
import BoxComponent from '@/components/page-component/BoxComponent'

export default {
  components: {
    BoxComponent
  },
  name: 'HRD',
  data () {
    return {
      msg: 'Menu Divisi HRD'
    }
  },
  props: ['content']
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

.HRD{
  margin-top: 63.2px;
}

</style>
