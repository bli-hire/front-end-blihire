<template>
  <div class="content">
  <div v-if="content === 'fpk'">
    <BoxComponent
      v-for="fpk in resultContent.resultFpk"
      v-bind:title="fpk.department"
      v-bind:message="'Reason : '+fpk.reason"
      v-bind:statusAccept="fpk.accept"
      v-bind:statusReject="fpk.statusAccept"
      v-bind:statusCeo="fpk.approveCeo"
      v-bind:statusHead="fpk.approveHead"
      v-bind:loginStatus="loginStatus"
      v-bind:content="content"
      v-bind:docType="'fpk'"
      v-bind:id="fpk.idFpk"></BoxComponent>
  </div>
  <div v-if="content === 'mpp'">
      <BoxComponent
      v-for="mpp in resultContent.resultMpp"
      v-bind:title="mpp.department"
      v-bind:message="'Reason : '+mpp.reason"
      v-bind:requestedBy="mpp.requestedBy.name"
      v-bind:createdDate="mpp.createdDate.dayOfWeek + ' - ' +mpp.createdDate.monthOfYear + ' - ' +mpp.createdDate.yearOfEra"
      v-bind:statusAccept="mpp.accept"
      v-bind:statusReject="mpp.reject"
      v-bind:loginStatus="loginStatus"
      v-bind:content="content"
      v-bind:docType="'mpp'"
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
  name: 'department-dashboard',
  data () {
    return {
      resultContent: {
        resultFpk: [],
        resultTotalFpk: 0,
        resultMpp: [],
        resultTotalMpp: 0
      },
      idUser: '',
      role: '',
      status: '',
      loginStatus: '',
      processFpkData: ''
    }
  },
  props: ['content', 'param', 'approve', 'processFpk'],
  beforeMount () {
    // alert(this.content)
    var self = this
    var division = JSON.parse(window.sessionStorage.getItem('user')).department
    this.idUser = JSON.parse(window.sessionStorage.getItem('user')).id
    this.role = JSON.parse(window.sessionStorage.getItem('user')).role
    if (this.role === 'HeadHR' || this.role === 'HR') {
      this.loginStatus = 'hrd'
    } else if (this.role === 'DepartmentHead' || this.role === 'DepartmentTeamMember') {
      this.loginStatus = 'department'
    } else if (this.role === 'CEO') {
      this.loginStatus = 'ceo'
    }
    if (this.content === 'fpk') {
      this.processFpkData = this.processFpk
      if (this.processFpkData === 'accept' || this.processFpkData === 'rejected') {
        self.$http.get('http://localhost:8080/fpk/byDepartment/' + this.param, {}, {
          headers: {
            'department': division,
            'role': this.role
          }
        }).then(response => {
          var fpk = response.data.data
          var totalFpk = response.data.totalData
          this.resultContent.resultFpk = fpk
          this.resultContent.resultTotalFpk = totalFpk
        })
      } else if (this.processFpkData === 'waitingCeo' || this.processFpkData === 'acceptedCeo' || this.processFpkData === 'rejectedCeo') {
        self.$http.get('http://localhost:8080/fpk/byDepartment/' + this.param, {}, {
          headers: {
            'department': division,
            'role': 'CEO'
          }
        }).then(response => {
          var fpk = response.data.data
          var totalFpk = response.data.totalData
          this.resultContent.resultFpk = fpk
          this.resultContent.resultTotalFpk = totalFpk
        })
      } else {
        self.$http.get('http://localhost:8080/fpk/byRequest/' + this.param, {}, {
          headers: {
            'userId': this.idUser
          }
        }).then(response => {
          var fpk = response.data.data
          var totalFpk = response.data.totalData
          this.resultContent.resultFpk = fpk
          this.resultContent.resultTotalFpk = totalFpk
        })
      }
    } else if (this.content === 'mpp') {
      this.status = this.param
      var endpoint = 'http://localhost:8080/mpp/byDepartment/'
      if (this.status === 'accepted') {
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
      } else if (this.status === 'rejected') {
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
      } else if (this.status === 'published') {
        endpoint = endpoint + 'published/ceo'
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
