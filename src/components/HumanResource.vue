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
      total: 0
    }
  },
  props: ['content'],
  beforeMount () {
    var self = this
    if (this.content === 'FPK') {
      self.$http.get('http://localhost:8080/internal/fpk').then(response => {
        var result = JSON.stringify(response)
        if (JSON.stringify(response.data === '')) {
          console.log(result)
          this.total = 0
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
