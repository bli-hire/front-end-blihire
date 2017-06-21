<template>
  <div class="listContent col-md-10 ">
  <h2>List Of Candidates</h2>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>UID</th>
        <th>Nama Lengkap</th>
        <th>Posisi</th>
        <th style="text-align:center;" colspan="4">Aksi</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>17010101</td>
          <td>Alfons Manggala</td>
          <td>Jr. Accounting</td>
          <td style="text-align:center;"><button class="btn btn-primary"><router-link :to="'/hrd/candidates/view-cv'">View CV</router-link></button></td>
          <td style="text-align:center;"><button class="btn btn-primary"><router-link :to="'/hrd/candidates/hiring-process'">Hiring Process</router-link></button></td>
            <td style="text-align:center;"><input type="button" value="Score" class="btn btn-primary"/></td>
          <td style="text-align:center;"><input type="button" value="Mutasi" class="btn btn-primary"/></td>
        </tr>
    </tbody>
  </table>
  </div>
  </template>

  <script>
  export default {
    name: 'candidates',
    props: ['department']
  }
  </script>

  <style scoped>
  </style>
