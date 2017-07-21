<template>
  <div class="content">
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
  name: 'department-dashboard',
  data () {
    return {
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

<style>
</style>
