<template>
  <div class="listContent col-md-10">
    <h2 class="" v-if="content === 'mpp' && JSON.parse(resultContent.resultTotalMpp) === 0">There are no new {{content}} requested</h2>
    <h2 class="" v-if="content === 'fpk' && JSON.parse(resultContent.resultTotalFpk) === 0">There are no new {{content}} requested</h2>
    <div v-if=" content === 'mpp' && JSON.parse(resultContent.resultTotalMpp) !== 0">
      <h2>List of Requested {{content.toUpperCase()}}</h2>
      <table class="table table-bordered" v-for="mpp in resultContent.resultMpp">
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
              <td v-if="mpp.approvedBy != null">{{mpp.approvedBy.name}}</td>
              <td v-else>Not Yet Approved</td>
              <td><button class="btn btn-primary">
                <router-link :to="{ path: '/'+'hrd'+'/'+'requested'+'/'+content+'/detail/'+mpp.id , params: { id: mpp.id }}">View {{content.toUpperCase()}}</router-link></button></td></td>
                <!-- <router-link :to="'/hrd/requested/view-detail-mpp'">View {{content.toUpperCase()}}</router-link></button></td></td> -->
            </tr>
        </tbody>
      </table>
      <ul class="pagination" v-for="n in parseInt(totalPage)">
        <!-- <li><a href="#">{{n}}</a></li> -->
        <li v-bind:class="{'disabled': n-1 === parseInt(currentPage)}">
          <a v-if="n-1 === parseInt(currentPage)"><span>{{n}}</span></a>
          <!-- <a href="#" v-on:click="loadData(n-1, 5, 'createdDate', 'desc')">{{n}}</a> -->
          <a href="#" v-else v-on:click="loadData(n-1, 5, 'createdDate', 'desc')"><span>{{n}}</span></a>
        </li>
        <!-- <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li class="disabled"><a href="#">4</a></li>
        <li><a href="#">5</a></li> -->
      </ul>
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
              <td>
                <button class="btn btn-primary">
                <router-link :to="{ path: '/'+'hrd'+'/'+'requested'+'/'+content+'/detail/'+fpk.idFpk , params: { id: fpk.idFpk }, query: { ceoApprove: fpk.statusApproveCeo, headApprove: fpk.statusApproveHead, confirmToPublish: fpk.accept , statusPublish: fpk.statusAccept, statusPage: 'requestedToPublish'}}">View Detail</router-link>
                </button>
              </td>
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
        resultFpk: [],
        resultTotalFpk: 0,
        resultMpp: [],
        resultTotalMpp: 0
      },
      totalData: 0,
      role: '',
      totalPage: 0,
      currentPage: 0
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
      // self.$http.get('http://localhost:8080/mpp/byDepartment/acceptedNotPublished', {}, {
      //   headers: {
      //     'department': division
      //   }
      // }).then(response => {
      //   if (response.data.data === '[]') {
      //     this.resultContent.resultTotalMpp = 0
      //   } else {
      //     var mpp = JSON.stringify(response.data.data)
      //     var totalMpp = JSON.stringify(response.data.totalData)
      //     this.resultContent.resultMpp = mpp
      //     this.resultContent.resultTotalMpp = totalMpp
      //     this.totalData = totalMpp
      //   }
      // })
      self.loadData(0, 5, 'createdDate', 'desc')
    }
  },
  methods: {
    loadData (page, pageSize, sortBy, sortType) {
      var self = this
      var division = this.department
      self.role = JSON.parse(window.sessionStorage.getItem('user')).role
      if (self.role === 'HR') {
        self.role = 'hrd'
      }
      self.$http.get('http://localhost:8080/mpp/hrd/byDepartment/toProcess?page=' + page + '&size=' + pageSize + '&sort=' + sortBy + ',' + sortType + '', {}, {
        headers: {
          'department': division
        }
      }).then(response => {
        if (response.data.dataPage.content === '[]') {
          this.resultContent.resultTotalMpp = 0
        } else {
          var mpp = response.data.dataPage.content
          var totalMpp = JSON.stringify(response.data.dataPage.totalElements)
          this.resultContent.resultMpp = mpp
          this.resultContent.resultTotalMpp = totalMpp
          this.totalData = totalMpp
          this.totalPage = JSON.stringify(response.data.dataPage.totalPages)
          this.currentPage = JSON.stringify(response.data.dataPage.number)
        }
      })
    }
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
