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
            <td>{{month-1}}</td>
            <td>{{month-2}}</td>
            <td>{{month-3}}</td>
            <td>{{month-4}}</td>
            <td>{{month-5}}</td>
            <td>{{month-6}}</td>
            <td>{{month-7}}</td>
            <td>{{month-8}}</td>
            <td>{{month-9}}</td>
            <td>{{month-10}}</td>
            <td>{{month-11}}</td>
            <td>{{month-12}}</td>
          </tr>
        </tbody>
      </table>
      <p>Computer Needed : {{pcAmmount}}</p>
      <p>Spesification : {{pcSpec}}</p>
      <h3>Comment :</h3>
      <textarea name="Text1" cols="140" rows="8"></textarea>
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
      })
    }
  }
}
</script>

<style scooped>
</style>
