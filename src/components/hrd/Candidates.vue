<template>
  <div class="listContent col-md-12 ">
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
          <td style="text-align:center;"><input type="button" value="View CV" class="btn btn-primary" onclick="location.href='./HRD-ViewCV.html';"/></td>
          <td style="text-align:center;"><input type="button" value="Hiring Process" class="btn btn-primary" onclick="location.href='./HRD-HiringProcess.html';"/></td>
            <td style="text-align:center;"><input type="button" value="Score" class="btn btn-primary"/></td>
          <td style="text-align:center;"><input type="button" value="Mutasi" class="btn btn-primary"/></td>

        </tr>
        <tr>
          <td>17020101</td>
          <td>Alfonsus M</td>
          <td>Administrator</td>
          <td style="text-align:center;"><input type="button" value="View CV" class="btn btn-primary"/></td>
          <td style="text-align:center;"><input type="button" value="Hiring Process" class="btn btn-primary"/></td>
          <td style="text-align:center;"><input type="button" value="Score" class="btn btn-primary"/></td>
          <td style="text-align:center;"><input type="button" value="Mutasi" class="btn btn-primary"/></td>
        </tr>
        <tr>
          <td>17010102</td>
          <td>Alfons. Mang.</td>
          <td>Operation</td>
          <td style="text-align:center;"><input type="button" value="View CV" class="btn btn-primary"/></td>
          <td style="text-align:center;"><input type="button" value="Hiring Process" class="btn btn-primary"/></td>
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
