<template>
  <div class="listContent col-md-10">
  <h2>List of Requested FPK</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Posisi</th>
        <th>Target Tanggal</th>
        <th>Aksi(Klik Lihat FPK untuk mengkonfirmasi atau membatalkan)</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td>Accounting Jr.</td>
          <td>28 Februari 2017</td>
          <td><button class="btn btn-primary"><router-link :to="'/hrd/requested/view-detail'">Lihat FPK</router-link></button></td></td>
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
</style>
