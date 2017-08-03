<template>
  <div class="detail-box col-md-12">
    <h3>{{title}}</h3>
    <p>Position : {{position}}</p>
    <p>Number : {{number}}</p>
    <p>Reason : {{reason}}</p>
    <p>Main Responsibilty : {{mainResponsibilty}}</p>
    <h3>Qualification</h3>
    <p>Education : {{education}}</p>
    <p>Knowledge Skill : {{knowledgeSkill}}</p>
    <p>Experience : {{experience}}</p>
    <p>Employement Status : {{employementStatus}}</p>
    <h3>Expected to Join in {{year}}</h3>
    <table class="table">
          <tbody><tr>
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
            <td>{{month1}}</td>
            <td>{{month2}}</td>
            <td>{{month3}}</td>
            <td>{{month4}}</td>
            <td>{{month5}}</td>
            <td>{{month6}}</td>
            <td>{{month7}}</td>
            <td>{{month8}}</td>
            <td>{{month9}}</td>
            <td>{{month10}}</td>
            <td>{{month11}}</td>
            <td>{{month12}}</td>
          </tr>
        </tbody>
      </table>
      <p>Computer Needed : {{pcAmmount}}</p>
      <p>Spesification : {{pcSpec}}</p>
      <h3>Comment :</h3>
      <textarea name="Text1" cols="140" rows="8"></textarea>
      <br/>
      <button v-if="role === 'HR'"  v-on:click="hrdPublish()" type="reset" class="btn btn-primary" name="">Publish</button>
      <button v-if="role === 'hrd'"  v-on:click="hrdPublish()" type="reset" class="btn btn-primary" name="">Publish</button>

      <button v-if="role === 'CEO'"  v-on:click="ceoApprove()" type="reset" class="btn btn-primary" name="">Approve</button>
      <button v-if="role === 'CEO'" type="reset" class="btn btn-warning" name="">Reject</button>

  </div>
</template>

<script>
export default{
  name: 'mpp-detail',
  // props: ['title', 'position', 'number', 'reason', 'main-responsibilty', 'education', 'experience', 'knowledge-skill', 'employement-status', 'month-1', 'month-2', 'month-3', 'month-4', 'month-5', 'month-6', 'month-7', 'month-8', 'month-9', 'month-10', 'month-11', 'month-12', 'computers', 'spesification', 'year'
  // ]
  data () {
    return {
      position: '',
      department: '',
      number: '',
      mainResponsibilty: '',
      dateCreated: '',
      reason: '',
      knowledgeSkill: '',
      employementStatus: '',
      education: '',
      experience: '',
      pcAmmount: '',
      // dateNeeded: '',
      username: '',
      pcSpec: '',
      role: '',
      idSelector: '',
      idUser: '',
      month1: '',
      month2: '',
      month3: '',
      month4: '',
      month5: '',
      month6: '',
      month7: '',
      month8: '',
      month9: '',
      month10: '',
      month11: '',
      month12: ''
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
    self.$http.get('http://localhost:8080/mpp/' + this.idSelector).then(response => {
      var mpp = JSON.stringify(response.data.data)
      var objMpp = {}
      objMpp = JSON.parse(mpp)[0]
      this.department = objMpp.department
      this.position = objMpp.position
      this.number = objMpp.numberOfPerson
      this.reason = objMpp.reason
      this.employementStatus = objMpp.employeeStatus
      this.education = objMpp.education
      this.experience = objMpp.experience
      this.knowledgeSkill = objMpp.knowledge
      this.pcSpec = objMpp.pcSpec
      this.pcAmmount = objMpp.pcAmmount
      // this.dateNeeded = objMpp.dateNeeded
      this.dateCreated = objMpp.createdDate
      this.month1 = objMpp.januaryExpect
      this.month2 = objMpp.februaryExpect
      this.month3 = objMpp.marchExpect
      this.month4 = objMpp.aprilExpect
      this.month5 = objMpp.mayExpect
      this.month6 = objMpp.juneExpect
      this.month7 = objMpp.julyExpect
      this.month8 = objMpp.augustExpect
      this.month9 = objMpp.septemberExpect
      this.month10 = objMpp.octoberExpect
      this.month11 = objMpp.novemberExpect
      this.month12 = objMpp.decemberExpect
    }, () => {
      alert('No Valid Mpp for this id')
      this.$router.push('/' + roleUrl + '/')
    }).catch((e) => {
      alert('No Valid Mpp for this id')
      this.$router.push('/' + roleUrl + '/')
    })
  },
  methods: {
    ceoApprove () {
      this.$http.post('http://localhost:8080/mpp/approve', {
        idUser: this.idUser,
        idMpp: parseInt(this.idSelector)
      }, (json) => {
        alert(JSON.stringify(json.message))
        this.$router.push('/')
      })
    },
    hrdPublish () {
      this.$http.post('http://localhost:8080/mpp/publishFromMpp', {
        idUser: this.idUser,
        idMpp: parseInt(this.idSelector)
      }, (json) => {
        alert(JSON.stringify(json.message))
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scooped>
</style>
