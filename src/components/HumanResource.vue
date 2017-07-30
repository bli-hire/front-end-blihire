<template>
  <div class="HRD">
    <BoxComponent v-for="n in total" v-bind:title="content" message="Please we need ..."></BoxComponent>
    <h2 class="msg-empty" v-if="total === 0">There are no new {{content}} requested</h2>
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
      msg: 'Menu Divisi HRD',
      total: 2
    }
  },
  props: ['content'],
  beforeMount () {
    var self = this
    if (this.content === 'FPK') {
      self.$http.get('http://localhost:8080/internal/fpk').then(response => {
        console.log(JSON.stringify(response.data))
        if (JSON.stringify(response.data) === '[]') {
          this.total = 0
        } else {
          this.total = 5
        }
      })
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

.HRD{
  margin-top: 63.2px;
}
</style>
