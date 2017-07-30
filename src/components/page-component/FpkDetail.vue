<template>
  <div class="listContent col-md-10">
    <h1 style="text-align: center;">{{department}}</h1>
    <h3 style="text-align: center;">From : {{department}}</h3>
    <h3 style="text-align: center;">Date Submited : {{date}}</h3>
    <br/>
        <div class="form-group">
          <table class="table table-bordered table-condensed">
          <tr>
              <th>Departemen Pemohon</th> 
              <td>{{department}}</td>
          </tr>
          
          <tr>
            <th>Jabatan</th>
            <td>{{position}}</td>
          </tr>
        <tr>
          <th>Posisi/Jumlah</th> 
          <td>{{number}}</td>
        </tr>

        <tr>
        <th>Tanggal dibutuhkan</th>
        <td>{{date}}</td>
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
      
        <label>Comment</label>
        <textarea name="Text1" cols="140" rows="8" class="form-control" ></textarea>
         <br/>

      <button type="submit" class="btn btn-primary" name="">Accept FPK</button>
      
      <button type="reset" class="btn btn-warning" name="">Reject</button>


      </div>
    </div>
</template>

<script>
export default{
  name: 'fpk-detail',
  data () {
    return {
      department: '',
      position: '',
      number: '',
      date: '',
      reason: '',
      fitnessMpp: '',
      employementStatus: '',
      educaton: '',
      workExperience: '',
      skillKnowledge: ''
    }
  },
  beforeMount () {
    var self = this
    var idSelector = self.$route.params.id
    self.$http.get('http://localhost:8080/fpk/' + idSelector).then(response => {
      var fpk = JSON.stringify(response.data.data)
      var objFpk = {}
      objFpk = JSON.parse(fpk)[0]
      this.department = objFpk.department
      this.position = 'Belum Ada di entity Fpk'
      this.number = objFpk.numberOfPerson
      this.date = objFpk.createdDate
      this.reason = objFpk.reason
      this.fitnessMpp = objFpk.fitnessWithMpp
      this.employementStatus = objFpk.employeeStatus
      this.education = objFpk.school
      this.workExperience = objFpk.workExperience
      this.skillKnowledge = objFpk.skillKnowledge
    }, () => {
      alert('No Valid Fpk for this id')
      this.$router.push('/department/')
    }).catch((e) => {
      alert('No Valid Fpk for this id')
      this.$router.push('/department/')
    })
  }
}
</script>

<style scooped>
</style>
