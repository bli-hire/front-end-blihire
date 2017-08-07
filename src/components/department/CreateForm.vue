<template>
  <div>
    <div v-if="content === 'fpk'" class="listContent col-md-12">
    <h1 style="text-align: center;">Form Penerimaan Karyawan</h1>
        <div class="form-group">
          <label for="pos">Departemen Pemohon:</label>
            <select class="form-control" id="pos" v-model="departmentPemohon">
              <option value="jobPosition">{{jobPosition}}</option>
            </select>
          <br/>

        <label for="pos">Jabatan Pemohon:</label>
          <input type="text" id="jabatanPemohon" value="jobPositionRequester" class="form-control" v-model="jobPositionRequester">
        <br/>

        <label for="personNeeded">Posisi atau jumlah</label>
        <input type="number" value="2" id="personNeeded" class="form-control" v-model="jumlahPosisi"/>
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
        <p v-if="alasan === 'Penambahan'">Silahkan lanjutkan alasan penambahan</p>
        <input v-if="alasan === 'Penambahan'" type="text" id="" class="form-control" v-model="alasanTambahan" value="" />
        <br/>

       <label>Kesesuaian dengan MPP</label>
         <select class="form-control" id="" v-model="kesesuaianMpp">
              <option>Sesuai</option>
              <option>Tidak sesuai</option>
            </select>
        <p v-if="kesesuaianMpp === 'Tidak sesuai'">Silahkan lanjutkan alasan tidak sesuai</p>
        <input v-if="kesesuaianMpp === 'Tidak sesuai'" type="text" id="" class="form-control" v-model="kesesuaianMppTambahan" value="" />
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
              <option>Lainnya</option>
            </select>
        <p v-if="pendidikan === 'Lainnya'">Silahkan lanjutkan alasan tidak sesuai</p>
        <input v-if="pendidikan === 'Lainnya'" type="text" id="" class="form-control" v-model="pendidikanLainnya" value="" />
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

      <button type="submit" class="btn btn-primary" name="" v-on:click="insertFpk()">Apply Fpk</button>

      <button type="reset" class="btn btn-warning" name="" @click="reset()">Reset</button>
      </div>
      <!-- </form> -->
    </div>

    <div v-if="content === 'mpp'" class="listContent col-md-12">
    <h1 style="text-align: center;">Man Powering Plant Form</h1>
        <div class="form-group">
          <label for="pos">Position (select one):</label>
            <select class="form-control" id="pos" v-model="positionMpp" >
              <option v-bind:value="jobPosition">{{jobPosition}}</option>
            </select>
          <br/>


        <label for="personNeeded">Number of Person(s)</label><br/>
        <input type="number" id="personNeeded" class="form-control" v-model="personNeededMpp" v-bind:value="{personNeededMpp}"/>
        <br/>

        <label>Comment Section</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" v-model="commentMpp" v-bind:value="commentMpp"></textarea>
         <br/>

        <label>Reason</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" v-model="reasonMpp" v-bind:value="reasonMpp"></textarea>
        <br/>

        <label for="education">Education (select one):</label>
            <select class="form-control" id="education" v-model="educationMpp" v-bind:value="educationMpp">
              <option>Bacheloor Degree</option>
              <option>Master Degree</option>
            </select>
          <br/>

        <label>Experience</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" v-model="experienceMpp" v-bind:value="experienceMpp"></textarea>
         <br/>

        <label>Knowledge Skill</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" v-model="knowledgeMpp" v-bind:value="knowledgeMpp"></textarea>
         <br/>

         <label for="employeeStatus">Employee Status(GDN or Outsource):</label>
            <select class="form-control" id="employeeStatus" v-model="employeeStatusMpp" v-bind:value="employeeStatusMpp">
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
          <td><input type="number" class="form-control" v-model.number="januaryExpect" v-bind:value="januaryExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="februaryExpect" v-bind:value="februaryExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="marchExpect" v-bind:value="marchExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="aprilExpect" v-bind:value="aprilExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="mayExpect" v-bind:value="mayExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="juneExpect" v-bind:value="juneExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="julyExpect" v-bind:value="julyExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="augustExpect" v-bind:value="augustExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="septemberExpect" v-bind:value="septemberExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="octoberExpect" v-bind:value="octoberExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="novemberExpect" v-bind:value="novemberExpect"/></td>
          <td><input type="number" class="form-control" v-model.number="decemberExpect" v-bind:value="decemberExpect"/></td>
        </tr>
      </table>

      <label for="">PC/Laptop (number)</label>
      <input type="number" class="form-control" v-model="pcNumberMpp"/>
      <br/>

      <label for="">Spesification</label>
      <textarea name="Text1" cols="140" rows="8" class="form-control" v-model="pcSpecMpp"></textarea>
      <br/>

      <button v-if="this.edit !== true" type="submit" class="btn btn-primary" name="" v-on:click="insertMpp()">Send MPP</button>
      <button v-if="this.edit === true" type="submit" class="btn btn-primary" name="" v-on:click="editMpp()">Edit Mpp</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create-new',
  data () {
    return {
      jobPosition: '',
      jobPositonFpk: '',
      currentDetailIndex: '',
      departmentPemohon: '',
      jabatanPemohon: '',
      jumlahPosisi: '',
      tanggalDibutuhkan: '',
      alasan: '',
      kesesuaianMpp: '',
      kesesuaianMppTambahan: '',
      statusKaryawan: '',
      pendidikan: '',
      pendidikanLainnya: '',
      pengalamanBekerja: '',
      skillPengetahuan: '',
      alasanTambahan: '',
      idUserRequested: '',
      jobPositionRequester: '',
      role: '',
      positionMpp: '',
      personNeededMpp: '',
      commentMpp: '',
      reasonMpp: '',
      educationMpp: '',
      experienceMpp: '',
      knowledgeMpp: '',
      employeeStatusMpp: '',
      januaryExpect: '',
      februaryExpect: '',
      marchExpect: '',
      aprilExpect: '',
      mayExpect: '',
      juneExpect: '',
      julyExpect: '',
      augustExpect: '',
      septemberExpect: '',
      octoberExpect: '',
      novemberExpect: '',
      decemberExpect: '',
      pcNumberMpp: '',
      pcSpecMpp: '',
      expectedJoin: '',
      expectJoin: {},
      arrayMppDetail: [],
      indeksMppDetail: '',
      fpkToEdit: []
    }
  },
  props: ['content', 'edit'],
  beforeMount () {
    this.jobPosition = JSON.parse(window.sessionStorage.getItem('user')).department
    if (this.content === 'fpk' && this.edit === true) {
      // alert('Masuk Edit')
      var idFpkEdit = this.$route.query.id
      var self = this
      this.jobPosition = this.$route.query.jobPosition
      this.$http.get('http://localhost:8080/fpk/' + idFpkEdit, {}, {}).then(response => {
        self.fpkToEdit = JSON.stringify(response.data.data)
        // alert(self.fpkToEdit)
        self.jumlahPosisi = self.fpkToEdit.numberOfPerson
        self.alasan = self.fpkToEdit.reason
        self.kesesuaianMpp = self.fpkToEdit.fitnessWithMpp
        self.statusKaryawan = self.fpkToEdit.employeeStatus
        self.pendidikan = self.fpkToEdit.school
        self.pengalamanBekerja = self.fpkToEdit.workExperience
        self.skillPengetahuan = self.fpkToEdit.skillKnowledge
        self.idUserRequested = self.fpkToEdit.idUserRequested
        self.tanggalDibutuhkan = self.fpkToEdit.dateNeeded
        self.jobPositionRequester = self.fpkToEdit.jobPositionRequester
      })
    }
    if (this.content === 'mpp' && this.edit === true) {
      this.jobPosition = JSON.parse(window.sessionStorage.getItem('user')).department
      this.arrayMppDetail = JSON.parse(window.localStorage.getItem('detailMpp'))
      this.jobPosition = this.$route.query.jobPosition
      this.currentDetailIndex = 0
      this.indeksMppDetail = this.$route.query.indeksEditMpp
      var objMppDetail = this.arrayMppDetail[this.indeksMppDetail]
      // alert(JSON.stringify(objMppDetail))
      this.personNeededMpp = objMppDetail.numberOfPerson
      this.positionMpp = objMppDetail.position.jobPosition
      this.reasonMpp = objMppDetail.reason
      this.educationMpp = objMppDetail.education
      this.experienceMpp = objMppDetail.experience
      this.knowledgeMpp = objMppDetail.knowledge
      this.employeeStatusMpp = objMppDetail.employeeStatus
      this.expectedJoin = objMppDetail.expectedJoin
      this.pcNumberMpp = objMppDetail.pcAmmount
      this.pcSpecMpp = objMppDetail.pcSpec
      this.idUserRequested = objMppDetail.idRequested
    }
  },
  methods: {
    insertFpk () {
      var self = this
      self.idUserRequested = JSON.parse(window.sessionStorage.getItem('user')).id
      self.role = JSON.parse(window.sessionStorage.getItem('user')).role
      if (self.pendidikanLainnya !== '') {
        self.pendidikan = self.pendidikanLainnya
      }
      if (self.role === 'DepartmentTeamMember') {
        self.$http.post('http://localhost:8080/fpk/add/byMemberDepartment', {
          position: self.jumlahPosisi,
          reason: self.alasan + ' ' + self.alasanTambahan,
          fitnessWithMpp: self.kesesuaianMpp + ' ' + self.kesesuaianMppTambahan,
          employeeStatus: self.statusKaryawan,
          school: self.pendidikan,
          workExperience: self.pengalamanBekerja,
          skillKnowledge: self.skillPengetahuan,
          idUserRequested: self.idUserRequested,
          dateNeeded: self.tanggalDibutuhkan,
          jobPositionRequester: self.jobPositionRequester,
          completeness: ''}, (json) => {
            alert('Sukses Terkirim')
            this.$router.go(-1)
          })
      } else if (self.role === 'DepartmentHead') {
        self.$http.post('http://localhost:8080/fpk/add/byHeadDepartment', {
          position: self.jumlahPosisi,
          reason: self.alasan + ' ' + self.alasanTambahan,
          fitnessWithMpp: self.kesesuaianMpp + ' ' + self.kesesuaianMppTambahan,
          employeeStatus: self.statusKaryawan,
          school: self.pendidikan,
          workExperience: self.pengalamanBekerja,
          skillKnowledge: self.skillPengetahuan,
          idUserRequested: self.idUserRequested,
          dateNeeded: self.tanggalDibutuhkan,
          jobPositionRequester: self.jobPositionRequester,
          completeness: ''}, (json) => {
            alert('Sukses Terkirim')
            this.$router.go(-1)
          })
      }
    },
    insertMpp () {
      var self = this
      self.idUserRequested = JSON.parse(window.sessionStorage.getItem('user')).id
      self.role = JSON.parse(window.sessionStorage.getItem('user')).role
      self.expectedJoin = self.januaryExpect + self.februaryExpect + self.marchExpect + self.aprilExpect + self.mayExpect + self.juneExpect + self.julyExpect + self.augustExpect + self.septemberExpect + self.octoberExpect + self.novemberExpect + self.decemberExpect
      self.expectJoin = {
        januaryExpect: self.januaryExpect,
        februaryExpect: self.februaryExpect,
        marchExpect: self.marchExpect,
        aprilExpect: self.aprilExpect,
        mayExpect: self.mayExpect,
        juneExpect: self.juneExpect,
        julyExpect: self.julyExpect,
        augustExpect: self.augustExpect,
        septemberExpect: self.septemberExpect,
        octoberExpect: self.octoberExpect,
        novemberExpect: self.novemberExpect,
        decemberExpect: self.decemberExpect
      }
      var resultObjectDetailMpp = {
        numberOfPerson: self.personNeededMpp,
        position: self.positionMpp,
        reason: self.reasonMpp,
        mainResponsibility: '',
        education: self.educationMpp,
        experience: self.experienceMpp,
        knowledge: self.knowledgeMpp,
        employeeStatus: self.employeeStatusMpp,
        expectedJoin: self.expectedJoin,
        pcAmmount: self.pcNumberMpp,
        pcSpec: self.pcSpecMpp,
        expectJoin: self.expectJoin
      }
      this.arrayMppDetail.push(resultObjectDetailMpp)
      // alert(JSON.stringify(this.arrayMppDetail))
      window.localStorage.setItem('detailMpp', JSON.stringify(this.arrayMppDetail))
      // Fungsi dibawah ini untuk mengecek data di localstorage, untuk array pertama
      // alert(JSON.stringify(JSON.parse(window.localStorage.getItem('detailMpp'))[0]))
      alert('Detail MPP berhasil dibuat')
      this.$router.go(-1)
    },
    reset () {
      var self = this
      this.jobPosition = ''
      this.arrayMppDetail = ''
      this.jobPosition = ''
      this.currentDetailIndex = 0
      this.indeksMppDetail = ''
      this.personNeededMpp = ''
      this.positionMpp = ''
      this.reasonMpp = ''
      this.educationMpp = ''
      this.experienceMpp = ''
      this.knowledgeMpp = ''
      this.employeeStatusMpp = ''
      this.expectedJoin = ''
      this.pcNumberMpp = ''
      this.pcSpecMpp = ''
      this.idUserRequested = ''
      this.jobPosition = ''
      self.jumlahPosisi = ''
      self.alasan = ''
      self.kesesuaianMpp = ''
      self.statusKaryawan = ''
      self.pendidikan = ''
      self.pengalamanBekerja = ''
      self.skillPengetahuan = ''
      self.idUserRequested = ''
      self.tanggalDibutuhkan = ''
      self.jobPositionRequester = ''
    },
    editMpp () {
      var self = this
      self.idUserRequested = JSON.parse(window.sessionStorage.getItem('user')).id
      self.role = JSON.parse(window.sessionStorage.getItem('user')).role
      self.expectedJoin = self.januaryExpect + self.februaryExpect + self.marchExpect + self.aprilExpect + self.mayExpect + self.juneExpect + self.julyExpect + self.augustExpect + self.septemberExpect + self.octoberExpect + self.novemberExpect + self.decemberExpect
      self.expectJoin = {
        januaryExpect: self.januaryExpect,
        februaryExpect: self.februaryExpect,
        marchExpect: self.marchExpect,
        aprilExpect: self.aprilExpect,
        mayExpect: self.mayExpect,
        juneExpect: self.juneExpect,
        julyExpect: self.julyExpect,
        augustExpect: self.augustExpect,
        septemberExpect: self.septemberExpect,
        octoberExpect: self.octoberExpect,
        novemberExpect: self.novemberExpect,
        decemberExpect: self.decemberExpect
      }
      var resultObjectDetailMppEdited = {
        numberOfPerson: self.personNeededMpp,
        position: self.positionMpp,
        reason: self.reasonMpp,
        mainResponsibility: '',
        education: self.educationMpp,
        experience: self.experienceMpp,
        knowledge: self.knowledgeMpp,
        employeeStatus: self.employeeStatusMpp,
        expectedJoin: self.expectedJoin,
        pcAmmount: self.pcNumberMpp,
        pcSpec: self.pcSpecMpp,
        idRequested: self.idUserRequested
      }
      this.arrayMppDetail[this.indeksMppDetail] = resultObjectDetailMppEdited
      window.localStorage.setItem('detailMpp', JSON.stringify(this.arrayMppDetail))
      alert('Data Berhasil di ubah')
      this.$router.go(-1)
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
