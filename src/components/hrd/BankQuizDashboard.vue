<template>
  <div class="listContent col-md-10">
    <h2>Question Bank for Technical Test</h2>
    <br>
    <div class="">
    <p>Select Department</p>
       <select class="form-control">
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
    <div class="">
    <p>Select Category Question</p>
       <select class="form-control">
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
    <br>
    <table class="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Question</th>
            <th>Answer</th>
            <th>Generated</th>
            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>SampleNo</td>
          <td>SampleQuestion</td>
          <td>IsThereSomethingCanIDoInThisWorldOrNotIDontKnowEither</td>
          <td>No</td>
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
  props: ['department', 'content'],
  data () {
    return {
    }
  },
  beforeMount () {
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

.listContent {
  text-align: left;
  padding-bottom: 5vh;
}

h2 {
  text-align: center;
}
</style>
