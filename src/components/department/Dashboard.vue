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

    <h2 class="msg-empty" v-if="content === 'fpk' && resultContent.resultTotalFpk === '0'">There are no fpk ( {{param}} )</h2>
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
        resultTotalFpk: '0',
        resultMpp: {},
        resultTotalMpp: 0
      }
    }
  },
  props: ['content', 'param'],
  beforeMount () {
    var self = this
    var division = JSON.parse(window.sessionStorage.getItem('user')).department
    if (this.content === 'fpk') {
      self.$http.get('http://localhost:8080/fpk/byDepartment/' + this.param, {}, {
        headers: {
          'department': division
        }
      }).then(response => {
        var fpk = JSON.stringify(response.data.data)
        var totalFpk = JSON.stringify(response.data.totalData)
        this.resultContent.resultFpk = fpk
        this.resultContent.resultTotalFpk = totalFpk
      })
      // if (this.param === 'active') {
      //   self.$http.get('http://localhost:8080/fpk/byDepartment/active', {}, {
      //     headers: {
      //       'department': division
      //     }
      //   }).then(response => {
      //     var fpk = JSON.stringify(response.data.data)
      //     var totalFpk = JSON.stringify(response.data.totalData)
      //     this.resultContent.resultFpk = fpk
      //     this.resultContent.resultTotalFpk = totalFpk
      //   })
      // } else if (this.param === 'history') {
      //   self.$http.get('http://localhost:8080/fpk/byDepartment/history', {}, {
      //     headers: {
      //       'department': division
      //     }
      //   }).then(response => {
      //     var fpk = JSON.stringify(response.data.data)
      //     var totalFpk = JSON.stringify(response.data.totalData)
      //     this.resultContent.resultFpk = fpk
      //     this.resultContent.resultTotalFpk = totalFpk
      //   })
      // } else if (this.param === 'pending') {
      //   self.$http.get('http://localhost:8080/fpk/byDepartment/pending', {}, {
      //     headers: {
      //       'department': division
      //     }
      //   }).then(response => {
      //     var fpk = JSON.stringify(response.data.data)
      //     var totalFpk = JSON.stringify(response.data.totalData)
      //     this.resultContent.resultFpk = fpk
      //     this.resultContent.resultTotalFpk = totalFpk
      //   })
      // } else if (this.param === 'accepted') {
      //   self.$http.get('http://localhost:8080/fpk/byDepartment/history', {}, {
      //     headers: {
      //       'department': division
      //     }
      //   }).then(response => {
      //     var fpk = JSON.stringify(response.data.data)
      //     var totalFpk = JSON.stringify(response.data.totalData)
      //     this.resultContent.resultFpk = fpk
      //     this.resultContent.resultTotalFpk = totalFpk
      //   })
      // } else if (this.param === 'rejected') {
      //   self.$http.get('http://localhost:8080/fpk/byDepartment/history', {}, {
      //     headers: {
      //       'department': division
      //     }
      //   }).then(response => {
      //     var fpk = JSON.stringify(response.data.data)
      //     var totalFpk = JSON.stringify(response.data.totalData)
      //     this.resultContent.resultFpk = fpk
      //     this.resultContent.resultTotalFpk = totalFpk
      //   })
      // }
    }
  }
}
</script>

<style>
</style>
