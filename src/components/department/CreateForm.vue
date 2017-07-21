<template>
  <div>
    <div v-if="content === 'fpk'" class="listContent col-md-12">
    <h1 style="text-align: center;">Form Penerimaan Karyawan</h1>
      <!-- <form method="POST"> -->
        <div class="form-group">

          <label for="pos">Departemen Pemohon:</label>
            <select class="form-control" id="pos" v-model="departmentPemohon">
              <option>Department 1</option>
              <option>Department 2</option>
              <option>Department 3</option>
            </select>
          <br/>

        <label for="pos">Jabatan Pemohon:</label>
            <select class="form-control" id="pos" v-model="jabatanPemohon">
              <option>Jabatan</option>
            </select>
          <br/>

        <label for="personNeeded">Posisi atau jumlah</label>
        <input type="number" id="personNeeded" class="form-control" v-model="jumlahPosisi"/>
        <br/>

        <label for="">Tanggal Dibutuhkan</label>
        <input type="date" id="" class="form-control" v-model="tanggalDibutuhkan"/>
        <br/>

        <label>Alasan</label>
         <select class="form-control" id="" v-model="alasan">
              <option>Pemegang Jabatan terdahulu Resign</option>
              <option>Pemegang Jabatan terdahulu dimutasi/promosi</option>
              <option>Penambahan</option>
            </select>
          <br/>

       <label>Kesesuaian dengan MPP</label>
         <select class="form-control" id="" v-model="kesesuaianMpp">
              <option>Sesuai</option>
              <option>Tidak sesuai</option>
            </select>
          <br/>

        <label for="education">Status Karyawan:</label>
            <select class="form-control" id="education" v-model="statusKaryawan">
              <option>GDN</option>
              <option>Pemborong Kerja</option>
            </select>
          <br/>

        <label>Pendidikan</label>
         <select class="form-control" id="" v-model="pendidikan">
              <option>SMA</option>
              <option>S1</option>
              <option>S2</option>
              <option>S3</option>
            </select>
          <br/>

         <label>Pengalaman Bekerja</label>
         <select class="form-control" id="" v-model="pengalamanBekerja">
              <option>Fresh Graduate</option>
              <option>Pengalaman 1-3 Tahun</option>
              <option>Pengalaman > 5 Tahun</option>
              <option>Pengalaman > 10 Tahun</option>
            </select>
          <br/>

        <label>Skill/Knowledge</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" v-model="skillPengetahuan"></textarea>
         <br/>

      <button type="submit" class="btn btn-primary" name="" v-on:click="insertFpk()">Send FPK</button>

      <button type="reset" class="btn btn-warning" name="">Reset</button>
      </div>
      <!-- </form> -->
    </div>

    <div v-if="content === 'mpp'" class="listContent col-md-12">
    <h1 style="text-align: center;">Man Powering Plant Form</h1>
      <form method="POST" action="">
        <div class="form-group">
          <label for="pos">Position (select one):</label>
            <select class="form-control" id="pos">
              <option>Senior Development Engineer</option>
              <option>Junior Development Engineer</option>
              <option>Mobile Development Engineer</option>
            </select>
          <br/>


        <label for="personNeeded">Number of Person(s)</label><br/>
        <input type="number" id="personNeeded" class="form-control"/>
        <br/>

        <label>Comment Section</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" ></textarea>
         <br/>

        <label>Reason</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" ></textarea>
        <br/>

        <label for="education">Position (select one):</label>
            <select class="form-control" id="education">
              <option>Bacheloor Degree</option>
              <option>Master Degree</option>
            </select>
          <br/>

        <label>Experience</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" ></textarea>
         <br/>

        <label>Knowledge Skill</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" ></textarea>
         <br/>

         <label for="employeeStatus">Employee Status(GDN or Outsource):</label>
            <select class="form-control" id="employeeStatus">
              <option>Bacheloor Degree</option>
              <option>Master Degree</option>
            </select>
          <br/>

      <label for="employeeStatus">Expected to join:</label>
      <table class="table">
        <tr>
          <th>January</th>
          <th>February</th>
          <th>March</th>
          <th>April</th>
          <th>May</th>
          <th>June</th>
          <th>July</th>
          <th>August</th>
          <th>September</th>
          <th>October</th>
          <th>November</th>
          <th>December</th>
        </tr>
        <tr>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
          <td><input type="number" class="form-control"/></td>
        </tr>
      </table>

      <label for="">PC/Laptop (number)</label>
      <input type="number" class="form-control"/>
      <br/>

      <label for="">Spesification</label>
      <textarea name="Text1" cols="140" rows="8" class="form-control" ></textarea>
      <br/>

      <button type="submit" class="btn btn-primary" name="">Send MPP</button>

      <button type="reset" class="btn btn-warning" name="">Reset</button>


      </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-new',
  data () {
    return {
      departmentPemohon: '',
      jabatanPemohon: '',
      jumlahPosisi: '',
      tanggalDibutuhkan: '',
      alasan: '',
      kesesuaianMpp: '',
      statusKaryawan: '',
      pendidikan: '',
      pengalamanBekerja: '',
      skillPengetahuan: ''
    }
  },
  props: ['content'],
  methods: {
    insertFpk () {
      var self = this
      var requestedFpk = Object()
      requestedFpk.idUserRequested = 1
      requestedFpk.idUserApproved = 2
      requestedFpk.positionNeeded = parseInt(self.jumlahPosisi)
      requestedFpk.reason = self.alasan
      requestedFpk.fitnessWithMpp = self.kesesuaianMpp
      requestedFpk.employeeStatus = self.statusKaryawan
      requestedFpk.school = self.pendidikan
      requestedFpk.workExperience = self.pengalamanBekerja
      requestedFpk.skillKnowledge = self.skillPengetahuan
      requestedFpk.completeness = 'Tes'
      var jsonRequestedFpk = JSON.stringify(requestedFpk)
      self.$http.post('http://localhost:8080/internal/fpk', {
        addFpkRequest: jsonRequestedFpk}, (json) => {
          alert('Sukses Terkirim')
        })
    }
  }
}
</script>

<style scoped>
.listContent{
  margin-top:72px;
  margin-left:-59px;
  padding-left: 240px;
}
</style>
