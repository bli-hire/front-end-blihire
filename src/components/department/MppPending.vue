<template>
	<div class="content">
		<h2>Pending Mpp</h2>
		<!-- <BoxComponent v-for="n in 3" v-bind:title="content" message="Please we need ..."></BoxComponent> -->
		<div v-if="content === 'mpp'">
	    <BoxComponent
	      v-for="mpp in resultContent.resultMpp"
	      v-bind:title="mpp.department"
	      v-bind:message="'Created Date : '+ mpp.createdDate.dayOfWeek + ' - ' +mpp.createdDate.monthOfYear + ' - ' +mpp.createdDate.yearOfEra"
	      v-bind:statusAccept="mpp.accept"
	      v-bind:statusReject="mpp.reject"
				v-bind:requestedBy="mpp.requestedBy.name"
				v-bind:mppStatus="mpp.mppStatus"
	      v-bind:loginStatus="role"
				v-bind:docType="'mpp'"
	      v-bind:content="content"
	      v-bind:id="mpp.id">
	    </BoxComponent>
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
		<!-- <BoxComponent v-if="content === 'mpp'" v-for="n in resultContent.resultTotalMpp" v-bind:title="content" message="Please we need ..."></BoxComponent> -->

	</div>
</template>

<script>
import BoxComponent from '@/components/page-component/BoxComponent'
export default {
  components: {
    BoxComponent
  },
  name: 'MppPending',
  data () {
    return {
      resultContent: {
        resultFpk: {},
        resultTotalFpk: 0,
        resultMpp: [],
        resultTotalMpp: 0
      },
      role: '',
      userId: '',
      totalPage: 0,
      currentPage: 0
    }
  },
  props: ['content'],
  beforeMount () {
    var self = this
    self.role = JSON.parse(window.sessionStorage.getItem('user')).role
    self.userId = JSON.parse(window.sessionStorage.getItem('user')).id
    if (self.role === 'HR') {
      self.role = 'hrd'
    }
    if (self.role === 'DepartmentHead') {
      self.role = 'department'
    }
    if (self === this) {
      self.loadData(0, 5, 'createdDate', 'desc')
    }
  },
  methods: {
    loadData (page, pageSize, sortBy, sortType) {
      var self = this
      self.$http.get('http://localhost:8080/mpp/byRequested/pending?page=' + page + '&size=' + pageSize + '&sort=' + sortBy + ',' + sortType + '', {}, {
        headers: {
          'userId': self.userId
        }
      }).then(response => {
        if (response.data.dataPage.content === '[]') {
          this.resultContent.resultTotalMpp = 0
        } else {
          var mpp = response.data.dataPage.content
          var totalMpp = response.data.dataPage.totalElements
          this.resultContent.resultMpp = mpp
          this.resultContent.resultTotalMpp = totalMpp
          this.totalPage = response.data.dataPage.totalPages
          this.currentPage = response.data.dataPage.number
        }
      })
    }
  }
}
</script>

<style>

</style>
