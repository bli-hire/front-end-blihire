<template>
  <div class="content">

    <BoxComponent 
      v-if="content === 'fpk'" 
      v-for="fpk in JSON.parse(resultContent.resultFpk)" 
      v-bind:title="fpk.department" 
      v-bind:message="'Reason : '+fpk.reason"
      v-bind:status="'Status : '+fpk.accept"></BoxComponent>

    <BoxComponent v-if="content === 'mpp'" v-for="n in resultContent.resultTotalMpp" v-bind:title="content" message="Please we need ..."></BoxComponent>
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
      resultContent: {
        resultFpk: {},
        resultTotalFpk: '',
        resultMpp: {},
        resultTotalMpp: ''
      }
    }
  },
  props: ['content'],
  beforeMount () {
    var self = this
    if (this.content === 'fpk') {
      self.$http.get('http://localhost:8080/internal/fpk').then(response => {
        var fpk = JSON.stringify(response.data.data)
        var totalFpk = JSON.stringify(response.data.totalData)
        this.resultContent.resultFpk = fpk
        this.resultContent.resultTotalFpk = totalFpk
        // alert(this.resultContent.resultFpk)
      })
    }
  }
}
</script>

<style>
</style>
