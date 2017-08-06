<template>
  <div class="content">

    <div v-if="content === 'fpk'">
      <BoxComponent

        v-for="fpk in JSON.parse(resultContent.resultFpk)"
        v-bind:title="fpk.department"
        v-bind:message="'Reason : '+fpk.reason"
        v-bind:statusAccept="fpk.accept"
        v-bind:statusReject="fpk.reject"
        v-bind:loginStatus="role"
        v-bind:content="content"
        v-bind:id="fpk.idFpk">
      </BoxComponent>
    </div>
    <div v-if="content === 'mpp'">
      <BoxComponent
        v-for="mpp in JSON.parse(resultContent.resultMpp)"
        v-bind:title="mpp.department"
        v-bind:message="'Created Date : '+ mpp.createdDate.dayOfWeek + ' - '+ mpp.createdDate.monthOfYear + ' - '+ mpp.createdDate.yearOfEra"
        v-bind:statusAccept="mpp.isAccept"
        v-bind:statusReject="mpp.isReject"
        v-bind:loginStatus="role"
        v-bind:content="content"
        v-bind:id="mpp.id">
      </BoxComponent>
    </div>

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
  name: 'finance',
  data () {
    return {
      resultContent: {
        resultFpk: {},
        resultTotalFpk: 0,
        resultMpp: {},
        resultTotalMpp: 0
      },
      role: '',
      idUser: ''
    }
  },
  props: ['content', 'status'],
  beforeMount () {
    var self = this
    var division = 'Finance'
    self.role = JSON.parse(window.sessionStorage.getItem('user')).role
    self.idUser = JSON.parse(window.sessionStorage.getItem('user')).id
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
    } else if (this.content === 'mpp') {
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
            var mpp = JSON.stringify(response.data.data)
            var totalMpp = JSON.stringify(response.data.totalData)
            this.resultContent.resultMpp = mpp
            this.resultContent.resultTotalMpp = totalMpp
            // alert(JSON.stringify(this.status))
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
            var mpp = JSON.stringify(response.data.data)
            var totalMpp = JSON.stringify(response.data.totalData)
            this.resultContent.resultMpp = mpp
            this.resultContent.resultTotalMpp = totalMpp
            // alert(JSON.stringify(this.status))
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
            var mpp = JSON.stringify(response.data.data)
            var totalMpp = JSON.stringify(response.data.totalData)
            this.resultContent.resultMpp = mpp
            this.resultContent.resultTotalMpp = totalMpp
            // alert(JSON.stringify(this.status))
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
            var mpp = JSON.stringify(response.data.data)
            var totalMpp = JSON.stringify(response.data.totalData)
            this.resultContent.resultMpp = mpp
            this.resultContent.resultTotalMpp = totalMpp
            // alert(JSON.stringify(this.status))
          }
        })
      }
    }
  }
}
</script>

<style>
</style>
