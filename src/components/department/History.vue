<template>
  <div class="content">

    <BoxComponent 
      v-if="content === 'fpk'" 
      v-for="fpk in JSON.parse(resultContent.resultFpk)" 
      v-bind:title="fpk.department" 
      v-bind:message="'Reason : '+fpk.reason"
      v-bind:statusAccept="fpk.accept"
      v-bind:statusReject="fpk.reject"
      v-bind:loginStatus="'department'"
      v-bind:content="content"
      v-bind:id="fpk.idFpk"></BoxComponent>

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
  name: 'history',
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
    var division = JSON.parse(window.sessionStorage.getItem('user')).department
    if (this.content === 'fpk') {
      self.$http.get('http://localhost:8080/fpk/byDepartment/history', {}, {
        headers: {
          'department': division
        }
      }).then(response => {
        var fpk = JSON.stringify(response.data.data)
        var totalFpk = JSON.stringify(response.data.totalData)
        this.resultContent.resultFpk = fpk
        this.resultContent.resultTotalFpk = totalFpk
      })
    }
  }
}
</script>

<style>
</style>
