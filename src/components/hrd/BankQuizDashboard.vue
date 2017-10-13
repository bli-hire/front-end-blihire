<template>
  <div class="listContent col-md-10">
    <h2>Question Bank for Technical Test</h2>
    <br>
    <div class="">
    <p>Select Department</p>
      <select class="form-control" v-model="department">
        <option value="HumanResource">Human Resource</option>
        <option value="Marketing">Marketing</option>
        <option value="TradePartnership">Trade Partnership</option>
        <option value="Technology">Technology</option>
        <option value="BusinessDevelopment">Business Development</option>
        <option value="Finance">Finance</option>
        <option value="ProjectManagement">Product Management</option>
        <option value="ProductManagement">Product Management</option>
        <option value="Operation">Operation</option>
      </select>
    </div>
    <br>
    
    <button v-on:click="showProblemSetMultipleChoices()" class="btn btn-primary">View Problem Multiple Choices</button>
    <button v-on:click="showProblemSetEssay()" class="btn btn-primary">View Problem Essay</button>
    <br><br>
    <table class="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Question</th>
            <th>Difficulty</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="data in essayData" v-if="stateShowProblem === 'essay'">
          <td>{{data.id}}</td>
          <td>{{data.problem}}</td>
          <td>{{data.problemDifficulty}}</td>
          <td><button class="btn btn-primary">Detail</button></td>
          <td><button class="btn btn-warning">Edit</button></td>
          <td><button v-on:click="deleteProblemSetEssay (data.id)" class="btn btn-danger">Delete</button></td>
        </tr>
          <tr v-for="mltpl in multipleChoicesData" v-if="stateShowProblem === 'multiple'">
          <td>{{mltpl.id}}</td>
          <td>{{mltpl.problem}}</td>
          <td>{{mltpl.problemDifficulty}}</td>
          <td><button class="btn btn-primary">Detail</button></td>
          <td><button class="btn btn-warning">Edit</button></td>
          <td><button v-on:click="deleteProblemSetMultipleChoices (mltpl.id)" class="btn btn-danger">Delete</button></td>
        </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
// import swal from 'sweetalert'
export default {
  name: 'bank-quiz-dashboard',
  props: ['content'],
  data () {
    return {
      department: '',
      multipleChoicesData: [],
      essayData: [],
      stateShowProblem: ''
    }
  },
  beforeMount () {
    // this.department = JSON.parse(window.sessionStorage.getItem('user')).department
  },
  methods: {

    // ---------- Multiple Choices ---------

    showProblemSetMultipleChoices () {
      if (this.validateForm() === false) {
        return
      }
      this.stateShowProblem = 'multiple'
      this.$http.get('http://localhost:8080/online-test/multiple-choices/' + this.department + '/problems', {}).then(response => {
        this.multipleChoicesData = response.data
      })
    },
    deleteProblemSetMultipleChoices (id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'This Problem will be permanently deleted!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes, delete it!',
        closeOnConfirm: false
      },
      function () {
        this.$swal('Hehe')
      })
      // this.$http.post('http://localhost:8080/online-test/multiple-choices/' + id + '/delete', {}).then(response => {
      //  alert('Success Deleting Problem')
      //  this.showProblemSetMultipleChoices()
      // })
    },
    // ---------- Essay ---------
    showProblemSetEssay () {
      if (this.validateForm() === false) {
        return
      }
      this.validateForm()
      this.stateShowProblem = 'essay'
      this.$http.get('http://localhost:8080/online-test/essay/' + this.department + '/problems', {}).then(response => {
        this.essayData = response.data
      })
    },
    deleteProblemSetEssay (id) {
      this.$http.post('http://localhost:8080/online-test/essay/' + id + '/delete', {}).then(response => {
        alert('Success Deleting Problem')
        this.showProblemSetEssay()
      })
    },
    validateForm () {
      if (this.department === '') {
        alert('Please choose department')
        return false
      }
      return true
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

.listContent{
  text-align: left;
  padding-bottom: 5vh;
}

h2 {
  text-align: center;
}
</style>
