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
      <div v-if="role !== 'DepartmentTeamMember' && published === true">
        <label>Comment</label>
        <textarea v-if="role !== 'DepartmentTeamMember'"name="Text1" cols="140" rows="8" class="form-control" ></textarea>
      </div>
       <br/>

      <button v-if="(role.includes('Department') || role.includes('HR')) && alreadyApproveHead === false && alreadyApproveCeo === false" type="reset" class="btn btn-primary" name="" @click="editFpk()">Edit Fpk</button>
      <button v-if="(role === 'DepartmentHead' || role === 'HeadHR') && alreadyApproveHead === false" type="submit" class="btn btn-primary" name="" @click="approveFpk()">Approve as Head</button>
      <button v-if="role === 'CEO' && published === false && alreadyApproveCeo !== true" type="reset" class="btn btn-primary" name="" @click="approveFpk()">Approve as CEO</button>
      <button v-if="(role === 'HeadHR' || role === 'HR') && published === false && statusPage === 'requestedToPublish'" type="reset" class="btn btn-primary" name="" @click="publishFpk()">Publish Fpk to Job Vacancy</button>
      <!-- <button v-if="(role !== 'DepartmentTeamMember' || role !== 'HR') || (role !== 'HR' && published === false)" type="reset" class="btn btn-warning" @click="rejectFpk()" name="">Reject</button> -->
      <button v-if="role !== 'DepartmentTeamMember' && role !== 'HR' && published === false && alreadyApproveHead !== true " type="reset" class="btn btn-warning" @click="rejectFpk()" name="">Reject</button>
      
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
      idUser: '',
      alreadyApproveHead: '',
      alreadyApproveCeo: '',
      statusApproveHead: '',
      statusApproveCeo: '',
      published: '',
      statusPage: ''
    }
  },
  beforeMount () {
    var self = this
    this.idSelector = self.$route.params.id
    self.username = JSON.parse(window.sessionStorage.getItem('user')).name
    self.role = JSON.parse(window.sessionStorage.getItem('user')).role
    // self.department = JSON.parse(window.sessionStorage.getItem('user')).department
    self.idUser = JSON.parse(window.sessionStorage.getItem('user')).id
    self.alreadyApproveHead = self.$route.query.headApprove
    // alert(self.alreadyApproveHead)
    self.alreadyApproveCeo = self.$route.query.ceoApprove
    self.statusPage = self.$route.query.statusPage
    // alert(self.alreadyApproveCeo)
    // self.published = self.$route.query.accept
    if (self.$route.query.confirmToPublish === true && self.$route.query.statusPublish === true) {
      self.published = true
    } else if (self.$route.query.confirmToPublish === false) {
      self.published = false
    }
    if (self.role.includes('Department')) {
      this.roleUrl = 'department'
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
      this.alreadyApproveHead = objFpk.approveHead
      this.alreadyApproveCeo = objFpk.approveCeo
      this.statusApproveHead = objFpk.statusApproveHead
      this.statusApproveCeo = objFpk.statusApproveCeo
    }, () => {
      alert('No Valid Fpk for this id')
      this.$router.push('/')
    }).catch((e) => {
      alert('No Valid Fpk for this id')
      this.$router.push('/')
    })
  },
  methods: {
    editFpk () {
      var idSelector = this.$route.params.id
      this.$router.push({
        path: '/' + this.roleUrl + '/fpk/create-new/detail-edit/',
        query: {id: idSelector, jobPosition: this.jobPositionRequester}
      })
    },
    approveFpk () {
      if (this.role === 'HeadHR' || this.role === 'DepartmentHead') {
        this.$http.post('http://localhost:8080/fpk/approve/asHeadDepartment', {
          idUser: this.idUser,
          idFpk: JSON.parse(this.idSelector)
        }, (json) => {
          alert(JSON.stringify(json.message))
          this.$router.go(-1)
        })
      } else if (this.role === 'CEO') {
        this.$http.post('http://localhost:8080/fpk/approve/asCeo', {
          idUser: this.idUser,
          idFpk: JSON.parse(this.idSelector)
        }, (json) => {
          alert(JSON.stringify(json.message))
          this.$router.go(-1)
        })
      }
    },
    rejectFpk () {
      if (this.role === 'HeadHR') {
        this.$http.post('http://localhost:8080/fpk/reject/asHeadDepartment', {
          idUser: this.idUser,
          idFpk: JSON.parse(this.idSelector)
        }, (json) => {
          alert(JSON.stringify(json.message))
          this.$router.go(-1)
        })
      } else {
        this.$http.post('http://localhost:8080/fpk/reject', {
          idUser: this.idUser,
          idFpk: JSON.parse(this.idSelector)
        }, (json) => {
          alert(JSON.stringify(json.message))
          this.$router.go(-1)
        })
      }
    },
    publishFpk () {
      this.$http.post('http://localhost:8080/fpk/approve', {
        idUser: this.idUser,
        idFpk: JSON.parse(this.idSelector)
      }, (json) => {
        alert(JSON.stringify(json.message))
        this.$router.go(-1)
      })
    }
  }
}
</script>

<style scooped>
</style>
