<template>
	<div class="content">
		<h2>Accepted Mpp</h2>
		<!-- <BoxComponent v-for="n in 3" v-bind:title="content" message="Please we need ..."></BoxComponent> -->
		<div v-if="content === 'mpp'">
	    <BoxComponent
			v-for="mpp in JSON.parse(resultContent.resultMpp)"
			v-bind:title="mpp.department"
			v-bind:message="'Created Date : '+ mpp.createdDate.dayOfWeek + ' - ' +mpp.createdDate.monthOfYear + ' - ' +mpp.createdDate.yearOfEra"
			v-bind:statusAccept="mpp.accept"
			v-bind:statusReject="mpp.reject"
			v-bind:requestedBy="mpp.requestedBy.name"
			v-bind:loginStatus="role"
			v-bind:docType="'mpp'"
			v-bind:content="content"
			v-bind:id="mpp.id">
	    </BoxComponent>
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
  name: 'MppAccepted',
  data () {
    return {
      resultContent: {
        resultFpk: {},
        resultTotalFpk: 0,
        resultMpp: {},
        resultTotalMpp: 0
      },
      role: '',
      userId: ''
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
      self.$http.get('http://localhost:8080/mpp/byRequested/accepted', {}, {
        headers: {
          'userId': self.userId
        }
      }).then(response => {
        if (response.data.data === '[]') {
          this.resultContent.resultTotalMpp = 0
        } else {
          var mpp = JSON.stringify(response.data.data)
          var totalMpp = JSON.stringify(response.data.totalData)
          this.resultContent.resultMpp = mpp
          this.resultContent.resultTotalMpp = totalMpp
        }
      })
    }
  }
}
</script>

<style>

</style>
