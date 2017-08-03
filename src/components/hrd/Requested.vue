<template>
  <div class="listContent col-md-10">
  <h2>List of Requested FPK/MPP</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Position Needed</th>
        <th>Target Date</th>
        <th>View Detail</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>Accounting Jr.</td>
          <td>28 Februari 2017</td>
          <td><button class="btn btn-primary"><router-link :to="'/hrd/requested/view-detail'">View Fpk</router-link></button></td></td>
        </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: 'requeted',
  props: ['department']
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
