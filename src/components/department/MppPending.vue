<template>
	<div class="content">
		<h2>Pending Mpp</h2>
		<!-- <BoxComponent v-for="n in 3" v-bind:title="content" message="Please we need ..."></BoxComponent> -->
		<div v-if="content === 'mpp'">
	    <BoxComponent
	      v-for="mpp in JSON.parse(resultContent.resultMpp)"
	      v-bind:title="mpp.department"
	      v-bind:message="'Reason : '+mpp.mppDetails.reason"
	      v-bind:statusAccept="mpp.isAccept"
	      v-bind:statusReject="mpp.isReject"
	      v-bind:loginStatus="role"
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
  name: 'MppPending',
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
      self.$http.get('http://localhost:8080/mpp/byRequested/pending', {}, {
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
