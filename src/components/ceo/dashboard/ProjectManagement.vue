<template>
  <div class="content">
  <div v-if="content === 'fpk'">
    <BoxComponent
      v-for="fpk in resultContent.resultFpk"
      v-bind:title="fpk.department"
      v-bind:message="'Reason : '+fpk.reason"
      v-bind:statusAccept="fpk.accept"
      v-bind:statusReject="fpk.reject"
      v-bind:statusCeo="fpk.approveCeo"
      v-bind:statusHead="fpk.approveHead"
      v-bind:loginStatus="'ceo'"
      v-bind:docType="'fpk'"
      v-bind:content="content"
      v-bind:id="fpk.idFpk"></BoxComponent>
  </div>
  <div v-if="content === 'mpp'">
      <BoxComponent
      v-for="mpp in resultContent.resultMpp"
      v-bind:title="mpp.department"
      v-bind:statusAccept="mpp.accept"
      v-bind:statusReject="mpp.reject"
      v-bind:published="mpp.published"
      v-bind:loginStatus="'ceo'"
      v-bind:docType="'mpp'"
      v-bind:content="content"
      v-bind:requestedBy="mpp.requestedBy.name"
      v-bind:id="mpp.id"></BoxComponent>
    </div>

    <h2 class="msg-empty" v-if="content === 'fpk' && resultContent.resultTotalFpk === 0">There are no fpk ( {{param}} )</h2>
    <h2 class="msg-empty" v-if="content === 'mpp' && resultContent.resultTotalMpp === 0">There are no mpp ( {{param}} )</h2>
    <!-- <h2 class="msg-empty" v-if="content === 'mpp'">There are no mpp ( {{param}} )</h2> -->
  </div>
</template>

<script>
import BoxComponent from '@/components/page-component/BoxComponent'
export default {
  components: {
    BoxComponent
  },
  name: 'business-development',
  data () {
    return {
      resultContent: {
        resultFpk: [],
        resultTotalFpk: 0,
        resultMpp: [],
        resultTotalMpp: 0
      },
      idUser: '',
      status: ''
    }
  },
  props: ['content', 'param', 'approve', 'statusRouting'],
  beforeMount () {
    // alert(this.content)
    var self = this
    var division = 'ProjectManagement'
    this.idUser = JSON.parse(window.sessionStorage.getItem('user')).id
    if (this.content === 'fpk') {
      self.$http.get('http://localhost:8080/fpk/byDepartment/' + this.param, {}, {
        headers: {
          'department': division,
          'role': this.approve
        }
      }).then(response => {
        var fpk = response.data.data
        var totalFpk = response.data.totalData
        this.resultContent.resultFpk = fpk
        this.resultContent.resultTotalFpk = totalFpk
      })
    } else if (this.content === 'mpp') {
      this.status = this.param
      var endpoint = 'http://localhost:8080/mpp/byDepartment/'
      if (this.statusRouting === 'accepted') {
        endpoint = endpoint + 'accepted/ceo'
        self.$http.get(endpoint, {}, {
          headers: {
            'department': division,
            'userId': self.idUser
          }
        }).then(response => {
          if (response.data.data === '[]') {
            this.resultContent.resultTotalMpp = 0
          } else {
            var mpp = response.data.data
            var totalMpp = response.data.totalData
            this.resultContent.resultMpp = mpp
            this.resultContent.resultTotalMpp = totalMpp
          }
        })
      } else if (this.statusRouting === 'rejected') {
        endpoint = endpoint + 'rejected/ceo'
        self.$http.get(endpoint, {}, {
          headers: {
            'department': division,
            'userId': self.idUser
          }
        }).then(response => {
          if (response.data.data === '[]') {
            this.resultContent.resultTotalMpp = 0
          } else {
            var mpp = response.data.data
            var totalMpp = response.data.totalData
            this.resultContent.resultMpp = mpp
            this.resultContent.resultTotalMpp = totalMpp
          }
        })
      } else if (this.statusRouting === 'published') {
        endpoint = endpoint + 'published'
        self.$http.get(endpoint, {}, {
          headers: {
            'department': division,
            'userId': self.idUser
          }
        }).then(response => {
          if (response.data.data === '[]') {
            this.resultContent.resultTotalMpp = 0
          } else {
            var mpp = response.data.data
            var totalMpp = response.data.totalData
            this.resultContent.resultMpp = mpp
            this.resultContent.resultTotalMpp = totalMpp
          }
        })
      } else {
        endpoint = endpoint + 'active'
        self.$http.get(endpoint, {}, {
          headers: {
            'department': division
          }
        }).then(response => {
          if (response.data.data === '[]') {
            this.resultContent.resultTotalMpp = 0
          } else {
            var mpp = response.data.data
            var totalMpp = response.data.totalData
            this.resultContent.resultMpp = mpp
            this.resultContent.resultTotalMpp = totalMpp
          }
        })
      }
    }
    // alert('Mpp : ' + JSON.stringify(this.resultContent.resultTotalMpp))
    // alert('Fpk : ' + JSON.stringify(this.resultContent.resultTotalFpk))
  }
}
</script>

<style>
</style>
