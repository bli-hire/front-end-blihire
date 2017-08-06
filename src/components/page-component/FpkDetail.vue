<template>
  <div class="listContent col-md-10">
    <h1 style="text-align: center;">{{department}}</h1>
    <h3 style="text-align: center;">From : {{username}}</h3>
    <h3 style="text-align: center;">Date Submited : {{dateCreated.dayOfMonth}} - {{dateCreated.monthOfYear}} - {{dateCreated.year}}</h3>
    <br/>
        <div class="form-group">
          <table class="table table-bordered table-condensed">
          <tr>
              <th>Departemen Pemohon</th> 
              <td>{{department}}</td>
          </tr>
          
          <tr>
            <th>Jabatan</th>
            <td>{{jobPositionRequester}}</td>
          </tr>
        <tr>
          <th>Posisi/Jumlah</th> 
          <td>{{number}}</td>
        </tr>

        <tr>
        <th>Tanggal dibutuhkan</th>
        <td>{{dateNeeded.dayOfMonth}} - {{dateNeeded.monthOfYear}} - {{dateNeeded.year}}</td>
        </tr>

        <tr>
          <th>Alasan</th>
          <td>{{reason}}</td>
          </tr>

       <tr>
          <th>Kesesuaian dengan MPP</th>
          <td>{{fitnessMpp}}</td>
        </tr>

        <tr>
          <th>Status Karyawan</th>
          <td>{{employementStatus}}</td>
        </tr>

        <tr>
          <th>Pendidkan</th>
          <td>{{education}}</td>
        </tr>

        <tr>
          <th>Pengalaman Bekerja</th>
          <td>{{workExperience}}</td>
        </tr>

        <tr>
          <th>Skill Knowledge</th>
          <td>{{skillKnowledge}}</td>
        </tr>
      </table>
      
        <label v-if="role !== 'DepartmentTeamMember'">Comment</label>
        <textarea v-if="role !== 'DepartmentTeamMember'"name="Text1" cols="140" rows="8" class="form-control" ></textarea>
         <br/>
      
      <button v-if="role.includes('Department')" type="reset" class="btn btn-primary" name="">Edit Fpk</button>
      <button v-if="role === 'DepartmentHead'" type="submit" class="btn btn-primary" name="">Apply Fpk</button>
      <button v-if="role.includes('HR') || role === 'CEO' " type="reset" class="btn btn-primary" name="">Submit</button>
      <button v-if="role !== 'DepartmentTeamMember'" type="reset" class="btn btn-warning" name="">Reject</button>
      
      </div>
    </div>
</template>

<script>
export default{
  name: 'fpk-detail',
  data () {
    return {
      department: '',
      number: '',
      dateCreated: '',
      reason: '',
      fitnessMpp: '',
      employementStatus: '',
      educaton: '',
      workExperience: '',
      skillKnowledge: '',
      jobPositionRequester: '',
      dateNeeded: '',
      username: '',
      role: '',
      idSelector: '',
      idUser: ''
    }
  },
  beforeMount () {
    var self = this
    this.idSelector = self.$route.params.id
    self.username = JSON.parse(window.sessionStorage.getItem('user')).name
    self.role = JSON.parse(window.sessionStorage.getItem('user')).role
    self.idUser = JSON.parse(window.sessionStorage.getItem('user')).id
    if (self.role.includes('Department')) {
      var roleUrl = 'department'
    }
    self.$http.get('http://localhost:8080/fpk/' + this.idSelector).then(response => {
      var fpk = JSON.stringify(response.data.data)
      var objFpk = {}
      objFpk = JSON.parse(fpk)[0]
      this.department = objFpk.department
      this.number = objFpk.numberOfPerson
      this.reason = objFpk.reason
      this.fitnessMpp = objFpk.fitnessWithMpp
      this.employementStatus = objFpk.employeeStatus
      this.education = objFpk.school
      this.workExperience = objFpk.workExperience
      this.skillKnowledge = objFpk.skillKnowledge
      this.jobPositionRequester = objFpk.jobPositionRequester
      this.dateNeeded = objFpk.dateNeeded
      this.dateCreated = objFpk.createdDate
    }, () => {
      alert('No Valid Fpk for this id')
      this.$router.push('/' + roleUrl + '/')
    }).catch((e) => {
      alert('No Valid Fpk for this id')
      this.$router.push('/' + roleUrl + '/')
    })
  },
  methods: {
    ceoApprove () {
      this.$http.post('http://localhost:8080/fpk/approve', {
        idUser: this.idUser,
        idFpk: parseInt(this.idSelector)
      }, (json) => {
        alert(JSON.stringify(json.message))
      })
    }
  }
}
</script>

<style scooped>
</style>
