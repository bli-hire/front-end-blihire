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
<!--     <div class="">
    <p>Select Category Question</p>
       <select class="form-control">
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
    <br> -->
    <button v-on:click="showProblemSetMultipleChoices()" class="btn btn-primary">View Problem Multiple Choices</button>
    <button v-on:click="showProblemSetEssay()" class="btn btn-primary">View Problem Essay</button>
    <br><br>
    <table class="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Question</th>
            <th>Difficulty</th>
            <th>Generated</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="data in essayData" v-if="stateShowProblem === 'essay'">
          <td>{{data.id}}</td>
          <td>{{data.problem}}</td>
          <td>{{data.problemDifficulty}}</td>
          <td>{{data.canBeGenerated}}</td>
          <td><button class="btn btn-primary">Detail</button></td>
          <td><button class="btn btn-warning">Edit</button></td>
        </tr>
          <tr v-for="mltpl in multipleChoicesData" v-if="stateShowProblem === 'multiple'">
          <td>{{mltpl.id}}</td>
          <td>{{mltpl.problem}}</td>
          <td>{{mltpl.problemDifficulty}}</td>
          <td>{{mltpl.canBeGenerated}}</td>
          <td><button class="btn btn-primary">Detail</button></td>
          <td><button class="btn btn-warning">Edit</button></td>
        </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
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
    showProblemSetMultipleChoices () {
      if (this.validateForm() === false) {
        return
      }
      this.stateShowProblem = 'multiple'
      this.$http.get('http://localhost:8080/online-test/multiple-choices/' + this.department + '/problems', {}).then(response => {
        this.multipleChoicesData = response.data
      })
    },
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
