<template>
  <div class="listContent col-md-10 ">
    <div v-if="resultContent.resultTotalData === 0">
      <h2>No Candidates</h2>
    </div>
    <div v-else-if="resultContent.resultTotalData !== 0">
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
            <tr v-for="cv in resultContent.resultCV" v-if="cv.department === department">
              <td>{{cv.uid}}</td>
              <td>{{cv.fullName}}</td>
              <td>{{cv.jobTitle}}</td>
              <td style="text-align:center;"><button class="btn btn-primary">
                <router-link
                  :to="{ path: '/hrd/candidates/view-cv/' + cv.uid, param: {uid: cv.uid}}">View CV</router-link></button></td>
              <td style="text-align:center;"><button class="btn btn-primary"><router-link :to="{ path: '/hrd/candidates/hiring-process/' + cv.uid, param: {uid: cv,uid}}">Hiring Process</router-link></button></td>
                <td style="text-align:center;"><input type="button" value="Score" class="btn btn-primary"/></td>
              <td style="text-align:center;"><input type="button" value="Mutasi" class="btn btn-primary"/></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
  </template>

  <script>
  export default {
    name: 'candidates',
    props: ['department'],
    data () {
      return {
        resultContent: {
          resultCV: [],
          resultTotalData: 0
        }
      }
    },
    beforeMount () {
      this.$http.get('http://localhost:8080/cv', {}).then(response => {
        this.resultContent.resultCV = response.data.data
        this.resultContent.resultTotalData = this.resultContent.resultCV.length
        this.countTotalCvByDepartment(this.department)
        // alert(this.resultContent.resultCV)
        // alert(this.resultContent.resultTotalData)
      })
      // alert(this.resultContent.resultTotalData)
    },
    methods: {
      countTotalCvByDepartment (department) {
        var i
        var temp = 0
        for (i = 0; i < this.resultContent.resultTotalData; i++) {
          if (this.resultContent.resultCV[i].department === department) {
            temp++
          }
        }
        this.resultContent.resultTotalData = temp
        return temp
      }
    }
  }
  </script>

  <style scoped>
  </style>
