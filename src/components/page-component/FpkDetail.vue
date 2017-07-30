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
          <td>{{fitness-mpp}}</td>
        </tr>

        <tr>
          <th>Status Karyawan</th>
          <td>{{employee-status}}</td>
        </tr>

        <tr>
          <th>Pendidkan</th>
          <td>{{education}}</td>
        </tr>

        <tr>
          <th>Pengalaman Bekerja</th>
          <td>{{work-experience}}</td>
        </tr>

        <tr>
          <th>Skill Knowledge</th>
          <td>{{skill-knowledge}}</td>
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
      alert(fpk)
      var totalFpk = JSON.stringify(response.data.totalData)
      if (totalFpk === 0) {
        alert('No Valid Fpk for this id')
        this.$router.push('/department/dashboard')
      } else {
        self.department = JSON.stringify(JSON.parse(fpk).department)
      }
    })
  }
}
</script>

<style scooped>
</style>
