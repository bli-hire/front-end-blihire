<template>
  <div class="listContent col-md-10">
    <h2 class="" v-if="content === 'mpp' && JSON.parse(resultContent.resultTotalMpp) === 0">There are no new {{content}} requested</h2>
    <h2 class="" v-if="content === 'fpk' && JSON.parse(resultContent.resultTotalFpk) === 0">There are no new {{content}} requested</h2>
    <div v-if=" content === 'mpp' && JSON.parse(resultContent.resultTotalMpp) !== 0">
      <h2>List of Requested {{content.toUpperCase()}}</h2>
      <table class="table table-bordered" v-for="mpp in JSON.parse(resultContent.resultMpp)">
        <thead>
          <tr>
            <th>Requested By</th>
            <th>Created Date</th>
            <th>Accept CEO By</th>
            <th>View Detail</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{{mpp.requestedBy.name}}</td>
              <td>{{mpp.createdDate.dayOfMonth}} - {{mpp.createdDate.monthOfYear}} - {{mpp.createdDate.year}}</td>
              <td>{{mpp.approvedBy.name}}</td>
              <td><button class="btn btn-primary">
                <router-link :to="{ path: '/'+'hrd'+'/'+'requested'+'/'+content+'/detail/'+mpp.id , params: { id: mpp.id }}">View {{content.toUpperCase()}}</router-link></button></td></td>
                <!-- <router-link :to="'/hrd/requested/view-detail-mpp'">View {{content.toUpperCase()}}</router-link></button></td></td> -->
            </tr>
        </tbody>
      </table>
    </div>
    <div v-if=" content === 'fpk' && JSON.parse(resultContent.resultTotalFpk) !== 0">
      <h2>List of Requested {{content.toUpperCase()}}</h2>
      <table class="table table-bordered" v-for="fpk in JSON.parse(resultContent.resultFpk)">
        <thead>
          <tr>
            <th>Position Needed</th>
            <th>Target Date</th>
            <th>Men Needed</th>
            <th>View Detail</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{{fpk.jobPositionRequester}}</td>
              <td>{{fpk.dateNeeded.dayOfMonth}} - {{fpk.dateNeeded.monthOfYear}} - {{fpk.dateNeeded.year}}</td>
              <td>{{fpk.numberOfPerson}}</td>
              <td><button class="btn btn-primary"><router-link :to="{ path: '/'+'hrd'+'/'+'requested'+'/'+content+'/detail/'+fpk.idFpk , params: { id: fpk.idFpk }}">View {{content.toUpperCase()}}</router-link></button></td>
            </tr>
        </tbody>
      </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'requested',
  props: ['department', 'content', 'param', 'approve'],
  data () {
    return {
      resultContent: {
        resultFpk: {},
        resultTotalFpk: 0,
        resultMpp: {},
        resultTotalMpp: 0
      },
      totalData: 0,
      role: ''
    }
  },
  beforeMount () {
    var self = this
    var division = this.department
    self.role = JSON.parse(window.sessionStorage.getItem('user')).role
    if (self.role === 'HR') {
      self.role = 'hrd'
    }
    if (this.content === 'fpk') {
      self.$http.get('http://localhost:8080/fpk/byDepartment/acceptedNotPublished', {}, {
        headers: {
          'department': division
        }
      }).then(response => {
        var fpk = JSON.stringify(response.data.data)
        var totalFpk = JSON.stringify(response.data.totalData)
        this.resultContent.resultFpk = fpk
        this.resultContent.resultTotalFpk = totalFpk
      })
    } else if (this.content === 'mpp') {
      self.$http.get('http://localhost:8080/mpp/byDepartment/acceptedNotPublished', {}, {
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
          this.totalData = totalMpp
        }
      })
    }
  },
  methods: {

  }
}
</script>

<style scoped>
a {
  color: white;
}

th {
  text-align: center;
}
</style>
