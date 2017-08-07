<template>
  <div class="content">

    <BoxComponent
      v-if="content === 'fpk'"
      v-for="fpk in JSON.parse(resultContent.resultFpk)"
      v-bind:title="fpk.department"
      v-bind:message="'Reason : '+fpk.reason"
      v-bind:statusAccept="fpk.accept"
      v-bind:statusReject="fpk.reject"
      v-bind:loginStatus="role"
      v-bind:content="content"
      v-bind:id="fpk.idFpk"></BoxComponent>

    <h2 class="msg-empty" v-if="content === 'fpk' && JSON.parse(resultContent.resultTotalFpk) === 0">There are no new {{content}} requested</h2>

    <!-- <BoxComponent v-if="content === 'mpp'" v-for="n in resultContent.resultTotalMpp" v-bind:title="content" message="Please we need ..."></BoxComponent> -->

    <h2 class="msg-empty" v-if="content === 'mpp' && JSON.parse(resultContent.resultTotalMpp) === 0">There are no new {{content}} requested</h2>

  </div>
</template>

<script>
import BoxComponent from '@/components/page-component/BoxComponent'

export default {
  components: {
    BoxComponent
  },
  name: 'technology',
  data () {
    return {
      resultContent: {
        resultFpk: {},
        resultTotalFpk: 0,
        resultMpp: {},
        resultTotalMpp: 0
      },
      role: ''
    }
  },
  props: ['content'],
  beforeMount () {
    var self = this
    var division = 'Technology'
    self.role = JSON.parse(window.sessionStorage.getItem('user')).role
    if (self.role === 'HR') {
      self.role = 'hrd'
    }
    if (this.content === 'fpk') {
      self.$http.get('http://localhost:8080/fpk/byDepartment', {}, {
        headers: {
          'department': division
        }
      }).then(response => {
        if (response.data.data === '[]') {
          this.resultContent.resultTotalFpk = 0
        } else {
          var fpk = JSON.stringify(response.data.data)
          var totalFpk = JSON.stringify(response.data.totalData)
          this.resultContent.resultFpk = fpk
          this.resultContent.resultTotalFpk = totalFpk
        }
      })
    }
  }
}
</script>

<style>
</style>
