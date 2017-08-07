<template>
  <div class="listContent col-md-10">
    <h2>Question Bank</h2>
    <h3>For online test</h3>
    <br>
    <div class="">
    <p>Select Category Question</p>
       <select class="form-control" id="pos">
        <option value="HumanResource">Sementara Kosong</option>
      </select>
    </div>
    <br>
    <table class="table table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Question</th>
            <th>Created By</th>
            <th>Last Modified By</th>
          </tr>
        </thead>
        <tbody>
            <tr>
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
</style>
