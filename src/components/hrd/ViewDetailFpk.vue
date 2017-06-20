<template>
  <div class="listContent col-md-10">
  <h1 style="text-align: center;">Accounting Junior</h1>
  <h3 style="text-align: center;">From : Lead Marketing</h3>
  <h3 style="text-align: center;">Date Submited : 5/2s/2017</h3>
  <br/>
    <form method="POST" action="">
      <div class="form-group">
        <table class="table table-bordered table-condensed">
        <tr>
            <th>Departemen Pemohon</th>
            <td>Marketing</td>
        </tr>

        <tr>
          <th>Jabatan</th>
          <td>Lead Marketing</td>
        </tr>
      <tr>
        <th>Posisi/Jumlah</th>
        <td>4 orang</td>
      </tr>

      <tr>
      <th>Tanggal dibutuhkan</th>
      <td>28 Februari 2017</td>
      </tr>

      <tr>
        <th>Alasan</th>
        <td>Pemegang Jabatan terdahulu resign</td>
        </tr>

     <tr>
        <th>Kesesuaian dengan MPP</th>
        <td>Sesuai</td>
      </tr>

      <tr>
        <th>Status Karyawan</th>
        <td>GDN</td>
      </tr>

      <tr>
        <th>Pendidkan</th>
        <td>S1</td>
      </tr>

      <tr>
        <th>Pengalaman Bekerja</th>
        <td>Fresh Graduate</td>
      </tr>

      <tr>
        <th>Skill Knowledge</th>
        <td>.............</td>
      </tr>
    </table>
      <label>Comment</label>
      <textarea name="Text1" cols="140" rows="8" class="form-control" ></textarea>
       <br/>

    <button type="submit" class="btn btn-primary" name="">Submit FPK</button>

    <button type="reset" class="btn btn-warning" name="">Reject</button>


    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'view-detail-fpk',
  props: ['department']
}
</script>

<style scoped>
</style>
